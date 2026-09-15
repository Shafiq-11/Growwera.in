"use client";

import { motion } from "framer-motion";
import { Users, ArrowDown, Target, Zap } from "lucide-react";

export default function MarketingDemoVisual() {
  return (
    <motion.div
      animate={{ y: [-2, 4, -2] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      className="w-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-xs p-3 relative select-none"
    >
      {/* Campaign Flow Architecture */}
      <div className="space-y-1.5">
        {/* Step 1: Content & Campaign */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
            <span className="text-[10px] font-bold text-[var(--color-foreground)]">Focused Content</span>
          </div>
          <span className="text-[9px] font-mono text-[var(--color-foreground-muted)]">Strategy</span>
        </div>

        {/* Connector Arrow */}
        <div className="flex justify-center">
          <ArrowDown size={11} className="text-[#EC4899] opacity-70" />
        </div>

        {/* Step 2: Target Audience */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-[var(--color-surface)] border border-[#EC4899]/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Users size={12} className="text-[#EC4899]" />
            <span className="text-[10px] font-bold text-[var(--color-foreground)]">Target Audience</span>
          </div>
          <span className="text-[9px] font-mono text-[#EC4899] bg-[#EC4899]/10 px-1.5 py-0.2 rounded">Right People</span>
        </div>

        {/* Connector Arrow */}
        <div className="flex justify-center">
          <ArrowDown size={11} className="text-[#EC4899] opacity-70" />
        </div>

        {/* Step 3: Action & Measurable Growth */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
          <div className="flex items-center gap-2">
            <Target size={12} className="text-[var(--color-accent)]" />
            <span className="text-[10px] font-bold text-[var(--color-foreground)]">Action & Enquiries</span>
          </div>
          <span className="inline-flex items-center gap-0.5 text-[9px] font-mono text-emerald-500 font-semibold">
            <Zap size={9} /> Outcome
          </span>
        </div>
      </div>
    </motion.div>
  );
}
