"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { BUSINESS, buildWhatsAppLink, DEFAULT_ENQUIRY_MESSAGE } from "@/lib/constants";

export default function Location() {
  const mapsQuery = encodeURIComponent(BUSINESS.mapsQuery);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`;

  return (
    <section id="contact" className="relative bg-bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Find Us" title="Come Celebrate With Us" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-col justify-between rounded-3xl p-8 lg:col-span-2"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10">
                <MapPin size={22} className="text-cyan" />
              </div>
              <address className="mt-6 not-italic text-lg leading-relaxed text-text-primary">
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line2}
                <br />
                {BUSINESS.address.line3}
              </address>

              <div className="mt-6 flex flex-col gap-2 text-sm text-text-secondary">
                {BUSINESS.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-2 transition-colors hover:text-cyan"
                  >
                    <Phone size={14} />
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <MagneticButton href={directionsUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                <Navigation size={16} />
                Get Directions
              </MagneticButton>
              <MagneticButton
                href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="w-full"
              >
                WhatsApp Us
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl neon-border lg:col-span-3"
          >
            <iframe
              title="Happy Moments GWK location"
              src={embedUrl}
              className="h-[360px] w-full grayscale-[30%] invert-[92%] hue-rotate-180 contrast-[90%] sm:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
