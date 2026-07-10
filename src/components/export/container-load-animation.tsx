"use client";

import { motion } from "framer-motion";

const CRATES = Array.from({ length: 18 });

export function ContainerLoadAnimation() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface">
      <div className="absolute inset-4 grid grid-cols-6 grid-rows-3 gap-2">
        {CRATES.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 120, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-md border border-gold-500/30 bg-gradient-to-br from-stone-200 to-stone-400"
          />
        ))}
      </div>
      <div className="absolute inset-0 border-[3px] border-foreground/10 rounded-2xl" />
      <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-foreground/40">
        40ft FCL — illustrative load plan
      </span>
    </div>
  );
}
