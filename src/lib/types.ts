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

export interface Product {
  slug: string;
  name: string;
  categorySlugs: string[];
  material: Material;
  sizes: string[];
  finish: string[];
  application: Application[];
  color: string[];
  description: string;
  catalogueCodes: {
    lyca?: string;
    kavish?: string;
    whiteLabel?: string;
  };
  featured?: boolean;
}

export interface Country {
  code: string;
  name: string;
  region: "Middle East" | "Africa" | "Europe" | "Americas" | "Asia" | "Oceania";
}
