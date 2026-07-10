"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { company } from "@/lib/data/company";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hello Kavish, I'd like to enquire about your tile collections."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}
