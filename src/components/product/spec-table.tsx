import { getCategory } from "@/lib/data/categories";
import type { Product } from "@/lib/types";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-foreground/70">
      {children}
    </span>
  );
}

/**
 * Verified specs only. A field with no data is omitted entirely rather than
 * shown as a placeholder ("On request", "See catalogue") — no invented specs.
 */
export function SpecTable({ product }: { product: Product }) {
  const categoryNames = product.categorySlugs.map((c) => getCategory(c)?.name).filter(Boolean).join(", ");

  const rows: { label: string; value: string }[] = [{ label: "Material", value: product.material }];
  if (categoryNames) rows.push({ label: "Category", value: categoryNames });
  if (product.application.length) rows.push({ label: "Application", value: product.application.join(" · ") });
  if (product.kavishCatalogueCount > 0) {
    rows.push({
      label: "Kavish Catalogues",
      value: `${product.kavishCatalogueCount} available on request`,
    });
  }

  return (
    <div className="space-y-6">
      {product.finish.length > 0 && (
        <div>
          <p className="text-sm text-foreground/50">Surface Finish</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.finish.map((f) => (
              <Chip key={f}>{f}</Chip>
            ))}
          </div>
        </div>
      )}
      <div className="divide-y divide-border-subtle border-y border-border-subtle">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-6 py-4">
            <span className="text-sm text-foreground/50">{row.label}</span>
            <span className="text-right text-sm font-medium">{row.value}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-foreground/40">
        Full technical datasheets, packing details and test certificates are shared by our export team with each
        catalogue — request them below.
      </p>
    </div>
  );
}
