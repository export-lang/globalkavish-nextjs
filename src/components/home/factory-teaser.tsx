"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const supplySteps = [
  { title: "Product Selection", detail: "Matching designs are shortlisted from the Kavish catalogue for your requirement." },
  { title: "Requirement Confirmation", detail: "Product, size, finish and quantity are confirmed before production begins." },
  { title: "Production Coordination", detail: "Order specifications are coordinated with the production partner from confirmation onward." },
  { title: "Pre-Shipment Inspection", detail: "Every batch is checked for size, shade and surface quality before packing." },
  { title: "Export Packaging", detail: "Reinforced, moisture-safe packaging with clear batch labelling for international transit." },
  { title: "Documentation & Loading Coordination", detail: "Container-wise loading plans plus invoice, packing list, BL and certificate of origin." },
];

export function FactoryTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative z-[2] -mt-10 overflow-hidden rounded-t-[2.5rem] bg-ink py-24 text-stone-50 shadow-[0_-40px_90px_-50px_rgba(0,0,0,0.75)] md:-mt-16 md:rounded-t-[3.5rem] md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Supply Coordination"
          title="How we support each order."
          description="Six commitments that run through every Kavish Global shipment."
          className="[&_p]:text-stone-300"
        />

        <div ref={ref} className="relative mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block">
            <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-gold-400" />
          </div>
          {supplySteps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 md:pl-12"
            >
              <span className="absolute left-0 top-1 hidden h-3.5 w-3.5 rounded-full border-2 border-gold-400 bg-ink md:block" />
              <span className="font-display text-sm text-gold-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-stone-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
