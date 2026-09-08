"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink, DEFAULT_ENQUIRY_MESSAGE } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Happy Moments GWK on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.5)] sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-soft -z-10" />
      <MessageCircle size={24} className="sm:hidden" />
      <MessageCircle size={20} className="hidden sm:block" />
      <span className="hidden text-sm font-semibold sm:block">Chat With Us</span>
    </motion.a>
  );
}
