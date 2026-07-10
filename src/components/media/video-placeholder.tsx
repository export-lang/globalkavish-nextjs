import { Play } from "lucide-react";

import { ProductSwatch } from "@/components/shared/product-swatch";

export function VideoPlaceholder({ seed, title, duration }: { seed: string; title: string; duration: string }) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl">
      <ProductSwatch seed={seed} className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/20 backdrop-blur transition-transform group-hover:scale-110">
          <Play className="h-6 w-6 translate-x-0.5 text-white" fill="currentColor" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
        <p className="font-display text-lg">{title}</p>
        <span className="text-xs text-white/70">{duration}</span>
      </div>
    </div>
  );
}
