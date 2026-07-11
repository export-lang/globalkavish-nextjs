"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/shared/product-card";
import { categories } from "@/lib/data/categories";
import { allApplications, allFinishes, allSizes, products } from "@/lib/data/products";
import type { Application } from "@/lib/types";
import { cn } from "@/lib/utils";

type FilterKey = "category" | "size" | "finish" | "application";

function FilterGroup({
  title,
  options,
  active,
  onToggle,
}: {
  title: string;
  options: string[];
  active: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onToggle(opt)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs transition-colors",
              active.includes(opt)
                ? "border-gold-500 bg-gold-500 text-black"
                : "border-border-subtle text-foreground/70 hover:border-foreground/40"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CollectionExplorer({ initialCategory }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [active, setActive] = useState<Record<FilterKey, string[]>>({
    category: initialCategory ? [initialCategory] : [],
    size: [],
    finish: [],
    application: [],
  });

  function toggle(key: FilterKey, value: string) {
    setActive((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((v) => v !== value) : [...prev[key], value],
    }));
  }

  function clearAll() {
    setActive({ category: [], size: [], finish: [], application: [] });
    setQuery("");
  }

  const activeCount = Object.values(active).flat().length;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (active.category.length && !p.categorySlugs.some((c) => active.category.includes(c))) return false;
      if (active.size.length && !p.sizes.some((s) => active.size.includes(s))) return false;
      if (active.finish.length && !p.finish.some((f) => active.finish.includes(f))) return false;
      if (active.application.length && !p.application.some((a) => active.application.includes(a))) return false;
      return true;
    });
  }, [query, active]);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
      <aside className={cn("lg:block", filtersOpen ? "block" : "hidden")}>
        <div className="sticky top-28 space-y-8 rounded-2xl border border-border-subtle p-6">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg">Filters</p>
            {activeCount > 0 && (
              <button onClick={clearAll} className="text-xs text-foreground/50 underline underline-offset-4">
                Clear all ({activeCount})
              </button>
            )}
          </div>
          <FilterGroup
            title="Category"
            options={categories.map((c) => c.slug)}
            active={active.category}
            onToggle={(v) => toggle("category", v)}
          />
          <FilterGroup title="Application" options={allApplications as Application[]} active={active.application} onToggle={(v) => toggle("application", v)} />
          <FilterGroup title="Size" options={allSizes} active={active.size} onToggle={(v) => toggle("size", v)} />
          <FilterGroup title="Finish" options={allFinishes} active={active.finish} onToggle={(v) => toggle("finish", v)} />
        </div>
      </aside>

      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-border-subtle px-5 py-3">
            <Search className="h-4 w-4 text-foreground/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search collections…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search">
                <X className="h-4 w-4 text-foreground/40" />
              </button>
            )}
          </div>
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-border-subtle px-5 py-3 text-sm lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters {activeCount > 0 && `(${activeCount})`}
          </button>
        </div>

        <p className="mb-8 text-sm text-foreground/50">{filtered.length} collections</p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border-subtle py-24 text-center text-foreground/50">
            No collections match these filters.
          </div>
        )}
      </div>
    </div>
  );
}
