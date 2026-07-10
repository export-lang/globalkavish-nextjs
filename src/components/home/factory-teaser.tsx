"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { manufacturingTimeline } from "@/lib/data/company";

export function FactoryTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden border-t border-border-subtle bg-ink py-24 text-stone-50 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Inside The Factory"
          title="From mineral to mirror finish."
          description="Every collection moves through eight controlled stages — from raw material testing to pre-shipment inspection."
          className="[&_p]:text-stone-300"
        />

        <div ref={ref} className="relative mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block">
            <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-gold-400" />
          </div>
          {manufacturingTimeline.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 md:pl-12"
            >
              <span className="absolute left-0 top-1 hidden h-3.5 w-3.5 rounded-full border-2 border-gold-400 bg-ink md:block" />
              <span className="font-display text-sm text-gold-400">{item.step}</span>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-stone-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
