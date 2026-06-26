/**
 * preview-render.mjs — Standalone preview (cockpit + star map + archive).
 * Mirrors the Astro site using the same CSS + scripts. Run:
 *   node --experimental-strip-types scripts/preview-render.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { profile, constellations, missionLog, offDuty } from "../src/data/content.ts";
import { renderStarmap, recordsPayload } from "../src/lib/starmapRender.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const tokens = readFileSync(join(root, "src/styles/tokens.css"), "utf8");
const global = readFileSync(join(root, "src/styles/global.css"), "utf8").replace(/@import[^;]+;/, "");
const sceneJs = readFileSync(join(root, "src/scripts/scene.js"), "utf8");
const starmapJs = readFileSync(join(root, "src/scripts/starmap.js"), "utf8");
const pad = (n) => String(n).padStart(2, "0");
const contactIcons = {
  email: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  github: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  linkedin: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  scholar: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/><path d="M22 10v6"/></svg>'
};


const RETICLE = `<svg viewBox="0 0 660 660" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#41e3ff"><circle cx="330" cy="330" r="258" stroke-opacity="0.12" stroke-width="1"/><circle cx="330" cy="330" r="190" stroke-opacity="0.10" stroke-width="1"/><circle cx="330" cy="330" r="250" stroke-opacity="0.30" stroke-width="6" stroke-dasharray="2 16"/><circle class="arc arc1" cx="330" cy="330" r="250" stroke-opacity="0.05" stroke-width="12" stroke-dasharray="240 1500"/><circle class="arc arc2" cx="330" cy="330" r="238" stroke-opacity="0.35" stroke-width="2.5" stroke-dasharray="40 16 8 16"/><circle class="arc arc3" cx="330" cy="330" r="224" stroke-opacity="0.06" stroke-width="16" stroke-dasharray="300 900"/><circle class="arc arc4" cx="330" cy="330" r="212" stroke-opacity="0.22" stroke-width="2" stroke-dasharray="2 10"/><circle class="arc arc5" cx="330" cy="330" r="200" stroke-opacity="0.30" stroke-width="3" stroke-dasharray="120 700"/><g stroke-opacity="0.5" stroke-width="2"><path d="M330 64 v22 M330 596 v-22 M64 330 h22 M596 330 h-22"/></g></g><g fill="none" stroke="#41e3ff" stroke-opacity="0.5" stroke-width="2"><path d="M306 80 L330 72 L354 80"/><path d="M306 580 L330 588 L354 580"/><path d="M80 306 L72 330 L80 354"/><path d="M580 306 L588 330 L580 354"/></g><g stroke="#ffb648" stroke-opacity="0.85" stroke-width="1.5"><path d="M322 330 h16 M330 322 v16"/></g><circle cx="330" cy="330" r="3" fill="#ffb648"/></svg>`;
const SHIP = `<svg class="ship-svg" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Starship FSL-01"><defs><linearGradient id="hull" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f93c6"/><stop offset="0.32" stop-color="#34537f"/><stop offset="0.7" stop-color="#16273f"/><stop offset="1" stop-color="#070e19"/></linearGradient><linearGradient id="hullHi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4ecff" stop-opacity="0.9"/><stop offset="1" stop-color="#d4ecff" stop-opacity="0"/></linearGradient><linearGradient id="wingT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#46699a"/><stop offset="1" stop-color="#172b46"/></linearGradient><linearGradient id="wingB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16243b"/><stop offset="1" stop-color="#0a1421"/></linearGradient><linearGradient id="eng" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a5f90"/><stop offset="1" stop-color="#0c1828"/></linearGradient><radialGradient id="thr" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#bff7ff"/><stop offset="0.4" stop-color="#41e3ff"/><stop offset="1" stop-color="rgba(65,227,255,0)"/></radialGradient><radialGradient id="cock" cx="0.42" cy="0.32" r="0.85"><stop offset="0" stop-color="#f2feff"/><stop offset="0.5" stop-color="#7fd6ff" stop-opacity="0.55"/><stop offset="1" stop-color="rgba(65,227,255,0.12)"/></radialGradient></defs><ellipse class="thruster" cx="32" cy="70" rx="42" ry="16" fill="url(#thr)"/><rect x="44" y="51" width="42" height="14" rx="4" fill="url(#eng)" stroke="#5fd0ff" stroke-opacity="0.35"/><rect x="44" y="75" width="42" height="14" rx="4" fill="url(#eng)" stroke="#5fd0ff" stroke-opacity="0.35"/><path d="M120 84 L150 118 L178 86 Z" fill="url(#wingB)" stroke="#33567f" stroke-opacity="0.4"/><path d="M120 56 L150 22 L178 54 Z" fill="url(#wingT)" stroke="#5b86bd" stroke-opacity="0.5"/><path d="M70 70 L116 50 L240 60 L280 70 L240 80 L116 90 Z" fill="url(#hull)" stroke="#7fc4ff" stroke-opacity="0.5" stroke-width="1.2"/><path d="M74 69 L116 54 L240 61 L272 69 L240 64 L116 59 Z" fill="url(#hullHi)" opacity="0.5"/><path d="M116 90 L240 80 L270 70.5 L240 76 L116 84 Z" fill="#060d18" opacity="0.5"/><path d="M122 61 L236 64 M150 70 L262 70" fill="none" stroke="#9fd4ff" stroke-opacity="0.14"/><path d="M70 70 L116 50 L240 60 L280 70" fill="none" stroke="#bfe6ff" stroke-opacity="0.6" stroke-width="1"/><path d="M206 64 Q232 60 256 70 Q232 80 206 76 Z" fill="url(#cock)" stroke="#bff0ff" stroke-opacity="0.6" stroke-width="1.1"/><path d="M210 65 Q228 62 244 67" fill="none" stroke="#f2ffff" stroke-opacity="0.75" stroke-width="1.2"/><path d="M252 66 L282 70 L252 74 Z" fill="#ffb648" fill-opacity="0.95"/><line x1="150" y1="32" x2="150" y2="20" stroke="#41e3ff" stroke-opacity="0.55"/><circle class="navlight n3" cx="150" cy="18" r="3" fill="#41e3ff"/><circle class="navlight n1" cx="280" cy="70" r="3" fill="#ffb648"/><circle class="navlight n2" cx="92" cy="58" r="2.4" fill="#56e39f"/><circle class="navlight n2" cx="92" cy="82" r="2.4" fill="#56e39f"/></svg>`;

const SHIPRET = RETICLE;
const scene = () => `
  <section class="scene" id="scene">
    <canvas id="starfield"></canvas>
    <div class="scene-grid"></div>
    <div class="world" id="world">
    <svg id="starmap" viewBox="0 -170 2400 1840" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${renderStarmap(constellations)}</svg>
    <div class="reticle">${RETICLE}</div>
    <div class="crystal-rig"><div class="crystal-glow"></div><button class="crystal" id="crystal" type="button" aria-label="Open Off-Duty Log"></button><button class="crystal-hit" id="crystal-hit" type="button" aria-label="Open Off-Duty Log"></button></div><div class="crystal-name" id="crystal-name"><span class="t">OFF-DUTY LOG</span></div>
    <div class="ship-rig"><div class="ship-reticle" aria-hidden="true">${SHIPRET}</div><div class="ship">${SHIP}</div></div>
    <button class="beacon" type="button" data-link="left" aria-haspopup="dialog" aria-label="Open Commander Profile" data-augmented-ui="tl-clip br-clip border">
      <span class="sweep"></span><span class="beacon-line code">${esc(profile.callsign)}</span><span class="beacon-line name">${esc(profile.name)}</span>
      <span class="beacon-line role">${esc(profile.className)}</span><span class="beacon-line status"><i></i> STATUS: ${esc(profile.status)}</span>
      <span class="beacon-hint"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg> ACCESS DOSSIER</span>
    </button>
    <button class="telemetry" id="mlog-launch" type="button" data-link="right" aria-haspopup="dialog" aria-label="Open Mission Log" data-augmented-ui="tl-clip br-clip border">
      <span class="sweep"></span><h5>MISSION LOG</h5>
      <div class="row"><span>ENTRIES</span><span>${pad(missionLog.length)}</span></div><div class="row"><span>LATEST</span><span>${esc(missionLog[0] ? missionLog[0].year : "")}</span></div>
      <div class="row"><span>SIGNAL</span><span>RECOVERED</span></div><span class="mlog-hint"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg> OPEN LOG</span><div class="hashbar"></div>
    </button>
    </div>
    <svg class="scene-links" id="scene-links" aria-hidden="true"></svg>
    <span class="hud-corner tl"></span><span class="hud-corner tr"></span><span class="hud-corner bl"></span><span class="hud-corner br"></span>
    <div class="scene-hud"><div class="hud-tl">FSL-01 // NAV SYSTEM ONLINE</div><div class="hud-tr">SECTOR MAP // SELECT A CONSTELLATION</div></div>
    <svg id="sm-fx" aria-hidden="true"></svg>
    <div id="sm-cursor" aria-hidden="true"><div class="r1"></div><div class="r2"></div><div class="cx"></div><div class="cy"></div></div>
    <div class="con-name" id="con-name"><span class="sweep"></span><div class="y"></div><div class="t"></div></div>
    <div class="star-name" id="star-name"><span class="sweep"></span><div class="y"></div><div class="t"></div></div>
    <div id="record-overlay" role="dialog" aria-modal="true" aria-label="Data Record">
      <div class="record-panel" data-augmented-ui="tl-clip br-clip border"><span class="sweep"></span><button class="record-close" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> CLOSE</button><div id="record-body"></div></div>
    </div>
    <script type="application/json" id="sm-records">${recordsPayload(constellations) ? JSON.stringify(recordsPayload(constellations)) : "{}"}</script>
  </section>`;

const pips = (lvl) => `<div class="pips">${Array.from({ length: 5 }, (_, i) => `<span class="pip ${i < lvl ? "on" : ""}"></span>`).join("")}</div>`;
const dossierOverlay = () => `
  <div class="profile-overlay" role="dialog" aria-modal="true" aria-label="Commander Profile"><div class="profile-panel">
    <button class="profile-close" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> CLOSE</button>
    <section class="dossier" data-augmented-ui="tl-clip br-clip border"><span class="sweep"></span>
      <div class="dossier-head"><div class="portrait-wrap"><img class="portrait" src="${esc(profile.portrait.src)}" alt="${esc(profile.portrait.alt)}" decoding="async"/><span class="scan"></span></div>
        <div><div class="id-tag">PERSONNEL DOSSIER // ${esc(profile.callsign)}</div><h1>${esc(profile.name)}<span class="status-pill">${esc(profile.status)}</span></h1><div class="class">${esc(profile.className)}</div><div class="directive">${esc(profile.directive)}</div></div></div>
      <div class="dossier-grid">
        <div class="dblock"><h4>IDENTIFICATION</h4><dl class="fields">${profile.dossier.map((f) => `<dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd>`).join("")}</dl></div>
        <div class="dblock"><h4>SPECIALISATIONS</h4>${profile.specialisations.map((s) => `<div class="skill"><div class="skill-row"><span>${esc(s.name)}</span><span class="lv">${s.level}/5</span></div>${pips(s.level)}</div>`).join("")}</div>
        <div class="dblock"><h4>FIELD RECORD</h4><ul class="reclist">${profile.fieldRecord.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
        <div class="dblock"><h4>TOOLSET</h4>${profile.toolset.map((g) => `<div class="toolgroup"><div class="tlabel">${esc(g.label)}</div><div class="titems">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("")}</div>
      </div>
      <div class="contacts"><a href="${esc(profile.cv.href)}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ${esc(profile.cv.label)}</a>${profile.contacts.map((c) => `<a class="ic-link" href="${esc(c.href)}" aria-label="${esc(c.label)}" title="${esc(c.label)}">${contactIcons[c.icon] || esc(c.label)}</a>`).join("")}</div>
    </section></div></div>`;

const record = (s) => `<article class="record" id="${esc(s.id)}"><span class="sweep"></span>${s.badge ? `<span class="badge">${esc(s.badge)}</span>` : ""}<div class="rtype">${esc(s.recordType)}</div><h3>${esc(s.title)}</h3>${s.date ? `<div class="date">${esc(s.date)}</div>` : ""}<p class="summary">${esc(s.summary)}</p>${s.tags && s.tags.length ? `<div class="tags">${s.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}${s.assets && s.assets.length ? `<div class="assets">${s.assets.map((a) => `<a class="asset" href="${esc(a.href)}">${esc(a.label)}</a>`).join("")}</div>` : ""}</article>`;
const section = (c, i) => `<section class="constellation" id="${esc(c.id)}"><header><div class="sector">SECTOR ${pad(i + 1)}</div><h2>${esc(c.narrativeName)}</h2><div class="blurb">${esc(c.blurb)}</div></header><div class="grid">${c.stars.map(record).join("")}</div></section>`;

const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='cg' x1='0' y1='0' x2='0.18' y2='1'%3E%3Cstop offset='0' stop-color='%239ef0c8'/%3E%3Cstop offset='0.5' stop-color='%231aa572'/%3E%3Cstop offset='1' stop-color='%23063a27'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke='%23062a1d' stroke-width='1.4' stroke-linejoin='round'%3E%3Cpolygon points='32,3 20,23 32,23' fill='%237fe8bc'/%3E%3Cpolygon points='32,3 44,23 32,23' fill='%232eb083'/%3E%3Cpolygon points='20,23 32,23 32,58 22,52' fill='url(%23cg)'/%3E%3Cpolygon points='32,23 44,23 42,52 32,58' fill='%230c6e4b'/%3E%3C/g%3E%3Cpolygon points='27,25 30,25 29,50 27,49' fill='%23e6fff4' opacity='0.4'/%3E%3C/svg%3E"/><title>${esc(profile.name)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/augmented-ui@2.0.0/augmented-ui.min.css"/>
<style>${tokens}\n${global}</style>
</head><body>
<div class="boot-veil" aria-hidden="true"></div>
<div class="fx-vignette" aria-hidden="true"></div>
<div class="fx-grain" aria-hidden="true"></div>
${scene()}
<main class="wrap">
  <div class="sm-fallback">${constellations.map((c, i) => section(c, i)).join("")}</div>
  <section class="missionlog"><div class="sector">TRANSMISSION ARCHIVE</div><h2>Mission Log</h2>
    ${missionLog.map((m) => `<div class="logrow"><div class="yr">${esc(m.year)}</div><div>${esc(m.event)}</div></div>`).join("")}
  </section>
</main>
${dossierOverlay()}
<div id="missionlog-overlay" role="dialog" aria-modal="true" aria-label="Mission Log">
  <div class="mlog-card" data-augmented-ui="tl-clip br-clip border"><span class="sweep"></span><button class="mlog-close" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> CLOSE</button>
    <div class="id-tag">TRANSMISSION ARCHIVE // RECOVERED</div><h2 class="mlog-title">Mission Log</h2>
    ${missionLog.map((m) => `<div class="mlog-row"><div class="yr">${esc(m.year)}</div><div class="ev">${esc(m.event)}</div></div>`).join("")}
  </div>
</div>
<div id="media-lightbox" role="dialog" aria-modal="true" aria-label="Media viewer">
  <button class="ml-close" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> CLOSE</button>
  <button class="ml-nav ml-prev" type="button" aria-label="Previous"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg></button>
  <div class="ml-stage"><div class="ml-frame" id="ml-frame" data-augmented-ui="tl-clip br-clip border"></div><div class="ml-cap" id="ml-cap"></div></div>
  <button class="ml-nav ml-next" type="button" aria-label="Next"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></button>
</div>
<div id="offduty-overlay" role="dialog" aria-modal="true" aria-label="Off-Duty Log">
  <button class="od-close" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> CLOSE</button>
  <div class="od-menu"></div>
  <div class="od-viewer" hidden>
    <button class="od-back" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg> BACK</button>
    <div class="od-title"></div>
    <button class="od-nav od-prev" type="button" aria-label="Previous"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg></button>
    <div class="od-frame" data-augmented-ui="tl-clip br-clip border"><img class="od-img" alt="Off-duty image" decoding="async"/></div>
    <button class="od-nav od-next" type="button" aria-label="Next"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></button>
    <div class="od-cap"></div>
  </div>
</div>
<script type="application/json" id="offduty-data">${JSON.stringify(offDuty)}</script>
<script>${sceneJs}</script>
<script>${starmapJs}</script>
</body></html>`;

const previewHtml = html.replaceAll('"/assets/', '"../public/assets/');
mkdirSync(join(root, "preview"), { recursive: true });
writeFileSync(join(root, "preview/index.html"), previewHtml);

// Mobile preview harness: frames the site in a phone-sized viewport (its own viewport
// triggers the mobile CSS) and forces mobile JS via ?view=mobile. Does not affect desktop.
const mobileHarness = `<!doctype html><html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Mobile &amp; tablet preview &mdash; Faisal Lawan</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin:0; min-height:100vh; background:radial-gradient(1100px 760px at 50% -12%, #10203a, #05070f 72%);
    font-family:ui-monospace,Menlo,Consolas,monospace; color:#9fc6d6; padding:18px 14px 48px; }
  h1 { font-size:13px; letter-spacing:0.16em; text-transform:uppercase; color:#bfe6ff; text-align:center; margin:2px 0; }
  .note { font-size:12px; text-align:center; max-width:720px; margin:6px auto 14px; line-height:1.55; color:#7fa6bb; }
  .note a, .note code { color:#7fd6ff; }
  .bar { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:20px; }
  .bar button { font:inherit; font-size:12px; color:#bfe6ff; background:rgba(65,227,255,.07);
    border:1px solid rgba(65,227,255,.32); padding:7px 14px; border-radius:7px; cursor:pointer; }
  .bar button:hover { background:rgba(65,227,255,.16); }
  .stage { display:flex; gap:54px; align-items:flex-start; justify-content:center; flex-wrap:wrap; }
  .device { display:flex; flex-direction:column; align-items:center; gap:10px; }
  .label { font-size:11px; letter-spacing:0.08em; text-align:center; color:#9fc6d6; }
  .label b { color:#eafdff; }
  .badge { font-size:10px; letter-spacing:0.12em; padding:2px 8px; border-radius:999px; border:1px solid; margin-left:6px; }
  .badge.mobile { color:#5bffb9; border-color:rgba(91,255,185,.5); }
  .badge.desktop { color:#ffb648; border-color:rgba(255,182,72,.5); }
  .slot { position:relative; }
  .bezel-scaler { position:absolute; top:0; left:0; transform-origin:top left; }
  .bezel { border:12px solid #161d2b; border-radius:42px; overflow:hidden;
    box-shadow:0 26px 74px rgba(0,0,0,.66), inset 0 0 0 2px #0a0e16; background:#05070f; }
  .bezel iframe { border:0; display:block; background:#05070f; }
</style></head><body>
  <h1>Mobile &amp; Tablet Preview</h1>
  <div class="note">Both frames load <code>index.html?view=mobile</code>. The badge shows whether the <b>mobile</b> layout is active (frame width &le; 820px) or the <b>desktop</b> layout. Drag to pan, tap to select, press-and-hold to preview. For true pinch-zoom, you can also <a href="./index.html?view=mobile">open it directly</a> in your browser's device mode.</div>
  <div class="bar">
    <button id="rot-phone">Rotate phone</button>
    <button id="rot-tablet">Rotate tablet</button>
    <button id="reload">Reload both</button>
  </div>
  <div class="stage" id="stage"></div>
  <script>
    var BREAK = 820; // keep in sync with the CSS mobile breakpoint
    var devices = {
      phone:  { name:'Phone',  w:390, h:844, portrait:true },
      tablet: { name:'Tablet', w:810, h:1080, portrait:true }
    };
    function dims(d){ return d.portrait ? { w:d.w, h:d.h } : { w:d.h, h:d.w }; }
    function render(){
      var stage = document.getElementById('stage');
      stage.innerHTML = '';
      Object.keys(devices).forEach(function(key){
        var d = devices[key], dm = dims(d);
        var bw = dm.w + 24, bh = dm.h + 24;                 // bezel outer size (12px border each side)
        var maxH = Math.max(460, window.innerHeight * 0.76);
        var s = Math.min(1, maxH / bh);                     // scale so the device fits the window height
        var isMobile = dm.w <= BREAK;
        var wrap = document.createElement('div');
        wrap.className = 'device';
        wrap.innerHTML =
          '<div class="label"><b>' + d.name + '</b> &middot; ' + dm.w + '&times;' + dm.h +
            '<span class="badge ' + (isMobile ? 'mobile' : 'desktop') + '">' +
            (isMobile ? 'MOBILE LAYOUT' : 'DESKTOP LAYOUT') + '</span></div>' +
          '<div class="slot" style="width:' + (bw * s) + 'px;height:' + (bh * s) + 'px">' +
            '<div class="bezel-scaler" style="transform:scale(' + s.toFixed(3) + ')">' +
              '<div class="bezel" style="width:' + bw + 'px;height:' + bh + 'px">' +
                '<iframe src="./index.html?view=mobile" style="width:' + dm.w + 'px;height:' + dm.h + 'px" title="' + d.name + ' preview" loading="eager"></iframe>' +
              '</div>' +
            '</div>' +
          '</div>';
        stage.appendChild(wrap);
      });
    }
    document.getElementById('rot-phone').onclick = function(){ devices.phone.portrait = !devices.phone.portrait; render(); };
    document.getElementById('rot-tablet').onclick = function(){ devices.tablet.portrait = !devices.tablet.portrait; render(); };
    document.getElementById('reload').onclick = render;
    var rzT = 0; window.addEventListener('resize', function(){ clearTimeout(rzT); rzT = setTimeout(render, 150); });
    render();
  </script>
</body></html>`;
writeFileSync(join(root, "preview/mobile.html"), mobileHarness);

const stars = constellations.reduce((n, c) => n + c.stars.length, 0);
console.log(`Wrote preview/index.html + preview/mobile.html - star map (${constellations.length} constellations, ${stars} stars).`);
