# PROJECT.md — Refined Build Plan (v1)

> *"If an autonomous explorer were archiving its research, achievements, and mission history, how would it present them?"*

This is the buildable refinement of `portfolio_plan_v0.md`. v0 defined the **fiction and UX**; this v1 keeps all of that and adds the **technical architecture, content mapping, media pipeline, performance budget, and milestone roadmap** so we can start building on localhost and later deploy free.

---

## 1. Decisions locked for v1

| Area | Decision | Why |
|------|----------|-----|
| Rendering | **Hybrid** — 2D Canvas starfield/parallax + SVG/CSS starship & constellations | Immersive enough to sell the fiction, loads instantly, degrades gracefully on weak devices |
| Framework | **Astro + React islands** | Astro ships near-zero JS for static content records; the interactive space scene is a single React "island". Free static hosting, fast builds |
| Accessibility | **Immersive only + `prefers-reduced-motion`** | No classic/standard view — the scene *is* the site. Motion-sensitive visitors get a static starfield (no drift/parallax), but the same immersive layout. Keyboard-navigable records |
| Content scope | **8 constellations** (see §3) | Uses all real material: Core five + Hackathons + Work Experience + Hobbies |
| Build/dev | `npm run dev` locally (Vite under Astro), static output for deploy | Zero-config local host, drag-to-deploy later |

---

## 2. Information architecture

The site is a **single immersive page** (the star system) plus content surfaced as **Data Records** (overlays). Astro still gives us optional clean URLs per record for SEO and shareable deep links (e.g. `/record/tessellate` opens the scene with that record focused), but there is **no separate classic/standard view** — the immersive scene is the only presentation.

```
STAR SYSTEM (home)
├── Starship "FSL-01"  ──► Commander Profile  (replaces About / CV)
├── Constellation: Commendations      (Awards)
├── Constellation: Training Record     (Education)
├── Constellation: Research Archive    (Papers)
├── Constellation: Mission Records     (Projects)
├── Constellation: Capability Matrix   (Skills)
├── Constellation: Field Operations    (Hackathons)
├── Constellation: Service Record      (Work Experience)
├── Distant signal: Off-Duty Log       (Hobbies — optional/hidden planet)
└── Mission Log (HUD overlay)          (timeline of recovered transmissions)
```

### Navigation model (unchanged from v0, formalised)
1. **Idle** — ship drifts, beacon pulses, constellations dim in the background.
2. **Click constellation** → it illuminates, lines energise, stars separate, labels appear. *No panel yet.*
3. **Click a star** → opens its **Data Record** overlay.
4. **HUD controls** persistently available: Mission Log, reset view, reduced-motion respected automatically (sound is always off).

---

## 3. Content mapping (real → narrative)

Every star below is real content already in `Context and media/`. "Assets" = downloadable/linked items shown as archive modules.

### ⭐ Commendations (Awards) — 7 stars
Compact, symmetrical constellation. **Draft captions below researched from official sources — for your approval/tweak.**

| Star | Draft caption (research-based) | Media |
|------|--------------------------------|-------|
| Outstanding Achievement Award | Top 0.5% of the 2025 graduating cohort; University of Manchester's recognition for exceptional all-round performance. | 2 photos |
| Top in EEE Department | 1st prize for best overall performance in the 3rd-year cohort, EEE Department, University of Manchester. | photo |
| Top 10 in Faculty of Science & Engineering | Ranked in the top 10 across the Faculty of Science & Engineering for academic performance. | photo |
| IET Future Talent Award (Boost Scholarship, 2024) | Merit scholarship from the Institution of Engineering & Technology for high-achieving (70%+) students on IET-accredited degrees — £1,500/yr for the final years of study. | 2 photos |
| Stellify Award | University of Manchester's flagship social-responsibility award: three Ethical Grand Challenges, 40+ hours volunteering, and two leadership roles alongside the degree. | photo |
| School of Engineering PGR Scholarship | Fully-funded doctoral studentship (Jan 2026) for PhD research at the University of Manchester. | — |
| Top in Nigeria — A-Level Physics | Highest A-Level Physics result in Nigeria. | photo |

*Note: CV also lists an **Intel Fearless Innovation Award (2024)** and **Best Final-Year Project** — I can add these as stars if you have media/details, otherwise they live in the Mission Log/Service Record.*

### ⭐ Training Record (Education) — 2 stars
Simple linear progression.
- **PhD, Electrical & Electronic Engineering** — University of Manchester (Apr 2026 – expected 2030). CBF-based safety-critical multi-agent control; fully funded.
- **BEng (Hons) Mechatronic Engineering with Industrial Experience, First-Class** — Jul 2021 – Jul 2025. Dissertation: safety-critical consensus-based formation control of distributed mobile robots. *Transcript/Degree Certificate/HEAR **omitted** from the site (context only).*

### ⭐ Research Archive (Research) — 3 stars
Branching, exploratory.
- **Constrained torque-level formation control (consensus FBL-MPC)** — TAROS 2026, *accepted/published Oct*. Asset: PDF.
- **Safety-critical adaptive impedance control (Nonsmooth CBFs)** — CDC, *under review*. Assets: PDF, arXiv 2605.28367.
- **High-order multi-constrained safety filters** — *in progress*. Show as "transmission incoming / classified" placeholder.

### ⭐ Mission Records (Projects) — 5 stars
Largest, richest constellation. Each gets the two-panel layout from v0 §"Project Records".
- **Tessellate — distributed NMPC swarm control** (Python, SOCP, 60 Hz). Repo: Tessellate-Labs. Strong hero project.
- **Double Inverted Pendulum** — hybrid energy-swingup + SMC. MATLAB/CasADi.
- **Autonomous Line-Following Robot** — STM32, 3× PID, 2nd-year prize. Assets: report PDF, video, repo.
- **Autonomous Maze-Solving Buggy** — Arduino, PID. 2 videos.
- **Robotic Poker Player & Dealer** — robot arm, in progress. Repo + demo (.mkv → transcode).

### ⭐ Capability Matrix (Skills) — 5 stars
Network-like. Control Theory · Robotics · Optimisation · Embedded Systems · Machine Learning. Each star links to the records that evidence it (interconnections = the constellation's edges).

### ⭐ Field Operations (Hackathons) — 6 stars
- AME × Quanser **(Winner)** — QArm IK pick-and-place. Repo + video.
- Swarm Hack 2021 **(Winner)** — 100% robot aggregation. Photo + video.
- GUH 2025 Quant Challenge **(Winner)** — 60% of prize pool. Web app + LinkedIn + repo.
- Hack-a-bot 2025 **(2nd, Ice9)** — overhead-camera maze CV. Repo.
- GUH 2023 **(3rd, Bet365)** — football data web app. Devpost + repo.
- Hack-a-bot 2026 — 3-MONA swarm trolley push. Repo.

### ⭐ Service Record (Work Experience) — 2 stars
- **FPGA Hardware Engineer — Altera (Intel PSG)** — Snappy compression on FPGA (+10% ratio, +30% speed), MAC-dedup (1000% faster). Assets: internship report, photo, Bespoke_Snappy repo.
- **Robotics Research Assistant** — safe adaptive impedance control, KINOVA 7-DOF. (Overlaps the CDC paper — link, don't duplicate.)

### 🪐 Off-Duty Log (Hobbies) — **confirmed: surface as a distant planet**
Off-theme, image-heavy (Drawing ~18 images, Travelling ~11). A **single distant "planet"** the curious can discover, with a tasteful tabbed archive (Drawing / Cooking / Travelling / Reading) rather than its own constellation. Keeps personality without diluting the professional core.

---

## 4. Commander Profile (About + CV)
Holographic personnel record (replaces About page). I'll rewrite the bio fresh (your draft was rough). Fields: name, role (Doctoral Researcher, Univ. of Manchester), research interests, background, vision, bio, **CV download** (`Faisal_Lawan_CV_2026.pdf`).

**Communications Relay (pulled from CV):**
- Email: faisallawan08@gmail.com
- GitHub: https://github.com/FHL-08
- LinkedIn: https://www.linkedin.com/in/faisal-lawan/
- arXiv: https://arxiv.org/abs/2605.28367

---

## 5. Content curation — show / gate / omit

**Show directly:** all descriptions, project/research summaries, award photos, hackathon results, CV, public repos, arXiv, demo videos (muted), the polished about copy.

**Omit entirely (context only, never on the site):** Academic Transcript, Degree Certificate, Final HEAR — private documents, not for a public page. Raw source files (`.cpp`, `.h`, `.m`, `.tex`) → link to GitHub instead, never embedded. In-progress/empty files (`current-work (not completed).txt`). Internal challenge-brief texts used only for my context. The rough `about` and your original descriptions — I'll rewrite, not reuse verbatim.

**Resolved:** award captions drafted from official sources (§3); Hobbies → Off-Duty planet; transcripts → omitted; contact URLs → pulled from CV.

---

## 6. Media optimisation pipeline

A scripted, repeatable pipeline (`/scripts/optimize-media.mjs`) so source stays untouched and `/public/assets` holds web-ready files.

**Images** (45 jpeg + 6 png + 6 jpg, many oversized WhatsApp exports):
- Convert to **WebP** (+ JPEG fallback), strip EXIF, resize to responsive widths (e.g. 480/960/1600), `loading="lazy"`, blur-up placeholders.
- Target: no single hero image > ~200 KB; thumbnails < 40 KB.

**Video** (5× mp4, 1× **.mkv**):
- Transcode all to **muted MP4 (H.264) + WebM (VP9)**, audio stream removed entirely (per v0: site never plays audio).
- Generate **two derivatives each**: an 8–15 s silent loop (preview, autoplay/muted/loop) and a compressed full clip (≤ ~2 min) for "VIEW FULL RECORDING".
- The `.mkv` (Robotic Poker demo) **must** be transcoded — browsers can't play Matroska.

**PDFs:** served as static downloads inside "archive module" cards; render a thumbnail of page 1 for the frame. No heavy in-page PDF viewer by default.

**Tooling:** `sharp` for images, `ffmpeg` for video, run once at build (or pre-committed outputs). Total media is ~110 MB raw → target deployed payload well under that via WebP/transcode + lazy loading.

---

## 7. Performance budget & quality bar

- **Initial load (scene + above-the-fold):** target < 1.5 MB JS+assets; LCP < 2.5 s on mid-tier laptop.
- **Canvas:** capped star/particle count, `requestAnimationFrame`, pause when tab hidden / off-screen; device-pixel-ratio aware.
- **Reduced motion:** static starfield, no drift/parallax, instant record open.
- **Lighthouse goal:** ≥ 90 Performance / 100 Accessibility / ≥ 90 Best-Practices+SEO before we call it done.
- **Responsive:** full experience on desktop/tablet; **mobile gets a simplified scene** (fewer particles, tap-to-open, lighter parallax) — still the immersive scene, just tuned down.

---

## 8. Tech stack & repo structure

```
personal_website/
├── Context and media/        # SOURCE (never served directly)
├── public/assets/            # web-ready images, video, pdf (generated)
├── src/
│   ├── pages/                # Astro routes: index, /record/[slug] (deep links only)
│   ├── components/
│   │   ├── scene/            # React island: Starfield, Starship, Constellation, Star
│   │   ├── records/          # DataRecord, ArchiveFrame, MediaCarousel, AssetModule
│   │   └── hud/              # MissionLog, ViewToggle, CommanderProfile
│   ├── data/                 # content.ts — single source of truth (all records)
│   ├── styles/               # design tokens (HUD palette, scanlines, glow)
│   └── lib/                  # canvas engine, reduced-motion, media helpers
├── scripts/optimize-media.mjs
└── astro.config.mjs
```

All content lives in **one typed data file** (`src/data/content.ts`) — constellations → stars → records → assets. Single source of truth that drives the scene, the record overlays, and the deep-link pages.

---

## 9. Design system (HUD language)
Dark space base; one or two accent glows (cyan/amber). Recurring motifs: HUD corner brackets, scanlines, monospace labels for telemetry, smooth glow transitions. Consistent **Archive Frame** for all media. Defined as CSS custom properties so the whole look is tunable from one file.

---

## 10. Milestone roadmap

**M0 — Scaffold & data** *(start here)*
Astro+React project, design tokens, `content.ts` populated from the real material, media pipeline script. *Deliverable: every record rendering as a simple static list on localhost — proves all content/copy is correct before any animation goes on top.* (This is a build checkpoint, not a shipped "classic view" — it gets replaced by the scene.)

**M1 — The scene**
Canvas starfield + parallax, drifting starship FSL-01, beacon with hover/radar sweep, Commander Profile.

**M2 — Constellations & records**
8 constellations with the two-stage interaction; Data Record overlay; Archive Frame media carousel; Project two-panel layout; Mission Log.

**M3 — Media & polish**
Run optimisation pipeline, wire previews + full playback, transitions, sound-always-off guarantee, reduced-motion paths.

**M4 — Performance & QA**
Lighthouse pass, mobile simplified scene, cross-browser check, accessibility audit (keyboard nav, focus, alt text). Verification step.

**M5 — Deploy**
Free static host (Cloudflare Pages / Netlify / GitHub / Vercel Pages), custom domain if you have one, analytics-light.

---

## 11. Status of open questions — all resolved
1. **Award captions** — ✅ drafted from official sources (§3); tweak any wording you like.
2. **Hobbies** — ✅ Off-Duty planet.
3. **Transcripts/certificate** — ✅ omitted (context only).
4. **Links** — ✅ pulled from CV (§4).
5. **Classic view** — ✅ dropped; immersive scene only, with reduced-motion static fallback.
6. **Domain** — none yet; deploy first to free `*.pages.dev`/`*.netlify.app`, add a custom domain later.

Nothing blocking. M4 completed. M5 remains.