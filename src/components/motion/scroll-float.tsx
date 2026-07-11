"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Core floating primitive: while the element travels through the viewport it
 * drifts vertically at a depth-dependent speed, creating layered parallax.
 * `depth` ∈ [-1, 1]: negative floats against scroll (feels closer), positive
 * lags behind (feels deeper). Motion is disabled for reduced-motion users.
 */
export function ScrollFloat({
  children,
  depth = 0.5,
  className,
  amplitude = 60,
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
  amplitude?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amplitude * depth, -amplitude * depth]);

  return (
    <motion.div ref={ref} style={prefersReduced ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Replaces flat reveals: content floats in from a slight depth (down-scaled,
 * blurred, lower) and settles — used for section content entrances.
 */
export function FloatIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 42, scale: 0.97, filter: "blur(6px)" }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
