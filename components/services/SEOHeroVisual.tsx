"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Globe, UserCheck, ArrowDown, Sparkles } from "lucide-react";
import GlassSphere from "@/components/decorative/GlassSphere";

export default function SEOHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const searchQueries = [
    { query: "commercial solar installation near me", delay: 0 },
    { query: "bespoke architectural services London", delay: 0.2 },
    { query: "custom web application developers", delay: 0.4 },
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[460px] sm:h-[500px] mx-auto flex flex-col items-center justify-center select-none">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none -z-10" />

      {/* Floating 3D Blue Glass Spheres */}
      <GlassSphere
        size="md"
        className="absolute top-6 right-6 z-30 shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
        delay={0.1}
      />
      <GlassSphere
        size="sm"
        className="absolute bottom-8 left-6 z-30 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
        delay={0.4}
      />

      {/* ── 1. WHAT ARE PEOPLE SEARCHING FOR? (TOP SEARCH BAR) ── */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[320px] sm:w-[360px] rounded-2xl glass-glossy p-4 shadow-md border border-white/40 dark:border-white/20 z-20 mb-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F5BA27]/15 text-[#F5BA27] flex items-center justify-center shrink-0">
            <Search className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)] block">
              SEARCH INTENT
            </span>
            <p className="text-xs sm:text-sm font-bold text-[var(--color-foreground)] tracking-tight">
              What are people searching for?
            </p>
          </div>
        </div>
      </motion.div>

      {/* Vertical Connecting Pulse Signal */}
      <div className="flex flex-col items-center my-1 z-10">
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#F5BA27] to-transparent relative">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 24, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-1.5 h-1.5 rounded-full bg-[#F5BA27] -left-[2px] absolute shadow-[0_0_8px_#F5BA27]"
          />
        </div>
      </div>

      {/* ── 2. YOUR BUSINESS (MIDDLE TILE) ── */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -3, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="relative w-[280px] sm:w-[320px] rounded-2xl glass-glossy p-4 shadow-lg border border-[#F5BA27]/40 z-20 mb-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
              G
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5BA27] block">
                RELEVANCE & AUTHORITY
              </span>
              <p className="text-xs sm:text-sm font-bold text-[var(--color-foreground)]">
                Your Business
              </p>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </motion.div>

      {/* Vertical Connecting Pulse Signal */}
      <div className="flex flex-col items-center my-1 z-10">
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#F5BA27] to-transparent relative">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 24, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 -left-[2px] absolute shadow-[0_0_8px_#38BDF8]"
          />
        </div>
      </div>

      {/* ── 3. DISCOVERY (BOTTOM RESULTS CARD) ── */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="relative w-[320px] sm:w-[360px] rounded-2xl glass-glossy p-4 shadow-md border border-white/40 dark:border-white/20 z-20"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5BA27]">
            ORGANIC DISCOVERY
          </span>
          <span className="text-[10px] font-mono text-[var(--color-foreground-muted)]">
            Verified Relevance
          </span>
        </div>
        <div className="space-y-1.5">
          {searchQueries.map((item, idx) => (
            <div
              key={item.query}
              className="px-3 py-1.5 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-[var(--color-border)] flex items-center justify-between text-xs"
            >
              <span className="truncate text-[var(--color-foreground)] max-w-[200px] text-[11px]">
                {item.query}
              </span>
              <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                Found
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ── SEO DISCOVERY FLOW DIAGRAM (SEARCH -> DISCOVERY -> VISIT -> UNDERSTANDING -> ACTION) ── */
export function SEODiscoveryFlow() {
  const steps = [
    { label: "SEARCH", sub: "User types query" },
    { label: "DISCOVERY", sub: "Engine indexes page" },
    { label: "VISIT", sub: "User clicks through" },
    { label: "UNDERSTANDING", sub: "Clear proposition" },
    { label: "ACTION", sub: "Enquiry or contact" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={step.label}
            className="glass-glossy rounded-2xl p-4 text-center border border-[var(--color-border)] shadow-xs relative flex flex-col items-center justify-center"
          >
            <span className="text-[10px] font-mono font-bold text-[#F5BA27] mb-1">
              0{idx + 1}
            </span>
            <span className="text-xs sm:text-sm font-bold text-[var(--color-foreground)] tracking-tight">
              {step.label}
            </span>
            <span className="text-[10px] text-[var(--color-foreground-muted)] mt-0.5">
              {step.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
