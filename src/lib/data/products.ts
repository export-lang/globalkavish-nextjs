import { kavishCodesFor } from "@/lib/data/catalogue";
import type { Product } from "@/lib/types";

/**
 * Public products, aggregated by product type + size from the KAVISH
 * catalogue rows only (see lib/data/catalogue.ts for the import rule).
 * Factory names from the source sheet are internal data and never appear
 * here. Display names are neutral: "{size} mm {type}".
 */

interface ProductSeed {
  slug: string;
  displayType: string;
  productType: string;
  categorySlugs: string[];
  material: Product["material"];
  sizes: string[];
  finish: string[];
  application: Product["application"];
  featured?: boolean;
}

const seeds: ProductSeed[] = [
  {
    slug: "ceramic-floor-tile-300x300",
    displayType: "Ceramic Floor Tile",
    productType: "Ceramic Floor Tiles",
    categorySlugs: ["ceramic-floor-tiles"],
    material: "Ceramic",
    sizes: ["300x300"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "ceramic-floor-tile-400x400",
    displayType: "Ceramic Floor Tile",
    productType: "Ceramic Floor Tiles",
    categorySlugs: ["ceramic-floor-tiles"],
    material: "Ceramic",
    sizes: ["400x400"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "ceramic-floor-tile-600x600",
    displayType: "Ceramic Floor Tile",
    productType: "Ceramic Floor Tiles",
    categorySlugs: ["ceramic-floor-tiles"],
    material: "Ceramic",
    sizes: ["600x600"],
    finish: [],
    application: ["Floor"],
    featured: true,
  },
  {
    slug: "ceramic-wall-tile-300x450",
    displayType: "Ceramic Wall Tile",
    productType: "Ceramic Wall Tiles",
    categorySlugs: ["ceramic-wall-tiles"],
    material: "Ceramic",
    sizes: ["300x450"],
    finish: [],
    application: ["Wall"],
  },
  {
    slug: "ceramic-wall-tile-300x600",
    displayType: "Ceramic Wall Tile",
    productType: "Ceramic Wall Tiles",
    categorySlugs: ["ceramic-wall-tiles"],
    material: "Ceramic",
    sizes: ["300x600"],
    finish: [],
    application: ["Wall"],
    featured: true,
  },
  {
    slug: "double-charge-tile-600x600",
    displayType: "Double Charge Vitrified Tile",
    productType: "Double Loading Floor Tiles",
    categorySlugs: ["double-loading-floor-tiles"],
    material: "Porcelain",
    sizes: ["600x600"],
    finish: ["Double Charge"],
    application: ["Floor"],
    featured: true,
  },
  {
    slug: "double-charge-tile-600x1200",
    displayType: "Double Charge Vitrified Tile",
    productType: "Double Loading Floor Tiles",
    categorySlugs: ["double-loading-floor-tiles"],
    material: "Porcelain",
    sizes: ["600x1200"],
    finish: ["Double Charge"],
    application: ["Floor"],
  },
  {
    slug: "full-body-porcelain-600x600",
    displayType: "Full Body Porcelain Tile",
    productType: "Full Body Porcelain Floor Tiles",
    categorySlugs: ["full-body-porcelain-floor-tiles"],
    material: "Porcelain",
    sizes: ["600x600"],
    finish: ["Full Body"],
    application: ["Floor"],
  },
  {
    slug: "full-body-porcelain-600x1200",
    displayType: "Full Body Porcelain Tile",
    productType: "Full Body Porcelain Floor Tiles",
    categorySlugs: ["full-body-porcelain-floor-tiles"],
    material: "Porcelain",
    sizes: ["600x1200"],
    finish: ["Full Body"],
    application: ["Floor"],
  },
  {
    slug: "full-body-porcelain-slab",
    displayType: "Full Body Porcelain Slab",
    productType: "Full Body Porcelain Floor Tiles",
    categorySlugs: ["full-body-porcelain-floor-tiles", "slab-big-tiles"],
    material: "Porcelain",
    sizes: ["1200x1800", "1200x2400"],
    finish: ["Full Body"],
    application: ["Floor", "Wall", "Facade"],
    featured: true,
  },
  {
    slug: "gvt-200x1200",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["200x1200"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "gvt-300x600",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["300x600"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "gvt-600x600",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["600x600"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "gvt-600x1200",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["600x1200"],
    finish: [],
    application: ["Floor"],
    featured: true,
  },
  {
    slug: "gvt-800x800",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["800x800"],
    finish: [],
    application: ["Floor"],
    featured: true,
  },
  {
    slug: "gvt-800x1600",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["800x1600"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "gvt-1000x1000",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["1000x1000"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "gvt-1200x1200",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt"],
    material: "Porcelain",
    sizes: ["1200x1200"],
    finish: [],
    application: ["Floor"],
  },
  {
    slug: "gvt-1200x2400",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt", "slab-big-tiles"],
    material: "Porcelain",
    sizes: ["1200x2400"],
    finish: [],
    application: ["Floor", "Wall", "Facade"],
  },
  {
    slug: "gvt-1600x1600",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt", "slab-big-tiles"],
    material: "Porcelain",
    sizes: ["1600x1600"],
    finish: [],
    application: ["Floor", "Wall", "Facade"],
  },
  {
    slug: "gvt-1600x3200",
    displayType: "GVT",
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    categorySlugs: ["glazed-porcelain-floor-tiles-gvt", "slab-big-tiles"],
    material: "Porcelain",
    sizes: ["1600x3200"],
    finish: [],
    application: ["Floor", "Wall", "Facade"],
    featured: true,
  },
  {
    slug: "outdoor-porcelain-500x500",
    displayType: "Outdoor Porcelain Tile",
    productType: "Outdoor Porcelain Floor Tiles",
    categorySlugs: ["outdoor-porcelain-floor-tiles"],
    material: "Porcelain",
    sizes: ["500x500"],
    finish: [],
    application: ["Outdoor"],
  },
  {
    slug: "outdoor-porcelain-600",
    displayType: "Outdoor Porcelain Tile",
    productType: "Outdoor Porcelain Floor Tiles",
    categorySlugs: ["outdoor-porcelain-floor-tiles"],
    material: "Porcelain",
    sizes: ["600x600", "600x900", "600x1200"],
    finish: [],
    application: ["Outdoor"],
    featured: true,
  },
  {
    slug: "porcelain-wall-tile-300x600",
    displayType: "Porcelain Wall Tile",
    productType: "Porcelain Wall Tiles",
    categorySlugs: ["porcelain-wall-tiles"],
    material: "Porcelain",
    sizes: ["300x600"],
    finish: [],
    application: ["Wall"],
  },
  {
    slug: "large-format-slab-800x2400",
    displayType: "Large Format Slab",
    productType: "Slab (Big) Tiles",
    categorySlugs: ["slab-big-tiles"],
    material: "Porcelain",
    sizes: ["800x2400"],
    finish: [],
    application: ["Floor", "Wall", "Facade"],
  },
  {
    slug: "nano-polished-600x600",
    displayType: "Nano Polished Soluble Salt Tile",
    productType: "Soluble Salt Tiles (Nano Polished)",
    categorySlugs: ["soluble-salt-nano-polished"],
    material: "Porcelain",
    sizes: ["600x600"],
    finish: ["Nano Polished", "Soluble Salt"],
    application: ["Floor"],
  },
  {
    slug: "acrylic-solid-surface-sheets",
    displayType: "Acrylic Solid Surface Sheets",
    productType: "Acrylic Sheets",
    categorySlugs: ["acrylic-sheets"],
    material: "Acrylic",
    sizes: [],
    finish: [],
    application: ["Wall"],
  },
  {
    slug: "bathroom-cabinets",
    displayType: "Bathroom Cabinets",
    productType: "Bathroom Cabinets",
    categorySlugs: ["bathroom-cabinets"],
    material: "Sanitaryware",
    sizes: [],
    finish: [],
    application: ["Bathroom"],
  },
];

function formatSizes(sizes: string[]) {
  return sizes.map((s) => s.replace("x", "×")).join(" · ");
}

function buildName(seed: ProductSeed) {
  if (seed.sizes.length === 0) return seed.displayType;
  return `${formatSizes(seed.sizes)} mm ${seed.displayType}`;
}

function buildDescription(seed: ProductSeed, catalogueCount: number) {
  const sizePart = seed.sizes.length > 0 ? ` in ${formatSizes(seed.sizes)} mm` : "";
  const cataloguePart =
    catalogueCount > 0
      ? ` ${catalogueCount} Kavish catalogue${catalogueCount > 1 ? "s" : ""} of designs available on request.`
      : " Kavish catalogue available on request.";
  return `${seed.displayType}${sizePart}.${cataloguePart}`;
}

export const products: Product[] = seeds.map((seed) => {
  const codes = kavishCodesFor(seed.productType, seed.sizes);
  return {
    slug: seed.slug,
    name: buildName(seed),
    productType: seed.productType,
    categorySlugs: seed.categorySlugs,
    material: seed.material,
    sizes: seed.sizes,
    finish: seed.finish,
    application: seed.application,
    description: buildDescription(seed, codes.length),
    kavishCatalogueCount: codes.length,
    featured: seed.featured,
  };
});

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlugs.includes(categorySlug));
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.categorySlugs.some((c) => product.categorySlugs.includes(c))
    )
    .slice(0, limit);
}

export const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes))).sort();
export const allFinishes = Array.from(new Set(products.flatMap((p) => p.finish))).sort();
export const allApplications = Array.from(new Set(products.flatMap((p) => p.application))).sort();
