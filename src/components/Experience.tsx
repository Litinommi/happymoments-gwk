"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FEATURES } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(236,43,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(0,217,255,0.12) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="More Than A Party. It's A Memory."
          subtitle="Every detail, curated to turn a celebration into something worth remembering."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -5, borderColor: "rgba(0,217,255,0.5)" }}
              className="glass flex flex-col items-center gap-4 rounded-2xl px-5 py-8 text-center transition-colors"
            >
              <span className="text-4xl drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                {feature.emoji}
              </span>
              <span className="text-sm font-medium leading-snug text-text-primary">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
