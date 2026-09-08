"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";
import VisualTile from "./VisualTile";

const MOMENTS = [
  { label: "Birthday Setup", emoji: "🎂", span: "row-span-2" },
  { label: "Neon Light Board", emoji: "💡", span: "" },
  { label: "Balloon Decor", emoji: "🎈", span: "" },
  { label: "Fog Entry", emoji: "🌫️", span: "row-span-2" },
  { label: "Cold Fire Entry", emoji: "🔥", span: "" },
  { label: "Red Carpet Entry", emoji: "🎬", span: "" },
  { label: "Cinematic Board", emoji: "📽️", span: "row-span-2" },
  { label: "Bubble Entry", emoji: "🫧", span: "" },
  { label: "Anniversary Setup", emoji: "❤️", span: "" },
  { label: "Bride To Be", emoji: "💍", span: "" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Gallery"
          title="Moments Worth Remembering"
          subtitle="A glimpse of the setups, decor and energy we bring to every celebration."
        />

        <div className="mt-14 grid auto-rows-[140px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {MOMENTS.map((moment, i) => (
            <motion.button
              key={moment.label}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl text-left ${moment.span}`}
            >
              <VisualTile
                seed={i}
                icon={<span>{moment.emoji}</span>}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg-primary/0 transition-colors duration-300 group-hover:bg-bg-primary/50" />
              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wide text-text-primary">
                  {moment.label}
                </span>
                <span className="flex items-center gap-1 text-[10px] uppercase tracking-wide text-cyan">
                  <Eye size={12} /> View Moment
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-bg-primary/95 backdrop-blur-xl p-6"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full glass"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl neon-border"
            >
              <VisualTile seed={active} icon={<span className="text-8xl">{MOMENTS[active].emoji}</span>} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent p-6">
                <p className="font-display text-xl font-semibold uppercase text-text-primary">
                  {MOMENTS[active].label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
