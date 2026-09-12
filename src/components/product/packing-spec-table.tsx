import type { Product, Variant } from "@/lib/data/packing";

/**
 * Verified packing/container data only. A value that doesn't exist is not
 * rendered — no "N/A", no dashes, no guessed numbers.
 */

const rng = (v: [number, number], dp = 0) => {
  const f = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: dp, maximumFractionDigits: dp });
  return v[0] === v[1] ? f(v[0]) : `${f(v[0])}–${f(v[1])}`;
};

const sqft = (m2: number) => (m2 * 10.7639).toFixed(2);

export function PackingSpecTable({ product }: { product: Product }) {
  const has40 = product.variants.some((v) => v.boxes40);

  const fixedRows: { label: string; value: string }[] = [
    { label: "Nominal size", value: `${product.sizeMm[0]} × ${product.sizeMm[1]} mm` },
    { label: "Body type", value: product.body },
    { label: "Water absorption", value: product.waterAbsorption },
    { label: "Surface finishes", value: product.finishes.join(", ") },
    { label: "Edge", value: "Rectified" },
    { label: "Applications", value: product.application.join(", ") },
    { label: "HS code", value: product.hsCode },
    { label: "Origin", value: "India — Morbi, Gujarat" },
  ];

  return (
    <section aria-labelledby="specs">
      <p className="mb-6 font-display text-3xl">Specifications and container loading</p>

      <div className="divide-y divide-border-subtle border-y border-border-subtle">
        {fixedRows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-6 py-4">
            <span className="text-sm text-foreground/50">{row.label}</span>
            <span className="text-right text-sm font-medium">{row.value}</span>
          </div>
        ))}
      </div>

      <p className="mb-4 mt-10 font-display text-xl">Packing by thickness</p>
      <div className="table-scroll overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-left text-xs uppercase tracking-[0.15em] text-foreground/40">
              <th scope="col" className="py-3 pr-4 font-medium">Thickness</th>
              <th scope="col" className="py-3 pr-4 font-medium">Pcs / box</th>
              <th scope="col" className="py-3 pr-4 font-medium">m² / box</th>
              <th scope="col" className="py-3 pr-4 font-medium">kg / box</th>
              <th scope="col" className="py-3 pr-4 font-medium">Boxes / 20′</th>
              <th scope="col" className="py-3 pr-4 font-medium">m² / 20′</th>
              {has40 && (
                <>
                  <th scope="col" className="py-3 pr-4 font-medium">Boxes / 40′ HQ</th>
                  <th scope="col" className="py-3 pr-4 font-medium">m² / 40′ HQ</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {product.variants.map((v: Variant) => (
              <tr key={v.thickness}>
                <th scope="row" className="py-3 pr-4 text-left font-medium">
                  {v.thickness}
                  {v.note && <span className="ml-2 text-xs font-normal text-foreground/50">{v.note}</span>}
                </th>
                <td className="py-3 pr-4">{v.pcsPerBox}</td>
                <td className="py-3 pr-4">
                  {v.sqmPerBox.toFixed(2)}
                  <span className="text-foreground/40"> ({sqft(v.sqmPerBox)} sq ft)</span>
                </td>
                <td className="py-3 pr-4">{rng(v.kgPerBox, 1)}</td>
                <td className="py-3 pr-4">{rng(v.boxes20)}</td>
                <td className="py-3 pr-4">{rng(v.sqm20, 2)}</td>
                {has40 && (
                  <>
                    <td className="py-3 pr-4">{v.boxes40 ? rng(v.boxes40) : ""}</td>
                    <td className="py-3 pr-4">{v.sqm40 ? rng(v.sqm40, 2) : ""}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-foreground/40">
        Container quantities are typical loads and vary with the loading plan and the weight limit on the route. The
        quantity for your shipment is confirmed on the proforma invoice.
      </p>
    </section>
  );
}
