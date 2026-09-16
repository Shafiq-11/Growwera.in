"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroVisual from "@/components/shared/HeroVisual";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import DoodleStar from "@/components/decorative/DoodleStar";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Subtle scroll-driven parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const sparkleY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[82vh] flex items-center pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Delicate background sparkles with subtle parallax */}
      <motion.div
        style={{ y: sparkleY }}
        className="absolute top-16 left-8 sm:left-16 pointer-events-none opacity-40"
      >
        <DoodleStar variant="four-point" size={16} color="#F5BA27" />
      </motion.div>
      <motion.div
        style={{ y: sparkleY }}
        className="absolute bottom-16 left-1/3 pointer-events-none opacity-30"
      >
        <DoodleStar variant="sparkle" size={14} color="#F5BA27" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column — Text & CTAs (col-span-6) */}
          <motion.div style={{ y: contentY }} className="lg:col-span-6">
            <div>
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[var(--color-foreground-muted)] mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                Digital solutions for growing businesses
              </motion.div>

              {/* Headline with clip/mask reveal & Instrument Serif editorial contrast */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl lg:text-[3.85rem] font-bold text-[var(--color-foreground)] leading-[1.12] tracking-tight"
                >
                  We build digital experiences that help{" "}
                  <span className="inline-block">
                    businesses{" "}
                    <span className="font-serif italic font-normal text-[var(--color-accent)] text-[1.15em] tracking-normal inline-block relative -top-0.5">
                      grow.
                    </span>
                  </span>
                </motion.h1>
              </div>

              {/* Supporting Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl text-[var(--color-foreground-secondary)] leading-relaxed mb-9 max-w-xl font-normal"
              >
                Websites, SEO, digital marketing, AI and automation — built around
                what your business actually needs.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-black text-base font-bold rounded-full hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 shadow-[0_4px_20px_0_rgba(245,186,39,0.35),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-surface)] text-[var(--color-foreground)] text-base font-semibold rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xs"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Reassurance Message with hand-drawn arrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative pt-2"
            >
              {/* Hand-drawn coral arrow */}
              <div className="absolute -top-3 left-0 -translate-x-8 sm:-translate-x-10 pointer-events-none opacity-80">
                <HandDrawnArrow
                  variant="curved-down-right"
                  color="#F43F5E"
                  className="w-10 h-10 sm:w-12 sm:h-11"
                />
              </div>

              <div className="border-l-2 border-[var(--color-border-strong)] pl-5 max-w-lg">
                <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed mb-2.5">
                  Not sure exactly what you need? That&apos;s okay. Tell us what
                  you&apos;re trying to achieve and we&apos;ll help you figure it
                  out.
                </p>
                <Link
                  href="/contact#discovery"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  Tell Us What You Need
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — 3D Glossy Hero Visual (col-span-6) */}
          <motion.div
            style={{ y: visualY, scale: visualScale }}
            className="lg:col-span-6 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
