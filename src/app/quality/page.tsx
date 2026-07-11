import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { TileImage } from "@/components/shared/tile-image";
import { company } from "@/lib/data/company";
import { tileDesigns } from "@/lib/data/designs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Quality",
  description:
    "Every Kavish Global shipment passes strict quality inspection, premium packaging and export-standard container loading.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Quality"
          title="Inspected before it ever ships."
          description="Strict quality inspection, premium packaging and export-standard loading are built into every Kavish Global order."
        />

        <div className="mt-24">
          <p className="mb-10 font-display text-3xl">Manufacturing Standards</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.manufacturing.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05} className="rounded-2xl border border-border-subtle p-8">
                <p className="font-display text-sm text-gold-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-xl">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-3 font-display text-3xl">Shade Consistency, Face by Face</p>
          <p className="mb-10 max-w-2xl text-sm text-foreground/60">
            Five production faces of one design (Electra Almond Beige, 800×800 mm) — the controlled, natural
            variation our shade batching keeps within tolerance across a full order.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 md:gap-6">
            {tileDesigns[4].imageIds.slice(5, 10).map((imageId, i) => (
              <FadeIn key={imageId} delay={i * 0.05}>
                <div className="group relative aspect-square overflow-hidden rounded-xl">
                  <TileImage
                    imageId={imageId}
                    alt={`Production face ${i + 6} of ten — shade variation within tolerance`}
                    fallbackSeed={`quality-face-${i}`}
                    width={800}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
