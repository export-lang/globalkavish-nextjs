import Link from "next/link";

import { Container } from "@/components/shared/container";
import { ProductCard } from "@/components/shared/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data/products";

export function CollectionsTeaser() {
  const featured = getFeaturedProducts();

  return (
    <section className="border-t border-border-subtle py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Signature Collections"
            title="Formats built for architects."
            description="A curated selection from our full-body porcelain, GVT and large-format slab ranges."
          />
          <Button asChild variant="outline">
            <Link href="/collections">View All Collections</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} product={product} driftDelay={i * 0.6} />
          ))}
        </div>
      </Container>
    </section>
  );
}
