"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Crown } from "lucide-react";
import clsx from "clsx";
import SectionHeading from "./SectionHeading";
import { PACKAGES, buildWhatsAppLink, packageWhatsAppMessage, type PackagePlan } from "@/lib/constants";

function tierStyles(tier: PackagePlan["tier"]) {
  switch (tier) {
    case "popular":
      return {
        card: "border-magenta/50 lg:-translate-y-3 shadow-[0_0_50px_rgba(236,43,255,0.25)]",
        badge: "bg-gradient-to-r from-magenta to-pink text-white",
        price: "text-gradient",
        cta: "bg-gradient-to-r from-magenta to-pink text-white",
      };
    case "premium":
      return {
        card: "border-cyan/50 shadow-[0_0_50px_rgba(0,217,255,0.25)]",
        badge: "bg-gradient-to-r from-cyan to-purple text-bg-primary",
        price: "text-gradient",
        cta: "bg-gradient-to-r from-cyan via-purple to-magenta text-white",
      };
    default:
      return {
        card: "border-white/10",
        badge: "",
        price: "text-text-primary",
        cta: "bg-white/10 text-text-primary hover:bg-white/15",
      };
  }
}

export default function Packages() {
  return (
    <section id="packages" className="relative bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Pick Your Perfect Celebration"
          subtitle="Simple packages. Beautiful setups. Unforgettable moments."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {PACKAGES.map((pkg, i) => {
            const styles = tierStyles(pkg.tier);
            const isPremium = pkg.tier === "premium";
            const isPopular = pkg.tier === "popular";
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={clsx(
                  "relative flex flex-col rounded-3xl border glass p-7",
                  styles.card
                )}
              >
                {pkg.badge && (
                  <span
                    className={clsx(
                      "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider",
                      styles.badge
                    )}
                  >
                    <span className="inline-flex items-center gap-1">
                      {isPremium ? <Crown size={12} /> : <Sparkles size={12} />}
                      {pkg.badge}
                    </span>
                  </span>
                )}

                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-text-primary">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs text-text-secondary">{pkg.capacity}</p>

                <div className={clsx("mt-5 font-display text-4xl font-bold", styles.price)}>
                  ₹{pkg.price}
                  <span className="text-sm font-normal text-text-secondary">/-</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.includes.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check size={15} className="mt-0.5 shrink-0 text-cyan" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppLink(packageWhatsAppMessage(pkg))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)]",
                    styles.cta
                  )}
                >
                  {pkg.ctaLabel}
                </a>

                {(isPopular || isPremium) && (
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-40 blur-2xl"
                    style={{
                      background: isPremium
                        ? "linear-gradient(135deg, rgba(0,217,255,0.25), rgba(168,85,247,0.25))"
                        : "linear-gradient(135deg, rgba(236,43,255,0.25), rgba(255,60,172,0.25))",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
