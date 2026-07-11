import { getCategory } from "@/lib/data/categories";
import type { Product } from "@/lib/types";

export function SpecTable({ product }: { product: Product }) {
  const rows: { label: string; value: string }[] = [
    { label: "Material", value: product.material },
    {
      label: "Category",
      value: product.categorySlugs.map((c) => getCategory(c)?.name).filter(Boolean).join(", "),
    },
    { label: "Available Sizes", value: product.sizes.length ? product.sizes.map((s) => `${s} mm`).join(", ") : "On request" },
    { label: "Surface Finish", value: product.finish.length ? product.finish.join(", ") : "See catalogue" },
    { label: "Application", value: product.application.join(", ") },
    { label: "Catalogue Editions", value: "Lyca · Global Kavish · White Label" },
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
        Full technical datasheets, packing details and test certificates are shared by our export team with each
        catalogue — request them with the buttons below.
      </p>
    </div>
  );
}
