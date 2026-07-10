"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem("gk-cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem("gk-cookie-consent", "true");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto flex max-w-xl flex-col gap-4 rounded-2xl border border-border-subtle bg-background/95 p-6 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-foreground/70">
            We use cookies to improve your experience and understand how you use our site.
          </p>
          <Button size="sm" onClick={accept} className="shrink-0">
            Accept
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
