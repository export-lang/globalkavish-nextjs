import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Quality & Certifications",
  description:
    "Every Kavish Global shipment passes strict quality inspection, backed by ISO 9001, ISO 14001, CE, BIS, SGS, Intertek and Green Product certification.",
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
          <p className="mb-10 font-display text-3xl">Certifications &amp; Compliance</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.certifications.map((cert) => (
              <div key={cert.name} className="rounded-2xl border border-border-subtle p-6">
                <p className="font-display text-xl">{cert.name}</p>
                <p className="mt-2 text-sm text-foreground/60">{cert.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-foreground/40">
            Certificate copies are available to buyers on request through our export team.
          </p>
        </div>
      </Container>
    </div>
  );
}
