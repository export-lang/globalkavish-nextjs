"use client";

import { ImageIcon } from "lucide-react";
import NextImage from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Local-only product visual. Renders the real photo when `src` is a
 * verified local path; otherwise (or if it fails to load) renders a calm,
 * clearly-labelled placeholder — never a blank box or broken-image icon.
 */
export function ProductImage({
  src,
  alt,
  fit = "cover",
  priority = false,
  sizes = "(max-width: 768px) 50vw, 33vw",
  placeholderLabel = "Image coming soon",
  className,
}: {
  src: string | null;
  alt: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
  placeholderLabel?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400 dark:from-stone-800 dark:to-stone-900",
          className
        )}
      >
        <ImageIcon className="h-6 w-6 opacity-40" aria-hidden />
        <span className="text-xs uppercase tracking-[0.2em]">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full", className)}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        onError={() => setFailed(true)}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
