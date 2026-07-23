import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LOGO_SRC = "/media/brand/kavish-global-logo.png";

/**
 * The single Kavish Global brand mark (logo + wordmark) reused in the
 * navbar and footer. The logo is a black PNG, so `.brand-logo` (globals.css)
 * inverts it to white on the site's actual dark theme (data-theme, not
 * prefers-color-scheme, since that's how next-themes is configured here).
 * The wordmark text is `aria-hidden` so the link's accessible name comes
 * from the logo's alt text once, not twice.
 */
export function BrandMark({
  className,
  logoClassName,
  textClassName,
  link = true,
  onClick,
}: {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
  link?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      <Image
        src={LOGO_SRC}
        alt="Kavish Global logo"
        width={3376}
        height={976}
        priority
        className={cn("brand-logo h-8 w-auto shrink-0 object-contain md:h-9", logoClassName)}
      />
      <span aria-hidden className={cn("font-display tracking-[0.15em]", textClassName)}>
        KAVISH GLOBAL
      </span>
    </>
  );

  const wrapperClassName = cn("flex items-center gap-2.5", className);

  if (!link) {
    return <div className={wrapperClassName}>{content}</div>;
  }

  return (
    <Link href="/" onClick={onClick} className={wrapperClassName}>
      {content}
    </Link>
  );
}
