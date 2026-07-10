"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Maximize2, RotateCw, X } from "lucide-react";
import { useState } from "react";

import { ProductSwatch } from "@/components/shared/product-swatch";
import { cn } from "@/lib/utils";

export function Gallery({ slug, name }: { slug: string; name: string }) {
  const angles = ["front", "angle", "texture", "room"];
  const [active, setActive] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        <motion.div
          animate={spinning ? { rotateY: 360 } : { rotateY: 0 }}
          transition={spinning ? { duration: 3, ease: "linear", repeat: Infinity } : { duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
          className="h-full w-full"
        >
          <ProductSwatch seed={`${slug}-${angles[active]}`} className="h-full w-full" />
        </motion.div>

        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            onClick={() => setSpinning((v) => !v)}
            className={cn(
              "flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur transition-colors hover:bg-black/70",
              spinning && "bg-gold-500 text-black"
            )}
          >
            <RotateCw className="h-3.5 w-3.5" />
            360° Preview
          </button>
          <button
            onClick={() => setLightbox(true)}
            className="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Zoom
          </button>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">
          Room visualiser — coming soon
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {angles.map((angle, i) => (
          <button
            key={angle}
            onClick={() => setActive(i)}
            className={cn(
              "aspect-square overflow-hidden rounded-xl ring-2 ring-transparent transition-all",
              active === i && "ring-gold-500"
            )}
          >
            <ProductSwatch seed={`${slug}-${angle}`} className="h-full w-full" grid={false} />
          </button>
        ))}
      </div>

      <Dialog.Root open={lightbox} onOpenChange={setLightbox}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/90" />
          <Dialog.Content className="fixed inset-0 z-[110] grid place-items-center p-8">
            <Dialog.Title className="sr-only">{name} — zoomed view</Dialog.Title>
            <Dialog.Close className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Dialog.Close>
            <ProductSwatch seed={`${slug}-${angles[active]}`} className="aspect-square w-full max-w-3xl rounded-2xl" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
