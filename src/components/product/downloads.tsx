import { Download } from "lucide-react";

import { company } from "@/lib/data/company";
import type { Product } from "@/lib/types";

export function Downloads({ product }: { product: Product }) {
  const labels: { key: keyof Product["catalogueCodes"]; label: string }[] = [
    { key: "lyca", label: "Lyca Catalogue" },
    { key: "kavish", label: "Kavish Catalogue" },
    { key: "whiteLabel", label: "White Label Catalogue" },
  ];

  const available = labels.filter((l) => product.catalogueCodes[l.key]);
  if (available.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {available.map((l) => {
        const subject = encodeURIComponent(`Catalogue request — ${product.name} (${l.label})`);
        const body = encodeURIComponent(
          `Hello Kavish team,\n\nPlease share the ${l.label} PDF for ${product.name} (${product.sizes.join(", ")}).\n\nThank you.`
        );
        return (
          <a
            key={l.key}
            href={`mailto:${company.email}?subject=${subject}&body=${body}`}
            className="flex items-center gap-2 rounded-full border border-border-subtle px-5 py-3 text-sm transition-colors hover:border-gold-500 hover:text-gold-500"
          >
            <Download className="h-4 w-4" />
            {l.label}
          </a>
        );
      })}
    </div>
  );
}
