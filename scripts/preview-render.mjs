/**
 * preview-render.mjs — Standalone preview (M1 cockpit + M2 star map + archive).
 * Mirrors the Astro site using the same CSS + scripts. Run:
 *   node --experimental-strip-types scripts/preview-render.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { profile, constellations, missionLog } from "../src/data/content.ts";
import { renderStarmap, recordsPayload } from "../src/lib/starmapRender.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const tokens = readFileSync(join(root, "src/styles/tokens.css"), "utf8");
const global = readFileSync(join(root, "src/styles/global.css"), "utf8").replace(/@import[^;]+;/, "");
const sceneJs = readFileSync(join(root, "src/scripts/scene.js"), "utf8");
const starmapJs = readFileSync(join(root, "src/scripts/starmap.js"), "utf8");
const pad = (n) => String(n).padStart(2, "0");

const RETICLE = `<svg viewBox="0 0 660 660" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#41e3ff"><circle class="arc arc1" cx="330" cy="330" r="250" stroke-opacity="0.05" stroke-width="12" stroke-dasharray="240 1500"/><circle class="arc arc2" cx="330" cy="330" r="238" stroke-opacity="0.35" stroke-width="2.5" stroke-dasharray="40 16 8 16"/><circle class="arc arc3" cx="330" cy="330" r="224" stroke-opacity="0.06" stroke-width="16" stroke-dasharray="300 900"/><circle class="arc arc4" cx="330" cy="330" r="212" stroke-opacity="0.22" stroke-width="2" stroke-dasharray="2 10"/><circle class="arc arc5" cx="330" cy="330" r="200" stroke-opacity="0.30" stroke-width="3" stroke-dasharray="120 700"/><g stroke-opacity="0.4" stroke-width="1.5"><path d="M330 80 v18 M330 580 v-18 M80 330 h18 M580 330 h-18"/></g></g><g stroke="#ffb648" stroke-opacity="0.85" stroke-width="1.5"><path d="M322 330 h16 M330 322 v16"/></g><circle cx="330" cy="330" r="3" fill="#ffb648"/></svg>`;
const SHIP = `<svg class="ship-svg" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Starship FSL-01"><defs><linearGradient id="hull" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3b56"/><stop offset="1" stop-color="#0c1426"/></linearGradient><radialGradient id="thr" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#41e3ff"/><stop offset="1" stop-color="rgba(65,227,255,0)"/></radialGradient></defs><ellipse class="thruster" cx="38" cy="78" rx="34" ry="13" fill="url(#thr)"/><rect x="48" y="66" width="40" height="26" rx="6" fill="#16243c" stroke="#41e3ff" stroke-opacity="0.35"/><path d="M70 70 Q150 36 268 70 Q150 104 70 70 Z" fill="url(#hull)" stroke="#41e3ff" stroke-opacity="0.5" stroke-width="1.5"/><path d="M86 70 L250 70" stroke="#41e3ff" stroke-opacity="0.25"/><path d="M210 70 Q236 60 256 70 Q236 80 210 70 Z" fill="#ffb648" fill-opacity="0.85"/><path d="M120 58 L150 30 L165 56 Z" fill="#16243c" stroke="#41e3ff" stroke-opacity="0.4"/><line x1="150" y1="36" x2="150" y2="18" stroke="#41e3ff" stroke-opacity="0.6"/><circle class="navlight n3" cx="150" cy="16" r="3" fill="#41e3ff"/><path d="M120 82 L150 108 L165 84 Z" fill="#101b30" stroke="#41e3ff" stroke-opacity="0.3"/><circle class="navlight n1" cx="250" cy="70" r="3" fill="#ffb648"/><circle class="navlight n2" cx="96" cy="70" r="2.5" fill="#56e39f"/></svg>`;

const scene = () => `
  <section class="scene" id="scene">
    <canvas id="starfield"></canvas>
    <div class="scene-grid"></div>
    <div class="world" id="world">
    <svg id="starmap" viewBox="0 -170 2400 1840" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${renderStarmap(constellations)}</svg>
    <div class="reticle">${RETICLE}</div>
    <div class="ship-rig"><div class="ship">${SHIP}</div></div>
    <button class="beacon" type="button" data-link="left" aria-haspopup="dialog" aria-label="Open Commander Profile">
      <span class="sweep"></span><span class="beacon-line code">${esc(profile.callsign)}</span><span class="beacon-line name">${esc(profile.name)}</span>
      <span class="beacon-line role">${esc(profile.className)}</span><span class="beacon-line status"><i></i> STATUS: ${esc(profile.status)}</span>
      <span class="beacon-hint">&#9656; ACCESS DOSSIER</span>
    </button>
    <button class="telemetry" id="mlog-launch" type="button" data-link="right" aria-haspopup="dialog" aria-label="Open Mission Log">
      <span class="sweep"></span><h5>MISSION LOG</h5>
      <div class="row"><span>ENTRIES</span><span>${pad(missionLog.length)}</span></div><div class="row"><span>LATEST</span><span>${esc(missionLog[0] ? missionLog[0].year : "")}</span></div>
      <div class="row"><span>SIGNAL</span><span>RECOVERED</span></div><span class="mlog-hint">&#9656; OPEN LOG</span><div class="hashbar"></div>
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
      <div class="record-panel"><span class="sweep"></span><button class="record-close" type="button">&#10005; CLOSE</button><div id="record-body"></div></div>
    </div>
    <script type="application/json" id="sm-records">${recordsPayload(constellations) ? JSON.stringify(recordsPayload(constellations)) : "{}"}</script>
  </section>`;

const pips = (lvl) => `<div class="pips">${Array.from({ length: 5 }, (_, i) => `<span class="pip ${i < lvl ? "on" : ""}"></span>`).join("")}</div>`;
const dossierOverlay = () => `
  <div class="profile-overlay" role="dialog" aria-modal="true" aria-label="Commander Profile"><div class="profile-panel">
    <button class="profile-close" type="button">&#10005; CLOSE</button>
    <section class="dossier"><span class="sweep"></span>
      <div class="dossier-head"><div class="portrait-wrap"><img class="portrait" src="${esc(profile.portrait.src)}" alt="${esc(profile.portrait.alt)}" decoding="async"/><span class="scan"></span></div>
        <div><div class="id-tag">PERSONNEL DOSSIER // ${esc(profile.callsign)}</div><h1>${esc(profile.name)}<span class="status-pill">${esc(profile.status)}</span></h1><div class="class">${esc(profile.className)}</div><div class="directive">${esc(profile.directive)}</div></div></div>
      <div class="dossier-grid">
        <div class="dblock"><h4>IDENTIFICATION</h4><dl class="fields">${profile.dossier.map((f) => `<dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd>`).join("")}</dl></div>
        <div class="dblock"><h4>SPECIALISATIONS</h4>${profile.specialisations.map((s) => `<div class="skill"><div class="skill-row"><span>${esc(s.name)}</span><span class="lv">${s.level}/5</span></div>${pips(s.level)}</div>`).join("")}</div>
        <div class="dblock"><h4>FIELD RECORD</h4><ul class="reclist">${profile.fieldRecord.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
        <div class="dblock"><h4>TOOLSET</h4>${profile.toolset.map((g) => `<div class="toolgroup"><div class="tlabel">${esc(g.label)}</div><div class="titems">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("")}</div>
      </div>
      <div class="contacts"><a href="${esc(profile.cv.href)}">&#8615; ${esc(profile.cv.label)}</a>${profile.contacts.map((c) => `<a href="${esc(c.href)}">${esc(c.label)}</a>`).join("")}</div>
    </section></div></div>`;

const record = (s) => `<article class="record" id="${esc(s.id)}"><span class="sweep"></span>${s.badge ? `<span class="badge">${esc(s.badge)}</span>` : ""}<div class="rtype">${esc(s.recordType)}</div><h3>${esc(s.title)}</h3>${s.date ? `<div class="date">${esc(s.date)}</div>` : ""}<p class="summary">${esc(s.summary)}</p>${s.tags && s.tags.length ? `<div class="tags">${s.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}${s.assets && s.assets.length ? `<div class="assets">${s.assets.map((a) => `<a class="asset" href="${esc(a.href)}">${esc(a.label)}</a>`).join("")}</div>` : ""}</article>`;
const section = (c, i) => `<section class="constellation" id="${esc(c.id)}"><header><div class="sector">SECTOR ${pad(i + 1)}</div><h2>${esc(c.narrativeName)}</h2><div class="blurb">${esc(c.blurb)}</div></header><div class="grid">${c.stars.map(record).join("")}</div></section>`;

const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(profile.name)} - ${esc(profile.className)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap" rel="stylesheet"/>
<style>${tokens}\n${global}</style>
</head><body>
<div class="boot-veil" aria-hidden="true"></div>
${scene()}
<main class="wrap">
  <div class="sm-fallback">${constellations.map((c, i) => section(c, i)).join("")}</div>
  <section class="missionlog"><div class="sector">TRANSMISSION ARCHIVE</div><h2>Mission Log</h2>
    ${missionLog.map((m) => `<div class="logrow"><div class="yr">${esc(m.year)}</div><div>${esc(m.event)}</div></div>`).join("")}
  </section>
</main>
${dossierOverlay()}
<div id="missionlog-overlay" role="dialog" aria-modal="true" aria-label="Mission Log">
  <div class="mlog-card"><span class="sweep"></span><button class="mlog-close" type="button">&#10005; CLOSE</button>
    <div class="id-tag">TRANSMISSION ARCHIVE // RECOVERED</div><h2 class="mlog-title">Mission Log</h2>
    ${missionLog.map((m) => `<div class="mlog-row"><div class="yr">${esc(m.year)}</div><div class="ev">${esc(m.event)}</div></div>`).join("")}
  </div>
</div>
<div id="media-lightbox" role="dialog" aria-modal="true" aria-label="Media viewer">
  <button class="ml-close" type="button">✕ CLOSE</button>
  <button class="ml-nav ml-prev" type="button" aria-label="Previous">‹</button>
  <div class="ml-stage"><div class="ml-frame" id="ml-frame"></div><div class="ml-cap" id="ml-cap"></div></div>
  <button class="ml-nav ml-next" type="button" aria-label="Next">›</button>
</div>
<script>${sceneJs}</script>
<script>${starmapJs}</script>
</body></html>`;

const previewHtml = html.replaceAll('"/assets/', '"../public/assets/');
mkdirSync(join(root, "preview"), { recursive: true });
writeFileSync(join(root, "preview/index.html"), previewHtml);
const stars = constellations.reduce((n, c) => n + c.stars.length, 0);
console.log(`Wrote preview/index.html - star map (${constellations.length} constellations, ${stars} stars).`);
