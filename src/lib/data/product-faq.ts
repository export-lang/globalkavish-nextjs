import type { Product as PackingProduct } from "@/lib/data/packing";

/**
 * The same 6 questions on every product page that has a spec table — MOQ,
 * container quantity, payment terms, lead time, samples, certifications.
 * Only the container-quantity answer (and the MOQ figure inside it) is
 * genuinely data-driven per page; the other four are the same honest,
 * non-invented answers everywhere, since no real payment-terms, lead-time
 * or certification data exists per product (see CONTENT_REQUIRED.md).
 */

const rng = (v: [number, number]) => {
  const f = (n: number) => n.toLocaleString("en-IN");
  return v[0] === v[1] ? f(v[0]) : `${f(v[0])}–${f(v[1])}`;
};

const sqm = (v: [number, number]) => {
  const f = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return v[0] === v[1] ? f(v[0]) : `${f(v[0])}–${f(v[1])}`;
};

export function buildStandardFaq(name: string, packing: PackingProduct): { question: string; answer: string }[] {
  const primary = packing.variants[0];

  const containerLines = packing.variants
    .map((v) => {
      const parts = [`${v.thickness}: ${rng(v.boxes20)} boxes / ${sqm(v.sqm20)} m² per 20′ container`];
      if (v.boxes40) parts.push(`${rng(v.boxes40)} boxes / ${sqm(v.sqm40!)} m² per 40′ HQ`);
      return parts.join(", ");
    })
    .join("; ");

  return [
    {
      question: `What is the minimum order quantity for ${name}?`,
      answer: `One full 20′ container is the standard minimum — ${rng(primary.boxes20)} boxes (${sqm(primary.sqm20)} m²) in the ${primary.thickness} thickness. Contact us if you need to combine this size with another format in a mixed container.`,
    },
    {
      question: `How many boxes and square metres fit in a container?`,
      answer: `${containerLines}. Container quantities are typical loads and vary with the loading plan and the weight limit on the route — the exact quantity for your shipment is confirmed on the proforma invoice.`,
    },
    {
      question: `What are your payment terms for ${name}?`,
      answer: `Payment terms are agreed per order and destination. Contact our export team with your requirement and we'll confirm the terms available for your order.`,
    },
    {
      question: `How long from order confirmation to loading?`,
      answer: `Lead time depends on the order quantity and current production schedule for ${name}. Share your requirement and we'll confirm a production and loading timeline before you commit to the order.`,
    },
    {
      question: `Can I get a sample of ${name} before ordering?`,
      answer: `Yes — samples can be arranged for qualified enquiries. Sample cost and freight terms are confirmed per request and are typically credited against the first order.`,
    },
    {
      question: `Which certifications does ${name} carry?`,
      answer: `Certification requirements vary by product and destination market. Our export team will confirm which certificates apply to your order and share supporting documentation on request.`,
    },
  ];
}
