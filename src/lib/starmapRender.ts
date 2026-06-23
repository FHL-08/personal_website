/**
 * starmapRender.ts — Builds the constellation star-map SVG + records payload.
 * Shared by the Astro page and the standalone preview so both render identically.
 */
import type { Constellation } from "../data/content.ts";
import { starmap, VB } from "../data/starmap.ts";

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function spike(x: number, y: number, R: number, ri: number) {
  const p: string[] = [];
  for (let i = 0; i < 4; i++) {
    const ao = (i * Math.PI) / 2 - Math.PI / 2;
    p.push((x + Math.cos(ao) * R).toFixed(1) + " " + (y + Math.sin(ao) * R).toFixed(1));
    const ai = ao + Math.PI / 4;
    p.push((x + Math.cos(ai) * ri).toFixed(1) + " " + (y + Math.sin(ai) * ri).toFixed(1));
  }
  return "M" + p.join(" L") + " Z";
}

function star(x: number, y: number, mag: number) {
  const R = mag * 6, ri = mag * 1.7;
  return (
    `<circle cx="${x}" cy="${y}" r="${(mag * 13).toFixed(1)}" fill="url(#smGlow)" opacity="0.85"/>` +
    `<path d="${spike(x, y, R * 0.6, ri * 0.8)}" fill="#cfe0ff" fill-opacity="0.5" transform="rotate(45 ${x} ${y})"/>` +
    `<path d="${spike(x, y, R, ri)}" fill="url(#smSpark)"/>` +
    `<circle cx="${x}" cy="${y}" r="${(mag * 0.9).toFixed(1)}" fill="#ffffff"/>` +
    `<circle cx="${x}" cy="${y}" r="${(mag * 6).toFixed(1)}" fill="url(#smFront)" opacity="0.6"/>`
  );
}

function reticle(cx: number, cy: number, R: number) {
  return (
    `<g class="sm-reticle">` +
    `<g class="sm-rr"><circle class="sm-ring" cx="${cx}" cy="${cy}" r="${R}" stroke-width="1.5" stroke-dasharray="40 16 8 16"/></g>` +
    `<g class="sm-rr b"><circle class="sm-ring" cx="${cx}" cy="${cy}" r="${R - 12}" stroke-width="3" stroke-dasharray="70 240"/></g>` +
    `<g class="sm-rr c"><circle class="sm-ring" cx="${cx}" cy="${cy}" r="${Math.max(8, R - 24)}" stroke-width="1" stroke-dasharray="2 8"/></g>` +
    `</g>`
  );
}

export const SM_DEFS =
  `<defs>` +
  `<radialGradient id="smGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="20%" stop-color="#dbe8ff" stop-opacity="0.7"/><stop offset="48%" stop-color="#8fb2ff" stop-opacity="0.34"/><stop offset="100%" stop-color="#5a82ff" stop-opacity="0"/></radialGradient>` +
  `<radialGradient id="smSpark" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffffff"/><stop offset="60%" stop-color="#eaf2ff" stop-opacity="0.95"/><stop offset="100%" stop-color="#a7c2ff" stop-opacity="0.75"/></radialGradient>` +
  `<radialGradient id="smFront" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/><stop offset="45%" stop-color="#eaf2ff" stop-opacity="0.35"/><stop offset="100%" stop-color="#cfe0ff" stop-opacity="0"/></radialGradient>` +
  `</defs>`;

/** Inner SVG content (defs + constellation groups) for the #starmap svg. */
export function renderStarmap(constellations: Constellation[]): string {
  let out = SM_DEFS;
  constellations.forEach((c, ci) => {
    const L = starmap[c.id];
    if (!L) return;
    let g = `<g class="sm-con" data-id="${esc(c.id)}" data-cx="${L.cx}" data-cy="${L.cy}" data-r="${L.reticleR}">`;
    g += `<circle class="sm-hit" cx="${L.cx}" cy="${L.cy}" r="${L.reticleR}"/>`;
    g += reticle(L.cx, L.cy, L.reticleR);
    // edges
    L.edges.forEach(([a, b]) => {
      const A = L.stars[a], B = L.stars[b];
      const x1 = L.cx + A.dx, y1 = L.cy + A.dy, x2 = L.cx + B.dx, y2 = L.cy + B.dy;
      g += `<line class="sm-edgeGlow" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="4"/>`;
      g += `<line class="sm-edgeCore" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="1.1"/>`;
    });
    // stars
    L.stars.forEach((s, i) => {
      g += `<g class="sm-star" data-rid="${esc(c.stars[i].id)}" data-x="${L.cx + s.dx}" data-y="${L.cy + s.dy}" data-mag="${s.mag}">${star(L.cx + s.dx, L.cy + s.dy, s.mag)}</g>`;
    });
    g += `</g>`;
    out += g;
  });
  return out;
}

/** Flat record map keyed by star id, for the Data Record overlay. */
export function recordsPayload(constellations: Constellation[]) {
  const recs: Record<string, unknown> = {};
  constellations.forEach((c, ci) => {
    c.stars.forEach((s) => {
      recs[s.id] = {
        sector: ci + 1,
        constellation: c.narrativeName,
        recordType: s.recordType,
        title: s.title,
        date: s.date || "",
        summary: s.summary,
        body: s.body || [s.summary],
        tags: s.tags || [],
        assets: s.assets || [],
        badge: s.badge || "",
        media: s.media || [],
      };
    });
  });
  return recs;
}

export { VB };
