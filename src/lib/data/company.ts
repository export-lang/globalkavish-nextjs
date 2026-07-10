import type { Country } from "@/lib/types";

/**
 * Placeholder brand/company copy pending sign-off — globalkavish.com could not
 * be crawled automatically (Google Sites blocks bot fetches), so narrative
 * copy below is editorial, built around verified facts only: the Morbi,
 * Gujarat ceramic-cluster origin, the export/OEM/private-label business model,
 * and the real product register. Replace before launch.
 */
export const company = {
  legalName: "Kavish Global",
  brandName: "Kavish",
  domain: "globalkavish.com",
  tagline: "Porcelain, exported to the world.",
  founded: "Morbi, Gujarat — the heart of India's ceramic cluster",
  email: "export@globalkavish.com",
  whatsapp: "+919909995812",
  phone: "+91 99099 95812",
  address: {
    factory: "8-A, National Highway, Lakhdhirpur Road, Morbi 363642, Gujarat, India",
    office: "Morbi, Gujarat, India",
  },
  social: {
    instagram: "https://instagram.com/globalkavish",
    facebook: "https://facebook.com/globalkavish",
    linkedin: "https://linkedin.com/company/globalkavish",
    youtube: "https://youtube.com/@globalkavish",
  },
  stats: [
    { label: "Export Countries", value: 45, suffix: "+" },
    { label: "Containers Shipped / Year", value: 2500, suffix: "+" },
    { label: "Partner Factories", value: 40, suffix: "+" },
    { label: "Production Capacity", value: 120000, suffix: " sqm/day" },
  ],
  certifications: [
    { name: "ISO 9001", detail: "Quality Management Systems" },
    { name: "ISO 14001", detail: "Environmental Management" },
    { name: "CE Marking", detail: "European Conformity" },
    { name: "GVT / PEI Ratings", detail: "Wear & Abrasion Class Testing" },
    { name: "SASO / G-Mark", detail: "Gulf Standards Certification" },
    { name: "Green Building", detail: "Eco-friendly manufacturing compliance" },
  ],
} as const;

export const exportCountries: Country[] = [
  { code: "AE", name: "United Arab Emirates", region: "Middle East" },
  { code: "SA", name: "Saudi Arabia", region: "Middle East" },
  { code: "QA", name: "Qatar", region: "Middle East" },
  { code: "OM", name: "Oman", region: "Middle East" },
  { code: "KW", name: "Kuwait", region: "Middle East" },
  { code: "BH", name: "Bahrain", region: "Middle East" },
  { code: "IQ", name: "Iraq", region: "Middle East" },
  { code: "JO", name: "Jordan", region: "Middle East" },
  { code: "NG", name: "Nigeria", region: "Africa" },
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "KE", name: "Kenya", region: "Africa" },
  { code: "TZ", name: "Tanzania", region: "Africa" },
  { code: "GH", name: "Ghana", region: "Africa" },
  { code: "EG", name: "Egypt", region: "Africa" },
  { code: "DZ", name: "Algeria", region: "Africa" },
  { code: "NL", name: "Netherlands", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "ES", name: "Spain", region: "Europe" },
  { code: "IT", name: "Italy", region: "Europe" },
  { code: "PL", name: "Poland", region: "Europe" },
  { code: "US", name: "United States", region: "Americas" },
  { code: "CA", name: "Canada", region: "Americas" },
  { code: "BR", name: "Brazil", region: "Americas" },
  { code: "MX", name: "Mexico", region: "Americas" },
  { code: "PA", name: "Panama", region: "Americas" },
  { code: "AU", name: "Australia", region: "Oceania" },
  { code: "NZ", name: "New Zealand", region: "Oceania" },
  { code: "MY", name: "Malaysia", region: "Asia" },
  { code: "SG", name: "Singapore", region: "Asia" },
  { code: "PH", name: "Philippines", region: "Asia" },
  { code: "VN", name: "Vietnam", region: "Asia" },
  { code: "BD", name: "Bangladesh", region: "Asia" },
  { code: "LK", name: "Sri Lanka", region: "Asia" },
  { code: "NP", name: "Nepal", region: "Asia" },
];

export const manufacturingTimeline = [
  { step: "01", title: "Raw Material Selection", detail: "Kaolin, feldspar and silica sourced and lab-tested for purity." },
  { step: "02", title: "Body Preparation", detail: "Ball-milled slurry spray-dried into a consistent powder body." },
  { step: "03", title: "Pressing", detail: "Hydraulic presses form tiles at up to 5,000 tonnes of pressure." },
  { step: "04", title: "Digital Glazing", detail: "High-resolution inkjet printing lays down the visual and glaze." },
  { step: "05", title: "Firing", detail: "Kilned at 1200°C+ to vitrify the body into a dense, durable slab." },
  { step: "06", title: "Nano Polishing", detail: "Soluble-salt and full-body ranges are honed to a sealed, mirror finish." },
  { step: "07", title: "Quality Inspection", detail: "Every batch is checked for calibre, shade, and surface defects." },
  { step: "08", title: "Export Packaging", detail: "Reinforced crating and container loading built for ocean freight." },
];

export const qualityChecks = [
  "Dimensional & calibre inspection",
  "Shade batching under standard light",
  "Water absorption testing",
  "PEI abrasion resistance rating",
  "Breaking strength & impact testing",
  "Surface defect & pinhole inspection",
  "Pre-loading container inspection",
  "Third-party pre-shipment inspection (on request)",
];
