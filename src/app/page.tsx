import { CollectionsTeaser } from "@/components/home/collections-teaser";
import { Cta } from "@/components/home/cta";
import { FactoryTeaser } from "@/components/home/factory-teaser";
import { Hero } from "@/components/home/hero";
import { SignatureDesigns } from "@/components/home/signature-designs";
import { WhyUs } from "@/components/home/why-us";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Global Kavish — Premium Ceramic Tiles & Sanitaryware Exports",
  description:
    "Global Kavish exports premium ceramic tiles, GVT, large-format slabs and sanitaryware from Morbi, India to 52+ countries. Explore our collections, factory process and export services.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureDesigns />
      <CollectionsTeaser />
      <FactoryTeaser />
      <WhyUs />
      <Cta />
    </>
  );
}
