"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";

const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
});

const STAGES = [
  { range: [0, 0.22], label: "Kaolin. Feldspar. Silica. Clay.", sub: "Raw minerals, gathered from the earth." },
  { range: [0.22, 0.48], label: "Pressed at 5,000 tonnes.", sub: "Compacted into a single dense body." },
  { range: [0.48, 0.75], label: "Fired at 1200°C. Nano sealed.", sub: "Vitrified, glazed, and polished to a mirror." },
  { range: [0.75, 1], label: "Kavish.", sub: "Porcelain, exported to the world." },
];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [canRender3d, setCanRender3d] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanRender3d(!reduced);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          {canRender3d && <HeroScene progress={scrollYProgress} />}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        <Container className="relative flex h-full flex-col justify-between py-10 text-stone-50 md:py-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs font-medium uppercase tracking-[0.35em] text-gold-300"
          >
            Kavish Global — Est. Morbi, India
          </motion.p>

          <div className="relative min-h-[220px] max-w-3xl pointer-events-none">
            {STAGES.map((stage, i) => {
              return <StageText key={i} stage={stage} progress={scrollYProgress} />;
            })}
          </div>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm text-stone-300">
              Scroll to watch a tile form — from raw mineral to a finished, nano-sealed
              porcelain surface.
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
  const fade = 0.04;

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
