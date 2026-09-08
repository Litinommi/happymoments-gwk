import clsx from "clsx";
import type { ReactNode } from "react";

const VARIANTS = [
  "from-purple/70 via-bg-secondary to-bg-primary",
  "from-magenta/60 via-bg-secondary to-bg-primary",
  "from-cyan/50 via-bg-secondary to-bg-primary",
  "from-pink/60 via-bg-secondary to-bg-primary",
];

type VisualTileProps = {
  seed?: number;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

/**
 * Brand-consistent gradient art tile used where a real venue photograph
 * has not been supplied yet, so the site never fabricates event photos.
 */
export default function VisualTile({ seed = 0, icon, className, children }: VisualTileProps) {
  const variant = VARIANTS[seed % VARIANTS.length];
  return (
    <div
      className={clsx(
        "relative w-full h-full overflow-hidden bg-gradient-to-br",
        variant,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0, transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 grain"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-5xl sm:text-6xl drop-shadow-[0_0_20px_rgba(0,217,255,0.35)] opacity-90">
          {icon}
        </div>
      </div>
      {children}
    </div>
  );
}
