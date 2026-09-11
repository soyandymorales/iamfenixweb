export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function simplifyMotion() {
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 768px)").matches
  );
}

/** Skip WebGL when the device or user preference cannot carry it. */
export function canAffordHeavyMotion() {
  if (prefersReducedMotion()) return false;
  if (navigator.connection?.saveData) return false;
  if (typeof navigator.deviceMemory === "number" && navigator.deviceMemory < 2) {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}
