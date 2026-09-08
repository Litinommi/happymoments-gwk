"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type ParticleFieldProps = {
  count?: number;
  className?: string;
};

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

// Deterministic pseudo-random (seeded by index) instead of Math.random().
// Uses only integer ops (no Math.sin/cos) so server and client produce
// bit-identical output — transcendental functions can differ in their
// last few digits between V8 builds (Node vs browser), which still
// triggers a hydration mismatch even though the value is "the same".
function seededRandom(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function buildParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: seededRandom(i * 12.9898) * 100,
    top: seededRandom(i * 78.233) * 100,
    size: seededRandom(i * 37.719) * 2 + 1,
    duration: seededRandom(i * 4.1414) * 8 + 8,
    delay: seededRandom(i * 91.345) * 6,
    color: ["var(--cyan)", "var(--magenta)", "var(--purple)"][i % 3],
  }));
}

export default function ParticleField({ count = 26, className }: ParticleFieldProps) {
  const particles = useMemo(() => buildParticles(count), [count]);

  return (
    <div className={className} aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
