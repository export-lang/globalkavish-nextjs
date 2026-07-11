"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { Container } from "@/components/shared/container";
import { ProductSwatch } from "@/components/shared/product-swatch";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { useCollections } from "@/lib/store";

const ROWS: { label: string; get: (p: (typeof products)[number]) => string }[] = [
  { label: "Material", get: (p) => p.material },
  { label: "Sizes", get: (p) => (p.sizes.length ? p.sizes.join(", ") : "On request") },
  { label: "Finish", get: (p) => (p.finish.length ? p.finish.join(", ") : "See catalogue") },
  { label: "Application", get: (p) => p.application.join(", ") },
];

export default function ComparePage() {
  const { compare, toggleCompare } = useCollections();
  const items = products.filter((p) => compare.includes(p.slug));

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Compare"
          title="Compare Collections"
          description="Add up to four collections to compare specifications side by side."
        />
        <div className="mt-16">
          {items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-40" />
                    {items.map((p) => (
                      <th key={p.slug} className="px-4 pb-6 text-left">
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                          <ProductSwatch seed={p.slug} className="h-full w-full" />
                          <button
                            onClick={() => toggleCompare(p.slug)}
                            aria-label="Remove"
                            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/50 text-white"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <Link href={`/products/${p.slug}`} className="mt-3 block font-display text-lg">
                          {p.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.label} className="border-t border-border-subtle">
                      <td className="py-4 text-sm text-foreground/50">{row.label}</td>
                      {items.map((p) => (
                        <td key={p.slug} className="px-4 py-4 text-sm font-medium">
                          {row.get(p)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-subtle py-24 text-center text-foreground/50">
              <p>No collections added to compare yet.</p>
              <Button asChild className="mt-6">
                <Link href="/collections">Browse Collections</Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
