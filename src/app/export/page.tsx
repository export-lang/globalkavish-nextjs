import { Download, Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

import { ScrollFloat } from "@/components/motion/scroll-float";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorldMap } from "@/components/shared/world-map";
import { ContainerLoadAnimation } from "@/components/export/container-load-animation";
import { Button } from "@/components/ui/button";
import { company, exportCountries } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Export Services",
  description:
    "Kavish Global is a ceramic export and supply partner based in Morbi, India — sourcing, quality inspection, export-standard packaging and full documentation for international buyers.",
  path: "/export",
});

const exportServices = [
  { title: "Product Sourcing & Selection", detail: "We identify and select the right designs, sizes and finishes for your market from our qualified production network." },
  { title: "Production Coordination", detail: "Order specifications are coordinated with the production partner from confirmation through to completion." },
  { title: "Pre-Shipment Quality Inspection", detail: "Every batch is checked for size, shade and surface quality before packing." },
  { title: "Export-Standard Packaging", detail: "Reinforced, moisture-safe packaging with clear batch labelling for international transit." },
  { title: "Container Loading Coordination", detail: "Container-wise loading plans, supervised to export standard." },
  { title: "Export Documentation", detail: "Commercial invoice, packing list, bill of lading and certificate of origin handled in-house." },
  { title: "OEM / Private-Label Support", detail: "Custom brand specifications, box design and a dedicated product line for distributors who want it." },
];

const workflow = [
  { title: "Requirement & Product Selection", detail: "Share your product type, size, finish and quantity — we shortlist matching designs from the Kavish catalogue." },
  { title: "Quotation & Confirmation", detail: "We share pricing and MOQ; the order is confirmed once terms are agreed." },
  { title: "Production Coordination", detail: "Your specifications are coordinated with the production partner." },
  { title: "Quality Inspection", detail: "Every batch is checked for size, shade and surface quality before packing." },
  { title: "Packaging & Container Loading", detail: "Reinforced export packaging, batch labelling and a container-wise loading plan." },
  { title: "Documentation & Shipment", detail: "Commercial invoice, packing list, bill of lading and certificate of origin issued with the shipment." },
];

const documents = ["Commercial Invoice", "Packing List", "Bill of Lading (BL)", "Certificate of Origin"];

export default function ExportPage() {
  const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Kavish, I'd like to discuss an export enquiry. Could you share more details?"
  )}`;
  const quoteHref = `mailto:${company.email}?subject=${encodeURIComponent("Export quote request")}`;
  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent("Export enquiry")}`;
  const catalogueHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Kavish catalogue request"
  )}&body=${encodeURIComponent("Hello Kavish Global team,\n\nPlease share the Kavish catalogue.\n\nThank you.")}`;

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Export"
          title="Your ceramic export and supply partner."
          description="Kavish Global sources, inspects and ships premium ceramic and porcelain surfaces from Morbi, India — with full container documentation handled in-house."
        />

        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton>
            <Button asChild size="lg">
              <a href={quoteHref}>
                <Send className="h-4 w-4" />
                Request a Quote
              </a>
            </Button>
          </MagneticButton>
          <Button asChild size="lg" variant="outline">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Enquiry
            </a>
          </Button>
        </div>

        <div className="mt-24">
          <p className="mb-10 font-display text-3xl">Export Services</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exportServices.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05} className="rounded-2xl border border-border-subtle p-8">
                <p className="font-display text-sm text-gold-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-xl">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-3 font-display text-3xl">Markets We Serve</p>
          <p className="mb-10 max-w-2xl text-sm text-foreground/60">
            Regions we actively support for distributors, importers and project buyers — enquiries welcome from
            outside this list too.
          </p>
          <WorldMap countries={exportCountries} />
          <div className="mt-10 flex flex-wrap gap-2">
            {company.exportMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-600 dark:text-gold-400"
              >
                {market}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-10 font-display text-3xl">Order Workflow</p>
            <ol className="space-y-8">
              {workflow.map((step, i) => (
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
            <p className="mb-10 font-display text-3xl">Packaging & Container Loading</p>
            <ScrollFloat depth={0.35}>
              <ContainerLoadAnimation />
            </ScrollFloat>
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

        <div className="mt-32 rounded-3xl border border-border-subtle p-8 md:p-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold-500">Export Enquiry</p>
          <h2 className="mb-8 font-display text-3xl">Start an export conversation.</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button asChild size="lg">
              <a href={quoteHref}>
                <Send className="h-4 w-4" />
                Request a Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Enquiry
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={emailHref}>
                <Mail className="h-4 w-4" />
                Email Enquiry
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={catalogueHref}>
                <Download className="h-4 w-4" />
                Request Catalogue
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-foreground/50">
            Prefer a form?{" "}
            <Link href="/contact" className="text-gold-500 hover:underline">
              Visit the contact page
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
