"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import type { Country } from "@/lib/types";
import { cn } from "@/lib/utils";

const COORDS: Record<string, { x: number; y: number }> = {
  AE: { x: 65.3, y: 36.1 }, SA: { x: 62.8, y: 36.7 }, QA: { x: 64.2, y: 36.1 },
  OM: { x: 66.1, y: 37.2 }, KW: { x: 63.3, y: 33.9 }, BH: { x: 63.9, y: 35.6 },
  IQ: { x: 62.2, y: 31.7 }, JO: { x: 60.0, y: 32.2 },
  NG: { x: 50.9, y: 46.4 }, ZA: { x: 57.8, y: 64.3 }, KE: { x: 60.2, y: 50.7 },
  TZ: { x: 59.9, y: 53.4 }, GH: { x: 49.9, y: 46.9 }, EG: { x: 58.7, y: 33.3 }, DZ: { x: 50.9, y: 29.6 },
  NL: { x: 51.4, y: 21.1 }, DE: { x: 53.7, y: 20.8 }, GB: { x: 50.0, y: 21.4 },
  ES: { x: 49.0, y: 27.6 }, IT: { x: 53.5, y: 26.7 }, PL: { x: 55.8, y: 21.0 }, FR: { x: 50.8, y: 24.3 },
  US: { x: 29.4, y: 27.4 }, CA: { x: 29.0, y: 25.3 }, BR: { x: 36.7, y: 58.8 },
  MX: { x: 22.5, y: 39.2 }, PA: { x: 27.9, y: 45.0 },
  AU: { x: 91.4, y: 69.6 }, NZ: { x: 98.6, y: 72.9 },
  MY: { x: 78.25, y: 48.3 }, SG: { x: 78.8, y: 49.25 }, PH: { x: 83.6, y: 42.1 },
  VN: { x: 79.9, y: 38.3 }, BD: { x: 75.1, y: 36.8 }, LK: { x: 72.2, y: 46.2 }, NP: { x: 73.7, y: 34.6 },
};

/**
 * Stylised export-reach visual — dot positions are approximate, not a
 * cartographically accurate projection.
 */
export function WorldMap({ countries }: { countries: Country[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl border border-border-subtle bg-surface">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "5% 10%",
          color: "var(--border-subtle)",
        }}
      />
      {countries.map((country, i) => {
        const coord = COORDS[country.code];
        if (!coord) return null;
        return (
          <motion.button
            key={country.code}
            type="button"
            onMouseEnter={() => setActive(country.code)}
            onMouseLeave={() => setActive(null)}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02, duration: 0.5 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${coord.x}%`, top: `${coord.y}%` }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60",
                  active === country.code ? "opacity-80" : "opacity-40"
                )}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
            </span>
            {active === country.code && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-background px-3 py-1 text-xs shadow-lg">
                {country.name}
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
