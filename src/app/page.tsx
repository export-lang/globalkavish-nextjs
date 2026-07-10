import { CollectionsTeaser } from "@/components/home/collections-teaser";
import { Cta } from "@/components/home/cta";
import { FactoryTeaser } from "@/components/home/factory-teaser";
import { Hero } from "@/components/home/hero";
import { WhyUs } from "@/components/home/why-us";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kavish Global — Premium Porcelain & Ceramic Exports",
  description:
    "Kavish Global exports premium porcelain, ceramic, GVT and large-format slab tiles from Morbi, India to 45+ countries. Explore our collections, factory process and export services.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionsTeaser />
      <FactoryTeaser />
      <WhyUs />
      <Cta />
    </>
  );
}
