import { DepthCard } from "@/components/motion/depth-card";
import { ScrollFloat } from "@/components/motion/scroll-float";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { ProductImage } from "@/components/shared/product-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/lib/data/company";
import { DESIGN_LIBRARY } from "@/lib/data/product-images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Kavish Global manufactures and exports premium ceramic tiles, porcelain surfaces and sanitaryware from Morbi, India to international markets.",
  path: "/about",
});

const coreValues = ["Quality", "Integrity", "Reliability", "Transparency", "Long-Term Partnerships", "Continuous Improvement"];

const howWeWork = [
  { title: "Understand Buyer Requirements", detail: "We start with your product type, size, finish, quantity and destination market." },
  { title: "Select Suitable Products", detail: "Matching designs are shortlisted from the Kavish catalogue for your requirement." },
  { title: "Coordinate Production", detail: "Specifications are confirmed and production begins at our facility in Morbi." },
  { title: "Inspect Quality", detail: "Every batch is checked for size, shade and surface quality before packing." },
  { title: "Arrange Export Packaging", detail: "Reinforced, moisture-safe packaging with clear batch labelling for international transit." },
  { title: "Support Shipment Documentation", detail: "Commercial invoice, packing list, bill of lading and certificate of origin handled in-house." },
];

const whoWeServe = ["Importers", "Distributors", "Wholesalers", "Retailers", "Architects", "Builders", "Project Buyers"];

const decorativeSurface = DESIGN_LIBRARY.find((d) => d.slug === "luxe-calacatta-golden");

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="About Kavish Global"
          title="Manufacturer and exporter of premium ceramic surfaces."
          description="Based in Morbi, India, Kavish Global manufactures and exports premium ceramic tiles, porcelain surfaces and sanitaryware for international markets. From production and quality inspection to export packaging, documentation and shipment coordination, every order is managed with care and consistency."
        />

        <FadeIn className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/70">{company.story.experience}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {company.story.promise.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gold-500/10 px-5 py-2.5 text-sm font-medium text-gold-600 dark:text-gold-400"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        {decorativeSurface && (
          <ScrollFloat depth={0.2} className="mt-20">
            <div className="ceramic-slab relative aspect-[21/9] w-full overflow-hidden rounded-3xl">
              <ProductImage src={decorativeSurface.faces[0]} alt="" fit="cover" />
            </div>
          </ScrollFloat>
        )}

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 border-y border-border-subtle py-14 sm:grid-cols-2 lg:grid-cols-4">
          {company.strengths.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <p className="font-display text-2xl">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.detail}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">
          <ScrollFloat depth={0.35}>
            <FadeIn>
              <DepthCard className="rounded-3xl border border-border-subtle bg-background/60 p-10 backdrop-blur-sm">
                <p className="font-display text-2xl">Our Mission</p>
                <p className="mt-4 leading-relaxed text-foreground/70">{company.story.mission}</p>
              </DepthCard>
            </FadeIn>
          </ScrollFloat>
          <ScrollFloat depth={-0.25} className="md:mt-10">
            <FadeIn delay={0.1}>
              <DepthCard driftDelay={0.8} className="rounded-3xl border border-border-subtle bg-background/60 p-10 backdrop-blur-sm">
                <p className="font-display text-2xl">Our Vision</p>
                <p className="mt-4 leading-relaxed text-foreground/70">{company.story.vision}</p>
              </DepthCard>
            </FadeIn>
          </ScrollFloat>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">Core Values</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <FadeIn key={value} delay={i * 0.06} className="border-t border-border-subtle pt-6">
                <p className="font-display text-sm text-gold-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-2xl">{value}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">How We Work</p>
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {howWeWork.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.05} className="border-t border-border-subtle pt-6">
                <p className="font-display text-sm text-gold-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-xl">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.detail}</p>
              </FadeIn>
            ))}
          </ol>
        </div>

        <div className="mt-32">
          <p className="mb-10 font-display text-3xl md:text-4xl">Who We Serve</p>
          <div className="flex flex-wrap gap-3">
            {whoWeServe.map((buyer) => (
              <span key={buyer} className="rounded-full border border-border-subtle px-5 py-2.5 text-sm text-foreground/70">
                {buyer}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">Manufacturing &amp; Quality Standards</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {company.manufacturing.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05} className="rounded-2xl border border-border-subtle p-8">
                <p className="font-display text-xl">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
