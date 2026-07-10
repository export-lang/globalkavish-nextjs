import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorldMap } from "@/components/shared/world-map";
import { ContainerLoadAnimation } from "@/components/export/container-load-animation";
import { exportCountries } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Export Services",
  description:
    "Kavish Global exports to 45+ countries with full documentation support — shipping bills, BRC, BL, OEM and private-label programs for ceramic and porcelain tiles.",
  path: "/export",
});

const shippingSteps = [
  { title: "Order Confirmation", detail: "PO confirmed against factory allocation and production slot." },
  { title: "Production & QC", detail: "In-line and pre-loading inspection against agreed shade and calibre." },
  { title: "Container Loading", detail: "Reinforced crating, corner protection and container-wise loading plan." },
  { title: "Documentation", detail: "Commercial invoice, packing list, BL, certificate of origin and BRC." },
  { title: "Ocean Freight", detail: "FCL booking with major shipping lines to all major world ports." },
  { title: "Delivery & Support", detail: "Post-shipment support through customs clearance at destination." },
];

const documents = [
  "Commercial Invoice & Packing List",
  "Bill of Lading (BL)",
  "Certificate of Origin",
  "Bank Realisation Certificate (BRC)",
  "Shipping Bill",
  "Insurance Certificate (on request)",
];

export default function ExportPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Export"
          title="Shipping premium surfaces worldwide."
          description="From Morbi's factories to ports across the Middle East, Africa, Europe, the Americas and Asia — with full container documentation handled in-house."
        />

        <div className="mt-16">
          <WorldMap countries={exportCountries} />
          <div className="mt-8 flex flex-wrap gap-2">
            {exportCountries.map((c) => (
              <span key={c.code} className="rounded-full border border-border-subtle px-4 py-1.5 text-xs text-foreground/60">
                {c.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-10 font-display text-3xl">Shipping Process</p>
            <ol className="space-y-8">
              {shippingSteps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.05} className="flex gap-6 border-b border-border-subtle pb-8">
                  <span className="font-display text-2xl text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-display text-lg">{step.title}</p>
                    <p className="mt-1 text-sm text-foreground/60">{step.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </ol>
          </div>
          <div>
            <p className="mb-10 font-display text-3xl">Container Loading</p>
            <ContainerLoadAnimation />
            <p className="mt-8 mb-4 font-display text-xl">Export Documents We Handle</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map((doc) => (
                <li key={doc} className="rounded-xl border border-border-subtle px-4 py-3 text-sm">
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2">
          <FadeIn className="rounded-3xl border border-border-subtle p-10">
            <p className="font-display text-2xl">OEM Services</p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Manufacturing under your own brand specifications — we coordinate factory selection, quality control
              and packaging to your requirements.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl border border-border-subtle p-10">
            <p className="font-display text-2xl">Private Label</p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Custom box design, branding and catalogue production for distributors who want a dedicated product
              line — as reflected in our Lyca, Kavish and white-label catalogue tiers.
            </p>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
