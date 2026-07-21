import { Download, Mail, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import type { Product } from "@/lib/types";

/**
 * The single B2B enquiry panel for a product page: quote, WhatsApp, email
 * and catalogue request, all routed to verified Kavish Global contact
 * details. No response-time promise is made — none has been confirmed.
 */
export function EnquiryPanel({ product }: { product: Product }) {
  const quoteHref = `mailto:${company.email}?subject=${encodeURIComponent(`Quote request — ${product.name}`)}`;
  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(`Enquiry — ${product.name}`)}`;
  const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hello Kavish, I'm interested in ${product.name}${
      product.sizes.length ? ` (${product.sizes.join(", ")})` : ""
    }. Could you share pricing and MOQ?`
  )}`;
  const catalogueHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Kavish catalogue request — ${product.name}`
  )}&body=${encodeURIComponent(
    `Hello Kavish Global team,\n\nPlease share the Kavish catalogue PDF(s) for: ${product.name}.\n\nThank you.`
  )}`;

  return (
    <div className="rounded-2xl border border-border-subtle bg-background/60 p-6 shadow-xl shadow-black/5 backdrop-blur-sm md:p-8">
      <p className="font-display text-xl">Enquire About This Collection</p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
            Request Kavish Catalogue{product.kavishCatalogueCount > 1 ? "s" : ""}
          </a>
        </Button>
      </div>
      {product.kavishCatalogueCount > 0 && (
        <p className="mt-4 text-xs text-foreground/50">
          {product.kavishCatalogueCount} Kavish catalogue{product.kavishCatalogueCount > 1 ? "s" : ""} available on
          request.
        </p>
      )}
    </div>
  );
}
