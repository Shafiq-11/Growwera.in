"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DoodleStar from "@/components/decorative/DoodleStar";
import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24 border-t border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  Testimonials
                </p>
                <DoodleStar variant="sparkle" size={13} color="#F5BA27" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">
                What our clients say
              </h2>
              <p className="text-[var(--color-foreground-secondary)] text-base mt-2">
                Real experiences from businesses we&apos;ve worked with.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/testimonials"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-all duration-200"
              >
                View All Testimonials
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Testimonials: 1 Featured Large Quote + 2 Supporting Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Featured Large Quote (Nexora) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.05} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-250 h-full cursor-default relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/20">
                      Featured Client Story
                    </span>
                    <span className="text-xs font-medium text-[var(--color-foreground-muted)]">
                      {testimonials[0].service}
                    </span>
                  </div>

                  {/* Stylized Serif Quotation Mark */}
                  <span className="font-serif italic text-6xl sm:text-7xl text-[var(--color-accent)] opacity-85 block mb-4 leading-none select-none transition-transform duration-300 group-hover:-translate-y-1">
                    &ldquo;
                  </span>

                  {/* Large Quote Body */}
                  <p className="text-xl sm:text-2xl text-[var(--color-foreground)] font-medium leading-relaxed mb-10">
                    &ldquo;{testimonials[0].quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-base flex items-center justify-center shrink-0 transition-transform duration-250 group-hover:scale-105">
                      {testimonials[0].author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[var(--color-foreground)] leading-tight">
                        {testimonials[0].author}
                      </h4>
                      <p className="text-sm text-[var(--color-foreground-muted)] mt-0.5">
                        {testimonials[0].role}, {testimonials[0].company}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/work/nexora"
                    className="text-xs font-semibold text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
                  >
                    View Project <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </FadeUp>
          </div>

          {/* 2 Supporting Quotes Stacked */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {testimonials.slice(1).map((item, idx) => (
              <FadeUp key={item.id} delay={0.1 + idx * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-250 h-full cursor-default"
                >
                  <div>
                    <span className="font-serif italic text-4xl text-[var(--color-accent)] opacity-85 block mb-2 leading-none select-none transition-transform duration-300 group-hover:-translate-y-1">
                      &ldquo;
                    </span>
                    <p className="text-[var(--color-foreground)] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-xs flex items-center justify-center shrink-0">
                        {item.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--color-foreground)] leading-tight">
                          {item.author}
                        </h4>
                        <p className="text-xs text-[var(--color-foreground-muted)]">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-[11px] font-medium text-[var(--color-foreground-secondary)] bg-[var(--color-surface-elevated)] rounded-md border border-[var(--color-border)] shrink-0">
                      {item.service}
                    </span>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Prominent Footer Link */}
        <div className="mt-12 text-center">
          <FadeUp delay={0.25}>
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-accent)] text-sm font-semibold text-[var(--color-foreground)] transition-all duration-200 shadow-sm"
            >
              <span>View all client testimonials & outcomes</span>
              <ArrowRight
                size={15}
                className="text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
