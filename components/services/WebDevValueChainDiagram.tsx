"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  Layers,
  Palette,
  Code2,
  Gauge,
  Rocket,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Business Goals & Audience",
    icon: Compass,
  },
  {
    step: "02",
    title: "Structure",
    desc: "Wireframes & UX Sitemap",
    icon: Layers,
  },
  {
    step: "03",
    title: "Design",
    desc: "Liquid Glass UI System",
    icon: Palette,
  },
  {
    step: "04",
    title: "Engineering",
    desc: "Modern Next.js Stack",
    icon: Code2,
  },
  {
    step: "05",
    title: "Optimization",
    desc: "Speed & SEO Hardening",
    icon: Gauge,
  },
  {
    step: "06",
    title: "Launch",
    desc: "Live & Client-Ready",
    icon: Rocket,
  },
];

export default function WebDevValueChainDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-5xl mx-auto py-4 select-none">
      {/* Ambient Glow */}
      <div className="absolute inset-0 m-auto w-3/4 h-24 bg-blue-600/10 blur-3xl pointer-events-none -z-10" />

      {/* ── DESKTOP HORIZONTAL VALUE CHAIN (lg+) ── */}
      <div className="hidden lg:block relative">
        {/* Glowing Conduit Line */}
        <div className="absolute top-[46px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20 z-0">
          <motion.div
            animate={shouldReduceMotion ? {} : { x: ["-100%", "250%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#315CFF] to-transparent shadow-[0_0_12px_#315CFF]"
          />
        </div>

        <div className="grid grid-cols-6 gap-3 relative z-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="flex flex-col items-center text-center group">
                {/* 3D Glass Icon Node */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                  className="w-[92px] h-[92px] rounded-3xl glass-glossy p-3 flex flex-col items-center justify-center border border-white/40 dark:border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:border-[#315CFF] group-hover:shadow-[0_12px_28px_rgba(49,92,255,0.22)] transition-all duration-300 relative bg-gradient-to-b from-white/60 to-white/20 dark:from-white/[0.08] dark:to-transparent"
                >
                  <span className="text-[10px] font-mono font-bold text-[#315CFF] mb-1">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#315CFF]/10 text-[#315CFF] flex items-center justify-center shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </motion.div>

                {/* Step Title & Micro Description */}
                <div className="mt-3 px-1">
                  <h4 className="text-sm font-bold text-[var(--color-foreground)] tracking-tight leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[var(--color-foreground-muted)] leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE & TABLET COMPACT VALUE CHAIN (< lg) ── */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="glass-glossy rounded-2xl p-4 border border-[var(--color-border)] shadow-xs flex flex-col items-start justify-between"
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-[10px] font-mono font-bold text-[#315CFF]">
                  {item.step}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#315CFF]/10 text-[#315CFF] flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--color-foreground)] tracking-tight mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[10px] text-[var(--color-foreground-muted)] leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
