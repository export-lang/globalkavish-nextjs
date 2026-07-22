"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";
import { allFinishes, allSizes } from "@/lib/data/products";

type Status = "idle" | "sending" | "sent";

/**
 * No backend exists for this site — submitting opens a pre-filled email
 * to company.email via mailto. The success state is worded to reflect
 * exactly that (client opened), never "message sent" or "received".
 */
export function ContactEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const formId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const whatsappNumber = String(form.get("whatsappNumber") || "").trim();
    if (!email && !whatsappNumber) {
      setError("Please provide an email address or a WhatsApp number so we can reach you.");
      return;
    }
    setError(null);
    setStatus("sending");

    const productInterest = String(form.get("productInterest") || "General");
    const subject = encodeURIComponent(`Export enquiry — ${productInterest}`);
    const lines = [
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Country: ${form.get("country")}`,
      email && `Email: ${email}`,
      whatsappNumber && `WhatsApp: ${whatsappNumber}`,
      `Product interest: ${productInterest}`,
      form.get("size") && `Required size: ${form.get("size")}`,
      form.get("finish") && `Finish: ${form.get("finish")}`,
      form.get("quantity") && `Estimated quantity: ${form.get("quantity")}`,
      form.get("port") && `Target port: ${form.get("port")}`,
      "",
      "Message:",
      String(form.get("message") || ""),
    ].filter(Boolean);

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border-subtle p-6 text-sm">
        <p className="font-display text-lg">Your email app should now be open.</p>
        <p className="mt-2 text-foreground/60">Your enquiry has been pre-filled — please review it and send it from there.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-gold-500 underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Full name" htmlFor={`${formId}-name`}>
        <input id={`${formId}-name`} name="name" required className="input-field" />
      </Field>
      <Field label="Company name" htmlFor={`${formId}-company`}>
        <input id={`${formId}-company`} name="company" required className="input-field" />
      </Field>
      <Field label="Country" htmlFor={`${formId}-country`}>
        <input id={`${formId}-country`} name="country" required className="input-field" />
      </Field>
      <Field label="Product interest" htmlFor={`${formId}-product`}>
        <select id={`${formId}-product`} name="productInterest" required defaultValue="" className="input-field">
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Email" htmlFor={`${formId}-email`}>
        <input id={`${formId}-email`} name="email" type="email" className="input-field" />
      </Field>
      <Field label="WhatsApp number" htmlFor={`${formId}-whatsapp`}>
        <input id={`${formId}-whatsapp`} name="whatsappNumber" type="tel" className="input-field" />
      </Field>
      <Field label="Required size (optional)" htmlFor={`${formId}-size`}>
        <select id={`${formId}-size`} name="size" defaultValue="" className="input-field">
          <option value="">Any / not sure yet</option>
          {allSizes.map((s) => (
            <option key={s} value={s}>
              {s.replace("x", "×")} mm
            </option>
          ))}
        </select>
      </Field>
      <Field label="Finish (optional)" htmlFor={`${formId}-finish`}>
        <select id={`${formId}-finish`} name="finish" defaultValue="" className="input-field">
          <option value="">Any / not sure yet</option>
          {allFinishes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Estimated quantity (optional)" htmlFor={`${formId}-quantity`}>
        <input id={`${formId}-quantity`} name="quantity" placeholder="e.g. 2 containers" className="input-field" />
      </Field>
      <Field label="Target port (optional)" htmlFor={`${formId}-port`}>
        <input id={`${formId}-port`} name="port" className="input-field" />
      </Field>
      <Field label="Message" htmlFor={`${formId}-message`} className="sm:col-span-2">
        <textarea id={`${formId}-message`} name="message" required rows={4} className="input-field" />
      </Field>

      {error && <p className="text-sm text-red-500 sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Opening email…" : "Send Enquiry"}
        </Button>
        <p className="mt-3 text-xs text-foreground/40">
          Information submitted through this form is used to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
        {label}
      </label>
      {children}
    </div>
  );
}
