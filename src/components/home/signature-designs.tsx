import { DepthCard } from "@/components/motion/depth-card";
import { ScrollFloat } from "@/components/motion/scroll-float";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { TileImage } from "@/components/shared/tile-image";
import { tileDesigns } from "@/lib/data/designs";
import { cn } from "@/lib/utils";

export function SignatureDesigns() {
  return (
    <section className="relative z-[2] -mt-10 rounded-t-[2.5rem] bg-background/75 py-24 shadow-[0_-40px_90px_-50px_rgba(0,0,0,0.55)] backdrop-blur-md md:-mt-16 md:rounded-t-[3.5rem] md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Signature Designs"
          title="Real surfaces, straight from production."
          description="A selection of current designs from our production network — photographed from actual production tiles."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tileDesigns.slice(0, 4).map((design, i) => (
            <ScrollFloat key={design.slug} depth={i % 2 === 0 ? 0.4 : -0.3} className={cn(i % 2 === 1 && "md:mt-12")}>
              <FadeIn delay={i * 0.08}>
                <DepthCard driftDelay={i * 0.7}>
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
                </DepthCard>
              </FadeIn>
            </ScrollFloat>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5 md:gap-6">
          {tileDesigns[4].imageIds.slice(0, 5).map((imageId, i) => (
            <FadeIn key={imageId} delay={i * 0.06}>
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
      </Container>
    </section>
  );
}
