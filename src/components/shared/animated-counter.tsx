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
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString("en-US"));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, { duration, ease: [0.16, 1, 0.3, 1] });
    // Safety net: never leave a real statistic stuck at "0".
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
