/** Shared mobile/touch detection — keep scene.js and starmap.js in sync. */
export function isMobileView() {
  if (typeof window === "undefined") return false;
  if (/[?&]view=mobile/.test(location.search)) return true;
  if (!window.matchMedia) return false;
  if (window.matchMedia("(max-width: 820px)").matches) return true;
  return (
    window.matchMedia("(pointer: coarse)").matches &&
    window.matchMedia("(hover: none)").matches
  );
}
