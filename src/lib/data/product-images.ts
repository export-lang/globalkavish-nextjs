/**
 * Central local-image mapping for the 28 catalogue products (see
 * lib/data/products.ts). Local files only — no Google Drive hotlinks.
 *
 * DESIGN_LIBRARY is the full index of approved Kavish design photos found
 * under public/media/products/<FINISH>/<DESIGN NAME>_<FACE>.jpg — parsed
 * once here so PRODUCT_IMAGE_MAP stays a plain, explicit lookup.
 *
 * Mapping priority used to build PRODUCT_IMAGE_MAP: (1) exact
 * product/design match, (2) exact finish match, (3) representative image
 * from the same finish folder (permitted — these are all approved Kavish
 * designs, not invented ones), (4) no image (renders "Image coming soon"
 * via <ProductImage>).
 */

import { products } from "@/lib/data/products";

export type ProductImageSet = {
  cover: string | null;
  gallery: string[];
};

export type FinishFolder = "CARVING" | "DECOR" | "GLOSSY" | "HIGH GLOSSY" | "MATT" | "WOOD" | "Cabinet & acralic sheet";

export interface Design {
  slug: string;
  name: string;
  finish: FinishFolder;
  /** Cover (R1 where available) first, then additional production faces. */
  faces: string[];
}

function mediaPath(relativePath: string) {
  return `/media/products/${encodeURI(relativePath)}`;
}

function design(slug: string, name: string, finish: FinishFolder, faces: string[]): Design {
  return { slug, name, finish, faces: faces.map(mediaPath) };
}

/** Full index of approved Kavish design photos, grouped by design (all faces of one design share a gallery). */
export const DESIGN_LIBRARY: Design[] = [
  // CARVING
  design("vistara-beige", "Vistara Beige", "CARVING", ["CARVING/CV VISTARA BEIGE_R1.jpg"]),
  design("destina-grey", "Destina Grey", "CARVING", ["CARVING/CV_DESTINA GREY_R1.jpg"]),
  design("fiama-grey", "Fiama Grey", "CARVING", ["CARVING/CV_FIAMA GREY_R1.jpg"]),
  design("jealous-beige", "Jealous Beige", "CARVING", ["CARVING/CV_JEALOUS BEIGE_R1.jpg"]),
  design("prime-ceaser", "Prime Ceaser", "CARVING", ["CARVING/CV_PRIME CEASER_R1.jpg"]),
  design("vega-grey", "Vega Grey", "CARVING", ["CARVING/CV_VEGA GREY_R1.jpg"]),
  design("woodland-pecan", "Woodland Pecan", "CARVING", ["CARVING/CV_WOODLAND PECAN_R1.jpg"]),
  design("elba-camel", "Elba Camel", "CARVING", ["CARVING/ELBA CAMEL R1.jpg"]),
  // DECOR
  design("stellow-grey", "Stellow Grey", "DECOR", ["DECOR/STELLOW GREY_R1.jpg", "DECOR/STELLOW GREY DECOR.jpg"]),
  // GLOSSY
  design("antisky", "Antisky", "GLOSSY", ["GLOSSY/184-ANTISKY-R1.jpg"]),
  design("amber-champagne-glitter", "Amber Champagne Glitter", "GLOSSY", ["GLOSSY/AMBER CHAMPAGNE GLITTER_R1.jpg"]),
  design("argentina-bianco", "Argentina Bianco", "GLOSSY", ["GLOSSY/ARGENTINA BIANCO_R1.jpg"]),
  design("astral-white", "Astral White", "GLOSSY", ["GLOSSY/ASTRAL WHITE_R1.jpg"]),
  design("dorian-crema", "Dorian Crema", "GLOSSY", ["GLOSSY/DORIAN CREMA_R1.jpg"]),
  design("eagle-white", "Eagle White", "GLOSSY", ["GLOSSY/EAGLE WHITE_R1.jpg"]),
  design("fentosa-onyx-beige", "Fentosa Onyx Beige", "GLOSSY", ["GLOSSY/FENTOSA ONYX BEIGE_R1.jpg"]),
  design("fiona-onyx-grey", "Fiona Onyx Grey", "GLOSSY", ["GLOSSY/FIONA ONYX GREY_R1.jpg"]),
  design("gaios", "Gaios", "GLOSSY", ["GLOSSY/GAIOS_R1.jpg"]),
  design("ice-land-grey", "Ice Land Grey", "GLOSSY", ["GLOSSY/ICE LAND GREY_R1.jpg"]),
  design("luxe-calacatta-golden", "Luxe Calacatta Golden", "GLOSSY", ["GLOSSY/LUXE CALACATTA GOLDEN_R1.jpg"]),
  design("macabus-oreo", "Macabus Oreo", "GLOSSY", ["GLOSSY/MACABUS OREO_R1.jpg"]),
  design("malabar-gold", "Malabar Gold", "GLOSSY", ["GLOSSY/MALABAR GOLD_R1.jpg"]),
  design("onyx-ivory", "Onyx Ivory", "GLOSSY", ["GLOSSY/ONYX IVORY_1.jpg"]),
  design("onyx-misty-oro", "Onyx Misty Oro", "GLOSSY", ["GLOSSY/ONYX MISTY ORO_R1.jpg"]),
  design("onyx-velluto-beige", "Onyx Velluto Beige", "GLOSSY", ["GLOSSY/ONYX VELLUTO BEIGE_R1.jpg"]),
  design("torrento-onyx-beige", "Torrento Onyx Beige", "GLOSSY", ["GLOSSY/TORRENTO ONYX BEIGE_R1.jpg"]),
  design("versace-copper", "Versace Copper", "GLOSSY", ["GLOSSY/VERSACE COPPER_R1.jpg"]),
  // HIGH GLOSSY
  design("fury-black", "Fury Black", "HIGH GLOSSY", ["HIGH GLOSSY/Fury black-1.jpeg"]),
  design("golden-eye-ebony", "Golden Eye Ebony", "HIGH GLOSSY", ["HIGH GLOSSY/GOLDEN EYE EBONY_R1.jpg"]),
  design("mysterious-black", "Mysterious Black", "HIGH GLOSSY", ["HIGH GLOSSY/MYSTERIOUS BLACK_R1.jpg"]),
  design("tauras-aqua", "Tauras Aqua", "HIGH GLOSSY", ["HIGH GLOSSY/TAURAS AQUA_R1.jpg"]),
  design("xtreme-nero", "Xtreme Nero", "HIGH GLOSSY", ["HIGH GLOSSY/XTREME NERO_R1.jpg"]),
  // MATT
  design("atmosphere-natural", "Atmosphere Natural", "MATT", ["MATT/ATMOSPHERE NATURAL_R1.jpg"]),
  design("cantoni-beige", "Cantoni Beige", "MATT", ["MATT/CANTONI BEIGE_R1.jpg"]),
  design("cento-bianco", "Cento Bianco", "MATT", ["MATT/CENTO_BIANCO P1.jpg"]),
  design("corona-beige", "Corona Beige", "MATT", ["MATT/CORONA BEIGE-1.jpg"]),
  design("dome-ash-crema", "Dome Ash Crema", "MATT", ["MATT/DOME ASH CREMA_R1.jpg"]),
  design("dynamo-brown", "Dynamo Brown", "MATT", ["MATT/DYNAMO BROWN_R1.jpg"]),
  design("florence-miele-pearl", "Florence Miele Pearl", "MATT", ["MATT/FLORENCE MIELE PEARL_R1.jpg"]),
  design("lao-bone", "Lao Bone", "MATT", ["MATT/LAO BONE_R1.jpg"]),
  design("orion-beige", "Orion Beige", "MATT", ["MATT/ORION BEIGE_R1.jpg"]),
  design("positano-avorio", "Positano Avorio", "MATT", ["MATT/POSITANO AVORIO_R1.jpg"]),
  design("travertino-jaxon-tan", "Travertino Jaxon Tan", "MATT", ["MATT/TRAVERTINO JAXON TAN_R1.jpg"]),
  design("vennisa-bianco", "Vennisa Bianco", "MATT", ["MATT/VENNISA BIANCO_R1.jpg"]),
  // WOOD
  design("apricot-wood-beige", "Apricot Wood Beige", "WOOD", ["WOOD/APRICOT WOOD BEIGE_R1.jpg"]),
  design("bark-brown", "Bark Brown", "WOOD", ["WOOD/BARK BROWN P1.jpg"]),
  design("bottega-brown", "Bottega Brown", "WOOD", ["WOOD/BOTTEGA BROWN  R1.jpg"]),
  design("ducale-wood-cedar", "Ducale Wood Cedar", "WOOD", ["WOOD/DUCALE WOOD CEDAR_R1.jpg"]),
  // Cabinet & acrylic sheet
  design("bathroom-cabinet", "Bathroom Cabinet", "Cabinet & acralic sheet", ["Cabinet & acralic sheet/cabinet.jpeg"]),
  design("acrylic-sheet", "Acrylic Sheet", "Cabinet & acralic sheet", [
    "Cabinet & acralic sheet/acralic sheet.jpeg",
  ]),
];

function bySlug(slug: string): Design {
  const found = DESIGN_LIBRARY.find((d) => d.slug === slug);
  if (!found) throw new Error(`Unknown design slug: ${slug}`);
  return found;
}

function toSet(designSlug: string): ProductImageSet {
  const { faces } = bySlug(designSlug);
  return { cover: faces[0], gallery: faces.slice(1) };
}

/**
 * Product slug -> representative design. Each design is used on exactly one
 * product card (no repeats), chosen for a plausible finish/format fit.
 */
const productDesigns: Record<string, string> = {
  "ceramic-floor-tile-300x300": "cantoni-beige",
  "ceramic-floor-tile-400x400": "orion-beige",
  "ceramic-floor-tile-600x600": "positano-avorio",
  "ceramic-wall-tile-300x450": "stellow-grey",
  "ceramic-wall-tile-300x600": "eagle-white",
  "double-charge-tile-600x600": "vistara-beige",
  "double-charge-tile-600x1200": "destina-grey",
  "full-body-porcelain-600x600": "fiama-grey",
  "full-body-porcelain-600x1200": "jealous-beige",
  "full-body-porcelain-slab": "luxe-calacatta-golden",
  "gvt-200x1200": "argentina-bianco",
  "gvt-300x600": "astral-white",
  "gvt-600x600": "dorian-crema",
  "gvt-600x1200": "fentosa-onyx-beige",
  "gvt-800x800": "fiona-onyx-grey",
  "gvt-800x1600": "gaios",
  "gvt-1000x1000": "ice-land-grey",
  "gvt-1200x1200": "macabus-oreo",
  "gvt-1200x2400": "golden-eye-ebony",
  "gvt-1600x1600": "mysterious-black",
  "gvt-1600x3200": "xtreme-nero",
  "outdoor-porcelain-500x500": "dynamo-brown",
  "outdoor-porcelain-600": "travertino-jaxon-tan",
  "porcelain-wall-tile-300x600": "apricot-wood-beige",
  "large-format-slab-800x2400": "ducale-wood-cedar",
  "nano-polished-600x600": "tauras-aqua",
  "acrylic-solid-surface-sheets": "acrylic-sheet",
  "bathroom-cabinets": "bathroom-cabinet",
};

export const PRODUCT_IMAGE_MAP: Record<string, ProductImageSet> = Object.fromEntries(
  products.map((p) => [p.slug, productDesigns[p.slug] ? toSet(productDesigns[p.slug]) : { cover: null, gallery: [] }])
);

export function getProductImages(slug: string): ProductImageSet {
  return PRODUCT_IMAGE_MAP[slug] ?? { cover: null, gallery: [] };
}
