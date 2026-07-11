/**
 * Catalogue import layer — the single place sheet data enters the site.
 *
 * IMPORT RULE (strict): only rows/codes from the sheet's KAVISH catalogue
 * column are ingested. Lyca and "without logo" catalogue editions are
 * excluded from this website entirely. Factory names from the sheet are
 * internal sourcing data and are never stored here or displayed publicly.
 */

export type CatalogueBrand = "KAVISH" | "LYCA" | "WITHOUT_LOGO";

/** Normalizes a raw brand/column label ("  kavish ", "Kavish") to a canonical brand. */
export function normalizeBrand(raw: string): CatalogueBrand | null {
  const value = raw.trim().toUpperCase().replace(/\s+/g, " ");
  if (value === "KAVISH") return "KAVISH";
  if (value === "LYCA") return "LYCA";
  if (value === "WITHOUT LOGO" || value === "NO LOGO" || value === "WITHOUT_LOGO") return "WITHOUT_LOGO";
  return null;
}

/** The only brand this website may import. */
export function isImportableBrand(raw: string): boolean {
  return normalizeBrand(raw) === "KAVISH";
}

export interface KavishCatalogueRow {
  /** Sheet "Type" column (public product type — never the factory column). */
  productType: string;
  /** Sheet "Size" column, normalized to WxH mm. */
  size: string;
  /** Sheet KAVISH column value (catalogue reference code). Empty = no verified code. */
  code: string;
  note?: string;
}

/**
 * Rows transcribed from the "All Catalogue Link" sheet — KAVISH column only.
 * Data oddities are carried as notes instead of being "fixed" by guesswork
 * (see CONTENT_REQUIRED.md).
 */
export const kavishRows: KavishCatalogueRow[] = [
  { productType: "Ceramic Floor Tiles", size: "400x400", code: "71913180_400X400" },
  { productType: "Ceramic Floor Tiles", size: "600x600", code: "734121_600X600" },
  { productType: "Ceramic Floor Tiles", size: "300x300", code: "7120220_300X300" },
  { productType: "Ceramic Wall Tiles", size: "300x450", code: "7915120_300X450" },
  { productType: "Ceramic Wall Tiles", size: "300x600", code: "7915120_300x600" },
  { productType: "Ceramic Wall Tiles", size: "300x600", code: "715940_300X600" },
  { productType: "Ceramic Wall Tiles", size: "300x600", code: "71312914_300x600" },
  { productType: "Ceramic Wall Tiles", size: "300x600", code: "72226120_300X600" },
  {
    productType: "Ceramic Wall Tiles",
    size: "300x450",
    code: "52226120_300x450",
    note: "Sheet marks this row LIVE CATALOGUE; Kavish column carries a 5-prefixed code — confirm.",
  },
  { productType: "Ceramic Wall Tiles", size: "300x450", code: "7191590_300X450" },
  { productType: "Ceramic Wall Tiles", size: "300x600", code: "71520220_300X600" },
  { productType: "Double Loading Floor Tiles", size: "600x600", code: "7191410_600x600 Double charge" },
  { productType: "Double Loading Floor Tiles", size: "600x1200", code: "7191410_600X1200" },
  { productType: "Full Body Porcelain Floor Tiles", size: "600x600", code: "711550_600X600" },
  { productType: "Full Body Porcelain Floor Tiles", size: "600x1200", code: "711550_600X1200" },
  { productType: "Full Body Porcelain Floor Tiles", size: "1200x1800", code: "713201519_1200X1800" },
  { productType: "Full Body Porcelain Floor Tiles", size: "1200x2400", code: "713201519_1200X2400" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "800x800", code: "7110515_800X800" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "800x800", code: "71812260_800x800" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "800x800", code: "712131216_800X800" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x600", code: "7110515_600X600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x600", code: "71911814_600x600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x600", code: "71192014_600X600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x600", code: "7314187_600x600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x600", code: "713201520_600X600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x600", code: "71216140_600X600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "7123195_600X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "7110515_600X1200" },
  {
    productType: "Glazed Porcelain Floor Tiles (GVT)",
    size: "600x1200",
    code: "716142214_600X1200",
    note: "Two sheet rows carry this same Kavish code — confirm.",
  },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "7112510_600X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "791597_600X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "752200_600X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "793197_600X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "7131891_600x1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "71220140_600x1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "71618155_60X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "71971320_600x1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "600x1200", code: "78181914_600x1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "800x1600", code: "71326121_800X1600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "1000x1000", code: "71812260_1000x1000" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "1200x1200", code: "71812260_1200x1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "1200x1200", code: "7121593_1200x1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "1200x2400", code: "7121593_1200x2400" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "1600x1600", code: "7121593_1600X1600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "1600x3200", code: "7121593_1600X3200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "200x1200", code: "7222005_200X1200" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "300x600", code: "720201421_300X600" },
  { productType: "Glazed Porcelain Floor Tiles (GVT)", size: "300x600", code: "71451914_300X600" },
  {
    productType: "Outdoor Porcelain Floor Tiles",
    size: "500x500",
    code: "",
    note: "Sheet row exists but no distinct verified Kavish code — confirm.",
  },
  { productType: "Outdoor Porcelain Floor Tiles", size: "600x600", code: "71913120_600X600" },
  {
    productType: "Outdoor Porcelain Floor Tiles",
    size: "600x900",
    code: "",
    note: "Size listed in sheet; distinct Kavish code not verified — confirm.",
  },
  {
    productType: "Outdoor Porcelain Floor Tiles",
    size: "600x1200",
    code: "",
    note: "Size listed in sheet; distinct Kavish code not verified — confirm.",
  },
  { productType: "Porcelain Wall Tiles", size: "300x600", code: "71214183_300X600" },
  { productType: "Slab (Big) Tiles", size: "800x2400", code: "7131890_800x2400" },
  { productType: "Soluble Salt Tiles (Nano Polished)", size: "600x600", code: "719200_600X600_Nano" },
  {
    productType: "Soluble Salt Tiles (Nano Polished)",
    size: "600x600",
    code: "",
    note: "Second nano 600x600 sheet row has no verified Kavish code — confirm.",
  },
  { productType: "Acrylic Sheets", size: "", code: "POCO LOCO CATALOUG - Kavish.pdf" },
  { productType: "Bathroom Cabinets", size: "", code: "71516140" },
];

export function kavishCodesFor(productType: string, sizes: string[]): string[] {
  return kavishRows
    .filter((row) => row.productType === productType && (sizes.length === 0 || sizes.includes(row.size)))
    .map((row) => row.code)
    .filter(Boolean);
}
