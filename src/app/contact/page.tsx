import { Download, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ContactEnquiryForm } from "@/components/contact/contact-enquiry-form";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Ceramic sourcing and export enquiries for Kavish Global, Morbi, India — reach our team by email, WhatsApp, or the enquiry form.",
  path: "/contact",
});

const buyerGuidance = [
  "Product type",
  "Size",
  "Finish",
  "Estimated quantity",
  "Destination country / port",
  "Packaging or branding needs (where relevant)",
];

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;
  const quoteHref = `mailto:${company.email}?subject=${encodeURIComponent("Export quote request")}`;
  const catalogueHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Kavish catalogue request"
  )}&body=${encodeURIComponent("Hello Kavish Global team,\n\nPlease share the Kavish catalogue.\n\nThank you.")}`;

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Discuss your tile requirement."
          description="Ceramic sourcing and export enquiries — Kavish Global, Morbi, India. Reach our team by email, WhatsApp, or the form below."
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
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {company.email && (
                <FadeIn className="rounded-2xl border border-border-subtle p-6">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <p className="mt-4 font-display text-lg">Email</p>
                  <a href={`mailto:${company.email}`} className="mt-1 block text-sm text-foreground/60 hover:text-gold-500">
                    {company.email}
                  </a>
                </FadeIn>
              )}
              {company.phone && (
                <FadeIn delay={0.05} className="rounded-2xl border border-border-subtle p-6">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <p className="mt-4 font-display text-lg">Phone / WhatsApp</p>
                  <p className="mt-1 text-sm text-foreground/60">{company.phone}</p>
                </FadeIn>
              )}
              {company.address.factory && (
                <FadeIn delay={0.1} className="rounded-2xl border border-border-subtle p-6">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <p className="mt-4 font-display text-lg">Factory</p>
                  <p className="mt-1 text-sm text-foreground/60">{company.address.factory}</p>
                </FadeIn>
              )}
              {company.address.office && (
                <FadeIn delay={0.15} className="rounded-2xl border border-border-subtle p-6">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <p className="mt-4 font-display text-lg">Office</p>
                  <p className="mt-1 text-sm text-foreground/60">{company.address.office}</p>
                </FadeIn>
              )}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              Chat with our export team on WhatsApp
            </a>

            <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-border-subtle">
              <iframe
                title="Kavish Global factory location"
                src="https://www.google.com/maps?q=Nichi+Mandal,+Morbi,+Gujarat+363642,+India&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 rounded-2xl border border-border-subtle p-6">
              <p className="mb-4 font-display text-lg">Quick Actions</p>
              <div className="grid grid-cols-2 gap-3">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-3 text-sm hover:border-gold-500 hover:text-gold-500">
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-3 text-sm hover:border-gold-500 hover:text-gold-500">
                  <Mail className="h-4 w-4 shrink-0" />
                  Email
                </a>
                <a href={catalogueHref} className="flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-3 text-sm hover:border-gold-500 hover:text-gold-500">
                  <Download className="h-4 w-4 shrink-0" />
                  Request Catalogue
                </a>
                <Link href="/collections" className="flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-3 text-sm hover:border-gold-500 hover:text-gold-500">
                  <Send className="h-4 w-4 shrink-0" />
                  View Collections
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border-subtle p-6">
              <p className="mb-4 font-display text-lg">What to include in your enquiry</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {buyerGuidance.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-border-subtle bg-background/70 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-10">
            <p className="mb-8 font-display text-2xl">Export Enquiry Form</p>
            <ContactEnquiryForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
