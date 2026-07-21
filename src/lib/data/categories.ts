import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "ceramic-floor-tiles",
    name: "Ceramic Floor Tiles",
    shortName: "Ceramic Floor",
    description:
      "Dense, dependable ceramic bodies engineered for high-footfall interiors, glazed to a precise, even sheen.",
    application: ["Floor"],
    heroNote: "The everyday foundation, refined.",
  },
  {
    slug: "ceramic-wall-tiles",
    name: "Ceramic Wall Tiles",
    shortName: "Ceramic Wall",
    description:
      "Digitally glazed wall tiles with fine relief textures for kitchens, bathrooms and feature walls.",
    application: ["Wall", "Bathroom"],
    heroNote: "Surface as texture, texture as light.",
  },
  {
    slug: "double-loading-floor-tiles",
    name: "Double Loading Floor Tiles",
    shortName: "Double Loading",
    description:
      "Double-charge vitrified tiles with pigment fused through two layers, built for long-term abrasion resistance.",
    application: ["Floor"],
    heroNote: "Colour that runs deeper than the surface.",
  },
  {
    slug: "full-body-porcelain-floor-tiles",
    name: "Full Body Porcelain Floor Tiles",
    shortName: "Full Body Porcelain",
    description:
      "Uniform colour-body porcelain with consistent material through its thickness.",
    application: ["Floor", "Outdoor"],
    heroNote: "Consistent to the core.",
  },
  {
    slug: "glazed-porcelain-floor-tiles-gvt",
    name: "Glazed Porcelain Floor Tiles (GVT)",
    shortName: "GVT",
    description:
      "Our largest collection — high-definition glazed vitrified tiles in marble, stone and concrete visuals across large-format sizes.",
    application: ["Floor", "Wall"],
    heroNote: "The architect's collection.",
  },
  {
    slug: "outdoor-porcelain-floor-tiles",
    name: "Outdoor Porcelain Floor Tiles",
    shortName: "Outdoor",
    description:
      "Anti-skid, frost-resistant porcelain rated for facades, poolsides and open terraces in every climate.",
    application: ["Outdoor"],
    heroNote: "Engineered for the elements.",
  },
  {
    slug: "porcelain-wall-tiles",
    name: "Porcelain Wall Tiles",
    shortName: "Porcelain Wall",
    description: "Slim, precise porcelain wall tiles for continuous large-panel elevations.",
    application: ["Wall"],
    heroNote: "Minimal joints, maximum calm.",
  },
  {
    slug: "slab-big-tiles",
    name: "Slab (Big) Tiles",
    shortName: "Large Format Slabs",
    description:
      "Extra-large format slabs up to 1200×2400mm for seamless flooring, cladding and furniture surfaces.",
    application: ["Floor", "Wall", "Facade"],
    heroNote: "Architecture without interruption.",
  },
  {
    slug: "soluble-salt-nano-polished",
    name: "Soluble Salt Tiles (Nano Polished)",
    shortName: "Nano Polished",
    description:
      "Soluble-salt technology polished to a nano-sealed mirror finish — the closest porcelain comes to natural marble.",
    application: ["Floor"],
    heroNote: "Polished to a mirror, sealed for life.",
  },
  {
    slug: "acrylic-sheets",
    name: "Acrylic Solid Surface Sheets",
    shortName: "Acrylic Sheets",
    description: "High-gloss acrylic surface sheets for modular kitchens and furniture fronts.",
    application: ["Wall"],
    heroNote: "Liquid gloss, solid surface.",
  },
  {
    slug: "bathroom-cabinets",
    name: "Bathroom Cabinets & Sanitaryware",
    shortName: "Sanitaryware",
    description: "Complete bathroom furniture systems finished to match our tile collections.",
    application: ["Bathroom"],
    heroNote: "The complete bathroom, one supplier.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/** Short, reader-facing overrides for filter chips where shortName reads too technical or too terse. */
const filterLabelOverrides: Record<string, string> = {
  "full-body-porcelain-floor-tiles": "Full Body Porcelain",
  "glazed-porcelain-floor-tiles-gvt": "Glazed Porcelain Tiles (GVT)",
  "soluble-salt-nano-polished": "Nano Polished / Soluble Salt",
  "bathroom-cabinets": "Bathroom Cabinets",
};

/** Single formatter for any category slug shown as a public label (filter chips, breadcrumbs, etc). */
export function categoryFilterLabel(slug: string) {
  return filterLabelOverrides[slug] ?? getCategory(slug)?.shortName ?? slug;
}
