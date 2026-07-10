"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";

export function EnquiryForm({ productName }: { productName?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Export enquiry${productName ? ` — ${productName}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nCompany: ${form.get("company")}\nCountry: ${form.get("country")}\nContainers required: ${form.get("quantity")}\n\nMessage:\n${form.get("message")}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <input name="name" required placeholder="Full name" className="input-field" />
      <input name="company" placeholder="Company name" className="input-field" />
      <input name="country" required placeholder="Country" className="input-field" />
      <input name="quantity" placeholder="Containers required" className="input-field" />
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us about your requirement…"
        className="input-field sm:col-span-2"
      />
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Enquiry
        </Button>
        {submitted && (
          <p className="mt-3 text-sm text-foreground/60">
            Your email client should have opened — send it through and our export team will reply within 24 hours.
          </p>
        )}
      </div>
    </form>
  );
}
