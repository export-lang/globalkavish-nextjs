import { notFound } from "next/navigation";

import { CollectionExplorer } from "@/components/collections/collection-explorer";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories, getCategory } from "@/lib/data/categories";
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

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading eyebrow={cat.heroNote} title={cat.name} description={cat.description} />
        <div className="mt-16">
          <CollectionExplorer initialCategory={cat.slug} />
        </div>
      </Container>
    </div>
  );
}
