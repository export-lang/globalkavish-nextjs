"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { DepthCard } from "@/components/motion/depth-card";
import { FloatIn, ScrollFloat } from "@/components/motion/scroll-float";
import { ProductImage } from "@/components/shared/product-image";
import { DESIGN_LIBRARY, type Design } from "@/lib/data/product-images";
import { cn } from "@/lib/utils";

type TileFinish = "CARVING" | "DECOR" | "GLOSSY" | "HIGH GLOSSY" | "MATT" | "WOOD";

const TILE_FINISHES: TileFinish[] = ["CARVING", "DECOR", "GLOSSY", "HIGH GLOSSY", "MATT", "WOOD"];

const FINISH_LABELS: Record<TileFinish, string> = {
  CARVING: "Carving",
  DECOR: "Decor",
  GLOSSY: "Glossy",
  "HIGH GLOSSY": "High Glossy",
  MATT: "Matt",
  WOOD: "Wood",
};

// Only genuine tile-surface designs — the cabinet/acrylic sheet photos are a
// different product category and are not part of this surface gallery.
const tileDesigns = DESIGN_LIBRARY.filter((d) => (TILE_FINISHES as string[]).includes(d.finish));

function bySlug(slug: string) {
  return tileDesigns.find((d) => d.slug === slug);
}

// A diverse, non-repeating spread across the finish families.
const FEATURED_SLUGS = [
  "luxe-calacatta-golden",
  "xtreme-nero",
  "cantoni-beige",
  "vistara-beige",
  "ducale-wood-cedar",
  "stellow-grey",
  "astral-white",
  "mysterious-black",
];
const DETAIL_SLUGS = ["malabar-gold", "fury-black", "travertino-jaxon-tan", "woodland-pecan"];

const featured = FEATURED_SLUGS.map(bySlug).filter((d): d is Design => Boolean(d));
const details = DETAIL_SLUGS.map(bySlug).filter((d): d is Design => Boolean(d));
const multiFace = tileDesigns.filter((d) => d.faces.length > 1);

function DesignCard({
  design,
  onOpen,
  className,
  priority,
  captionSize = "lg",
}: {
  design: Design;
  onOpen: () => void;
  className?: string;
  priority?: boolean;
  captionSize?: "lg" | "sm";
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      aria-label={`View ${design.name} fullscreen`}
    >
      <div className={cn("ceramic-slab relative overflow-hidden rounded-2xl", className)}>
        <ProductImage
          src={design.faces[0]}
          alt={`${design.name} tile surface`}
          priority={priority}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
        <p className={cn("font-display text-white", captionSize === "lg" ? "text-lg" : "text-sm")}>{design.name}</p>
        {captionSize === "lg" && (
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">{FINISH_LABELS[design.finish as TileFinish]}</p>
        )}
      </div>
    </button>
  );
}

export function MediaWall() {
  const [finish, setFinish] = useState<"All" | TileFinish>("All");
  const [active, setActive] = useState<{ design: Design; face: number } | null>(null);

  const availableFinishes = useMemo(
    () => TILE_FINISHES.filter((f) => tileDesigns.some((d) => d.finish === f)),
    []
  );
  const filtered = finish === "All" ? tileDesigns : tileDesigns.filter((d) => d.finish === finish);

  const step = useCallback((delta: number) => {
    setActive((current) => {
      if (!current) return current;
      const len = current.design.faces.length;
      return { design: current.design, face: (current.face + delta + len) % len };
    });
  }, []);

  useEffect(() => {
    if (!active) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  return (
    <div>
      {/* Featured Surfaces */}
      <p className="mb-8 font-display text-2xl">Featured Surfaces</p>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
        {featured.map((d, i) => (
          <ScrollFloat key={d.slug} depth={i % 2 === 0 ? 0.35 : -0.25} className={cn(i % 2 === 1 && "md:mt-16")}>
            <FloatIn delay={i * 0.06}>
              <DepthCard>
                <DesignCard
                  design={d}
                  onOpen={() => setActive({ design: d, face: 0 })}
                  className="aspect-[3/4]"
                  priority={i === 0}
                />
              </DepthCard>
            </FloatIn>
          </ScrollFloat>
        ))}
      </div>

      {/* Design Details */}
      <p className="mb-8 mt-24 font-display text-2xl">Design Details</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {details.map((d, i) => (
          <FloatIn key={d.slug} delay={i * 0.08}>
            <DepthCard>
              <DesignCard design={d} onOpen={() => setActive({ design: d, face: 0 })} className="aspect-[4/3]" />
            </DepthCard>
          </FloatIn>
        ))}
      </div>

      {/* Finish Stories */}
      <div className="mt-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-2xl">Finish Stories</p>
          <div className="flex flex-wrap gap-2">
            {(["All", ...availableFinishes] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFinish(f)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs transition-colors",
                  finish === f
                    ? "border-gold-500 bg-gold-500 text-black"
                    : "border-border-subtle text-foreground/70 hover:border-foreground/40"
                )}
              >
                {f === "All" ? "All" : FINISH_LABELS[f]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {filtered.map((d, i) => (
            <FloatIn key={d.slug} delay={(i % 8) * 0.04}>
              <DepthCard>
                <DesignCard
                  design={d}
                  onOpen={() => setActive({ design: d, face: 0 })}
                  className="aspect-square"
                  captionSize="sm"
                />
              </DepthCard>
            </FloatIn>
          ))}
        </div>
      </div>

      {/* Multiple Faces */}
      {multiFace.length > 0 && (
        <div className="mt-24">
          <p className="mb-3 font-display text-2xl">Multiple Faces</p>
          <p className="mb-8 max-w-2xl text-sm text-foreground/60">
            Natural pattern variation across production faces of the same design.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {multiFace.map((d) => (
              <div key={d.slug}>
                <div className="grid grid-cols-2 gap-3">
                  {d.faces.map((face, i) => (
                    <button
                      key={face}
                      onClick={() => setActive({ design: d, face: i })}
                      className="group relative block aspect-square w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                      aria-label={`View ${d.name} face ${i + 1}`}
                    >
                      <ProductImage
                        src={face}
                        alt={`${d.name} — face ${i + 1}`}
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-sm text-foreground/60">
                  {d.name} · {FINISH_LABELS[d.finish as TileFinish]} — {d.faces.length} faces
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <Dialog.Root open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/92" />
          <Dialog.Content
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12"
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">{active ? active.design.name : "Media viewer"}</Dialog.Title>
            {active && (
              <figure className="flex max-h-full flex-col items-center gap-4">
                <div className="aspect-square max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl">
                  <ProductImage src={active.design.faces[active.face]} alt={active.design.name} fit="contain" />
                </div>
                <figcaption className="text-center text-sm text-white/70">
                  {active.design.name} · {FINISH_LABELS[active.design.finish as TileFinish]}
                  {active.design.faces.length > 1 && ` — face ${active.face + 1} of ${active.design.faces.length}`}
                </figcaption>
              </figure>
            )}
            {active && active.design.faces.length > 1 && (
              <>
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <Dialog.Close
              aria-label="Close viewer"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
