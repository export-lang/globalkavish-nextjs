"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString("en-US"));
  // Render the real figure from the first paint (SSR included) — a statistic
  // must never be visible as "0". The count-up only runs once in view.
  const [display, setDisplay] = useState(value.toLocaleString("en-US"));

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motionValue.set(value);
      return;
    }
    motionValue.set(0);
    const controls = animate(motionValue, value, { duration, ease: [0.16, 1, 0.3, 1] });
    // Safety net: never leave a real statistic stuck below its true value.
    const settle = window.setTimeout(() => motionValue.set(value), (duration + 1) * 1000);
    return () => {
      controls.stop();
      window.clearTimeout(settle);
    };
  }, [inView, value, duration, motionValue]);

  useEffect(() => rounded.on("change", (v) => setDisplay(v)), [rounded]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl">
      {display}
      {suffix}
    </span>
  );
}
