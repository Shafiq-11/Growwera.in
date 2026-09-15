"use client";

import { motion } from "framer-motion";
import { MousePointer, ArrowRight } from "lucide-react";

export default function WebDemoVisual() {
  return (
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-xs p-3 relative select-none"
    >
      {/* Mini Browser Bar */}
      <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-[var(--color-border)]">
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-amber-500/70" />
        <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
        <div className="ml-2 text-[9px] font-mono text-[var(--color-foreground-muted)] px-2 py-0.5 bg-[var(--color-surface)] rounded-md border border-[var(--color-border)]">
          growwera.com/preview
        </div>
      </div>

      {/* Website Preview Interface */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3.5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--color-accent)]">
            GROWWERA
          </span>
          <span className="text-[9px] text-[var(--color-foreground-muted)]">
            ● Online
          </span>
        </div>

        <h4 className="text-xs sm:text-sm font-bold text-[var(--color-foreground)] tracking-tight mb-1">
          Your Business Online
        </h4>
        <p className="text-[10px] text-[var(--color-foreground-secondary)] leading-relaxed mb-3">
          Fast, credible, and built to turn visitors into enquiries.
        </p>

        <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--color-accent)] text-white text-[10px] font-semibold rounded-md shadow-xs">
          <span>Explore</span>
          <ArrowRight size={10} />
        </div>

        {/* Floating animated cursor pointer */}
        <motion.div
          animate={{
            x: [60, 48, 60],
            y: [28, 42, 28],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-2 left-1/3 pointer-events-none text-[var(--color-accent)] drop-shadow-md z-10"
        >
          <MousePointer size={14} className="fill-[var(--color-accent)] stroke-white dark:stroke-black stroke-[1.5]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
