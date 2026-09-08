"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import VisualTile from "./VisualTile";
import MagneticButton from "./MagneticButton";
import { BUSINESS } from "@/lib/constants";

const REELS = [
  { emoji: "🎂", label: "Birthday Setups" },
  { emoji: "🌫️", label: "Fog Entries" },
  { emoji: "🎈", label: "Balloon Decor" },
  { emoji: "🔥", label: "Cold Fire Entry" },
  { emoji: "💍", label: "Bride To Be" },
  { emoji: "🫧", label: "Bubble Entry" },
];

export default function InstagramSection() {
  return (
    <section className="relative bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={BUSINESS.instagramHandle}
          title="See The Latest Happy Moments"
          subtitle="Follow us for celebrations, decorations and ideas."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {REELS.map((reel, i) => (
            <motion.a
              key={reel.label}
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.04 }}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl"
            >
              <VisualTile seed={i} icon={<span>{reel.emoji}</span>} className="transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-1 p-3">
                <Camera size={12} className="text-cyan" />
                <span className="text-[10px] font-medium text-text-secondary">{reel.label}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            <Camera size={16} />
            Follow on Instagram
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
