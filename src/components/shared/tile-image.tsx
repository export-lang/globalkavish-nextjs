"use client";

import { useState } from "react";

import { ProductSwatch } from "@/components/shared/product-swatch";
import { driveImageUrl } from "@/lib/data/designs";
import { cn } from "@/lib/utils";

/**
 * Renders a real tile photo from the shared Google Drive folder. The
 * generated swatch sits underneath as a placeholder while the photo loads,
 * and remains if the image ever becomes unavailable.
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
      <ProductSwatch seed={fallbackSeed} className="absolute inset-0 h-full w-full" />
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
    </div>
  );
}
