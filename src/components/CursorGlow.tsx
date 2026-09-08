"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;

    function onMove(e: PointerEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    function tick() {
      curX += (x - curX) * 0.15;
      curY += (y - curY) * 0.15;
      if (el) {
        el.style.transform = `translate3d(${curX - 200}px, ${curY - 200}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[1] mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(0,217,255,0.08) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
