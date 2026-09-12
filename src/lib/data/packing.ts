// ═════════════════════════════════════════════════════════════
// 📦 packing.ts — every product, every thickness.
//
// SOURCE   "Export-price list" → tiles tab, columns D–K, 1,058 rows.
// EXCLUDED factory names, catalogue codes, rates, FOB prices.
//          None of those may ever reach a public page.
//
// Thicknesses were derived from weight ÷ area and confirmed by
// Ronak on 12 Sep 2026. Container figures are real minimum and
// maximum values across the matching rows.
//
// Reconciled against the live /products/[slug] routes on
// 2026-09-12: three entries below (gvt-1200x1200, gvt-1200x2400,
// gvt-800x1600) were marked `live: false` in the original sheet but
// already have live pages — corrected to `true` here so this file
// reflects reality. The 800×2400 full-body slab already existed
// under a different slug (`large-format-slab-800x2400`) — that slug
// is used here instead of creating a duplicate page for the same
// product.
// ═════════════════════════════════════════════════════════════

export type Variant = {
  thickness: string          // "8.5 mm"
  pcsPerBox: number
  sqmPerBox: number
  kgPerBox: [number, number]
  boxes20: [number, number]
  sqm20: [number, number]
  boxes40?: [number, number] // only where the sheet had 40′ HQ rows
  sqm40?: [number, number]
  rows: number               // price-list rows behind this variant
  note?: string
}

export type Product = {
  slug: string
  name: string
  sizeMm: [number, number]
  body: string
  waterAbsorption: string
  finishes: string[]
  application: string[]
  hsCode: string
  variants: Variant[]
  live: boolean              // does the page already exist on the site?
}

const VIT = '≤ 0.5% — EN ISO 10545-3, Group BIa'
const CER = '5–6% — EN ISO 10545-3, Group BIII'
const CER_W = '10–15% — EN ISO 10545-3, Group BIII'

export const PRODUCTS: Product[] = [

/* ── Ceramic floor ──────────────────────────────────────────── */
{ slug:'ceramic-floor-tile-300x300', name:'300 × 300 mm Ceramic Floor Tile',
  sizeMm:[300,300], body:'Ceramic', waterAbsorption:CER,
  finishes:['Glossy','Matt'], application:['Interior floors','Bathrooms','Balconies'],
  hsCode:'6907.23', live:true, variants:[
  { thickness:'8 mm', pcsPerBox:10, sqmPerBox:0.90, kgPerBox:[12.3,13.0],
    boxes20:[2150,2268], sqm20:[1935.00,2041.20], rows:8 }]},

{ slug:'ceramic-floor-tile-400x400', name:'400 × 400 mm Ceramic Floor Tile',
  sizeMm:[400,400], body:'Ceramic', waterAbsorption:CER,
  finishes:['Glossy','Matt','Sugar','Matt punch'], application:['Interior floors','Light commercial'],
  hsCode:'6907.23', live:true, variants:[
  { thickness:'8 mm', pcsPerBox:6, sqmPerBox:0.96, kgPerBox:[15.0,16.0],
    boxes20:[1680,1932], sqm20:[1612.80,1854.72], rows:7 }]},

{ slug:'ceramic-floor-tile-600x600', name:'600 × 600 mm Ceramic Floor Tile',
  sizeMm:[600,600], body:'Ceramic', waterAbsorption:CER,
  finishes:['Glossy','Matt'], application:['Interior floors','Living spaces'],
  hsCode:'6907.23', live:true, variants:[
  { thickness:'9 mm', pcsPerBox:4, sqmPerBox:1.44, kgPerBox:[26.0,26.0],
    boxes20:[1056,1056], sqm20:[1520.64,1520.64], rows:8 }]},

/* ── Ceramic wall ───────────────────────────────────────────── */
{ slug:'ceramic-wall-tile-300x450', name:'300 × 450 mm Ceramic Wall Tile',
  sizeMm:[300,450], body:'Ceramic', waterAbsorption:CER_W,
  finishes:['Glossy','Matt','Highlighter'], application:['Interior walls','Bathrooms','Kitchens'],
  hsCode:'6907.22', live:true, variants:[
  { thickness:'7 mm', pcsPerBox:6, sqmPerBox:0.81, kgPerBox:[10.4,10.5],
    boxes20:[2640,2640], sqm20:[2138.40,2138.40], rows:4 },
  { thickness:'8 mm', pcsPerBox:5, sqmPerBox:0.68, kgPerBox:[9.9,9.9],
    boxes20:[2816,2816], sqm20:[1900.80,1900.80], rows:1 }]},
  // ⚠️ One further row (5 pcs, 12.0 kg, 2,268 boxes) computes to ~9 mm, which is
  //    unusual for a ceramic wall tile. Left out until the sheet is checked.

{ slug:'ceramic-wall-tile-300x600', name:'300 × 600 mm Ceramic Wall Tile',
  sizeMm:[300,600], body:'Ceramic', waterAbsorption:CER_W,
  finishes:['Glossy','Matt','Sugar'], application:['Interior walls','Bathrooms','Kitchens'],
  hsCode:'6907.22', live:true, variants:[
  { thickness:'8–9 mm', pcsPerBox:5, sqmPerBox:0.90, kgPerBox:[13.3,14.0],
    boxes20:[2016,2160], sqm20:[1814.40,1944.00], rows:12 }]},

/* ── Double charge ──────────────────────────────────────────── */
{ slug:'double-charge-tile-600x600', name:'600 × 600 mm Double Charge Vitrified Tile',
  sizeMm:[600,600], body:'Double charge vitrified', waterAbsorption:VIT,
  finishes:['Polished','Matt'], application:['Commercial floors','High traffic','Showrooms'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'9 mm', pcsPerBox:4, sqmPerBox:1.44, kgPerBox:[23.0,23.0],
    boxes20:[1250,1250], sqm20:[1800.00,1800.00], rows:2 }]},

/* ── Full body porcelain ────────────────────────────────────── */
{ slug:'full-body-porcelain-600x600', name:'600 × 600 mm Full Body Porcelain Tile',
  sizeMm:[600,600], body:'Full body porcelain', waterAbsorption:VIT,
  finishes:['Matt','Polished','Structured'], application:['Heavy traffic','Industrial','Outdoor'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'8 mm',  pcsPerBox:4, sqmPerBox:1.44, kgPerBox:[25.5,25.5],
    boxes20:[1059,1059], sqm20:[1524.96,1524.96], rows:5 },
  { thickness:'9 mm',  pcsPerBox:4, sqmPerBox:1.44, kgPerBox:[28.0,28.5],
    boxes20:[1012,1059], sqm20:[1457.28,1524.96], rows:11 },
  { thickness:'15 mm', pcsPerBox:2, sqmPerBox:0.72, kgPerBox:[23.5,23.5],
    boxes20:[1160,1160], sqm20:[835.20,835.20], rows:4 }]},

{ slug:'full-body-porcelain-600x1200', name:'600 × 1200 mm Full Body Porcelain Tile',
  sizeMm:[600,1200], body:'Full body porcelain', waterAbsorption:VIT,
  finishes:['Matt','Polished','Structured'], application:['Commercial floors','Façades','Heavy traffic'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'7 mm',  pcsPerBox:2, sqmPerBox:1.44, kgPerBox:[25.5,25.5],
    boxes20:[1059,1059], sqm20:[1524.96,1524.96], rows:3 },
  { thickness:'9 mm',  pcsPerBox:2, sqmPerBox:1.44, kgPerBox:[28.0,28.5],
    boxes20:[992,1012],  sqm20:[1428.48,1457.28], rows:35 },
  { thickness:'13 mm', pcsPerBox:2, sqmPerBox:1.44, kgPerBox:[46.0,46.0],
    boxes20:[594,594],   sqm20:[855.36,855.36], rows:2 }]},

{ slug:'large-format-slab-800x2400', name:'800 × 2400 mm Full Body Porcelain Slab',
  sizeMm:[800,2400], body:'Full body porcelain', waterAbsorption:VIT,
  finishes:['Polished','Matt','Structured'], application:['Floors','Façades','Countertops'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'15 mm', pcsPerBox:1, sqmPerBox:1.92, kgPerBox:[67.0,79.0],
    boxes20:[336,360], sqm20:[645.12,691.20], rows:57,
    note:'Largest single line in the price list.' }]},

{ slug:'full-body-porcelain-800x3000', name:'800 × 3000 mm Full Body Porcelain Slab',
  sizeMm:[800,3000], body:'Full body porcelain', waterAbsorption:VIT,
  finishes:['Polished','Matt','Structured'], application:['Floors','Façades','Countertops'],
  hsCode:'6907.21', live:false, variants:[
  { thickness:'15 mm', pcsPerBox:1, sqmPerBox:2.40, kgPerBox:[84.0,86.0],
    boxes20:[308,308], sqm20:[739.20,739.20], rows:42 }]},

/* ── GVT ────────────────────────────────────────────────────── */
{ slug:'gvt-600x1200', name:'600 × 1200 mm Glazed Vitrified Tile (GVT)',
  sizeMm:[600,1200], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Glossy','Matt','Carving','Sugar'], application:['Floors','Walls','Commercial interiors'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'8.5 mm', pcsPerBox:2, sqmPerBox:1.44, kgPerBox:[26.0,29.0],
    boxes20:[952,1056], sqm20:[1370.88,1520.64], rows:179, note:'Standard.' },
  { thickness:'7 mm',   pcsPerBox:3, sqmPerBox:2.16, kgPerBox:[32.0,37.5],
    boxes20:[750,896],  sqm20:[1620.00,1935.36], rows:4, note:'On request.' }]},

{ slug:'gvt-800x800', name:'800 × 800 mm Glazed Vitrified Tile (GVT)',
  sizeMm:[800,800], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Glossy','Matt','Carving'], application:['Floors','Living rooms','Showrooms'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'9 mm', pcsPerBox:3, sqmPerBox:1.92, kgPerBox:[36.5,37.5],
    boxes20:[720,720], sqm20:[1382.40,1382.40], rows:6 }]},

{ slug:'gvt-800x1600', name:'800 × 1600 mm Glazed Porcelain Tile',
  sizeMm:[800,1600], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Glossy','Matt'], application:['Floors','Commercial interiors'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'9 mm', pcsPerBox:2, sqmPerBox:2.56, kgPerBox:[52.0,52.0],
    boxes20:[528,528], sqm20:[1351.68,1351.68], rows:7 }]},

{ slug:'gvt-1200x1200', name:'1200 × 1200 mm Glazed Porcelain Tile',
  sizeMm:[1200,1200], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Glossy','Matt'], application:['Floors','Showrooms','Lobbies'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'9 mm', pcsPerBox:2, sqmPerBox:2.88, kgPerBox:[60.0,60.0],
    boxes20:[470,470], sqm20:[1353.60,1353.60], rows:7 }]},

{ slug:'gvt-1200x1800', name:'1200 × 1800 mm Glazed Porcelain Slab',
  sizeMm:[1200,1800], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Glossy','Matt'], application:['Floors','Wall cladding'],
  hsCode:'6907.21', live:false, variants:[
  { thickness:'9 mm', pcsPerBox:2, sqmPerBox:4.32, kgPerBox:[90.0,90.0],
    boxes20:[306,306], sqm20:[1321.92,1321.92], rows:10 }]},

{ slug:'gvt-1200x2400', name:'1200 × 2400 mm Glazed Porcelain Slab',
  sizeMm:[1200,2400], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Polished','Matt'], application:['Floors','Wall cladding','Countertops'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'6 mm',  pcsPerBox:2, sqmPerBox:5.76, kgPerBox:[85.0,85.0],
    boxes20:[330,330], sqm20:[1900.80,1900.80],
    boxes40:[660,660], sqm40:[3801.60,3801.60], rows:3 },
  { thickness:'9 mm',  pcsPerBox:1, sqmPerBox:2.88, kgPerBox:[62.0,62.0],
    boxes20:[222,222], sqm20:[639.36,639.36],
    boxes40:[440,440], sqm40:[1267.20,1267.20], rows:6 },
  { thickness:'15 mm', pcsPerBox:1, sqmPerBox:2.88, kgPerBox:[105.0,105.0],
    boxes20:[180,180], sqm20:[518.40,518.40], rows:3 }]},

{ slug:'gvt-1200x2800', name:'1200 × 2800 mm Glazed Porcelain Slab',
  sizeMm:[1200,2800], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Polished','Matt'], application:['Wall cladding','Façades','Furniture surfaces'],
  hsCode:'6907.21', live:false, variants:[
  { thickness:'6 mm', pcsPerBox:1, sqmPerBox:3.36, kgPerBox:[49.5,49.5],
    boxes20:[276,276], sqm20:[927.36,927.36],
    boxes40:[552,552], sqm40:[1854.72,1854.72], rows:12 }]},

{ slug:'gvt-1600x3200', name:'1600 × 3200 mm Glazed Porcelain Slab',
  sizeMm:[1600,3200], body:'Glazed vitrified (GVT)', waterAbsorption:VIT,
  finishes:['Polished','Matt'], application:['Floors','Wall cladding','Countertops','Façades'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'9 mm', pcsPerBox:1, sqmPerBox:5.12, kgPerBox:[146.0,146.0],
    boxes20:[180,180], sqm20:[921.60,921.60], rows:2 }]},

/* ── Outdoor porcelain ──────────────────────────────────────── */
{ slug:'outdoor-porcelain-600', name:'600 × 600 mm Outdoor Porcelain Paver',
  sizeMm:[600,600], body:'Porcelain', waterAbsorption:VIT,
  finishes:['Anti-skid','Rough','Structured'], application:['Terraces','Pool decks','Walkways','Parking'],
  hsCode:'6907.21', live:true, variants:[
  { thickness:'12 mm', pcsPerBox:3, sqmPerBox:1.08, kgPerBox:[27.0,27.0],
    boxes20:[1030,1030], sqm20:[1111.37,1111.37], rows:1 },
  { thickness:'16 mm', pcsPerBox:2, sqmPerBox:0.72, kgPerBox:[24.0,25.5],
    boxes20:[1080,1150], sqm20:[777.60,828.00], rows:3 },
  { thickness:'20 mm', pcsPerBox:2, sqmPerBox:0.72, kgPerBox:[31.5,32.0],
    boxes20:[864,864],   sqm20:[622.08,622.08], rows:8 }]},

{ slug:'outdoor-porcelain-600x1200', name:'600 × 1200 mm Outdoor Porcelain Paver',
  sizeMm:[600,1200], body:'Porcelain', waterAbsorption:VIT,
  finishes:['Anti-skid','Rough','Structured'], application:['Terraces','Pool decks','Driveways'],
  hsCode:'6907.21', live:false, variants:[
  { thickness:'9 mm',  pcsPerBox:2, sqmPerBox:1.44, kgPerBox:[27.5,27.5],
    boxes20:[986,986], sqm20:[1419.84,1419.84], rows:2 },
  { thickness:'16 mm', pcsPerBox:1, sqmPerBox:0.72, kgPerBox:[25.5,25.5],
    boxes20:[1078,1078], sqm20:[776.16,776.16], rows:1 },
  { thickness:'20 mm', pcsPerBox:1, sqmPerBox:0.72, kgPerBox:[31.0,32.0],
    boxes20:[810,903], sqm20:[583.20,650.16], rows:6 }]},
]

export function getPacking(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}

/* Pages live on the site with no data anywhere in the price list. */
export const NO_DATA = ['double-charge-tile-600x1200']
