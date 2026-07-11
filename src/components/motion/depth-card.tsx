"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Layered floating card: gentle idle drift, and on hover the card lifts with a
 * restrained perspective tilt (≤4°) and a deepening shadow. Pointer tilt is
 * disabled for touch/reduced-motion users.
 */
export function DepthCard({
  children,
  className,
  // Idle drift is opt-in: continuous movement makes interactive children
  // unreliable to click/tap, so ambient life comes from scroll parallax and
  // the site-wide light layer instead.
  idleDrift = false,
  driftDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  idleDrift?: boolean;
  driftDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [3.5, -3.5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-3.5, 3.5]), { stiffness: 120, damping: 18 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReduced || e.pointerType === "touch") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      animate={
        idleDrift && !prefersReduced
          ? { y: [0, -6, 0] }
          : undefined
      }
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: driftDelay }}
      style={
        prefersReduced
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }
      }
      whileHover={prefersReduced ? undefined : { y: -10, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className={cn(
        "group/depth relative transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/25",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
