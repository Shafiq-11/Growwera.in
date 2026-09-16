"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassSphereProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
  delay?: number;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export default function GlassSphere({
  size = "md",
  className,
  animate = true,
  delay = 0,
}: GlassSphereProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        animate && !shouldReduceMotion
          ? {
              y: [0, -6, 0],
              rotate: [0, 4, 0],
              scale: [1, 1.02, 1],
            }
          : {}
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn(
        "relative rounded-full select-none pointer-events-none shrink-0 overflow-hidden",
        sizeClasses[size],
        className
      )}
      style={{
        background:
          "radial-gradient(circle at 35% 30%, #93c5fd 0%, #3b82f6 32%, #1d4ed8 70%, #0c1840 100%)",
        boxShadow:
          "0 12px 28px -4px rgba(37, 99, 235, 0.5), inset 0 -4px 10px rgba(0, 0, 0, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.6)",
      }}
      aria-hidden="true"
    >
      {/* Primary Specular Highlight Flare (Top-Left) */}
      <div
        className="absolute top-[12%] left-[16%] w-[42%] h-[24%] rounded-full bg-gradient-to-b from-white to-white/20 blur-[0.6px] -rotate-30"
        style={{ opacity: 0.88 }}
      />

      {/* Secondary Micro-Highlight */}
      <div
        className="absolute top-[28%] left-[12%] w-[12%] h-[12%] rounded-full bg-white/90 blur-[0.4px]"
      />

      {/* Bottom Internal Caustic Bounce Reflection (Cyan Glow) */}
      <div
        className="absolute bottom-[8%] right-[14%] w-[50%] h-[28%] rounded-full bg-cyan-300/40 blur-[3px]"
      />

      {/* Ambient Blue Backlight Halo */}
      <div className="absolute inset-0 rounded-full border border-white/25 pointer-events-none" />
    </motion.div>
  );
}
