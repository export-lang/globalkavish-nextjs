"use client";

/* eslint-disable @next/next/no-img-element -- decorative CSS-transform slab planes, not content images */

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";

const STAGES = [
  { range: [0, 0.28], label: "Ceramic, refined.", sub: "Premium porcelain surfaces, floating in studio light." },
  { range: [0.28, 0.58], label: "A single dense body.", sub: "Pressed, calibrated, glazed and fired." },
  { range: [0.58, 1], label: "Kavish Global.", sub: "Premium ceramic surfaces, exported to the world." },
];

// Real Kavish product: Luxe Calacatta Golden — four distinct production faces
// served locally from public/media. No two slabs repeat the same image.
const MAIN_SRC = "/media/kavish-calacatta-golden-1.jpg";
const TOP_RIGHT_SRC = "/media/kavish-calacatta-golden-2.jpg";
const FOREGROUND_SRC = "/media/kavish-calacatta-golden-3.jpg";
const DISTANT_SRC = "/media/kavish-calacatta-golden-4.jpg";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Pointer parallax (normalised -1..1, spring-smoothed).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReduced || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  // Scroll depth parallax — each plane moves at its own speed (camera push).
  const mainY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const mainScale = useTransform(scrollYProgress, [0, 0.55], [1, 1.14]);
  const topY = useTransform(scrollYProgress, [0, 1], [0, -190]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const distantY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Pointer-driven tilt, CLAMPED per slab so a face never rotates edge-on.
  const mainRotateY = useTransform(sx, [-1, 1], [-10, -2]);
  const mainRotateX = useTransform(sy, [-1, 1], [4, -4]);
  const mainX = useTransform(sx, [-1, 1], [14, -14]);

  const topRotateY = useTransform(sx, [-1, 1], [6, 12]);
  const topRotateX = useTransform(sy, [-1, 1], [-6, -1]);
  const topX = useTransform(sx, [-1, 1], [10, -18]);

  const fgRotateY = useTransform(sx, [-1, 1], [-8, -3]);
  const fgRotateX = useTransform(sy, [-1, 1], [2, 7]);
  const fgX = useTransform(sx, [-1, 1], [-24, 24]);

  const distantX = useTransform(sx, [-1, 1], [8, -8]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="sticky top-0 h-screen overflow-hidden bg-[radial-gradient(120%_100%_at_70%_30%,#1c1712_0%,#0a0a0a_60%)]"
      >
        {/* Distant small slab — far upper-left, desktop only, subtle presence */}
        <FloatingSlab
          src={DISTANT_SRC}
          alt=""
          wrapStyle={{ y: distantY, x: distantX }}
          className="left-[8%] top-[16%] hidden h-[20vh] w-[14vh] -rotate-[8deg] md:block"
          floatDuration={9}
          floatAmplitude={8}
          rotateY={-8}
          rotateX={3}
          opacity={0.55}
          blurPx={1.5}
          z={1}
        />

        {/* Top-right cropped slab — enters from the top/right edge */}
        <FloatingSlab
          src={TOP_RIGHT_SRC}
          alt=""
          wrapStyle={{ y: topY, x: topX, rotateY: topRotateY, rotateX: topRotateX }}
          className="-right-[6%] -top-[9%] hidden h-[30vh] w-[19vh] rotate-[9deg] md:block"
          floatDuration={8}
          floatDelay={0.6}
          floatAmplitude={10}
          opacity={0.9}
          z={2}
        />

        {/* MAIN Kavish slab — dominant, centre-right, face clearly visible */}
        <FloatingSlab
          src={MAIN_SRC}
          alt="Kavish Global Luxe Calacatta Golden porcelain slab"
          wrapStyle={{ y: mainY, x: mainX, scale: mainScale, rotateY: mainRotateY, rotateX: mainRotateX }}
          className="right-[2%] top-1/2 h-[46vh] w-[23vh] -translate-y-1/2 sm:right-[8%] md:right-[18%] md:h-[58vh] md:w-[29vh]"
          floatDuration={7}
          floatAmplitude={12}
          opacity={1}
          sheen
          z={3}
        />

        {/* Foreground slab — lower, large, cropped by the bottom-right edge */}
        <FloatingSlab
          src={FOREGROUND_SRC}
          alt=""
          wrapStyle={{ y: fgY, x: fgX, rotateY: fgRotateY, rotateX: fgRotateX }}
          className="-bottom-[18%] -right-[6%] h-[46vh] w-[24vh] rotate-[6deg] md:-bottom-[20%] md:h-[58vh] md:w-[29vh]"
          floatDuration={8.5}
          floatDelay={1.2}
          floatAmplitude={11}
          opacity={0.96}
          z={4}
        />

        {/* Content — heading floats in the foreground */}
        <Container className="relative z-20 flex h-full flex-col justify-between pb-10 pt-28 text-stone-50 md:pb-16 md:pt-36">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs font-medium uppercase tracking-[0.35em] text-gold-300"
          >
            Kavish Global — Morbi, India
          </motion.p>

          <div className="relative min-h-[220px] max-w-3xl pointer-events-none">
            {STAGES.map((stage, i) => (
              <StageText key={i} stage={stage} progress={scrollYProgress} />
            ))}
          </div>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm text-stone-300">
              Scroll to move through the surface — from a floating porcelain slab to the finished
              Kavish collection.
            </p>
            <MagneticButton>
              <Button asChild size="lg" variant="gold">
                <Link href="/collections">Explore Collections</Link>
              </Button>
            </MagneticButton>
          </div>
        </Container>
      </div>
    </section>
  );
}

/**
 * One floating real-tile plane: independent idle float, clamped face-forward
 * tilt (never edge-on), ceramic thickness edge, optional rim-light sheen.
 */
function FloatingSlab({
  src,
  alt,
  className,
  wrapStyle,
  floatDuration,
  floatDelay = 0,
  floatAmplitude,
  rotateY,
  rotateX,
  opacity,
  blurPx = 0,
  sheen = false,
  z,
}: {
  src: string;
  alt: string;
  className: string;
  wrapStyle: MotionStyle;
  floatDuration: number;
  floatDelay?: number;
  floatAmplitude: number;
  rotateY?: number;
  rotateX?: number;
  opacity: number;
  blurPx?: number;
  sheen?: boolean;
  z: number;
}) {
  const prefersReduced = useReducedMotion();
  const staticTilt = rotateY !== undefined || rotateX !== undefined;

  return (
    <motion.div
      style={{ ...wrapStyle, zIndex: z }}
      className={`pointer-events-none absolute overflow-hidden rounded-[10px] ${className}`}
    >
      <motion.div
        animate={prefersReduced ? undefined : { y: [0, -floatAmplitude, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        style={staticTilt ? { perspective: 1200 } : undefined}
        className="h-full w-full"
      >
        <motion.div
          style={
            staticTilt
              ? { rotateY, rotateX, transformStyle: "preserve-3d" }
              : { transformStyle: "preserve-3d" }
          }
          className="ceramic-slab relative h-full w-full overflow-hidden rounded-[10px]"
        >
          <img
            src={src}
            alt={alt}
            style={{ opacity, filter: blurPx ? `blur(${blurPx}px)` : undefined }}
            className="h-full w-full object-cover"
          />
          {sheen && (
            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/20 via-transparent to-black/30" />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function StageText({
  stage,
  progress,
}: {
  stage: (typeof STAGES)[number];
  progress: MotionValue<number>;
}) {
  const [start, end] = stage.range;
  const isFirst = start === 0;
  const isLast = end === 1;
  const fade = 0.05;

  const opacity = useTransform(progress, (p) => {
    if (!isFirst) {
      if (p <= start) return 0;
      if (p < start + fade) return (p - start) / fade;
    }
    if (isLast) return 1;
    if (p <= end - fade) return 1;
    if (p < end) return 1 - (p - (end - fade)) / fade;
    return 0;
  });
  const y = useTransform(progress, [start, end], [24, -24]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0">
      <h1 className="font-display text-balance text-5xl leading-[1.05] md:text-7xl">{stage.label}</h1>
      <p className="mt-4 max-w-md text-base text-stone-300 md:text-lg">{stage.sub}</p>
    </motion.div>
  );
}
