"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { DESIGN_LIBRARY } from "@/lib/data/product-images";

/**
 * Site-wide floating ceramic layer: large real tile slabs, cropped off the
 * viewport edges, drifting slowly and continuously behind all content. This is
 * what makes every page feel like one floating ceramic world rather than a
 * stack of sections. Fixed to the viewport, very low opacity, GPU transforms
 * only. Drift stops for reduced-motion; slab count drops on small screens.
 *
 * Sourced from the local, approved DESIGN_LIBRARY (not Google Drive) so this
 * background layer never depends on an external host.
 */
function findFace(slug: string) {
  return DESIGN_LIBRARY.find((d) => d.slug === slug)?.faces[0];
}

const SLABS = [
  {
    src: findFace("woodland-pecan"), // portrait carved marble look
    style: "top-[-6%] left-[-12%] h-[52vh] w-[30vw] rotate-[9deg]",
    anim: "ambient-slab-a",
    desktopOnly: false,
  },
  {
    src: findFace("onyx-velluto-beige"), // square marble
    style: "top-[38%] right-[-14%] h-[46vh] w-[34vw] -rotate-[7deg]",
    anim: "ambient-slab-b",
    desktopOnly: false,
  },
  {
    src: findFace("xtreme-nero"), // portrait, dark
    style: "bottom-[-8%] left-[24%] h-[44vh] w-[26vw] rotate-[4deg]",
    anim: "ambient-slab-c",
    desktopOnly: true,
  },
].filter((s): s is typeof s & { src: string } => Boolean(s.src));

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
          key={slab.src}
          className={`ambient-slab absolute overflow-hidden rounded-[2rem] ${slab.style} ${
            prefersReduced ? "" : slab.anim
          }`}
          style={{
            backgroundImage: `url(${slab.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
