"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  const featured = testimonials[0];
  const remaining = testimonials.slice(1);

  return (
    <>
      {/* Editorial Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                Client Stories
              </p>
              <DoodleStar variant="sparkle" size={14} color="#F5BA27" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
              What our clients say.
            </h1>
            <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl font-normal">
              Real experiences from businesses we&apos;ve worked with. No inflated claims,
              no fake metrics — just genuine outcomes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials Collection */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Large Testimonial */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 sm:p-12 lg:p-16 mb-12 shadow-[var(--shadow-paper)] hover:border-[var(--color-border-strong)] transition-all duration-250 relative overflow-hidden"
            >
              <div className="max-w-3xl">
                <span className="font-serif italic text-6xl sm:text-7xl text-[var(--color-accent)] opacity-85 block mb-6 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-2xl sm:text-3xl font-medium text-[var(--color-foreground)] leading-relaxed mb-10">
                  {featured.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-base flex items-center justify-center shrink-0">
                    {featured.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                      {featured.author}
                    </h3>
                    <p className="text-sm text-[var(--color-foreground-muted)]">
                      {featured.role}, {featured.company} · {featured.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* Grid of Other Testimonials */}
          <Stagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remaining.map((item) => (
              <StaggerItem key={item.id} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-250 h-full"
                >
                  <div>
                    <span className="font-serif italic text-4xl text-[var(--color-accent)] opacity-85 block mb-4 leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="text-lg text-[var(--color-foreground)] leading-relaxed mb-8">
                      {item.quote}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-sm flex items-center justify-center shrink-0">
                        {item.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--color-foreground)]">
                          {item.author}
                        </h4>
                        <p className="text-xs text-[var(--color-foreground-muted)]">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium text-[var(--color-foreground-secondary)] bg-[var(--color-surface-elevated)] rounded-md border border-[var(--color-border)]">
                      {item.service}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
