import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { company, manufacturingTimeline, qualityChecks } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Quality & Certifications",
  description:
    "Every Global Kavish shipment is inspected against dimensional, shade and strength standards, backed by ISO 9001, ISO 14001, CE, BIS, SGS and Intertek certification.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Quality"
          title="Inspected before it ever leaves Morbi."
          description="Our quality process runs alongside manufacturing at every partner factory — from raw material testing to the final pre-shipment container inspection."
        />

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-10 font-display text-3xl">Manufacturing Process</p>
            <div className="space-y-6">
              {manufacturingTimeline.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.04} className="flex gap-6 border-b border-border-subtle pb-6">
                  <span className="font-display text-xl text-gold-500">{step.step}</span>
                  <div>
                    <p className="font-display text-lg">{step.title}</p>
                    <p className="mt-1 text-sm text-foreground/60">{step.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-10 font-display text-3xl">Testing &amp; Inspection</p>
            <ul className="space-y-3">
              {qualityChecks.map((check) => (
                <li key={check} className="flex items-center gap-3 rounded-xl border border-border-subtle px-5 py-4 text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {check}
                </li>
              ))}
            </ul>

            <p className="mt-14 mb-6 font-display text-2xl">Packaging Standards</p>
            <p className="text-sm leading-relaxed text-foreground/60">
              Every carton is edge-protected and moisture-sealed, palletised or crated according to destination
              handling conditions, and labelled with size, shade batch and item code for easy customs and site
              verification.
            </p>
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-10 font-display text-3xl">Manufacturing Advantages</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.manufacturing.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border-subtle p-6">
                <p className="font-display text-xl">{item.title}</p>
                <p className="mt-2 text-sm text-foreground/60">{item.detail}</p>
              </div>
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
        </div>
      </Container>
    </div>
  );
}
