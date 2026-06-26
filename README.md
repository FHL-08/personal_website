# Faisal Lawan — Portfolio

An immersive, space-themed personal portfolio. The site is a single star system you
explore: fly the map, open constellations, and read "data records" covering research,
projects, awards, work experience, education, skills, hackathons and hobbies. Fully
responsive, with a dedicated touch layout for phones and tablets.

**Live site:** _add your Vercel URL here_

## Tech stack

- **Astro** — static output; ships near-zero JS for the content shell.
- **Vanilla JS + Canvas/SVG** — the interactive HUD scene: starfield, constellation
  star map, pan/zoom, holographic overlays, and the media lightbox.
- **React** — used only as a build-time island integration.
- No backend; the whole site is static files.

## Project structure

| Path | Purpose |
|------|---------|
| `src/pages/index.astro` | Page markup |
| `src/layouts/Base.astro` | HTML shell — head, fonts, icons |
| `src/data/content.ts` | All site content (single source of truth) |
| `src/data/starmap.ts` | Constellation layout |
| `src/lib/starmapRender.ts` | Builds the star-map SVG + record payload |
| `src/scripts/scene.js` | Immersive HUD scene (starfield, ship, crystal, launchers) |
| `src/scripts/starmap.js` | Constellation star-map interaction engine |
| `src/styles/` | Design tokens + global styles |
| `public/` | Static assets (media, CV, icons) |
| `scripts/preview-render.mjs` | Generates a standalone local preview |

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # static build -> dist/
npm run preview   # serve the production build locally
```

## Deploy

Static output to `dist/`. Hosted on Vercel — the framework is auto-detected
(build command `npm run build`, output directory `dist`).

## License

Source code is released under the terms in [LICENSE](LICENSE). All personal content
and media in this repository — text, images, video and the CV — are © Faisal Lawan and
are not covered by that license.
