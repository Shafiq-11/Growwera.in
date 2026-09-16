"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Users,
  Sparkles,
  Megaphone,
  MousePointerClick,
  LineChart,
  Repeat,
} from "lucide-react";

const marketingSteps = [
  {
    step: "01",
    title: "Commercial Goal & Unit Margins",
    icon: Target,
    category: "STRATEGY BASE",
    description: "Revenue goals, customer lifetime value & target acquisition cost.",
    signal: "Calibrated CAC Target",
    accent: "#315CFF",
  },
  {
    step: "02",
    title: "High-Intent Audience Profiling",
    icon: Users,
    category: "AUDIENCE MAPPING",
    description: "Behavioral segmentation and channel identification.",
    signal: "Laser Targeting",
    accent: "#6366F1",
  },
  {
    step: "03",
    title: "Irresistible Offer & Copy",
    icon: Sparkles,
    category: "MESSAGING ENGINE",
    description: "Conversion-focused ad copy, creative angles & value propositions.",
    signal: "High Hook Rate",
    accent: "#EC4899",
  },
  {
    step: "04",
    title: "Multi-Channel Ad Execution",
    icon: Megaphone,
    category: "DISTRIBUTION",
    description: "Targeted campaigns across Google Search, Meta Ads & LinkedIn.",
    signal: "Active Impression Delivery",
    accent: "#F43F5E",
  },
  {
    step: "05",
    title: "High-Conversion Landing Page",
    icon: MousePointerClick,
    category: "CONVERSION FUNNEL",
    description: "Zero-distraction landing experiences tailored to the ad offer.",
    signal: "Low Bounce Rate",
    accent: "#10B981",
  },
  {
    step: "06",
    title: "Attribution & Scaling Loop",
    icon: LineChart,
    category: "CLOSED-LOOP ROI",
    description: "Server-side tracking attributes exact revenue, feeding back to scale winners.",
    signal: "Compounding Growth",
    accent: "#F59E0B",
  },
];

export default function MarketingValueChainDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6 select-none">
      {/* Ambient Glow */}
      <div className="absolute inset-0 m-auto w-3/4 h-32 bg-gradient-to-r from-pink-500/10 via-blue-600/10 to-amber-500/10 blur-3xl pointer-events-none -z-10" />

      {/* Blueprint Container */}
      <div className="relative rounded-3xl p-4 sm:p-8 bg-white/40 dark:bg-white/[0.02] border border-[var(--color-border)] shadow-xs overflow-hidden">
        {/* Header Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#315CFF] animate-pulse shadow-[0_0_10px_#315CFF]" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-foreground)]">
              The Complete Growth Marketing Value Chain
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[var(--color-foreground-muted)]">
              Attention ➔ Conversion ➔ Closed-Loop Scale
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
              Iterative Engine
            </span>
          </div>
        </div>

        {/* ── DESKTOP PIPELINE: 6 NODES CONNECTED BY CONDUIT ── */}
        <div className="hidden lg:block relative">
          {/* Animated Connecting Conduits Bar */}
          <div className="absolute top-[42px] left-[5%] right-[5%] h-1 bg-[var(--color-border)] z-0">
            <motion.div
              animate={shouldReduceMotion ? {} : { x: ["-100%", "200%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#EC4899] to-transparent shadow-[0_0_12px_#EC4899]"
            />
          </div>

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {marketingSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col items-center group">
                  {/* Step Node Icon Circle */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                    className="w-20 h-20 rounded-2xl glass-glossy p-0.5 shadow-md flex flex-col items-center justify-center border border-white/50 dark:border-white/20 group-hover:border-[#315CFF] transition-colors relative mb-4"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#315CFF] mb-0.5">
                      {step.step}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Node Card Details */}
                  <div className="w-full glass-glossy rounded-2xl p-3.5 border border-[var(--color-border)] text-center flex flex-col justify-between h-[155px] group-hover:border-[#315CFF]/40 transition-all duration-300">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-[#315CFF] block mb-1">
                        {step.category}
                      </span>
                      <h4 className="text-xs font-bold text-[var(--color-foreground)] tracking-tight leading-tight mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-[var(--color-foreground-muted)] leading-tight">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[var(--color-border)] mt-2">
                      <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 block truncate">
                        ✓ {step.signal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE & TABLET STEPPED DIAGRAM VIEW ── */}
        <div className="lg:hidden space-y-3 relative">
          {marketingSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                <div className="glass-glossy rounded-2xl p-4 border border-[var(--color-border)] flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs mt-0.5"
                    style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#315CFF]">
                        STAGE {step.step} • {step.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        ✓ {step.signal}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[var(--color-foreground)] tracking-tight mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {idx < marketingSteps.length - 1 && (
                  <div className="w-0.5 h-3 bg-[#315CFF]/30 mx-auto my-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Closed-Loop Optimization Loop Footer */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-foreground-muted)]">
          <div className="flex items-center gap-2">
            <Repeat className="w-3.5 h-3.5 text-[#315CFF]" />
            <span>Closed-loop analytics automatically feed performance data back into ad targeting and messaging.</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--color-foreground-secondary)] font-medium">
            Continuous compound scaling • Zero vanity metric trap
          </span>
        </div>
      </div>
    </div>
  );
}
