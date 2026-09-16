"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layout, BarChart3, Megaphone, Zap } from "lucide-react";
import GlassSphere from "./GlassSphere";

export default function AboutHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[500px] h-[440px] sm:h-[460px] mx-auto flex items-center justify-center select-none">
      {/* Ambient Blue Core Backlight */}
      <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/20 via-blue-500/15 to-indigo-500/10 blur-3xl pointer-events-none -z-10" />

      {/* ── 3D FLOATING BLUE GLASS SPHERES ── */}
      {/* Top Right Large Sphere */}
      <GlassSphere
        size="lg"
        className="absolute top-3 right-4 sm:right-8 z-30 shadow-[0_16px_36px_rgba(37,99,235,0.55)]"
        delay={0.1}
      />
      {/* Bottom Left Medium Sphere */}
      <GlassSphere
        size="md"
        className="absolute bottom-8 left-2 sm:left-6 z-30 shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
        delay={0.4}
      />
      {/* Far Right Small Sphere */}
      <GlassSphere
        size="sm"
        className="absolute top-1/2 -right-2 sm:-right-4 z-20 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
        delay={0.7}
      />

      {/* ── 4 FLOATING SATELLITE GLASS TILES ── */}
      {/* Top-Left: Web Development */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-0 sm:left-4 z-20 px-3.5 py-2.5 rounded-2xl glass-glossy flex items-center gap-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.7)]"
      >
        <div className="w-7 h-7 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Layout className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            WEB
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight">
            Web Development
          </span>
        </div>
      </motion.div>

      {/* Top-Right: SEO */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-8 right-16 sm:right-20 z-20 px-3.5 py-2.5 rounded-2xl glass-glossy flex items-center gap-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.7)]"
      >
        <div className="w-7 h-7 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <BarChart3 className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            RANK
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight">
            SEO
          </span>
        </div>
      </motion.div>

      {/* Bottom-Left: Digital Marketing */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 left-14 sm:left-18 z-20 px-3.5 py-2.5 rounded-2xl glass-glossy flex items-center gap-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.7)]"
      >
        <div className="w-7 h-7 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Megaphone className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            GROW
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight">
            Digital Marketing
          </span>
        </div>
      </motion.div>

      {/* Bottom-Right: AI & Automation */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute bottom-6 right-2 sm:right-6 z-20 px-3.5 py-2.5 rounded-2xl glass-glossy flex items-center gap-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.7)]"
      >
        <div className="w-7 h-7 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            SCALE
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight">
            AI & Automation
          </span>
        </div>
      </motion.div>

      {/* ── CENTER GLOSSY LIQUID GLASS TILE (THE MONOGRAM "G.") ── */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -4, 0], rotate: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-[2.5rem] glass-glossy z-10 flex flex-col items-center justify-center shadow-[0_24px_50px_rgba(0,0,0,0.12),0_0_40px_rgba(49,92,255,0.18),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white/40 dark:border-white/20 backdrop-blur-2xl"
      >
        {/* Top-Left Specular Sheen */}
        <div className="absolute top-2 left-4 right-4 h-[1px] bg-gradient-to-r from-white/90 via-white/40 to-transparent" />

        {/* Monogram G. */}
        <span className="text-5xl sm:text-6xl font-black tracking-tight text-[var(--color-foreground)] font-sans">
          G<span className="text-[#315CFF]">.</span>
        </span>

        {/* Subtle Bottom Refraction Wave */}
        <div className="absolute bottom-3 inset-x-6 h-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-sm pointer-events-none" />
      </motion.div>
    </div>
  );
}
