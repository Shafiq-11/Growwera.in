"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import DoodleStar from "@/components/decorative/DoodleStar";
import PastelBow from "@/components/decorative/PastelBow";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          {/* Creative Paper Note Card */}
          <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-10 sm:p-14 lg:p-16 shadow-[var(--shadow-paper)] hover:border-[var(--color-border-strong)] transition-all duration-300 overflow-hidden">
            {/* Corner Pastel Bows from Visual Reference */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-4 left-5 pointer-events-none"
            >
              <PastelBow size={40} color="#F472B6" className="-rotate-12" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-4 right-5 pointer-events-none"
            >
              <PastelBow size={40} color="#F472B6" className="rotate-12" />
            </motion.div>

            {/* Sparkles */}
            <div className="absolute top-10 right-16 pointer-events-none opacity-60">
              <DoodleStar variant="four-point" size={16} color="#FB7185" />
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                Let&apos;s build together
              </p>

              {/* Headline with Instrument Serif editorial elegance */}
              <div className="overflow-hidden mb-6">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight"
                >
                  Have an idea?{" "}
                  <span className="font-serif italic font-normal text-[var(--color-accent)] text-[1.12em] tracking-normal inline-block">
                    Let&apos;s build it.
                  </span>
                </motion.h2>
              </div>

              {/* Supporting copy */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
              >
                Whether you need a new website, better visibility on Google, a
                stronger digital presence, or an AI-powered workflow, start by
                telling us what you&apos;re trying to achieve.
              </motion.p>

              {/* CTAs with Hand-Drawn Arrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
              >
                {/* Hand-drawn arrow pointing to the buttons */}
                <div className="absolute -top-10 -left-12 sm:-left-16 pointer-events-none hidden sm:block opacity-80">
                  <HandDrawnArrow
                    variant="curved-down-right"
                    color="#F43F5E"
                    className="w-12 h-11 rotate-[10deg]"
                  />
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white text-base font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.3)] w-full sm:w-auto"
                >
                  Start a Project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1.5"
                  />
                </Link>

                <Link
                  href="/contact#discovery"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-surface-elevated)] text-[var(--color-foreground)] text-base font-semibold rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto shadow-xs"
                >
                  I&apos;m Not Sure What I Need
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
