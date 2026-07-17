import Link from "next/link";
import { notFound } from "next/navigation";

import { CollectionExplorer } from "@/components/collections/collection-explorer";
import { Container } from "@/components/shared/container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { categories, getCategory } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return buildMetadata({ title: "Collection", description: "Collection not found." });
  return buildMetadata({
    title: cat.name,
    description: `${cat.description} Explore sizes, finishes and technical specifications, and request an export quote.`,
    path: `/collections/${cat.slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const categoryProducts = getProductsByCategory(cat.slug);
  const sizes = Array.from(new Set(categoryProducts.flatMap((p) => p.sizes))).sort();
  const finishes = Array.from(new Set(categoryProducts.flatMap((p) => p.finish))).sort();
  const applications = Array.from(new Set(categoryProducts.flatMap((p) => p.application))).sort();

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading eyebrow={cat.heroNote} title={cat.name} description={cat.description} />

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 rounded-2xl border border-border-subtle p-6 text-sm">
          {sizes.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">Sizes</p>
              <p className="mt-1 text-foreground/80">{sizes.map((s) => s.replace("x", "×")).join(" · ")} mm</p>
            </div>
          )}
          {finishes.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">Finishes</p>
              <p className="mt-1 text-foreground/80">{finishes.join(" · ")}</p>
            </div>
          )}
          {applications.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">Applications</p>
              <p className="mt-1 text-foreground/80">{applications.join(" · ")}</p>
            </div>
          )}
          <div className="ml-auto">
            <MagneticButton>
              <Button asChild size="sm" variant="gold">
                <Link href="/contact">Request Catalogue</Link>
              </Button>
            </MagneticButton>
          </div>
        </div>

        <div className="mt-16">
          <CollectionExplorer initialCategory={cat.slug} />
        </div>
      </Container>
    </div>
  );
}
