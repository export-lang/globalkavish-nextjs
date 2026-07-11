import { Download } from "lucide-react";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { TileImage } from "@/components/shared/tile-image";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";
import { tileDesigns } from "@/lib/data/designs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Media & Downloads",
  description: "Product photography and catalogue requests from Kavish Global.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Media"
          title="Product photography & catalogues."
          description="Real production photography from our current designs, and catalogue requests for every category."
        />

        <div className="mt-20">
          <p className="mb-8 font-display text-2xl">Product Photography</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {tileDesigns.slice(0, 4).map((design, i) => (
              <FadeIn key={design.slug} delay={i * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <TileImage
                    imageId={design.imageIds[0]}
                    alt={`${design.name} — ${design.size}mm tile design`}
                    fallbackSeed={design.slug}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14">
                    <p className="font-display text-lg text-white">{design.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      {design.size} mm{design.finish ? ` · ${design.finish}` : ""}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5 md:gap-6">
            {tileDesigns[4].imageIds.slice(0, 5).map((imageId, i) => (
              <FadeIn key={imageId} delay={i * 0.05}>
                <div className="group relative aspect-square overflow-hidden rounded-xl">
                  <TileImage
                    imageId={imageId}
                    alt={`Electra Almond Beige 800x800mm — face ${i + 1}`}
                    fallbackSeed={`electra-${i}`}
                    width={800}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-4 text-xs text-foreground/40">
            Electra Almond Beige · 800x800 mm — five of ten production faces, showing natural pattern variation.
          </p>
        </div>

        <div className="mt-24">
          <p className="mb-3 font-display text-2xl">Factory &amp; Installation Video</p>
          <p className="mb-8 max-w-2xl text-sm text-foreground/60">
            Factory and installation footage is currently in production and will be published here once available.
          </p>
        </div>

        <div className="mt-16">
          <p className="mb-8 font-display text-2xl">Kavish Catalogue Requests</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const subject = encodeURIComponent(`Kavish catalogue request — ${cat.name}`);
              const body = encodeURIComponent(
                `Hello Kavish Global team,\n\nPlease share the latest Kavish ${cat.name} catalogue PDF.\n\nThank you.`
              );
              return (
                <a
                  key={cat.slug}
                  href={`mailto:${company.email}?subject=${subject}&body=${body}`}
                  className="flex items-center justify-between rounded-2xl border border-border-subtle px-6 py-5 text-sm transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  {cat.name}
                  <Download className="h-4 w-4 shrink-0" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-foreground/40">
            Catalogues are shared directly by our export team on request to keep pricing and specifications current.
          </p>
        </div>
      </Container>
    </div>
  );
}
