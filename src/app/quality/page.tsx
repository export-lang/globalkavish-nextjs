import { Download, Mail, MessageCircle, Send } from "lucide-react";

import { ScrollFloat } from "@/components/motion/scroll-float";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { ProductImage } from "@/components/shared/product-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import { DESIGN_LIBRARY } from "@/lib/data/product-images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Quality",
  description:
    "How Kavish Global coordinates quality checks and pre-shipment inspection against your approved order details before export.",
  path: "/quality",
});

const qualityApproach = [
  "Approved product selection",
  "Confirmed size",
  "Confirmed finish",
  "Visual appearance",
  "Quantity",
  "Packaging",
  "Buyer-approved order details",
];

const inspectionStages = [
  { title: "Order Specification Review", detail: "The approved product, size, finish and quantity are confirmed against the order before production begins." },
  { title: "Product & Surface Verification", detail: "Produced tiles are checked against the approved design, shade and surface appearance." },
  { title: "Quantity & Batch Check", detail: "Quantities and batch consistency are verified against the confirmed order." },
  { title: "Packaging & Labelling Inspection", detail: "Carton condition, product identification and labelling are checked before packing is finalised." },
  { title: "Pre-Dispatch Confirmation", detail: "A final review against the approved order details before the shipment is released." },
];

const checkpoints = [
  "Product type",
  "Size and finish",
  "Shade and visual consistency",
  "Surface appearance",
  "Design/face matching (where applicable)",
  "Quantity",
  "Carton condition",
  "Labelling",
  "Palletisation (where applicable)",
];

const buyerApproval = ["Catalogue reference", "Selected design", "Finish", "Size", "Packing requirement", "Label/branding requirement (where applicable)"];

const packagingChecks = [
  "Carton condition",
  "Product identification",
  "Quantity marking",
  "Batch separation",
  "Pallet/strap condition (where used)",
  "Loading readiness",
];

const issueHandling = [
  "Isolate the concern",
  "Re-check against the approved order details",
  "Coordinate corrective action",
  "Confirm before shipment proceeds",
];

const decorativeSurface = DESIGN_LIBRARY.find((d) => d.slug === "mysterious-black");

export default function QualityPage() {
  const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Kavish, I'd like to discuss product quality and inspection for an order."
  )}`;
  const quoteHref = `mailto:${company.email}?subject=${encodeURIComponent("Product requirement discussion")}`;
  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent("Quality enquiry")}`;
  const catalogueHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Kavish catalogue request"
  )}&body=${encodeURIComponent("Hello Kavish Global team,\n\nPlease share the Kavish catalogue.\n\nThank you.")}`;

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Quality"
          title="Checked against your approved order, before it ships."
          description="Every Kavish Global order is coordinated, verified and inspected against the product, size, finish, quantity and packaging you've approved — with any concern resolved before dispatch, not after."
        />

        {decorativeSurface && (
          <ScrollFloat depth={0.2} className="mt-16">
            <div className="ceramic-slab relative aspect-[21/9] w-full overflow-hidden rounded-3xl">
              <ProductImage src={decorativeSurface.faces[0]} alt="" fit="cover" />
            </div>
          </ScrollFloat>
        )}

        <div className="mt-20">
          <p className="mb-6 font-display text-3xl">Our Quality Approach</p>
          <p className="mb-8 max-w-2xl text-sm text-foreground/60">
            Checks are coordinated against the specific details of your order — not a generic, one-size standard.
          </p>
          <div className="flex flex-wrap gap-3">
            {qualityApproach.map((item) => (
              <span key={item} className="rounded-full border border-border-subtle px-5 py-2.5 text-sm text-foreground/70">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">Inspection Stages</p>
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {inspectionStages.map((stage, i) => (
              <FadeIn key={stage.title} delay={i * 0.05} className="border-t border-border-subtle pt-6">
                <p className="font-display text-sm text-gold-500">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-xl">{stage.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{stage.detail}</p>
              </FadeIn>
            ))}
          </ol>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-8 font-display text-2xl">Checkpoints</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {checkpoints.map((c) => (
                <li key={c} className="rounded-xl border border-border-subtle px-4 py-3 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-8 font-display text-2xl">Buyer-Approved References</p>
            <p className="mb-6 text-sm text-foreground/60">Before production, we confirm the details you&apos;ve approved:</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {buyerApproval.map((c) => (
                <li key={c} className="rounded-xl border border-border-subtle px-4 py-3 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-8 font-display text-2xl">Packaging Quality</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {packagingChecks.map((c) => (
                <li key={c} className="rounded-xl border border-border-subtle px-4 py-3 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-8 font-display text-2xl">If a Mismatch Is Identified</p>
            <p className="mb-6 text-sm text-foreground/60">
              Before dispatch, any concern is handled calmly and directly:
            </p>
            <ol className="space-y-3">
              {issueHandling.map((step, i) => (
                <li key={step} className="flex items-center gap-4 rounded-xl border border-border-subtle px-4 py-3 text-sm">
                  <span className="font-display text-gold-500">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-32">
          <p className="mb-14 font-display text-3xl md:text-4xl">Manufacturing Standards</p>
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

        <div className="mt-32 rounded-3xl border border-border-subtle p-8 md:p-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold-500">Quality Enquiry</p>
          <h2 className="mb-8 font-display text-3xl">Discuss your product requirements.</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button asChild size="lg">
              <a href={quoteHref}>
                <Send className="h-4 w-4" />
                Discuss Product Requirements
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={emailHref}>
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={catalogueHref}>
                <Download className="h-4 w-4" />
                Request Catalogue
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
