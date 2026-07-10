import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/reveal-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { EnquiryForm } from "@/components/product/enquiry-form";
import { company } from "@/lib/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Kavish Global for export enquiries, OEM programs and catalogue requests. Office and factory in Morbi, Gujarat, India.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk export."
          description="Reach our export desk directly — by email, WhatsApp, or the form below. We typically respond within one business day."
        />

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FadeIn className="rounded-2xl border border-border-subtle p-6">
                <MapPin className="h-5 w-5 text-gold-500" />
                <p className="mt-4 font-display text-lg">Factory</p>
                <p className="mt-1 text-sm text-foreground/60">{company.address.factory}</p>
              </FadeIn>
              <FadeIn delay={0.05} className="rounded-2xl border border-border-subtle p-6">
                <MapPin className="h-5 w-5 text-gold-500" />
                <p className="mt-4 font-display text-lg">Office</p>
                <p className="mt-1 text-sm text-foreground/60">{company.address.office}</p>
              </FadeIn>
              <FadeIn delay={0.1} className="rounded-2xl border border-border-subtle p-6">
                <Mail className="h-5 w-5 text-gold-500" />
                <p className="mt-4 font-display text-lg">Email</p>
                <a href={`mailto:${company.email}`} className="mt-1 block text-sm text-foreground/60 hover:text-gold-500">
                  {company.email}
                </a>
              </FadeIn>
              <FadeIn delay={0.15} className="rounded-2xl border border-border-subtle p-6">
                <Phone className="h-5 w-5 text-gold-500" />
                <p className="mt-4 font-display text-lg">Phone</p>
                <p className="mt-1 text-sm text-foreground/60">{company.phone}</p>
              </FadeIn>
            </div>

            <a
              href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              Chat with our export team on WhatsApp
            </a>

            <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-border-subtle">
              <iframe
                title="Kavish Global location"
                src="https://www.google.com/maps?q=Morbi,Gujarat,India&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border-subtle p-8 md:p-10">
            <p className="mb-8 font-display text-2xl">Export Enquiry Form</p>
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
