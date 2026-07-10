import { cn } from "@/lib/utils";
import { RevealText } from "@/components/shared/reveal-text";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-500">{eyebrow}</p>
      )}
      <RevealText as="h2" className="font-display text-balance text-4xl leading-[1.05] md:text-6xl">
        {title}
      </RevealText>
      {description && (
        <p className="mt-6 text-balance text-lg leading-relaxed text-foreground/70">{description}</p>
      )}
    </div>
  );
}
