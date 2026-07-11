import type { Country } from "@/lib/types";

/**
 * Company data supplied directly by Kavish Global (July 2026).
 * Anything still missing is tracked in TODO.md rather than invented.
 */
export const company = {
  legalName: "Kavish Global",
  brandName: "Kavish Global",
  domain: "globalkavish.com",
  tagline: "Premium ceramic tiles and sanitaryware, exported worldwide.",
  founded: "Morbi, Gujarat — the ceramic capital of India",
  email: "export@globalkavish.com",
  whatsapp: "+917874144141",
  phone: "+91 78741 44141",
  address: {
    factory: "Nichi Mandal, Morbi - 363642, Gujarat, India",
    office:
      "A - Shyamal Sky Life, Flat No. 202, Opp. Aryland Ambika Town, Rajkot - 360005, Gujarat, India",
  },
  social: {
    instagram: "https://instagram.com/globalkavish",
    facebook: "https://facebook.com/globalkavish",
    linkedin: "https://linkedin.com/company/globalkavish",
    youtube: "https://youtube.com/@globalkavish",
  },
  story: {
    whoWeAre:
      "Kavish Global is a leading Indian exporter of premium ceramic tiles and sanitaryware, delivering world-class surfaces to customers across international markets. We combine advanced manufacturing technology, strict quality control and innovative designs to create products that meet the highest global standards.",
    experience:
      "With years of experience in the ceramic industry, we have built long-term relationships with distributors, wholesalers, retailers, builders, architects and importers around the world.",
    promise: ["Premium Quality", "Competitive Pricing", "Reliable Delivery", "Long-Term Partnership"],
    mission:
      "To become one of the world's most trusted suppliers of ceramic tiles and sanitaryware by delivering premium products with exceptional service.",
    vision:
      "To bring Indian ceramic excellence to every corner of the world through innovation, quality and sustainable manufacturing.",
    values: [
      "Quality First",
      "Integrity",
      "Innovation",
      "Customer Satisfaction",
      "Long-Term Relationships",
      "Continuous Improvement",
    ],
  },
  // Headline stats for the homepage counters.
  stats: [
    { label: "Export Countries", value: 52, suffix: "+" },
    { label: "Containers Shipped / Month", value: 100, suffix: "+" },
    { label: "Years of Experience", value: 15, suffix: "+" },
    { label: "Customers Served", value: 1200, suffix: "+" },
  ],
  // Full stats grid for About / Why Us. "Factory Area" withheld from public
  // display pending clarification (implies direct factory ownership) — see
  // CONTENT_REQUIRED.md.
  allStats: [
    { label: "Export Countries", value: 52, suffix: "+" },
    { label: "Containers / Month", value: 100, suffix: "+" },
    { label: "Annual Production", value: 350000, suffix: " sqm" },
    { label: "Customers Served", value: 1200, suffix: "+" },
    { label: "Years of Experience", value: 15, suffix: "+" },
    { label: "Product Collections", value: 1000, suffix: "+" },
    { label: "Designs", value: 10000, suffix: "+" },
    { label: "Dealer Network", value: 500, suffix: "+" },
  ],
  // Certifications intentionally not displayed publicly until supporting
  // documents are supplied — see CONTENT_REQUIRED.md.
  manufacturing: [
    { title: "Advanced Italian Machinery", detail: "Our qualified production partners run advanced Italian lines; we select and audit every factory we buy from." },
    { title: "Digital Inkjet Printing", detail: "High-definition digital glazing across our network for detailed, repeat-free surface designs." },
    { title: "High Temperature Kilns", detail: "High-temperature firing vitrifies each tile into a dense, durable body." },
    { title: "Strict Quality Inspection", detail: "Our team checks every batch for size, shade and surface quality before packing." },
    { title: "Premium Packaging", detail: "Reinforced, moisture-safe export packaging with clear batch labelling." },
    { title: "Export Standard Loading", detail: "Container loading coordinated and supervised to export standard." },
  ],
  whyChooseUs: [
    "Premium Quality",
    "International Standards",
    "OEM Manufacturing",
    "Private Label",
    "Competitive Pricing",
    "Fast Production",
    "Reliable Delivery",
    "Export Documentation",
    "Professional Support",
    "Custom Packaging",
    "Worldwide Shipping",
  ],
  exportMarkets: [
    "USA",
    "Canada",
    "Mexico",
    "UK",
    "Germany",
    "France",
    "Australia",
    "New Zealand",
    "South Africa",
    "Middle East",
    "Latin America",
  ],
} as const;

export const exportCountries: Country[] = [
  { code: "US", name: "United States", region: "Americas" },
  { code: "CA", name: "Canada", region: "Americas" },
  { code: "MX", name: "Mexico", region: "Americas" },
  { code: "BR", name: "Brazil", region: "Americas" },
  { code: "PA", name: "Panama", region: "Americas" },
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
  { code: "NL", name: "Netherlands", region: "Europe" },
  { code: "ES", name: "Spain", region: "Europe" },
  { code: "IT", name: "Italy", region: "Europe" },
  { code: "PL", name: "Poland", region: "Europe" },
  { code: "AE", name: "United Arab Emirates", region: "Middle East" },
  { code: "SA", name: "Saudi Arabia", region: "Middle East" },
  { code: "QA", name: "Qatar", region: "Middle East" },
  { code: "OM", name: "Oman", region: "Middle East" },
  { code: "KW", name: "Kuwait", region: "Middle East" },
  { code: "BH", name: "Bahrain", region: "Middle East" },
  { code: "IQ", name: "Iraq", region: "Middle East" },
  { code: "JO", name: "Jordan", region: "Middle East" },
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "NG", name: "Nigeria", region: "Africa" },
  { code: "KE", name: "Kenya", region: "Africa" },
  { code: "TZ", name: "Tanzania", region: "Africa" },
  { code: "GH", name: "Ghana", region: "Africa" },
  { code: "EG", name: "Egypt", region: "Africa" },
  { code: "DZ", name: "Algeria", region: "Africa" },
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

