"use client";

import { motion } from "framer-motion";
import DoodleStar from "@/components/decorative/DoodleStar";

export default function WelcomeToGrowth() {
  return (
    <section className="pt-24 pb-4 sm:pt-28 sm:pb-6 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic Opening Container */}
        <div className="relative">
          {/* Step 1: Small Label */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between gap-4 mb-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-foreground-muted)]">
                EST. 2026 · DIGITAL SOLUTIONS
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[var(--color-foreground-muted)]">
              <DoodleStar variant="sparkle" size={12} color="var(--color-accent)" />
              <span>BUSINESS FIRST · ARCHITECTED TO SCALE</span>
            </div>
          </motion.div>

          {/* Step 2 & 3: WELCOME TO THE ERA OF + GROWTH. */}
          <div className="overflow-hidden py-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight uppercase text-[var(--color-foreground)] leading-tight">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                WELCOME TO THE ERA OF{" "}
              </motion.span>
              <motion.span
                initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic font-normal text-[1.18em] text-[var(--color-accent)] normal-case tracking-normal inline-block pl-2"
              >
                Growth.
              </motion.span>
            </h2>
          </div>

          {/* Step 4: Thin line draws across */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left center" }}
            className="h-[1px] w-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-border-strong)] to-transparent mt-4 sm:mt-5"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
