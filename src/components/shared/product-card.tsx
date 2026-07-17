"use client";

import { ArrowUpRight, Heart, Scale } from "lucide-react";
import Link from "next/link";

import { DepthCard } from "@/components/motion/depth-card";
import { ProductImage } from "@/components/shared/product-image";
import { getCategory } from "@/lib/data/categories";
import { getProductImages } from "@/lib/data/product-images";
import { useCollections } from "@/lib/store";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
  driftDelay = 0,
}: {
  product: Product;
  className?: string;
  driftDelay?: number;
}) {
  const { toggleWishlist, toggleCompare, isWishlisted, isCompared } = useCollections();
  const { cover } = getProductImages(product.slug);

  return (
    <DepthCard driftDelay={driftDelay} className={cn("group relative flex flex-col", className)}>
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden rounded-2xl">
        <ProductImage
          src={cover}
          alt={`${product.name}${product.sizes.length ? ` — ${product.sizes.join(", ")} mm` : ""}`}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            {product.sizes.map((s) => s.replace("x", "×")).join(" · ")}
            {product.sizes.length > 0 && " mm"}
          </p>
        </div>
      </Link>
      <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          aria-label="Toggle wishlist"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.slug);
          }}
          className={cn(
            "grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60",
            isWishlisted(product.slug) && "bg-gold-500 text-black"
          )}
        >
          <Heart className="h-4 w-4" fill={isWishlisted(product.slug) ? "currentColor" : "none"} />
        </button>
        <button
          aria-label="Toggle compare"
          onClick={(e) => {
            e.preventDefault();
            toggleCompare(product.slug);
          }}
          className={cn(
            "grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60",
            isCompared(product.slug) && "bg-gold-500 text-black"
          )}
        >
          <Scale className="h-4 w-4" />
        </button>
      </div>
      <Link href={`/products/${product.slug}`} className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-xl">{product.name}</h3>
          <p className="mt-1 text-sm text-foreground/50">
            {getCategory(product.categorySlugs[0])?.shortName}
            {product.finish.length > 0 && ` · ${product.finish.join(" · ")}`}
          </p>
        </div>
        <span className="mt-1 flex shrink-0 items-center gap-1 text-xs uppercase tracking-[0.15em] text-foreground/50 transition-colors group-hover:text-gold-500">
          View Collection
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </DepthCard>
  );
}
