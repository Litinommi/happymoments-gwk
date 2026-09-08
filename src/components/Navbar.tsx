"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS, DEFAULT_ENQUIRY_MESSAGE, buildWhatsAppLink } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[80] transition-all duration-300",
          scrolled ? "glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20">
              <Image src="/logo.jpg" alt="Happy Moments GWK logo" fill sizes="40px" className="object-cover" />
            </div>
            <span className="font-display font-semibold tracking-wide text-sm sm:text-base uppercase">
              Happy Moments <span className="text-cyan">GWK</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-text-primary group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-cyan to-magenta transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-5 py-2.5 text-sm font-medium text-cyan transition-all hover:bg-cyan/10 hover:shadow-[0_0_18px_rgba(0,217,255,0.35)]"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-[70] flex h-10 w-10 items-center justify-center rounded-full glass"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-bg-primary/97 backdrop-blur-xl md:hidden flex flex-col"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="text-2xl font-display font-semibold uppercase tracking-wide text-text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.4 }}
                href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-magenta to-pink px-7 py-3.5 text-sm font-semibold text-bg-primary"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
