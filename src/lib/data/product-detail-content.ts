// ─────────────────────────────────────────────────────────────
// Extended editorial content for the packing.ts-driven product
// pages: opening copy, one differentiator/application section,
// and an FAQ. Only for slugs that get this fuller treatment —
// every number here traces back to src/lib/data/packing.ts.
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
  faq: { question: string; answer: string }[];
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
    faq: [
      {
        question: "What is the minimum order for 800 × 2400 full body porcelain?",
        answer: "One full 20′ container, which is 336–360 slabs or roughly 645–691 m². Mixed containers combining this size with other formats are possible — tell us the split you need and we will confirm whether it loads.",
      },
      {
        question: "How many square metres fit in a 20-foot container?",
        answer: "645.12 to 691.20 m², depending on crate configuration and the weight limit on your route. Weight, not volume, is the binding constraint on this size.",
      },
      {
        question: "Can you supply samples before an order?",
        answer: "Yes. Full-size slabs are impractical to airfreight, so we send cut samples showing the true surface and body colour. Sample cost and courier are on the buyer's account and are credited against the first order.",
      },
      {
        question: "What surface finishes are available?",
        answer: "Polished, matt and structured. Finish affects slip rating, so tell us the application — a hotel lobby and a pool surround need different surfaces.",
      },
      {
        question: "Which ports do you ship from?",
        answer: "Mundra and Kandla are the usual load ports for Morbi production. We quote FOB by default and CIF on request.",
      },
    ],
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
    faq: [
      {
        question: "How many slabs fit in a 20-foot container?",
        answer: "308 boxes (one slab per box), covering 739.20 m². This figure is set by the container's weight limit, not by physical space.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "One full 20′ container is the standard minimum for this size — 308 slabs. Contact us if you need a smaller trial quantity combined with another format.",
      },
      {
        question: "Can this size be cut on site?",
        answer: "Yes — because the colour runs through the full 15 mm body, edges, cuts and profiled details show the same material as the face, unlike a glazed tile.",
      },
      {
        question: "Which finishes are available in this size?",
        answer: "Polished, matt and structured. Tell us the application so we can advise on the right slip rating.",
      },
      {
        question: "How long from order confirmation to loading?",
        answer: "Contact our export team with your quantity and destination for a production and loading timeline — lead time depends on current production schedule.",
      },
    ],
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
    faq: [
      {
        question: "How many pieces fit in a 20-foot container?",
        answer: "306 boxes, one piece per box, covering 1,321.92 m² total.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "One full 20′ container — 306 pieces. Contact us if you need to combine this size with another format in a mixed container.",
      },
      {
        question: "What finishes are available?",
        answer: "Glossy and matt.",
      },
      {
        question: "Can this size be used on walls as well as floors?",
        answer: "Yes — it's specified for both floors and wall cladding, where fewer joints at this scale suit feature surfaces.",
      },
    ],
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
    faq: [
      {
        question: "How many pieces fit in a 20-foot container versus a 40-foot HQ?",
        answer: "276 boxes / 927.36 m² in a 20′ container, or 552 boxes / 1,854.72 m² in a 40′ HQ — one piece per box in both cases.",
      },
      {
        question: "Is this size suitable for flooring?",
        answer: "It's specified for wall cladding, façades and furniture surfaces rather than floors — for large-format flooring, see our 1200 × 2400 mm or 1600 × 3200 mm GVT slabs.",
      },
      {
        question: "What finishes are available?",
        answer: "Polished and matt.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "One full 20′ container (276 pieces) or 40′ HQ (552 pieces). Tell us your project quantity and we'll confirm the right container mix.",
      },
    ],
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
    faq: [
      {
        question: "Which thickness do I need for a driveway?",
        answer: "20 mm is the structural option in this size, specified for driveways and parking where vehicle loads apply.",
      },
      {
        question: "How many pieces fit in a 20-foot container?",
        answer: "It depends on thickness: 986 boxes (9 mm), 1,078 boxes (16 mm), or 810–903 boxes (20 mm), each box holding 1–2 pieces depending on thickness.",
      },
      {
        question: "Is this paver anti-skid?",
        answer: "Yes — anti-skid, rough and structured finishes are available, standard for outdoor pedestrian and vehicular surfaces.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "One full 20′ container. Contact us with your required thickness and we'll confirm the exact piece count for that container.",
      },
    ],
  },
};
