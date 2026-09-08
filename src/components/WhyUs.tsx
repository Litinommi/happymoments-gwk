"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { WHY_US } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why Us" title="Why Happy Moments?" />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative border-t border-white/10 pt-6"
            >
              <span className="font-display text-5xl font-bold text-transparent [-webkit-text-stroke:1px_var(--cyan)] sm:text-6xl">
                {item.number}
              </span>
              <p className="mt-4 text-lg font-medium uppercase tracking-wide text-text-primary">
                {item.title}
              </p>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 + 0.2 }}
                className="mt-4 block h-px bg-gradient-to-r from-cyan to-magenta"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
