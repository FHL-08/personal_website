/* scene.js — immersive HUD scene: starfield, orbiting ship + crystal, beacon→profile,
   mission-log + off-duty launchers, ship-rooted connector leads. Vanilla; shared by Astro + preview. */
import { isMobileView } from "../lib/mobile.js";

(function () {
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var scene = document.getElementById("scene");
    var MOB = isMobileView();
    window.__openOffDuty = function () {};
    /* viewBox units — ~15% larger than typical constellation reticles (R≈132) */
    var RETICLE_R_VB = 155, CRYSTAL_W_VB = 50, SHIP_W_VB = 100, SHIP_RET_D_VB = 135, ORBIT_VB = 140;
    var CRYSTAL_LBL_DIST_VB = 50; /* dist ≈32% of reticle R */
    var CRYSTAL_LBL_FONT_MOB = 20; /* matches .con-label base (20 * m.s * T.s) on touch */
    var MOB_SHIP_SCALE = 2, MOB_ORBIT_SCALE = 2, MOB_FG_SCALE = 1.5, MOB_ORBIT_PERIOD = 5200;
    var DESKTOP_CRYSTAL_SCALE = 1.5, DESKTOP_SHIP_SCALE = 2.4, DESKTOP_ORBIT_SCALE = 3.1, DESKTOP_HUD_CARD_DIST = 0.65;
    var SM_VBW = 2400, SM_VBH = 1840, SM_VBMINY = -170, SM_CVX = 1472, SM_CVY = 639;
    var SM_FG = [".crystal-rig", ".ship-rig", ".reticle"];

    function smMet() {
      if (!scene) return { W: 0, H: 0, s: 1, ox: 0, oy: 0 };
      var R = scene.getBoundingClientRect();
      var s = Math.min(R.width / SM_VBW, R.height / SM_VBH);
      return { W: R.width, H: R.height, s: s, ox: (R.width - SM_VBW * s) / 2, oy: (R.height - SM_VBH * s) / 2 };
    }
    function smVb(vx, vy, m) {
      return { x: m.ox + vx * m.s, y: m.oy + (vy - SM_VBMINY) * m.s };
    }
    function smCur2(p) {
      var T = window.__smT || { tx: 0, ty: 0, s: 1 };
      return { x: T.tx + T.s * p.x, y: T.ty + T.s * p.y };
    }

    function ensureFgInWorld() {
      var world = document.getElementById("world");
      if (!world) return;
      SM_FG.forEach(function (q) {
        var el = world.querySelector(q) || (scene && scene.querySelector(q));
        if (el && el.parentElement !== world) world.appendChild(el);
      });
      var cr = world.querySelector(".crystal-rig");
      var cn = document.getElementById("crystal-name") || (scene && scene.querySelector("#crystal-name"));
      if (cr && cn && cn.parentElement !== cr) {
        cn.classList.add("crystal-hud-card");
        cr.appendChild(cn);
      }
    }

    function applyFgSizes(m, T, world) {
      var lp = m.s;
      var px = lp * T.s * (MOB ? MOB_FG_SCALE : 1);
      var ret = world.querySelector(".reticle");
      var crystal = world.querySelector(".crystal");
      var hit = world.querySelector(".crystal-hit");
      var ship = world.querySelector(".ship");
      var sr = world.querySelector(".ship-reticle");
      var cr = world.querySelector(".crystal-rig");
      var srg = world.querySelector(".ship-rig");
      var retD = RETICLE_R_VB * 2 * px;
      var cryScale = MOB ? 1 : DESKTOP_CRYSTAL_SCALE;
      var cryW = CRYSTAL_W_VB * cryScale * px;
      var shipMul = MOB ? MOB_SHIP_SCALE : DESKTOP_SHIP_SCALE;
      var shipW = SHIP_W_VB * shipMul * px;
      var srW = SHIP_RET_D_VB * shipMul * px;
      var hitW = RETICLE_R_VB * 1.55 * px;
      if (ret) { ret.style.width = retD.toFixed(1) + "px"; ret.style.height = retD.toFixed(1) + "px"; }
      if (crystal) crystal.style.width = cryW.toFixed(1) + "px";
      if (hit) { hit.style.width = hitW.toFixed(1) + "px"; hit.style.height = hitW.toFixed(1) + "px"; }
      if (ship) ship.style.width = shipW.toFixed(1) + "px";
      if (sr) sr.style.width = srW.toFixed(1) + "px";
      var g = world.querySelector(".crystal-glow");
      if (g) {
        var gw = cryW * 2.33, gh = cryW * 2.63;
        g.style.width = gw.toFixed(1) + "px";
        g.style.height = gh.toFixed(1) + "px";
        g.style.left = (-gw / 2).toFixed(1) + "px";
        g.style.top = (-gh / 2).toFixed(1) + "px";
      }
      var cn = document.getElementById("crystal-name");
      if (cn) {
        if (MOB) {
          cn.style.fontSize = (CRYSTAL_LBL_FONT_MOB * lp * T.s).toFixed(2) + "px";
        } else {
          cn.style.fontSize = "";
        }
        cn.style.transform = "";
        scene.style.setProperty("--crystal-lbl-d", (CRYSTAL_LBL_DIST_VB * px).toFixed(1) + "px");
      }
      if (ret) ret.style.transform = "translate(-50%,-50%)";
      if (cr) cr.style.transform = "";
      if (srg) srg.style.transform = "";
      scene.style.setProperty("--hud-card-inv", "1");
    }

    function placeFgInWorld() {
      var world = document.getElementById("world");
      if (!world || !scene) return;
      ensureFgInWorld();
      var m = smMet(), T = window.__smT || { tx: 0, ty: 0, s: 1 };
      var c = smCur2(smVb(SM_CVX, SM_CVY, m));
      var vmin = Math.min(m.W || 360, m.H || 640);
      var ph = MOB && vmin <= 540;
      if (scene) scene.classList.toggle("sm-phone", ph);

      SM_FG.forEach(function (q) {
        var el = world.querySelector(q);
        if (!el) return;
        el.style.left = c.x.toFixed(1) + "px";
        el.style.top = c.y.toFixed(1) + "px";
      });
      applyFgSizes(m, T, world);
      updateOrbit();
    }
    window.__placeFgInWorld = placeFgInWorld;

    function desktopHudSetup() {
      if (MOB || !scene) return;
      var world = document.getElementById("world");
      var rig = world && world.querySelector(".ship-rig");
      if (!rig) return;
      [".beacon", ".telemetry"].forEach(function (q) {
        var el = scene.querySelector(q);
        if (el && !el.classList.contains("mob-btn") && el.parentElement !== rig) {
          el.classList.add("ship-hud-card");
          el.style.left = "0";
          el.style.top = "0";
          rig.appendChild(el);
        }
      });
    }

    function mobileSetup() {
      if (!MOB || !scene) return;
      scene.classList.add("sm-mob");
      document.documentElement.classList.add("is-mob");
      ensureFgInWorld();
      var mobCmd = document.getElementById("mob-cmd");
      if (!mobCmd) {
        mobCmd = document.createElement("div");
        mobCmd.className = "mob-cmd";
        mobCmd.id = "mob-cmd";
        scene.appendChild(mobCmd);
      }
      [".beacon", ".telemetry"].forEach(function (q) {
        var el = scene.querySelector(q);
        if (el) {
          el.classList.add("mob-btn");
          el.style.left = "";
          el.style.top = "";
          el.style.transform = "";
          mobCmd.appendChild(el);
        }
      });
      placeFgInWorld();
      var cn0 = document.getElementById("crystal-name");
      if (cn0) cn0.classList.add("show");
    }

    /* ---------- Starfield (resolution-independent) ---------- */
    var canvas = document.getElementById("starfield");
    var ctx = canvas && canvas.getContext ? canvas.getContext("2d", { alpha: true }) : null;
    var w = 0, h = 0, dpr = 1, stars = [], raf = 0, t = 0, mx = 0, my = 0, built = false, crystTick = 0;
    var LAYERS = MOB
      ? [
        { n: 36, sp: 0.012, min: 0.4, max: 0.9, alpha: 0.5 },
        { n: 22, sp: 0.03, min: 0.7, max: 1.4, alpha: 0.7 },
        { n: 10, sp: 0.06, min: 1.0, max: 2.0, alpha: 1.0 }
      ]
      : [
        { n: 80, sp: 0.012, min: 0.4, max: 0.9, alpha: 0.5 },
        { n: 50, sp: 0.03, min: 0.7, max: 1.4, alpha: 0.7 },
        { n: 24, sp: 0.06, min: 1.0, max: 2.0, alpha: 1.0 }
      ];
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function build() {
      stars = [];
      for (var li = 0; li < LAYERS.length; li++) {
        var L = LAYERS[li];
        for (var i = 0; i < L.n; i++) {
          stars.push({ fx: Math.random(), fy: Math.random(), r: rnd(L.min, L.max),
            a: L.alpha * rnd(0.5, 1), tw: Math.random() * Math.PI * 2, sp: L.sp, d: li + 1 });
        }
      }
      built = true;
    }
    function resize() {
      if (!canvas) return false;
      var nw = canvas.clientWidth, nh = canvas.clientHeight;
      /* iOS often reports 0×0 on canvas until layout settles — fall back to #scene. */
      if ((nw < 2 || nh < 2) && scene) {
        var sr = scene.getBoundingClientRect();
        if (sr.width >= 2 && sr.height >= 2) { nw = sr.width; nh = sr.height; }
      }
      if (nw < 2 || nh < 2) return false;
      dpr = Math.min(window.devicePixelRatio || 1, MOB ? 1.5 : 2);
      w = nw; h = nh;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!built) build();
      return true;
    }
    function clearCanvas() {
      if (!ctx || !canvas) return;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
    function draw() {
      if (!ctx || w < 1 || h < 1) return;
      clearCanvas();
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var tw = reduce ? 1 : (0.6 + 0.4 * Math.sin(t * 0.002 + s.tw));
        var pan = window.__smpan || { x: 0, y: 0 };
        var px = s.fx * w + mx * s.d * 4 + pan.x * 0.03 * s.d, py = s.fy * h + my * s.d * 4 + pan.y * 0.03 * s.d;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(205,238,255," + Math.min(1, s.a * tw * 1.45).toFixed(3) + ")";
        ctx.fill();
      }
    }
    function startLoop() {
      if (!scene) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(step);
    }
    function stopLoop() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
    var reduceDrawn = false;
    var ARC_PERIODS = { arc1: 46, arc2: 26, arc3: -17, arc4: 34, arc5: 13 };
    function spinHudReticles() {
      if (!MOB) return;
      var roots = [document.querySelector(".reticle"), scene && scene.querySelector(".ship-reticle")];
      for (var ri = 0; ri < roots.length; ri++) {
        var root = roots[ri];
        if (!root) continue;
        var arcs = root.querySelectorAll(".arc");
        for (var ai = 0; ai < arcs.length; ai++) {
          var arc = arcs[ai], period = 30;
          for (var k in ARC_PERIODS) { if (arc.classList.contains(k)) { period = ARC_PERIODS[k]; break; } }
          var ang = (t / (Math.abs(period) * 1000)) * 360 * (period < 0 ? -1 : 1);
          arc.style.transform = "rotate(" + (ang % 360) + "deg)";
        }
      }
    }
    function step() {
      raf = 0;
      try {
        var canvasReady = w >= 2 && h >= 2;
        if (!canvasReady) canvasReady = resize();
        t += 16;
        if (scene && !reduce) {
          var by = Math.sin(t / 1400) * 6;
          scene.style.setProperty("--bob", by.toFixed(2) + "px");
          scene.style.setProperty("--bobrot", (Math.sin(t / 1400) * 0.5).toFixed(3) + "deg");
          window.__bob = by;
        }
        updateOrbit();
        if (MOB) spinHudReticles();
        drawLinks();
        crystTick++;
        if (!MOB || (crystTick & 1) === 0) updateCrystal();
        if (canvasReady) {
          if (!reduce) {
            var fh = h || 1;
            for (var i = 0; i < stars.length; i++) {
              var s = stars[i];
              s.fy += s.sp / fh; s.fx -= (s.sp * 0.5) / (w || 1);
              if (s.fy > 1) s.fy = 0; if (s.fx < 0) s.fx = 1;
            }
            draw();
          } else if (!reduceDrawn) {
            draw();
            reduceDrawn = true;
          }
        }
      } catch (err) {
        console.error("scene step", err);
      }
      raf = requestAnimationFrame(step);
    }

    /* ---------- Connector leads (rooted at ship hull) ---------- */
    var links = document.getElementById("scene-links");
    function drawLinks() {
      if (!scene || !links) return;
      if (MOB) return;
      var ship = scene.querySelector(".ship");
      if (!ship) return;
      var R = scene.getBoundingClientRect();
      var sr = ship.getBoundingClientRect();
      var hx = sr.left + sr.width * 0.5 - R.left;
      var hy = sr.top + sr.height * 0.52 - R.top;
      links.setAttribute("viewBox", "0 0 " + R.width + " " + R.height);
      var panels = scene.querySelectorAll("[data-link]");
      var s = "";
      for (var i = 0; i < panels.length; i++) {
        var p = panels[i];
        var pr = p.getBoundingClientRect();
        var side = p.getAttribute("data-link");
        var ax = (side === "left" ? pr.right : pr.left) - R.left;
        var ay = pr.top + pr.height * 0.5 - R.top;
        var bx = ax + (hx - ax) * 0.5;
        s += '<path d="M' + ax + ' ' + ay + ' L' + bx + ' ' + ay + ' L' + hx + ' ' + hy + '" class="lnk" fill="none" stroke="#41e3ff" stroke-opacity="0.5" stroke-width="1.2" stroke-dasharray="5 5"/>';
        s += '<circle cx="' + ax + '" cy="' + ay + '" r="3" fill="#41e3ff"/>';
      }
      s += '<circle cx="' + hx + '" cy="' + hy + '" r="10" fill="none" stroke="#41e3ff" stroke-opacity="0.4"/>';
      s += '<circle cx="' + hx + '" cy="' + hy + '" r="4.5" fill="#41e3ff" stroke="var(--bg-void,#05070f)" stroke-width="2"/>';
      links.innerHTML = s;
    }
    window.__drawLinks = drawLinks;
    var worldEl = document.getElementById("world");
    if (worldEl) worldEl.addEventListener("transitionend", drawLinks);

    function onResize() { resize(); placeFgInWorld(); drawLinks(); }
    window.addEventListener("resize", onResize);
    if (typeof ResizeObserver !== "undefined") {
      var ro = new ResizeObserver(function () { resize(); });
      if (canvas) ro.observe(canvas);
      if (scene) ro.observe(scene);
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopLoop();
      else startLoop();
    });
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) { resize(); placeFgInWorld(); startLoop(); }
    });
    if (!reduce) {
      window.addEventListener("pointermove", function (e) {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
      }, { passive: true });
    }
    var reticleEl = document.querySelector(".reticle");
    window.addEventListener("pointermove", function (e) {
      if (!reticleEl || !scene) return;
      if (scene.classList.contains("sm-focus") || scene.classList.contains("sm-star")) { reticleEl.classList.remove("hot"); return; }
      var r = reticleEl.getBoundingClientRect();
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2, rad = r.width / 2;
      reticleEl.classList.toggle("hot", Math.hypot(e.clientX - cx, e.clientY - cy) <= rad);
    }, { passive: true });
    ensureFgInWorld();
    desktopHudSetup();
    mobileSetup();
    placeFgInWorld();
    resize();
    drawLinks();
    // re-measure after fonts/layout settle
    setTimeout(drawLinks, 120);
    setTimeout(drawLinks, 500);
    setTimeout(placeFgInWorld, 160); setTimeout(placeFgInWorld, 600);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLinks);
    function bootCanvas() {
      if (!canvas) { startLoop(); return; }
      if (resize()) { startLoop(); return; }
      var tries = 0;
      (function retry() {
        if (resize() || ++tries > 90) { placeFgInWorld(); startLoop(); return; }
        requestAnimationFrame(retry);
      })();
    }
    bootCanvas();
    requestAnimationFrame(function () { resize(); placeFgInWorld(); });

    /* ---------- Beacon → Commander Profile ---------- */
    var beacon = document.querySelector(".beacon");
    var overlay = document.querySelector(".profile-overlay");
    var closeBtn = document.querySelector(".profile-close");
    var radar = document.querySelector(".ship-reticle");
    function openP() { if (overlay) { overlay.classList.add("open"); document.body.style.overflow = "hidden"; if (closeBtn) closeBtn.focus(); } }
    function closeP() { if (overlay) { overlay.classList.remove("open"); document.body.style.overflow = ""; if (beacon) beacon.focus(); } }
    function blockMapPtr(e) { e.stopPropagation(); }
    if (beacon) {
      beacon.addEventListener("click", function (e) { e.stopPropagation(); openP(); });
      beacon.addEventListener("pointerdown", blockMapPtr);
      beacon.addEventListener("mouseenter", function () { if (radar) radar.classList.add("scanning"); });
      beacon.addEventListener("mouseleave", function () { if (radar) radar.classList.remove("scanning"); });
    }
    if (closeBtn) closeBtn.addEventListener("click", closeP);
    if (overlay) overlay.addEventListener("click", function (e) { if (e.target === overlay) closeP(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeP(); });

    /* ---------- Enter archive scroll ---------- */
    var enter = document.querySelector(".enter-archive");
    if (enter) enter.addEventListener("click", function () {
      var el = document.querySelector(".constellation");
      if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });

    /* ---------- Mission Log panel → holographic log ---------- */
    var mlogBtn = document.getElementById("mlog-launch");
    var mlog = document.getElementById("missionlog-overlay");
    var mlogClose = mlog && mlog.querySelector(".mlog-close");
    function openM() { if (mlog) { mlog.classList.add("open"); document.body.style.overflow = "hidden"; if (mlogClose) mlogClose.focus(); } }
    function closeM() { if (mlog) { mlog.classList.remove("open"); document.body.style.overflow = ""; if (mlogBtn) mlogBtn.focus(); } }
    if (mlogBtn) {
      mlogBtn.addEventListener("click", function (e) { e.stopPropagation(); openM(); });
      mlogBtn.addEventListener("pointerdown", blockMapPtr);
      mlogBtn.addEventListener("mouseenter", function () { if (radar) radar.classList.add("scanning"); });
      mlogBtn.addEventListener("mouseleave", function () { if (radar) radar.classList.remove("scanning"); });
    }
    if (mlogClose) mlogClose.addEventListener("click", closeM);
    if (mlog) mlog.addEventListener("click", function (e) { if (e.target === mlog) closeM(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeM(); });

    /* ---------- Off-Duty (hobbies) radial menu + slideshow ---------- */
    var odOverlay = document.getElementById("offduty-overlay");
    var odData = null; try { var odEl = document.getElementById("offduty-data"); if (odEl) odData = JSON.parse(odEl.textContent); } catch (e) {}
    var odMenu = odOverlay && odOverlay.querySelector(".od-menu");
    var odViewer = odOverlay && odOverlay.querySelector(".od-viewer");
    var odImg = odOverlay && odOverlay.querySelector(".od-img");
    var odCap = odOverlay && odOverlay.querySelector(".od-cap");
    var odTitleEl = odOverlay && odOverlay.querySelector(".od-title");
    var odCat = null, odIndex = 0;
    var OD_ICON = {
      drawing: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
      cooking: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
      travelling: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
      reading: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
    };
    function odBuild() {
      if (!odMenu || !odData) return;
      var tabs = odData.tabs, n = tabs.length, base = [-135, -45, 135, 45];
      // responsive radius: keep the four nodes on-screen on phones/tablets, full spread on desktop
      var vmin = Math.min(window.innerWidth || 360, window.innerHeight || 640);
      var r = Math.max(118, Math.min(210, vmin / 2 - 92));
      var html = '<div class="od-heading"><div class="od-htitle">OFF-DUTY LOG</div><div class="od-hsub">SELECT A LOG</div></div>';
      for (var i = 0; i < n; i++) {
        var t = tabs[i], deg = (n === 4 ? base[i] : (-90 + i * (360 / n)));
        var a = deg * Math.PI / 180, x = Math.round(Math.cos(a) * r), y = Math.round(Math.sin(a) * r);
        html += '<button class="od-node" type="button" data-cat="' + t.id + '" style="left:calc(50% + ' + x + 'px);top:calc(50% + ' + y + 'px)">'
          + '<span class="od-ic">' + (OD_ICON[t.id] || '') + '</span>'
          + '<span class="od-nlabel">' + t.label + '</span>'
          + '<span class="od-ncount">' + t.images.length + ' FRAMES</span></button>';
      }
      odMenu.innerHTML = html;
    }
    function odOpen() { if (!odOverlay) return; odBuild(); if (odViewer) odViewer.hidden = true; if (odMenu) odMenu.style.display = ""; odOverlay.classList.add("open"); document.body.style.overflow = "hidden"; }
    function odClose() { if (!odOverlay) return; odOverlay.classList.remove("open"); document.body.style.overflow = ""; odCat = null; }
    function odOpenCat(id) { odCat = null; for (var i = 0; i < odData.tabs.length; i++) if (odData.tabs[i].id === id) odCat = odData.tabs[i]; if (!odCat) return; odIndex = 0; if (odMenu) odMenu.style.display = "none"; if (odViewer) odViewer.hidden = false; odRender(); }
    function odRender() { if (!odCat) return; var im = odCat.images[odIndex]; if (odImg) odImg.src = im; if (odTitleEl) odTitleEl.textContent = odCat.label; if (odCap) odCap.textContent = (odIndex + 1) + " / " + odCat.images.length; var nx = odCat.images[(odIndex + 1) % odCat.images.length]; if (nx) { var pre = new Image(); pre.src = nx; } }
    function odStep(d) { if (!odCat) return; odIndex = (odIndex + d + odCat.images.length) % odCat.images.length; odRender(); }
    function odBack() { if (odViewer) odViewer.hidden = true; if (odMenu) odMenu.style.display = ""; odCat = null; }
    if (odOverlay) {
      if (odMenu) odMenu.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest(".od-node"); if (b) odOpenCat(b.getAttribute("data-cat")); else if (e.target === odMenu) odClose(); });
      var odCl = odOverlay.querySelector(".od-close"); if (odCl) odCl.addEventListener("click", odClose);
      var odBk = odOverlay.querySelector(".od-back"); if (odBk) odBk.addEventListener("click", odBack);
      var odPv = odOverlay.querySelector(".od-prev"); if (odPv) odPv.addEventListener("click", function () { odStep(-1); });
      var odNx = odOverlay.querySelector(".od-next"); if (odNx) odNx.addEventListener("click", function () { odStep(1); });
      odOverlay.addEventListener("click", function (e) { if (e.target === odOverlay) odClose(); });
      if (odViewer) odViewer.addEventListener("click", function (e) { if (e.target === odViewer) odClose(); });
      document.addEventListener("keydown", function (e) {
        if (!odOverlay.classList.contains("open")) return;
        if (e.key === "Escape") { if (odViewer && !odViewer.hidden) odBack(); else odClose(); }
        else if (odViewer && !odViewer.hidden) { if (e.key === "ArrowLeft") odStep(-1); else if (e.key === "ArrowRight") odStep(1); }
      });
    }
    window.__openOffDuty = odOpen;
    var odTemp = document.getElementById("offduty-temp"); if (odTemp) odTemp.addEventListener("click", odOpen);

    /* ---------- Emerald crystal shard (CSS 3D, hexagonal habit) ---------- */
    function sub(p, q) { return [p[0]-q[0], p[1]-q[1], p[2]-q[2]]; }
    function add(p, q) { return [p[0]+q[0], p[1]+q[1], p[2]+q[2]]; }
    function cross(u, v) { return [u[1]*v[2]-u[2]*v[1], u[2]*v[0]-u[0]*v[2], u[0]*v[1]-u[1]*v[0]]; }
    function dot(u, v) { return u[0]*v[0] + u[1]*v[1] + u[2]*v[2]; }
    function norm(v) { var l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0]/l, v[1]/l, v[2]/l]; }
    var crystBack = null, crystFront = null, crystV = [], crystF = [], CRYST_SPIN = 2 * Math.PI / 16000;
    var CL = norm([-0.35, -0.6, 0.72]);                          // light dir (view space)
    function buildCrystal() {
      var c = document.getElementById("crystal"); if (!c) return;
      // single-terminated hexagonal crystal: long prism body + sharp top point, irregular base
      var HA = [4, 63, 119, 181, 242, 303];                      // hex angles (deg), slightly irregular
      var RT = [35, 31, 36, 32, 35, 30], RB = [41, 33, 43, 31, 39, 30];
      var yTv = [-50, -61, -44, -58, -48, -64];                  // irregular girdle heights (no flat ring)
      var yBv = [110, 134, 104, 152, 118, 146];                  // broken-off base: several verts dropped low
      crystV = [];
      for (var i = 0; i < 6; i++) { var a = HA[i] * Math.PI / 180; crystV.push([Math.cos(a) * RT[i], yTv[i], Math.sin(a) * RT[i]]); }
      for (var i2 = 0; i2 < 6; i2++) { var a2 = HA[i2] * Math.PI / 180; crystV.push([Math.cos(a2) * RB[i2], yBv[i2], Math.sin(a2) * RB[i2]]); }
      crystV.push([4, -150, -3]);                                // 12 apex top (sharp point)
      crystV.push([-7, 170, 6]);                                 // 13 apex bottom (below all base verts)
      var ctr = [0, 0, 0]; for (var p = 0; p < crystV.length; p++) ctr = add(ctr, crystV[p]);
      ctr = [ctr[0]/crystV.length, ctr[1]/crystV.length, ctr[2]/crystV.length];
      function mk(idx) {
        var A = crystV[idx[0]], B = crystV[idx[1]], C = crystV[idx[2]];
        var nn = cross(sub(B, A), sub(C, A));
        var mid = [0,0,0]; for (var q = 0; q < idx.length; q++) mid = add(mid, crystV[idx[q]]);
        mid = [mid[0]/idx.length, mid[1]/idx.length, mid[2]/idx.length];
        if (dot(nn, sub(mid, ctr)) < 0) idx = idx.slice().reverse();    // ensure outward winding
        crystF.push(idx);
      }
      crystF = [];
      for (var j = 0; j < 6; j++) {
        var k = (j + 1) % 6;
        mk([12, j, k]);                       // top cap triangle -> point
        mk([j, k, 6 + k, 6 + j]);             // prism wall quad
        mk([13, 6 + j, 6 + k]);               // bottom cap triangle
      }
      c.innerHTML = '<svg viewBox="-74 -168 148 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
        + '<defs>'
        + '<linearGradient id="cEmerald" gradientUnits="userSpaceOnUse" x1="0" y1="-152" x2="0" y2="170">'
        + '<stop offset="0" stop-color="#bff5dc"/><stop offset="0.42" stop-color="#1fa873"/><stop offset="1" stop-color="#04331f"/>'
        + '</linearGradient>'
        + '<radialGradient id="cGlint" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#e9fff5" stop-opacity="0.9"/><stop offset="1" stop-color="#e9fff5" stop-opacity="0"/></radialGradient>'
        + '<linearGradient id="cCore" gradientUnits="userSpaceOnUse" x1="0" y1="-152" x2="0" y2="170">'
        + '<stop offset="0" stop-color="#1aa06e"/><stop offset="0.5" stop-color="#0b6e4c"/><stop offset="1" stop-color="#02281a"/>'
        + '</linearGradient>'
        + '<filter id="cFrost" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur stdDeviation="1.5"/></filter>'
        + '</defs>'
        + '<g class="cback" filter="url(#cFrost)"></g>'
        + '<g class="cfront"></g>'
        + '<g class="cgloss"><ellipse cx="-9" cy="-58" rx="13" ry="56" fill="url(#cGlint)" opacity="0.34" transform="rotate(-13 -9 -58)"/><ellipse cx="13" cy="-98" rx="6" ry="22" fill="url(#cGlint)" opacity="0.48"/></g>'
        + '</svg>';
      crystBack = c.querySelector(".cback"); crystFront = c.querySelector(".cfront");
      updateCrystal();
    }
    function updateCrystal() {
      if (!crystFront) return;
      var a = reduce ? 0.7 : t * CRYST_SPIN, ca = Math.cos(a), sa = Math.sin(a), f = 920;
      var RV = [];
      for (var i = 0; i < crystV.length; i++) {
        var v = crystV[i], x = v[0] * ca + v[2] * sa, z = -v[0] * sa + v[2] * ca, y = v[1];
        var s = f / (f - z);
        RV.push([x, y, z, x * s, y * s]);                       // [x,y,z, projX, projY]
      }
      var backArr = [], frontArr = [];
      for (var fi = 0; fi < crystF.length; fi++) {
        var idx = crystF[fi], A = RV[idx[0]], B = RV[idx[1]], C = RV[idx[2]];
        var nn = norm(cross([B[0]-A[0],B[1]-A[1],B[2]-A[2]], [C[0]-A[0],C[1]-A[1],C[2]-A[2]]));
        var front = nn[2] > 0, az = 0, pts = "";
        for (var p = 0; p < idx.length; p++) { var r = RV[idx[p]]; az += r[2]; pts += (p ? " " : "") + r[3].toFixed(1) + "," + r[4].toFixed(1); }
        az /= idx.length;
        if (front) {
          var b = Math.max(0, dot(nn, CL));
          var op = (0.3 + b * 0.42).toFixed(2);                                  // translucent surface over solid body
          var sw = b > 0.78 ? "rgba(224,255,244,0.85)" : "rgba(188,250,223,0.4)";
          frontArr.push([az, '<polygon points="' + pts + '" fill="url(#cEmerald)" fill-opacity="' + op + '" stroke="' + sw + '" stroke-width="0.7" stroke-linejoin="round"/>']);
        } else {
          backArr.push([az, '<polygon points="' + pts + '" fill="url(#cCore)" fill-opacity="0.96" stroke="rgba(150,240,200,0.22)" stroke-width="0.5"/>']);   // solid frosted body
        }
      }
      backArr.sort(function (m, n) { return m[0] - n[0]; });
      frontArr.sort(function (m, n) { return m[0] - n[0]; });
      var hb = ""; for (var d1 = 0; d1 < backArr.length; d1++) hb += backArr[d1][1];
      var hf = ""; for (var d2 = 0; d2 < frontArr.length; d2++) hf += frontArr[d2][1];
      crystBack.innerHTML = hb; crystFront.innerHTML = hf;
    }
    buildCrystal();
    var crystalEl = document.getElementById("crystal");
    if (crystalEl) crystalEl.addEventListener("click", function (e) { e.stopPropagation(); odOpen(); });
    var crystHit = document.getElementById("crystal-hit");
    var crystName = document.getElementById("crystal-name");
    function crystHover(on) { if (crystName) crystName.classList.toggle("show", on); }
    if (crystHit && !MOB) {
      crystHit.addEventListener("click", function (e) { e.stopPropagation(); odOpen(); });
      crystHit.addEventListener("mouseenter", function () { crystHover(true); });
      crystHit.addEventListener("mouseleave", function () { crystHover(false); });
      crystHit.addEventListener("focus", function () { crystHover(true); });
      crystHit.addEventListener("blur", function () { crystHover(false); });
    }
    if (MOB && crystHit) {
      var cretEl = scene.querySelector(".reticle");
      function openCrystalTap(e) {
        e.stopPropagation();
        odOpen();
      }
      crystHit.addEventListener("click", openCrystalTap);
      crystHit.addEventListener("pointerdown", function (e) {
        e.stopPropagation();
        if (cretEl) cretEl.classList.add("hot");
      });
      crystHit.addEventListener("pointerup", function (e) {
        if (cretEl) setTimeout(function () { cretEl.classList.remove("hot"); }, 160);
      });
      crystHit.addEventListener("pointercancel", function () {
        if (cretEl) cretEl.classList.remove("hot");
      });
    }

    /* ---------- Ship orbit (HUD rig travels rigidly with the ship) ---------- */
    function updateOrbit() {
      if (!scene) return;
      var by2 = window.__bob || 0, ang = t / (MOB ? MOB_ORBIT_PERIOD : 7800);
      var m = smMet();
      var Tz = (window.__smT && window.__smT.s) || 1;
      /* size orbit/offsets in screen px (zoom baked in — no CSS scale on rigs, keeps SVGs crisp) */
      var rad = ORBIT_VB * m.s * Tz;
      if (MOB) rad *= MOB_ORBIT_SCALE * MOB_FG_SCALE;
      else rad *= DESKTOP_ORBIT_SCALE;
      var ox = Math.cos(ang) * rad, oy = Math.sin(ang) * rad;
      var hd = Math.atan2(Math.cos(ang) * rad, -Math.sin(ang) * rad) * 180 / Math.PI;
      scene.style.setProperty("--ox", ox.toFixed(1) + "px");
      scene.style.setProperty("--oy", oy.toFixed(1) + "px");
      scene.style.setProperty("--oyb", (MOB ? oy : (oy + by2)).toFixed(1) + "px");
      scene.style.setProperty("--shiprot", hd.toFixed(1) + "deg");
      scene.style.setProperty("--shiptiltx", (MOB ? 0 : -my * 10).toFixed(2) + "deg");
      scene.style.setProperty("--shiptilty", (MOB ? 0 : mx * 14).toFixed(2) + "deg");
      var shipRetMul = MOB ? MOB_SHIP_SCALE * MOB_FG_SCALE : DESKTOP_SHIP_SCALE;
      var srR = SHIP_RET_D_VB * shipRetMul * 0.5 * m.s * Tz, gap = 14 * m.s * Tz;
      if (MOB) {
        scene.style.setProperty("--bec-dx", (-srR - gap).toFixed(1) + "px");
        scene.style.setProperty("--bec-dy", (-srR - gap * 0.65).toFixed(1) + "px");
        scene.style.setProperty("--tel-dx", (srR + gap * 0.85).toFixed(1) + "px");
        scene.style.setProperty("--tel-dy", (srR * 0.35 + gap * 0.45).toFixed(1) + "px");
      } else {
        var pad = 2 * m.s * Tz, k = 0.707, d = srR * DESKTOP_HUD_CARD_DIST;
        scene.style.setProperty("--bec-dx", (-d * k - pad).toFixed(1) + "px");
        scene.style.setProperty("--bec-dy", (-d * k - pad).toFixed(1) + "px");
        scene.style.setProperty("--tel-dx", (d * k + pad).toFixed(1) + "px");
        scene.style.setProperty("--tel-dy", (d * k + pad * 0.35).toFixed(1) + "px");
      }
    }
    window.__updateOrbit = updateOrbit;
    /* ship-reticle hover light-up (travels with ship) */
    var shipRetEl = scene && scene.querySelector(".ship-reticle");
    window.addEventListener("pointermove", function (e) {
      if (!shipRetEl || !scene) return;
      if (scene.classList.contains("sm-focus") || scene.classList.contains("sm-star")) { shipRetEl.classList.remove("hot"); return; }
      var r = shipRetEl.getBoundingClientRect();
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2, rad = r.width / 2;
      shipRetEl.classList.toggle("hot", Math.hypot(e.clientX - cx, e.clientY - cy) <= rad);
    }, { passive: true });
  });
})();
