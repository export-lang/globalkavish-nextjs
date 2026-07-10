import { cn } from "@/lib/utils";

const PALETTES: [string, string, string][] = [
  ["#e2dbd0", "#a89a83", "#4f4638"],
  ["#efebe5", "#cdc2b0", "#6b5f4e"],
  ["#d9cdb8", "#a3907a", "#332c23"],
  ["#f0e6d2", "#cfae6b", "#3a3226"],
  ["#e6e1da", "#8f8577", "#26221c"],
  ["#eee7dc", "#b3924f", "#1c1712"],
];

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Deterministic, generated tile visual used in place of real product
 * photography until catalogue imagery is supplied via the CMS.
 */
export function ProductSwatch({
  seed,
  className,
  grid = true,
}: {
  seed: string;
  className?: string;
  grid?: boolean;
}) {
  const h = hash(seed);
  const palette = PALETTES[h % PALETTES.length];
  const angle = h % 360;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})`,
      }}
      aria-hidden
    >
      {grid && (
        <svg className="absolute inset-0 h-full w-full opacity-20 mix-blend-overlay" preserveAspectRatio="none">
          <defs>
            <pattern id={`grid-${h}`} width="12%" height="12%" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 0 100 M 0 0 L 100 0" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${h})`} />
        </svg>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
    </div>
  );
}
