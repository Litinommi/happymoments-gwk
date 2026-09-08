"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import VisualTile from "./VisualTile";
import { OCCASIONS } from "@/lib/constants";

export default function Celebrations() {
  return (
    <section id="celebrations" className="relative bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Every Occasion"
          title="Celebrate Every Occasion"
          subtitle="From intimate birthdays to unforgettable celebrations, we create the perfect atmosphere for your special day."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((occasion, i) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl neon-border"
            >
              <VisualTile seed={i} icon={<span>{occasion.emoji}</span>} className="transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-text-primary">
                  {occasion.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-text-secondary opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {occasion.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
