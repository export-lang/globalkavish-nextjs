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
  // NUMERIC STATISTICS (52+ countries, 100+ containers/month, 350,000 sqm,
  // 1200+ customers, 15+ years, 1000+ collections, 10,000+ designs, 500
  // dealers, 100,000 sqm factory) are WITHHELD from public display pending
  // your confirmation of verified figures — see CONTENT_REQUIRED.md. They are
  // NOT rendered anywhere on the public site.

  // Qualitative strengths shown in place of unverified numbers.
  strengths: [
    { title: "Global Export Reach", detail: "Serving distributors, retailers and importers across international markets." },
    { title: "Curated Product Range", detail: "Ceramic, porcelain, GVT, large-format slabs and sanitaryware in one catalogue." },
    { title: "Qualified Production Network", detail: "We select and audit the factories we source from across the Morbi cluster." },
    { title: "Export Documentation", detail: "Full paperwork handled in-house — invoice, packing list, BL, certificate of origin." },
  ],
  // Certifications intentionally not displayed publicly until supporting
  // documents are supplied — see CONTENT_REQUIRED.md.
  manufacturing: [
    { title: "Modern Production Partners", detail: "We source from factories running modern pressing, glazing and finishing lines, and audit each one we buy from." },
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

/**
 * Only the export markets Kavish Global explicitly stated. No invented
 * countries and no total count are shown — the map is a conceptual reach
 * visual built strictly from these confirmed markets.
 */
export const exportCountries: Country[] = [
  { code: "US", name: "United States", region: "Americas" },
  { code: "CA", name: "Canada", region: "Americas" },
  { code: "MX", name: "Mexico", region: "Americas" },
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "AU", name: "Australia", region: "Oceania" },
  { code: "NZ", name: "New Zealand", region: "Oceania" },
  // "Middle East" and "Latin America" are stated as regions — represented
  // by an anchor point each, not specific unconfirmed countries.
  { code: "AE", name: "Middle East", region: "Middle East" },
  { code: "BR", name: "Latin America", region: "Americas" },
];

