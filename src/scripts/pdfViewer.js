/* pdfViewer.js — HUD PDF viewer (main-thread PDF.js). */
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist/build/pdf.min.mjs";

GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@" + version + "/build/pdf.worker.min.mjs";

var ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4];

function btn(label, cls, title) {
  var b = document.createElement("button");
  b.type = "button";
  b.className = "ml-pdf-btn" + (cls ? " " + cls : "");
  b.textContent = label;
  if (title) b.title = title;
  b.setAttribute("aria-label", title || label);
  return b;
}

function iconBtn(svg, title, cls) {
  var b = document.createElement("button");
  b.type = "button";
  b.className = "ml-pdf-btn ml-pdf-icon" + (cls ? " " + cls : "");
  b.innerHTML = svg;
  b.title = title;
  b.setAttribute("aria-label", title);
  return b;
}

async function resolveDestPage(pdf, dest) {
  if (typeof dest === "string") dest = await pdf.getDestination(dest);
  if (!dest || !dest[0]) return 1;
  var idx = await pdf.getPageIndex(dest[0]);
  return idx + 1;
}

function escAttr(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function pdfUrl(url) {
  try { return new URL(url, window.location.href).href; } catch (e) { return url; }
}

function showError(root, msg) {
  root.classList.remove("ml-pdf-loading", "ml-pdf-ready", "ml-pdf-fallback");
  root.classList.add("ml-pdf-error");
  root.innerHTML = '<div class="ml-pdf-status">' + escAttr(msg) + "</div>";
}

async function openPdf(url, isAlive, state) {
  var abs = pdfUrl(url);
  var res = await fetch(abs, { credentials: "same-origin" });
  if (!res.ok) throw new Error("Archive fetch failed (HTTP " + res.status + ")");
  var data = new Uint8Array(await res.arrayBuffer());
  if (!isAlive() || state.dead) throw new Error("cancelled");
  if (data.byteLength < 5 || String.fromCharCode(data[0], data[1], data[2], data[3]) !== "%PDF") {
    throw new Error("Archive file is not a valid PDF");
  }
  var loadingTask = getDocument({
    data: data,
    disableWorker: true,
    disableAutoFetch: true,
    disableStream: true,
    isEvalSupported: false,
    useSystemFonts: true,
  });
  state.loadingTask = loadingTask;
  try {
    return await loadingTask.promise;
  } finally {
    state.loadingTask = null;
  }
}

export function destroyPdfViewer(root) {
  if (!root || !root.__pdfV) return;
  var st = root.__pdfV;
  st.dead = true;
  if (st.loadingTask) { try { st.loadingTask.destroy(); } catch (e) {} }
  if (st.renderTask) { try { st.renderTask.cancel(); } catch (e) {} }
  if (st.pdf) { try { st.pdf.destroy(); } catch (e) {} }
  root.__pdfV = null;
  root.innerHTML = "";
  root.classList.remove("ml-pdf-loading", "ml-pdf-ready", "ml-pdf-error", "ml-pdf-fallback");
}

export async function mountPdfViewer(root, url, title, isAlive) {
  destroyPdfViewer(root);
  if (typeof isAlive !== "function") isAlive = function () { return true; };

  var state = { dead: false, root: root };
  root.__pdfV = state;
  root.classList.add("ml-pdf-view", "ml-pdf-loading");
  root.innerHTML = '<div class="ml-pdf-status">DECODING ARCHIVE…</div>';

  var pdf;
  try {
    pdf = await openPdf(url, isAlive, state);
    if (!isAlive() || state.dead) { pdf.destroy(); return; }
  } catch (err) {
    if (!isAlive() || state.dead) return;
    console.warn("[pdfViewer]", err);
    showError(root, "ARCHIVE READ FAILED");
    return;
  }

  state.pdf = pdf;
  state.scaleIdx = 1;
  state.pageCount = pdf.numPages;
  state.currentPage = 1;
  state.baseFit = 1;
  state.dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

  var toolbar = document.createElement("div");
  toolbar.className = "ml-pdf-toolbar";
  toolbar.setAttribute("role", "toolbar");

  var tocBtn = btn("TOC", "ml-pdf-toc", "Table of contents");
  var zoomOut = iconBtn("<svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>", "Zoom out");
  var zoomLabel = document.createElement("span");
  zoomLabel.className = "ml-pdf-zoom";
  zoomLabel.textContent = "100%";
  var zoomIn = iconBtn("<svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>", "Zoom in");
  var prevPg = iconBtn("<svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><polyline points=\"15 18 9 12 15 6\"/></svg>", "Previous page");
  var pageInput = document.createElement("input");
  pageInput.type = "number";
  pageInput.className = "ml-pdf-page-input";
  pageInput.min = "1";
  pageInput.max = String(pdf.numPages);
  pageInput.value = "1";
  pageInput.setAttribute("aria-label", "Page number");
  var pageTotal = document.createElement("span");
  pageTotal.className = "ml-pdf-page-total";
  pageTotal.textContent = "/ " + pdf.numPages;
  var nextPg = iconBtn("<svg class=\"icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><polyline points=\"9 18 15 12 9 6\"/></svg>", "Next page");

  toolbar.appendChild(tocBtn);
  toolbar.appendChild(zoomOut);
  toolbar.appendChild(zoomLabel);
  toolbar.appendChild(zoomIn);
  toolbar.appendChild(prevPg);
  toolbar.appendChild(pageInput);
  toolbar.appendChild(pageTotal);
  toolbar.appendChild(nextPg);

  var outlineEl = document.createElement("nav");
  outlineEl.className = "ml-pdf-outline";
  outlineEl.hidden = true;
  outlineEl.setAttribute("aria-label", "Document outline");

  var body = document.createElement("div");
  body.className = "ml-pdf-body";
  var stage = document.createElement("div");
  stage.className = "ml-pdf-stage";
  body.appendChild(stage);

  root.innerHTML = "";
  root.appendChild(toolbar);
  root.appendChild(outlineEl);
  root.appendChild(body);

  function updateZoomLabel() {
    zoomLabel.textContent = Math.round(ZOOM_STEPS[state.scaleIdx] * 100) + "%";
  }

  function pageScale(page) {
    var vp1 = page.getViewport({ scale: 1 });
    var cw = Math.max(stage.clientWidth - 20, 120);
    state.baseFit = Math.max(0.25, cw / vp1.width);
    return state.baseFit * ZOOM_STEPS[state.scaleIdx];
  }

  async function renderCurrentPage() {
    if (!isAlive() || state.dead || !state.pdf) return;
    var pageNum = state.currentPage;
    if (state.renderTask) { try { state.renderTask.cancel(); } catch (e) {} state.renderTask = null; }
    stage.innerHTML = '<div class="ml-pdf-status">RENDERING PAGE…</div>';
    try {
      var page = await state.pdf.getPage(pageNum);
      if (!isAlive() || state.dead) return;
      var scale = pageScale(page);
      var viewport = page.getViewport({ scale: scale });
      var dpr = state.dpr;
      var canvas = document.createElement("canvas");
      canvas.className = "ml-pdf-canvas";
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      canvas.style.width = viewport.width.toFixed(1) + "px";
      canvas.style.height = viewport.height.toFixed(1) + "px";
      var ctx = canvas.getContext("2d", { alpha: false });
      var transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;
      stage.innerHTML = "";
      stage.appendChild(canvas);
      var task = page.render({ canvas: canvas, canvasContext: ctx, viewport: viewport, transform: transform });
      state.renderTask = task;
      await task.promise;
      state.renderTask = null;
    } catch (e) {
      if (!isAlive() || state.dead) return;
      if (e && e.name !== "RenderingCancelledException") {
        stage.innerHTML = '<div class="ml-pdf-page-err">PAGE ' + pageNum + " UNAVAILABLE</div>";
      }
    }
  }

  function goToPage(num) {
    num = Math.max(1, Math.min(state.pageCount, num | 0));
    if (num === state.currentPage) return;
    state.currentPage = num;
    pageInput.value = String(num);
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
    renderCurrentPage();
  }

  async function buildOutline() {
    outlineEl.innerHTML = "";
    var outline;
    try { outline = await pdf.getOutline(); } catch (e) { outline = null; }
    if (!outline || !outline.length) {
      outlineEl.innerHTML = '<div class="ml-pdf-outline-empty">NO TABLE OF CONTENTS</div>';
      return;
    }
    async function addItems(items, depth) {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var b = document.createElement("button");
        b.type = "button";
        b.className = "ml-pdf-outline-item";
        b.style.paddingLeft = (8 + depth * 12) + "px";
        b.textContent = item.title || ("Section " + (i + 1));
        (function (dest) {
          b.addEventListener("click", function () {
            resolveDestPage(pdf, dest).then(function (pg) { goToPage(pg); outlineEl.hidden = true; });
          });
        })(item.dest);
        outlineEl.appendChild(b);
        if (item.items && item.items.length) await addItems(item.items, depth + 1);
      }
    }
    await addItems(outline, 0);
  }

  tocBtn.addEventListener("click", function () {
    if (outlineEl.hidden) buildOutline();
    outlineEl.hidden = !outlineEl.hidden;
  });
  zoomOut.addEventListener("click", function () {
    if (state.scaleIdx > 0) {
      state.scaleIdx--;
      updateZoomLabel();
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
      renderCurrentPage();
    }
  });
  zoomIn.addEventListener("click", function () {
    if (state.scaleIdx < ZOOM_STEPS.length - 1) {
      state.scaleIdx++;
      updateZoomLabel();
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
      renderCurrentPage();
    }
  });
  prevPg.addEventListener("click", function () { goToPage(state.currentPage - 1); });
  nextPg.addEventListener("click", function () { goToPage(state.currentPage + 1); });
  pageInput.addEventListener("change", function () { goToPage(+pageInput.value); });
  pageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); goToPage(+pageInput.value); }
  });

  root.classList.remove("ml-pdf-loading");
  root.classList.add("ml-pdf-ready");
  if (title) root.setAttribute("aria-label", title);
  updateZoomLabel();
  await renderCurrentPage();
}
