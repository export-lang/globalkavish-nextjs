"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { TileImage } from "@/components/shared/tile-image";
import { Button } from "@/components/ui/button";
import { tileDesigns } from "@/lib/data/designs";

const STAGES = [
  { range: [0, 0.28], label: "Ceramic, refined.", sub: "Premium porcelain surfaces, floating in studio light." },
  { range: [0.28, 0.58], label: "A single dense body.", sub: "Pressed, calibrated, glazed and fired." },
  { range: [0.58, 1], label: "Kavish Global.", sub: "Premium ceramic surfaces, exported to the world." },
];

const MAIN = tileDesigns[1]; // Armani Rich Bianco — 600x1200 portrait slab
const FOREGROUND = tileDesigns[3]; // Rome Black — 600x1200 portrait
const BACKGROUND = tileDesigns[0]; // Gaios — 600x600

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

  // Scroll depth parallax — foreground moves fastest (camera pushes forward).
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const mainY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const mainScale = useTransform(scrollYProgress, [0, 0.55], [1, 1.14]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 280]);

  // Pointer transforms. Main tile rotation is CLAMPED so the face never goes edge-on.
  const mainRotateY = useTransform(sx, [-1, 1], [-12, -4]);
  const mainRotateX = useTransform(sy, [-1, 1], [5, -2]);
  const mainX = useTransform(sx, [-1, 1], [18, -18]);
  const bgX = useTransform(sx, [-1, 1], [26, -26]);
  const fgX = useTransform(sx, [-1, 1], [-32, 32]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="sticky top-0 h-screen overflow-hidden bg-[radial-gradient(120%_100%_at_70%_30%,#1c1712_0%,#0a0a0a_60%)]"
      >
        {/* BACKGROUND tile plane — distant, blurred */}
        <motion.div
          style={{ y: bgY, x: bgX }}
          className="pointer-events-none absolute left-[5%] top-[14%] z-[1] hidden h-[34vh] w-[17vh] rotate-[-6deg] md:block"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl opacity-35 blur-[3px]">
            <TileImage imageId={BACKGROUND.imageIds[0]} alt="" fallbackSeed={BACKGROUND.slug} width={500} />
          </div>
        </motion.div>

        {/* MAIN Kavish slab — right-centre, face clearly visible */}
        <motion.div
          style={{ y: mainY, x: mainX, scale: mainScale }}
          className="pointer-events-none absolute right-[-14%] top-1/2 z-[2] h-[40vh] w-[20vh] -translate-y-1/2 sm:right-[-4%] md:right-[7%] md:h-[46vh] md:w-[23vh]"
        >
          <motion.div
            animate={prefersReduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: 1100 }}
            className="h-full w-full"
          >
            <motion.div
              style={{ rotateX: mainRotateX, rotateY: mainRotateY, transformStyle: "preserve-3d" }}
              className="ceramic-slab relative h-full w-full overflow-hidden rounded-[10px]"
            >
              <TileImage
                imageId={MAIN.imageIds[0]}
                alt="Kavish Global premium porcelain slab"
                fallbackSeed={MAIN.slug}
                width={900}
              />
              {/* rim light + sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/20 via-transparent to-black/30" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FOREGROUND tile — large, cropped by the bottom-right edge */}
        <motion.div
          style={{ y: fgY, x: fgX }}
          className="pointer-events-none absolute -bottom-[22%] -right-[8%] z-[3] hidden h-[64vh] w-[32vh] rotate-[5deg] overflow-hidden rounded-[14px] opacity-90 blur-[2px] shadow-[0_-30px_80px_-20px_rgba(0,0,0,0.6)] md:block"
        >
          <TileImage imageId={FOREGROUND.imageIds[0]} alt="" fallbackSeed={FOREGROUND.slug} width={700} />
        </motion.div>

        {/* Content — heading floats in the foreground, over the slab's left edge */}
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

function StageText({
  stage,
  progress,
}: {
  stage: (typeof STAGES)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
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
