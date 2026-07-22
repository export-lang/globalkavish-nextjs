import { DepthCard } from "@/components/motion/depth-card";
import { ScrollFloat } from "@/components/motion/scroll-float";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { ProductImage } from "@/components/shared/product-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { DESIGN_LIBRARY } from "@/lib/data/product-images";
import { cn } from "@/lib/utils";

const FEATURED_SLUGS = ["malabar-gold", "vega-grey", "florence-miele-pearl", "torrento-onyx-beige"];
const featured = FEATURED_SLUGS.map((slug) => DESIGN_LIBRARY.find((d) => d.slug === slug)).filter(
  (d): d is NonNullable<typeof d> => Boolean(d)
);

export function SignatureDesigns() {
  return (
    <section className="relative z-[2] -mt-10 rounded-t-[2.5rem] bg-background/75 py-24 shadow-[0_-40px_90px_-50px_rgba(0,0,0,0.55)] backdrop-blur-md md:-mt-16 md:rounded-t-[3.5rem] md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Signature Designs"
          title="Selected surfaces from the Kavish collection."
          description="A selection of available Kavish surface designs — real photography, not renders."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((design, i) => (
            <ScrollFloat key={design.slug} depth={i % 2 === 0 ? 0.4 : -0.3} className={cn(i % 2 === 1 && "md:mt-12")}>
              <FadeIn delay={i * 0.08}>
                <DepthCard driftDelay={i * 0.7}>
                  <div className="ceramic-slab group relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <ProductImage
                      src={design.faces[0]}
                      alt={`${design.name} tile surface`}
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14">
                      <p className="font-display text-lg text-white">{design.name}</p>
                    </div>
                  </div>
                </DepthCard>
              </FadeIn>
            </ScrollFloat>
          ))}
        </div>
      </Container>
    </section>
  );
}
