import { Download } from "lucide-react";

import { company } from "@/lib/data/company";
import type { Product } from "@/lib/types";

/**
 * Kavish catalogues only (import rule in lib/data/catalogue.ts). No public
 * PDF files exist yet, so this is an honest email request, not a fake
 * download.
 */
export function Downloads({ product }: { product: Product }) {
  const subject = encodeURIComponent(`Kavish catalogue request — ${product.name}`);
  const body = encodeURIComponent(
    `Hello Kavish Global team,\n\nPlease share the Kavish catalogue PDF(s) for: ${product.name}.\n\nThank you.`
  );

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={`mailto:${company.email}?subject=${subject}&body=${body}`}
        className="flex items-center gap-2 rounded-full border border-border-subtle px-5 py-3 text-sm transition-colors hover:border-gold-500 hover:text-gold-500"
      >
        <Download className="h-4 w-4" />
        Request Kavish Catalogue{product.kavishCatalogueCount > 1 ? "s" : ""}
      </a>
      {product.kavishCatalogueCount > 0 && (
        <span className="text-sm text-foreground/50">
          {product.kavishCatalogueCount} catalogue{product.kavishCatalogueCount > 1 ? "s" : ""} available
        </span>
      )}
    </div>
  );
}
