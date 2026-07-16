"use client";

import { ImageIcon } from "lucide-react";
import { useState } from "react";

import { ProductSwatch } from "@/components/shared/product-swatch";
import { driveImageUrl } from "@/lib/data/designs";
import { cn } from "@/lib/utils";

/**
 * Renders a real tile photo from the shared Google Drive folder. The
 * generated swatch sits underneath as a placeholder while the photo loads;
 * if the photo ever fails to load, an explicit "Image coming soon" label
 * replaces it so a Drive outage never reads as a blank or broken card.
 */
export function TileImage({
  imageId,
  alt,
  fallbackSeed,
  className,
  width = 1600,
}: {
  imageId: string;
  alt: string;
  fallbackSeed: string;
  className?: string;
  width?: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {!failed && <ProductSwatch seed={fallbackSeed} className="absolute inset-0 h-full w-full" />}
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={driveImageUrl(imageId, width)}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400 dark:from-stone-800 dark:to-stone-900">
          <ImageIcon className="h-6 w-6 opacity-40" aria-hidden />
          <span className="text-xs uppercase tracking-[0.2em]">Image coming soon</span>
        </div>
      )}
    </div>
  );
}
