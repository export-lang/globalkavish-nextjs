"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { FadeIn } from "@/components/shared/reveal-text";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-subtle rounded-2xl border border-border-subtle">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <FadeIn key={item.question} delay={i * 0.03}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-display text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/60">{item.answer}</p>
            )}
          </FadeIn>
        );
      })}
    </div>
  );
}
