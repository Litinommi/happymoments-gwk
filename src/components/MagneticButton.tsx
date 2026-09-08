"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import clsx from "clsx";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap";

  const variants = {
    primary:
      "text-bg-primary bg-gradient-to-r from-cyan via-magenta to-pink bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_0_30px_rgba(236,43,255,0.45)]",
    secondary:
      "text-text-primary glass hover:border-cyan/60",
    outline:
      "text-text-primary border border-white/20 hover:border-cyan/70 hover:text-cyan",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      whileTap={{ scale: 0.96 }}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </motion.a>
  );
}
