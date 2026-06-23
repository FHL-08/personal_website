/* scene.js — M1 immersive HUD scene.
   Starfield (fractional coords → full field from frame 1), ship-rooted connector
   leads, beacon→profile, enter-archive scroll. Vanilla; shared by Astro + preview. */
(function () {
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var scene = document.getElementById("scene");

    /* ---------- Starfield (resolution-independent) ---------- */
    var canvas = document.getElementById("starfield");
    var ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
    var w = 0, h = 0, dpr = 1, stars = [], raf = 0, t = 0, mx = 0, my = 0, built = false;
    var LAYERS = [
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
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!built) build();
    }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
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
    function step() {
      t += 16;
      if (scene && !reduce) {
        var by = Math.sin(t / 1400) * 6;
        scene.style.setProperty("--bob", by.toFixed(2) + "px");
        scene.style.setProperty("--bobrot", (Math.sin(t / 1400) * 0.5).toFixed(3) + "deg");
        window.__bob = by;
      }
      drawLinks();
      var fh = h || 1;
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.fy += s.sp / fh; s.fx -= (s.sp * 0.5) / (w || 1);
        if (s.fy > 1) s.fy = 0; if (s.fx < 0) s.fx = 1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    /* ---------- Connector leads (rooted at ship hull) ---------- */
    var links = document.getElementById("scene-links");
    function drawLinks() {
      if (!scene || !links) return;
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

    function onResize() { resize(); drawLinks(); }
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { cancelAnimationFrame(raf); }
      else if (!reduce) { raf = requestAnimationFrame(step); }
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
    resize();
    drawLinks();
    // re-measure after fonts/layout settle
    setTimeout(drawLinks, 120);
    setTimeout(drawLinks, 500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLinks);
    if (canvas) { if (reduce) draw(); else raf = requestAnimationFrame(step); }

    /* ---------- Beacon → Commander Profile ---------- */
    var beacon = document.querySelector(".beacon");
    var overlay = document.querySelector(".profile-overlay");
    var closeBtn = document.querySelector(".profile-close");
    var radar = document.querySelector(".reticle");
    function openP() { if (overlay) { overlay.classList.add("open"); document.body.style.overflow = "hidden"; if (closeBtn) closeBtn.focus(); } }
    function closeP() { if (overlay) { overlay.classList.remove("open"); document.body.style.overflow = ""; if (beacon) beacon.focus(); } }
    if (beacon) {
      beacon.addEventListener("click", openP);
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
      mlogBtn.addEventListener("click", openM);
      mlogBtn.addEventListener("mouseenter", function () { if (radar) radar.classList.add("scanning"); });
      mlogBtn.addEventListener("mouseleave", function () { if (radar) radar.classList.remove("scanning"); });
    }
    if (mlogClose) mlogClose.addEventListener("click", closeM);
    if (mlog) mlog.addEventListener("click", function (e) { if (e.target === mlog) closeM(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeM(); });
  });
})();
