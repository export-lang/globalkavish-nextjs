"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";

import { ProductSwatch } from "@/components/shared/product-swatch";

/**
 * Product visual. No real per-product photography exists yet, so this shows
 * a single clearly-labelled representative visual with a working zoom —
 * no fake 360° viewers, angle thumbnails or room visualisers.
 */
export function Gallery({ slug, name }: { slug: string; name: string }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        <ProductSwatch seed={slug} className="h-full w-full" />
        <button
          onClick={() => setLightbox(true)}
          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur transition-colors hover:bg-black/70"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          Zoom
        </button>
      </div>
      <p className="mt-3 text-xs text-foreground/40">
        Representative visual — actual designs are shown in the Kavish catalogue, available on request.
      </p>

      <Dialog.Root open={lightbox} onOpenChange={setLightbox}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/90" />
          <Dialog.Content className="fixed inset-0 z-[110] grid place-items-center p-8">
            <Dialog.Title className="sr-only">{name} — zoomed view</Dialog.Title>
            <Dialog.Close className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Dialog.Close>
            <ProductSwatch seed={slug} className="aspect-square w-full max-w-3xl rounded-2xl" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
