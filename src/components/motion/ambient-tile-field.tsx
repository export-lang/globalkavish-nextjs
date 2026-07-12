"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { driveImageUrl, tileDesigns } from "@/lib/data/designs";

/**
 * Site-wide floating ceramic layer: large real tile slabs, cropped off the
 * viewport edges, drifting slowly and continuously behind all content. This is
 * what makes every page feel like one floating ceramic world rather than a
 * stack of sections. Fixed to the viewport, very low opacity, GPU transforms
 * only. Drift stops for reduced-motion; slab count drops on small screens.
 */
const SLABS = [
  {
    id: tileDesigns[1].imageIds[0], // Armani Rich Bianco (portrait marble)
    style: "top-[-6%] left-[-12%] h-[52vh] w-[30vw] rotate-[9deg]",
    anim: "ambient-slab-a",
    desktopOnly: false,
  },
  {
    id: tileDesigns[4].imageIds[0], // Electra Almond Beige (square)
    style: "top-[38%] right-[-14%] h-[46vh] w-[34vw] -rotate-[7deg]",
    anim: "ambient-slab-b",
    desktopOnly: false,
  },
  {
    id: tileDesigns[3].imageIds[0], // Rome Black (portrait, dark)
    style: "bottom-[-8%] left-[24%] h-[44vh] w-[26vw] rotate-[4deg]",
    anim: "ambient-slab-c",
    desktopOnly: true,
  },
];

export function AmbientTileField() {
  const prefersReduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  const slabs = SLABS.filter((s) => isDesktop || !s.desktopOnly);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {slabs.map((slab) => (
        <div
          key={slab.id}
          className={`ambient-slab absolute overflow-hidden rounded-[2rem] ${slab.style} ${
            prefersReduced ? "" : slab.anim
          }`}
          style={{
            backgroundImage: `url(${driveImageUrl(slab.id, 700)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
