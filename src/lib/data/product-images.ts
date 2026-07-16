/**
 * Central local-image mapping for the 28 catalogue products (see
 * lib/data/products.ts). Local files only — no Google Drive hotlinks.
 *
 * Mapping priority: (1) exact product/design match, (2) exact product
 * type + size match, (3) verified category representative image,
 * (4) no image (renders "Image coming soon" via <ProductImage>).
 *
 * Every slug below currently has cover: null because no locally-stored
 * photo has yet been verified to genuinely depict that product type +
 * size — the only local product photography today (public/media/kavish-
 * calacatta-golden-*.jpg) is a named design used solely on the homepage
 * hero, not a verified match for any catalogue slug. Add entries here as
 * real, size-matched photos are supplied.
 */

import { products } from "@/lib/data/products";

export type ProductImageSet = {
  cover: string | null;
  gallery: string[];
};

const overrides: Record<string, ProductImageSet> = {};

export const PRODUCT_IMAGE_MAP: Record<string, ProductImageSet> = Object.fromEntries(
  products.map((p) => [p.slug, overrides[p.slug] ?? { cover: null, gallery: [] }])
);

export function getProductImages(slug: string): ProductImageSet {
  return PRODUCT_IMAGE_MAP[slug] ?? { cover: null, gallery: [] };
}
