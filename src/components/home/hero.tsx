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
  { range: [0, 0.22], label: "Selected ceramic surfaces.", sub: "Chosen from qualified production partners in Morbi, India." },
  { range: [0.22, 0.44], label: "Reviewed for your requirement.", sub: "Product, finish, quantity and packaging coordinated against approved order details." },
  { range: [0.44, 0.66], label: "Prepared for international supply.", sub: "Export packaging, documentation and shipment coordination for global buyers." },
  { range: [0.66, 1], label: "Kavish Global.", sub: "Ceramic export and supply partner — Morbi, India." },
];

// Real Kavish product: Luxe Calacatta Golden — all four production faces,
// each permanently visible on its own suspended plane.
const MAIN_SRC = "/media/kavish-calacatta-golden-1.jpg";
const FOREGROUND_SRC = "/media/kavish-calacatta-golden-3.jpg";
const DISTANT_SRC = "/media/kavish-calacatta-golden-2.jpg";
const TOP_SRC = "/media/kavish-calacatta-golden-4.jpg";

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
  const sx = useSpring(mx, { stiffness: 110, damping: 22, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 110, damping: 22, mass: 0.4 });

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
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 230]);
  const distantY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const topY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  // Pointer-driven tilt — the primary "follow the cursor" effect. Main stays
  // within an 8°–12° band (visible face, never edge-on); the other three
  // tiles now tilt too, so all four clearly react to mouse movement.
  const mainRotateY = useTransform(sx, [-1, 1], [-12, -8]);
  const mainRotateX = useTransform(sy, [-1, 1], [5, -5]);
  const mainX = useTransform(sx, [-1, 1], [30, -30]);

  const fgRotateY = useTransform(sx, [-1, 1], [-10, -1]);
  const fgRotateX = useTransform(sy, [-1, 1], [1, 8]);
  const fgX = useTransform(sx, [-1, 1], [-42, 42]);

  const topRotateY = useTransform(sx, [-1, 1], [3, 9]);
  const topRotateX = useTransform(sy, [-1, 1], [-5, 2]);
  const topX = useTransform(sx, [-1, 1], [24, -24]);

  const distantRotateY = useTransform(sx, [-1, 1], [2, 6]);
  const distantRotateX = useTransform(sy, [-1, 1], [-3, 1]);
  // Mouse parallax still scales with depth: nearest (foreground) moves most,
  // farthest (background) moves least — but every tile now visibly moves.
  const distantX = useTransform(sx, [-1, 1], [16, -16]); // farthest

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={{ perspective: 1400 }}
        className="sticky top-0 h-screen overflow-hidden bg-[radial-gradient(120%_100%_at_60%_35%,#221c15_0%,#0a0a0a_62%)]"
      >
        {/* Ambient glow behind the main slab — fills empty space, static */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[2%] top-1/2 hidden h-[80vh] w-[56vh] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(207,174,106,0.16),transparent_70%)] blur-3xl sm:right-[10%] md:right-[24%] md:block"
          style={{ zIndex: 1 }}
        />

        {/* Background tile — farthest, ~20% visible, heavy blur, slow float + ±1° drift */}
        <FloatingSlab
          src={DISTANT_SRC}
          alt=""
          wrapStyle={{ y: distantY, x: distantX, rotateY: distantRotateY, rotateX: distantRotateX }}
          className="left-[36%] -top-[76%] hidden h-[62vh] w-[20vh] md:block"
          floatDuration={12}
          floatDelay={2.4}
          floatAmplitude={12}
          rotateBase={4}
          rotateAmplitude={1}
          opacity={0.4}
          blurPx={7}
          z={1}
        />

        {/* Top tile — new suspended plane, gentle vertical drift only */}
        <FloatingSlab
          src={TOP_SRC}
          alt=""
          wrapStyle={{ y: topY, x: topX, rotateY: topRotateY, rotateX: topRotateX }}
          className="right-[16%] -top-[7%] hidden h-[26vh] w-[16vh] md:right-[24%] md:block"
          floatDuration={14}
          floatDelay={5.2}
          floatAmplitude={9}
          opacity={0.82}
          blurPx={2}
          z={2}
        />

        {/* Hero tile — the main slab: large, left-shifted, almost stationary */}
        <FloatingSlab
          src={MAIN_SRC}
          alt="Kavish Global Luxe Calacatta Golden porcelain slab"
          wrapStyle={{ y: mainY, x: mainX, scale: mainScale, rotateY: mainRotateY, rotateX: mainRotateX }}
          className="right-[2%] top-1/2 h-[54vh] w-[27vh] -translate-y-1/2 sm:right-[10%] md:right-[30%] md:h-[78vh] md:w-[39vh]"
          floatDuration={8}
          floatAmplitude={6}
          opacity={1}
          sheen
          z={3}
        />

        {/* Foreground tile — nearest, cropped by the bottom-right edge, drifts sideways */}
        <FloatingSlab
          src={FOREGROUND_SRC}
          alt=""
          wrapStyle={{ y: fgY, x: fgX, rotateY: fgRotateY, rotateX: fgRotateX }}
          className="-bottom-[16%] -right-[5%] h-[28vh] w-[14vh] rotate-[6deg] md:-bottom-[17%] md:h-[35vh] md:w-[17vh]"
          floatDuration={10}
          floatDelay={1.2}
          floatAmplitude={10}
          driftX={6}
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
  driftX,
  rotateBase,
  rotateAmplitude,
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
  driftX?: number;
  rotateBase?: number;
  rotateAmplitude?: number;
  opacity: number;
  blurPx?: number;
  sheen?: boolean;
  z: number;
}) {
  const prefersReduced = useReducedMotion();

  const idleAnimate: Record<string, number[]> = { y: [0, -floatAmplitude, 0] };
  if (driftX) idleAnimate.x = [0, driftX, 0];
  if (rotateBase !== undefined && rotateAmplitude) {
    idleAnimate.rotate = [rotateBase - rotateAmplitude, rotateBase + rotateAmplitude, rotateBase - rotateAmplitude];
  }

  return (
    <motion.div
      style={{ ...wrapStyle, zIndex: z }}
      className={`pointer-events-none absolute overflow-hidden rounded-[10px] ${className}`}
    >
      <motion.div
        animate={prefersReduced ? undefined : idleAnimate}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        className="h-full w-full"
      >
        <div
          className={`ceramic-slab relative h-full w-full overflow-hidden rounded-[10px] ${sheen ? "ceramic-slab-glaze" : ""}`}
        >
          <img
            src={src}
            alt={alt}
            style={{ opacity, filter: blurPx ? `blur(${blurPx}px)` : undefined }}
            className="h-full w-full object-cover"
          />
          {sheen && (
            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/22 via-transparent to-black/32" />
          )}
        </div>
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
