"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CollectionsProvider } from "@/lib/store";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <CollectionsProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </CollectionsProvider>
    </ThemeProvider>
  );
}
