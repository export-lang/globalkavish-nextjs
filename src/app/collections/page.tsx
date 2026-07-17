import { CollectionExplorer } from "@/components/collections/collection-explorer";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { products } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All Collections",
  description:
    "Browse Kavish Global's full catalogue of ceramic, porcelain, GVT and large-format slab tiles — filter by category, size, finish and application.",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Full Catalogue"
          title="Every collection, filtered your way."
          description={`${products.length} collections across ceramic, porcelain, GVT and large-format slab ranges — live-filtered by size, finish and application.`}
        />
        <div className="mt-16">
          <CollectionExplorer />
        </div>
      </Container>
    </div>
  );
}
