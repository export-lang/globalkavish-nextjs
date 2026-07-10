import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Kavish Global is a porcelain and ceramic export house based in Morbi, Gujarat — the ceramic capital of India — supplying architects, distributors and retailers worldwide.",
  path: "/about",
});

const milestones = [
  { year: "Origins", title: "Rooted in Morbi", detail: "Founded within India's ceramic cluster — the source of over 70% of the country's tile production." },
  { year: "Growth", title: "Building the partner network", detail: "Formalised supply agreements across 40+ factories spanning ceramic, porcelain, GVT and slab manufacturing." },
  { year: "Export", title: "Going global", detail: "Scaled shipping operations to serve distributors and retailers across the Middle East, Africa, Europe and beyond." },
  { year: "Today", title: "A full-catalogue export house", detail: "OEM, private-label and white-label programs across ceramic, porcelain, acrylic and sanitaryware categories." },
];

const leadership = [
  { role: "Managing Partner — Export & Strategy", note: "Oversees international partnerships and export strategy." },
  { role: "Head of Production Coordination", note: "Liaises daily with partner factories on quality and scheduling." },
  { role: "Quality & Compliance Lead", note: "Owns certification, testing and pre-shipment inspection." },
  { role: "Logistics & Documentation", note: "Manages container booking, BRC, BL and customs documentation." },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="About Kavish"
          title="Porcelain, exported with precision."
          description={`Based in ${company.address.office}, Kavish Global sources and exports premium ceramic, porcelain and sanitaryware from India's largest tile-manufacturing cluster — coordinating factories, quality control and logistics under one export desk.`}
        />

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">
          <FadeIn className="rounded-3xl border border-border-subtle p-10">
            <p className="font-display text-2xl">Our Mission</p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              To make world-class Indian ceramic manufacturing accessible to architects, distributors and retailers
              everywhere — with consistent quality, transparent documentation and reliable shipping.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl border border-border-subtle p-10">
            <p className="font-display text-2xl">Our Vision</p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              To be the most trusted export partner for premium porcelain and sanitaryware — recognised for the
              depth of our catalogue and the discipline of our export process.
            </p>
          </FadeIn>
        </div>

        <div className="mt-32">
          <p className="mb-16 font-display text-3xl md:text-4xl">Our Journey</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {milestones.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.08} className="border-t border-border-subtle pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-500">{m.year}</p>
                <p className="mt-3 font-display text-xl">{m.title}</p>
                <p className="mt-2 text-sm text-foreground/60">{m.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-16 font-display text-3xl md:text-4xl">Leadership</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <div key={l.role} className="rounded-2xl border border-border-subtle p-6">
                <div className="mb-6 aspect-square rounded-xl bg-surface" />
                <p className="font-display text-lg leading-tight">{l.role}</p>
                <p className="mt-2 text-sm text-foreground/50">{l.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/40">Team profiles and photography coming soon.</p>
        </div>
      </Container>
    </div>
  );
}
