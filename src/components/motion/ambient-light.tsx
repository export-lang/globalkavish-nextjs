"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Site-wide ambient layer: two very slow-moving light glows behind all content
 * that give idle life and visual continuity between sections. Pure CSS
 * animation (60s+ cycles), pointer-events none, disabled for reduced motion.
 */
export function AmbientLight() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-glow ambient-glow-a" />
      <div className="ambient-glow ambient-glow-b" />
    </div>
  );
}
