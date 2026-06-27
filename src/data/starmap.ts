/**
 * starmap.ts — Layout of the constellation star map.
 * Virtual 2400 x 1840 "universe" (viewBox y spans -170..1670) (the #starmap SVG viewBox, preserveAspectRatio slice).
 * Centre kept clear for the ship; constellations spread around the periphery.
 * Star order matches content.ts stars (star N opens record N).
 */
export interface StarNode { dx: number; dy: number; mag: number }
export interface ConLayout {
  cx: number; cy: number; depth: number; reticleR: number;
  stars: StarNode[]; edges: [number, number][];
}
export const VB = { w: 2400, h: 1840 };

export const starmap: Record<string, ConLayout> = {
  // PROJECTS — rich hub, upper-left
  projects: {
    cx: 440, cy: 405, depth: 1.0, reticleR: 132,
    stars: [
      { dx: 0, dy: -12, mag: 2.2 }, { dx: -74, dy: -46, mag: 1.5 }, { dx: -84, dy: 44, mag: 1.4 },
      { dx: 76, dy: -46, mag: 1.6 }, { dx: 70, dy: 52, mag: 1.5 },
    ],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4]],
  },
  // RESEARCH — branching, upper-right
  research: {
    cx: 2230, cy: 212, depth: 0.85, reticleR: 102,
    stars: [{ dx: 0, dy: -6, mag: 1.7 }, { dx: 58, dy: -38, mag: 1.3 }, { dx: 40, dy: 50, mag: 1.3 }],
    edges: [[0, 1], [0, 2]],
  },
  // WORK EXPERIENCE — pair, top centre
  experience: {
    cx: 1430, cy: -60, depth: 0.8, reticleR: 82,
    stars: [{ dx: -38, dy: 4, mag: 1.6 }, { dx: 46, dy: -16, mag: 1.5 }],
    edges: [[0, 1]],
  },
  // HACKATHONS — cluster, lower-left
  hackathons: {
    cx: 445, cy: 1130, depth: 0.95, reticleR: 138,
    stars: [
      { dx: 0, dy: 0, mag: 1.8 }, { dx: 68, dy: -34, mag: 1.4 }, { dx: 102, dy: 24, mag: 1.3 },
      { dx: 34, dy: 64, mag: 1.4 }, { dx: -62, dy: 42, mag: 1.3 }, { dx: -80, dy: -30, mag: 1.5 },
    ],
    edges: [[0, 1], [1, 2], [0, 3], [0, 4], [4, 5]],
  },
  // COMMENDATIONS (awards) — Big Dipper, lower-right
  awards: {
    cx: 2330, cy: 1295, depth: 0.88, reticleR: 132,
    stars: [
      { dx: -84, dy: -26, mag: 1.9 }, { dx: -78, dy: 28, mag: 1.5 }, { dx: -26, dy: 40, mag: 1.4 },
      { dx: -30, dy: -4, mag: 1.4 }, { dx: 22, dy: -1, mag: 1.5 }, { dx: 66, dy: -20, mag: 1.4 },
      { dx: 100, dy: -46, mag: 1.9 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6]],
  },
  // EDUCATION — linear pair, right
  education: {
    cx: 2393, cy: 720, depth: 0.7, reticleR: 78,
    stars: [{ dx: -40, dy: 16, mag: 1.7 }, { dx: 44, dy: -16, mag: 1.6 }],
    edges: [[0, 1]],
  },
};
