"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import DiscoLights from "./DiscoLights";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";
import { buildWhatsAppLink, DEFAULT_ENQUIRY_MESSAGE } from "@/lib/constants";

const HEADING_LINE_1 = "MAKE EVERY MOMENT";
const HEADING_LINE_2 = "A HAPPY MOMENT";

function AnimatedLine({ text, delayStart }: { text: string; delayStart: number }) {
  const words = text.split(" ");
  let letterIndex = 0;
  return (
    <span className="inline-block">
      {words.map((word, wi) => {
        const isLastWord = wi === words.length - 1;
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              const i = letterIndex++;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: delayStart + i * 0.025,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
            {isLastWord ? null : <>&nbsp;</>}
          </span>
        );
      })}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bg-primary"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 90%, rgba(0,217,255,0.12) 0%, transparent 60%)",
        }}
      />
      <DiscoLights />
      <ParticleField count={30} className="absolute inset-0" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-magenta/20 blur-2xl" />
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full ring-2 ring-white/15">
            <Image src="/logo.jpg" alt="Happy Moments GWK" fill sizes="96px" className="object-cover" priority />
          </div>
        </motion.div>

        <h1 className="font-display max-w-4xl text-4xl font-bold uppercase leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          <span className="block text-text-primary">
            <AnimatedLine text={HEADING_LINE_1} delayStart={0.7} />
          </span>
          <span className="text-gradient block">
            <AnimatedLine text={HEADING_LINE_2} delayStart={1.15} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="mt-6 max-w-xl text-balance text-base text-text-secondary sm:text-lg"
        >
          Celebrate birthdays, anniversaries, get-togethers and unforgettable
          special moments at Happy Moments GWK.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.15 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)} target="_blank" rel="noopener noreferrer">
            Book Your Celebration
          </MagneticButton>
          <MagneticButton href="#packages" variant="outline">
            Explore Packages
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-secondary"
        >
          <MapPin size={14} className="text-cyan" />
          GWK &middot; Chaitanya Nagar, Gudivada
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-8"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] text-text-secondary">
          Scroll to celebrate
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
