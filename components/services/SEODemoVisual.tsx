"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Sparkles } from "lucide-react";

export default function SEODemoVisual() {
  return (
    <motion.div
      animate={{ y: [3, -3, 3] }}
      transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut" }}
      className="w-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-xs p-3 relative select-none"
    >
      {/* Search Bar Visual */}
      <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg mb-3 shadow-xs">
        <Search size={12} className="text-[#F59E0B] shrink-0" />
        <span className="text-[10px] text-[var(--color-foreground)] font-mono truncate">
          your service near me
        </span>
        <span className="ml-auto w-1 h-3 bg-[#F59E0B] animate-pulse" />
      </div>

      {/* Discovery Result Mockup */}
      <div className="bg-[var(--color-surface)] border border-[#F59E0B]/25 rounded-lg p-3 relative overflow-hidden">
        <div className="flex items-center justify-between mb-1.5">
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F59E0B]/15 text-[#F59E0B] text-[9px] font-mono font-semibold">
            <Sparkles size={9} />
            <span>Position #1</span>
          </div>
          <span className="text-[9px] text-[var(--color-foreground-muted)] font-mono">Organic</span>
        </div>

        <h4 className="text-xs sm:text-sm font-bold text-[var(--color-foreground)] tracking-tight mb-1">
          Your Business Name
        </h4>
        <p className="text-[10px] text-[var(--color-foreground-secondary)] leading-tight mb-2.5 line-clamp-1">
          High search rankings that bring qualified customers to your website.
        </p>

        {/* Visibility Metric Pill */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-[9px] font-medium border border-emerald-500/20"
        >
          <TrendingUp size={11} />
          <span>Search Visibility Growing</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
