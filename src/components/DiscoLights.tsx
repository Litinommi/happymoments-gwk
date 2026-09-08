"use client";

import { motion } from "framer-motion";

export default function DiscoLights() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px] bg-purple/25"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[55vw] h-[55vw] rounded-full blur-[130px] bg-cyan/20"
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[45vw] h-[45vw] rounded-full blur-[110px] bg-pink/15"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[2px] h-[140%] bg-gradient-to-b from-transparent via-cyan/40 to-transparent"
        style={{ rotate: 18 }}
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: "120vw", opacity: [0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 9, ease: "easeInOut" }}
      />
    </div>
  );
}
