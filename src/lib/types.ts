export interface Category {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  application: Application[];
  heroNote: string;
}

export type Application = "Floor" | "Wall" | "Outdoor" | "Facade" | "Bathroom";

export type Material = "Ceramic" | "Porcelain" | "Acrylic" | "Sanitaryware";

/**
 * Public product model. Contains no factory/supplier identity — products are
 * aggregated by product type + size from Kavish catalogue rows only.
 */
export interface Product {
  slug: string;
  /** Neutral public display name, e.g. "600×1200 mm GVT". */
  name: string;
  /** Sheet "Type" column value. */
  productType: string;
  categorySlugs: string[];
  material: Material;
  sizes: string[];
  finish: string[];
  application: Application[];
  /** Genuine catalogue design name, only when verified (e.g. Drive design photos). */
  designName?: string;
  description: string;
  /** Count of distinct Kavish catalogue references available for this product. */
  kavishCatalogueCount: number;
  featured?: boolean;
}

export interface Country {
  code: string;
  name: string;
  region: "Middle East" | "Africa" | "Europe" | "Americas" | "Asia" | "Oceania";
}
