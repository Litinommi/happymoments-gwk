"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import DiscoLights from "./DiscoLights";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";
import { buildWhatsAppLink, DEFAULT_ENQUIRY_MESSAGE } from "@/lib/constants";

export default function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-28 sm:py-36">
      <DiscoLights />
      <ParticleField count={18} className="absolute inset-0" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(236,43,255,0.35) 0%, rgba(0,217,255,0.2) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-5xl"
        >
          Your Celebration
          <span className="text-gradient block">Starts Here.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-md text-base text-text-secondary sm:text-lg"
        >
          Tell us what you&apos;re celebrating. We&apos;ll help you make it special.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} />
            WhatsApp Us
          </MagneticButton>
          <MagneticButton href="#packages" variant="outline">
            <CalendarCheck size={17} />
            Check Availability
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
