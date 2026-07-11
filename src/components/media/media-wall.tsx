"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { ScrollFloat, FloatIn } from "@/components/motion/scroll-float";
import { DepthCard } from "@/components/motion/depth-card";
import { TileImage } from "@/components/shared/tile-image";
import { tileDesigns } from "@/lib/data/designs";
import { cn } from "@/lib/utils";

interface WallItem {
  imageId: string;
  title: string;
  caption: string;
  aspect: "portrait" | "square";
}

const featured: WallItem[] = tileDesigns.slice(0, 4).map((d) => ({
  imageId: d.imageIds[0],
  title: d.name,
  caption: `${d.size} mm${d.finish ? ` · ${d.finish}` : ""}`,
  aspect: "portrait",
}));

const electra = tileDesigns[4];
const gallery: WallItem[] = [
  ...(tileDesigns[3].imageIds[1]
    ? [
        {
          imageId: tileDesigns[3].imageIds[1],
          title: `${tileDesigns[3].name} — second face`,
          caption: `${tileDesigns[3].size} mm · ${tileDesigns[3].finish}`,
          aspect: "portrait" as const,
        },
      ]
    : []),
  ...electra.imageIds.slice(0, 5).map((id, i) => ({
    imageId: id,
    title: `${electra.name} — face ${i + 1} of 10`,
    caption: `${electra.size} mm production face`,
    aspect: "square" as const,
  })),
];

const allItems = [...featured, ...gallery];

export function MediaWall() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null ? null : (current + delta + allItems.length) % allItems.length
      );
    },
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, step]);

  return (
    <div>
      {/* Featured designs — editorial asymmetric two-speed columns */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
        {featured.map((item, i) => (
          <ScrollFloat key={item.imageId} depth={i % 2 === 0 ? 0.35 : -0.25} className={cn(i % 2 === 1 && "md:mt-16")}>
            <FloatIn delay={i * 0.08}>
              <DepthCard driftDelay={i * 0.8}>
                <button
                  onClick={() => setOpenIndex(i)}
                  className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label={`View ${item.title} fullscreen`}
                >
                  <TileImage
                    imageId={item.imageId}
                    alt={`${item.title} tile design`}
                    fallbackSeed={item.title}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14">
                    <p className="font-display text-lg text-white">{item.title}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">{item.caption}</p>
                  </div>
                </button>
              </DepthCard>
            </FloatIn>
          </ScrollFloat>
        ))}
      </div>

      {/* Variation gallery — drifting square wall */}
      <p className="mt-24 mb-8 font-display text-2xl">One Design, Ten Faces</p>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
        {gallery.map((item, i) => (
          <ScrollFloat key={item.imageId} depth={(i % 3) * 0.25 - 0.2}>
            <FloatIn delay={(i % 6) * 0.05}>
              <DepthCard driftDelay={i * 0.5}>
                <button
                  onClick={() => setOpenIndex(featured.length + i)}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400",
                    item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"
                  )}
                  aria-label={`View ${item.title} fullscreen`}
                >
                  <TileImage
                    imageId={item.imageId}
                    alt={item.title}
                    fallbackSeed={item.title}
                    width={800}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </button>
              </DepthCard>
            </FloatIn>
          </ScrollFloat>
        ))}
      </div>
      <p className="mt-4 text-xs text-foreground/40">
        Electra Almond Beige, 800×800 mm — natural pattern variation across production faces. Tap any image for
        fullscreen.
      </p>

      {/* Lightbox */}
      <Dialog.Root open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/92" />
          <Dialog.Content
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12"
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">
              {openIndex !== null ? allItems[openIndex].title : "Media viewer"}
            </Dialog.Title>
            {openIndex !== null && (
              <figure className="flex max-h-full flex-col items-center gap-4">
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl",
                    allItems[openIndex].aspect === "portrait"
                      ? "aspect-[1/2] max-h-[80vh]"
                      : "aspect-square max-h-[80vh]"
                  )}
                >
                  <TileImage
                    imageId={allItems[openIndex].imageId}
                    alt={allItems[openIndex].title}
                    fallbackSeed={allItems[openIndex].title}
                    width={2000}
                  />
                </div>
                <figcaption className="text-center text-sm text-white/70">
                  {allItems[openIndex].title} — {allItems[openIndex].caption}
                </figcaption>
              </figure>
            )}
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
