import type { Product } from "@/lib/types";

const TECHNICAL_BY_MATERIAL: Record<Product["material"], { label: string; value: string }[]> = {
  Porcelain: [
    { label: "Water Absorption", value: "≤ 0.5% (Group BIa)" },
    { label: "Breaking Strength", value: "≥ 1300 N" },
    { label: "PEI Abrasion Class", value: "Class IV–V" },
    { label: "Frost Resistance", value: "Resistant" },
  ],
  Ceramic: [
    { label: "Water Absorption", value: "10–20% (Group BIII)" },
    { label: "Breaking Strength", value: "≥ 600 N" },
    { label: "PEI Abrasion Class", value: "Class II–III" },
    { label: "Frost Resistance", value: "Interior use" },
  ],
  Acrylic: [
    { label: "Surface", value: "High-gloss, UV-cured" },
    { label: "Core", value: "MDF / HMR substrate" },
    { label: "Water Resistance", value: "High" },
  ],
  Sanitaryware: [
    { label: "Construction", value: "Marine plywood carcass" },
    { label: "Finish", value: "Lacquered, water-resistant" },
    { label: "Hardware", value: "Soft-close hinges" },
  ],
};

export function SpecTable({ product }: { product: Product }) {
  const technical = TECHNICAL_BY_MATERIAL[product.material];

  const rows: { label: string; value: string }[] = [
    { label: "Material", value: product.material },
    { label: "Available Sizes", value: product.sizes.join(", ") },
    { label: "Finish", value: product.finish.join(", ") },
    { label: "Application", value: product.application.join(", ") },
    { label: "Colour Range", value: product.color.join(", ") },
    ...technical,
  ];

  return (
    <div className="divide-y divide-border-subtle border-y border-border-subtle">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-6 py-4">
          <span className="text-sm text-foreground/50">{row.label}</span>
          <span className="text-right text-sm font-medium">{row.value}</span>
        </div>
      ))}
      <p className="pt-4 text-xs text-foreground/40">
        Typical values by category — confirm exact test-certificate figures with our export team before order
        confirmation.
      </p>
    </div>
  );
}
