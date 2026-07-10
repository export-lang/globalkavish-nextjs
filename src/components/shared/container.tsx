import { createElement } from "react";

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return createElement(
    as,
    { className: cn("mx-auto w-full max-w-[1680px] px-6 md:px-10 lg:px-16", className) },
    children
  );
}
