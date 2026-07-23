import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LOGO_SRC = "/media/brand/kavish-global-logo.png";

/**
 * The single Kavish Global brand mark — logo image only, reused in the
 * navbar and footer. The logo is a black PNG, so `.brand-logo` (globals.css)
 * inverts it to white on the site's actual dark theme (data-theme, not
 * prefers-color-scheme, since that's how next-themes is configured here).
 */
export function BrandMark({
  className,
  logoClassName,
  link = true,
  onClick,
}: {
  className?: string;
  logoClassName?: string;
  link?: boolean;
  onClick?: () => void;
}) {
  const logo = (
    <Image
      src={LOGO_SRC}
      alt="Kavish Global"
      width={3376}
      height={976}
      priority
      className={cn("brand-logo h-9 w-auto shrink-0 object-contain md:h-12", logoClassName)}
    />
  );

  if (!link) {
    return <div className={cn("flex items-center", className)}>{logo}</div>;
  }

  return (
    <Link href="/" onClick={onClick} aria-label="Kavish Global home" className={cn("flex items-center", className)}>
      {logo}
    </Link>
  );
}
