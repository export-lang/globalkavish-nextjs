"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";

import { ProductImage } from "@/components/shared/product-image";
import { getProductImages } from "@/lib/data/product-images";
import { cn } from "@/lib/utils";

/**
 * Product visual: the verified local cover photo plus any matching
 * production faces, or a clearly-labelled placeholder when no genuine
 * per-product photo exists yet — no fake angles, room scenes or 360° views.
 */
export function Gallery({ slug, name }: { slug: string; name: string }) {
  const [lightbox, setLightbox] = useState(false);
  const [active, setActive] = useState(0);
  const { cover, gallery } = getProductImages(slug);
  const faces = [cover, ...gallery].filter((src): src is string => Boolean(src));
  const activeSrc = faces[active] ?? null;

  return (
    <div>
      <div className="ceramic-slab relative aspect-square overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSrc ?? "placeholder"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <ProductImage src={activeSrc} alt={name} priority />
          </motion.div>
        </AnimatePresence>
        {activeSrc && (
          <button
            onClick={() => setLightbox(true)}
            className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Zoom
          </button>
        )}
      </div>

      {faces.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {faces.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`Show face ${i + 1}`}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl ring-2 transition-colors",
                i === active ? "ring-gold-500" : "ring-transparent hover:ring-foreground/20"
              )}
            >
              <ProductImage src={src} alt={`${name} — face ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
      {faces.length === 0 && (
        <p className="mt-3 text-xs text-foreground/40">
          Product photo pending — full Kavish catalogue available on request.
        </p>
      )}

      <Dialog.Root open={lightbox} onOpenChange={setLightbox}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/90" />
          <Dialog.Content className="fixed inset-0 z-[110] grid place-items-center p-8">
            <Dialog.Title className="sr-only">{name} — zoomed view</Dialog.Title>
            <Dialog.Close className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Dialog.Close>
            <div className="relative aspect-square w-full max-w-3xl overflow-hidden rounded-2xl">
              <ProductImage src={activeSrc} alt={name} fit="contain" />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
