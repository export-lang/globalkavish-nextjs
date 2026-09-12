// ─────────────────────────────────────────────────────────────
// Extended editorial content for the packing.ts-driven product
// pages: opening copy and one differentiator/application section.
// Only for slugs that get this fuller treatment — every number
// here traces back to src/lib/data/packing.ts.
//
// FAQ used to be hand-written per entry here; it's now generated
// for every page with a spec table by buildStandardFaq() in
// product-faq.ts, so it's no longer part of this type.
// ─────────────────────────────────────────────────────────────

export type DetailSection = {
  heading: string;
  paragraphs?: string[];
  list?: { title: string; detail: string }[];
};

export type ProductDetailContent = {
  metaDescription: string;
  opening: string[];
  section: DetailSection;
};

export const PRODUCT_DETAIL_CONTENT: Record<string, ProductDetailContent> = {
  "large-format-slab-800x2400": {
    metaDescription:
      "Full body porcelain slabs in 800 × 2400 mm, exported from Morbi, India. 1.92 m² per piece, 336–360 pieces per container. Request specifications and a quote.",
    opening: [
      "Full body porcelain in 800 × 2400 mm — the format architects specify when a floor has to look like a single continuous surface rather than a grid of tiles. The colour and structure run through the entire thickness of the slab, not just a glazed top layer, so a chip or a cut edge shows the same material as the face. That is what makes it the specification for airports, showrooms, hospital corridors and anywhere a floor takes abuse for years.",
      "This is the largest single line in our production programme. We ship it in full container loads from Morbi to buyers in Europe, the Gulf, Africa and the Americas.",
    ],
    section: {
      heading: "Why full body, not glazed",
      paragraphs: [
        "A glazed vitrified tile carries its design in a printed layer roughly 1 mm thick. Full body porcelain carries it through the whole slab. Three consequences a buyer cares about:",
      ],
      list: [
        { title: "Chips do not show.", detail: "A dropped trolley wheel on a glazed floor exposes a white biscuit underneath. On full body it exposes the same colour." },
        { title: "It can be cut and profiled.", detail: "Edges, stair nosings and countertop bullnoses can be machined on site without revealing a different-coloured core." },
        { title: "It takes heavy traffic.", detail: "The wear layer is the whole slab, so surface abrasion does not change the appearance." },
      ],
    },
  },

  "full-body-porcelain-800x3000": {
    metaDescription:
      "Full body porcelain slabs in 800 × 3000 mm, exported from Morbi, India. 2.40 m² per piece, 308 pieces per 20′ container. Request specifications and a quote.",
    opening: [
      "800 × 3000 mm is the longest full body porcelain slab in our programme — a single piece that spans a room width without a joint. Colour and structure run through the entire 15 mm, so the material behaves the same whether it is cut for an edge, a stair nosing or a countertop bullnose as it does on the face.",
      "At this length, handling and crating matter as much as the tile itself. Every slab ships on a fumigated wooden A-frame pallet built for the size, and container loading is planned around the weight limit on your specific route rather than a generic figure.",
    ],
    section: {
      heading: "What to plan for at this size",
      list: [
        { title: "Two-person handling.", detail: "At 84–86 kg per slab, this is not a one-person lift on site — factor crew and equipment into the installation plan." },
        { title: "A-frame crating.", detail: "Slabs travel upright on wooden A-frame pallets, not stacked flat, to protect the long edges in transit." },
        { title: "Weight-limited loading.", detail: "308 boxes is the confirmed 20′ container figure for this size — coverage is capped by axle weight limits before the container is visually full." },
      ],
    },
  },

  "gvt-1200x1800": {
    metaDescription:
      "Glazed vitrified (GVT) slabs in 1200 × 1800 mm, exported from Morbi, India. 4.32 m² per piece, 306 pieces per 20′ container. Request specifications and a quote.",
    opening: [
      "1200 × 1800 mm glazed vitrified tile (GVT) — a large-format glazed slab for floors and wall cladding where a buyer wants the scale of a slab with the design range of a printed glaze: marble, stone and concrete visuals that a full body porcelain line can't replicate.",
      "Each box carries a single piece at 4.32 m² of coverage, so container counts are driven by weight and crate configuration rather than piece count.",
    ],
    section: {
      heading: "Where this size is specified",
      list: [
        { title: "Large-format floors.", detail: "Fewer joints across a floor plate reads as a more continuous surface than standard 600 × 1200 mm formats." },
        { title: "Feature wall cladding.", detail: "The glazed surface carries high-definition marble and stone visuals at a scale standard tile sizes can't cover in one piece." },
      ],
    },
  },

  "gvt-1200x2800": {
    metaDescription:
      "Glazed vitrified (GVT) slabs in 1200 × 2800 mm for wall cladding and façades, exported from Morbi, India. 3.36 m² per piece. Request specifications and a quote.",
    opening: [
      "1200 × 2800 mm is the largest glazed vitrified format in our range built specifically for wall cladding, façades and furniture surfaces rather than floors — a single glazed slab spanning the height of a standard wall panel.",
      "At 3.36 m² per piece and a confirmed 40′ HQ container option, this size is set up for projects that need to move volume efficiently over long shipping routes.",
    ],
    section: {
      heading: "Why this size for cladding and furniture",
      list: [
        { title: "Fewer joints on tall walls.", detail: "One slab can span a full-height wall panel without a horizontal joint." },
        { title: "Furniture-grade surface.", detail: "The glazed finish is specified for kitchen islands and furniture fronts where a large, uninterrupted surface matters visually." },
        { title: "40′ HQ shipping available.", detail: "Confirmed 40′ HQ figures exist for this size in addition to 20′, useful for larger cladding or furniture-manufacturing orders." },
      ],
    },
  },

  "outdoor-porcelain-600x1200": {
    metaDescription:
      "Anti-skid outdoor porcelain pavers in 600 × 1200 mm, in 9, 16 and 20 mm thickness, exported from Morbi, India. Request specifications and a quote.",
    opening: [
      "600 × 1200 mm outdoor porcelain paver — anti-skid, frost- and stain-resistant, built for terraces, pool decks and driveways where a larger paver reduces joint count without giving up slip resistance.",
      "It ships in three thickness options, from a standard 9 mm for terraces and pool surrounds up to a 20 mm structural paver rated for vehicular driveways.",
    ],
    section: {
      heading: "Choosing a thickness for the application",
      list: [
        { title: "9 mm — terraces and pool decks.", detail: "The lightest option, for pedestrian outdoor areas where weight and cost matter." },
        { title: "16 mm — general outdoor paving.", detail: "A step up in load-bearing capacity for walkways and general external paving." },
        { title: "20 mm — driveways and parking.", detail: "The thickest option, specified where vehicles cross the paved surface." },
      ],
    },
  },
};
