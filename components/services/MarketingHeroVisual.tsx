"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Megaphone, Target, ArrowRight, BarChart2, MessageSquare } from "lucide-react";
import GlassSphere from "@/components/decorative/GlassSphere";

export default function MarketingHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[500px] h-[460px] sm:h-[500px] mx-auto flex items-center justify-center select-none">
      {/* Ambient Magenta/Blue Glow */}
      <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-500/10 blur-3xl pointer-events-none -z-10" />

      {/* Floating 3D Blue Glass Spheres */}
      <GlassSphere
        size="md"
        className="absolute top-4 right-4 z-30 shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
        delay={0.1}
      />
      <GlassSphere
        size="sm"
        className="absolute bottom-6 left-6 z-30 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
        delay={0.4}
      />

      {/* ── CENTRAL ECOSYSTEM GRAPHIC ── */}
      <div className="relative w-[340px] sm:w-[380px] h-[360px] flex flex-col items-center justify-between z-20">
        {/* Top: AUDIENCE */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="px-4 py-2.5 rounded-2xl glass-glossy border border-white/40 dark:border-white/20 shadow-md flex items-center gap-2"
        >
          <Users className="w-4 h-4 text-[#315CFF]" />
          <span className="text-xs font-bold text-[var(--color-foreground)] tracking-tight">
            Target Audience
          </span>
        </motion.div>

        {/* Middle Row: CONTENT -> CAMPAIGN -> ACTION */}
        <div className="w-full flex items-center justify-between gap-2">
          {/* Left: CONTENT */}
          <motion.div
            animate={shouldReduceMotion ? {} : { x: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="px-3 py-2 rounded-xl glass-glossy border border-white/30 text-center shadow-xs"
          >
            <span className="text-[10px] font-mono text-[#315CFF] block">01</span>
            <span className="text-xs font-bold text-[var(--color-foreground)]">Content</span>
          </motion.div>

          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#315CFF] to-transparent" />

          {/* Center: CAMPAIGN */}
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex flex-col items-center justify-center p-3 text-center shadow-[0_12px_32px_rgba(49,92,255,0.45)] border border-blue-400/40"
          >
            <Megaphone className="w-5 h-5 mb-1" />
            <span className="text-xs font-extrabold tracking-tight">Campaign</span>
          </motion.div>

          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#315CFF] to-transparent" />

          {/* Right: ACTION */}
          <motion.div
            animate={shouldReduceMotion ? {} : { x: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="px-3 py-2 rounded-xl glass-glossy border border-white/30 text-center shadow-xs"
          >
            <span className="text-[10px] font-mono text-[#315CFF] block">03</span>
            <span className="text-xs font-bold text-[var(--color-foreground)]">Action</span>
          </motion.div>
        </div>

        {/* Bottom: BUSINESS */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="px-4 py-2.5 rounded-2xl glass-glossy border border-white/40 dark:border-white/20 shadow-md flex items-center gap-2"
        >
          <Target className="w-4 h-4 text-[#315CFF]" />
          <span className="text-xs font-bold text-[var(--color-foreground)] tracking-tight">
            Your Business Goals
          </span>
        </motion.div>
      </div>

      {/* Floating Accent Pills */}
      <div className="absolute top-12 left-4 hidden sm:block">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold glass-pill text-[var(--color-foreground-muted)]">
          Strategy
        </span>
      </div>
      <div className="absolute bottom-12 right-4 hidden sm:block">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold glass-pill text-[var(--color-foreground-muted)]">
          Analytics
        </span>
      </div>
    </div>
  );
}

/* ── MARKETING FLOW DIAGRAM COMPONENT ── */
export function MarketingFlowDiagram() {
  const steps = [
    "BUSINESS GOAL",
    "AUDIENCE",
    "MESSAGE",
    "CONTENT / ADS",
    "VISITOR",
    "ACTION",
    "ANALYSE",
    "IMPROVE",
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={step}
            className="glass-glossy rounded-2xl p-3 text-center border border-[var(--color-border)] shadow-xs flex flex-col items-center justify-center"
          >
            <span className="text-[9px] font-mono font-bold text-[#315CFF] mb-1">
              0{idx + 1}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[var(--color-foreground)] tracking-tight leading-tight">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
