"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import DoodleStar from "@/components/decorative/DoodleStar";
import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { featuredProject, projects } from "@/data/projects";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 lg:py-24 border-t border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  Portfolio
                </p>
                <DoodleStar variant="sparkle" size={13} color="#F5BA27" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">
                Work we&apos;re proud of.
              </h2>
              <p className="text-[var(--color-foreground-secondary)] text-base mt-2">
                Real projects, real problems, real solutions.
              </p>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-all duration-200 whitespace-nowrap"
            >
              View all work
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </FadeUp>

        {/* ── CINEMATIC FEATURED PROJECT SHOWCASE (CHOREOGRAPHED SEQUENCE) ── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[var(--shadow-paper)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-250 overflow-hidden"
          >
            {/* Handwritten margin annotation: "Real Business Real Impact" */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-10 pointer-events-none hidden sm:block text-right opacity-80">
              <p className="font-handwriting text-xl sm:text-2xl text-[var(--color-foreground-secondary)] leading-none rotate-[-4deg]">
                Real Business<br />Real Impact
              </p>
              <div className="flex justify-end mt-1 mr-2">
                <HandDrawnArrow
                  variant="curved-down-left"
                  color="#F43F5E"
                  className="w-10 h-10 rotate-[-15deg]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details (col-span-5) */}
              <div className="lg:col-span-5">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.45 }}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] mb-2"
                >
                  Featured Project
                </motion.p>

                {/* Editorial Title with Instrument Serif */}
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic font-normal text-4xl sm:text-5xl text-[var(--color-foreground)] tracking-tight mb-2"
                >
                  {featuredProject.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28, duration: 0.45 }}
                  className="text-sm font-medium text-[var(--color-foreground-muted)] mb-6"
                >
                  {featuredProject.tags?.join(" · ")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.34, duration: 0.55 }}
                  className="text-[var(--color-foreground-secondary)] text-sm sm:text-base leading-relaxed mb-8 font-normal"
                >
                  {featuredProject.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.42, duration: 0.5 }}
                >
                  <Link
                    href={featuredProject.href || "/work"}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-foreground)] text-[var(--color-background)] text-sm font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
                  >
                    View Case Study
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Right Mockup Preview (col-span-7) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl p-4 sm:p-6 shadow-inner">
                  {/* Browser top chrome */}
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                    </div>
                    <div className="px-4 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-[11px] text-[var(--color-foreground-secondary)] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      nexora.com
                    </div>
                    <div className="w-8" />
                  </div>

                  {/* Browser content preview */}
                  <div className="bg-[var(--color-surface)] rounded-xl p-6 sm:p-8 border border-[var(--color-border)] shadow-xs">
                    <div className="flex items-center justify-between mb-8 border-b border-[var(--color-border)] pb-3">
                      <span className="font-bold text-sm tracking-widest text-[var(--color-foreground)]">
                        NEXORA
                      </span>
                      <div className="hidden sm:flex items-center gap-4 text-xs text-[var(--color-foreground-muted)]">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact</span>
                      </div>
                    </div>
                    <div className="max-w-xs mb-8">
                      <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)] leading-tight mb-2">
                        Innovation for a brighter tomorrow.
                      </h4>
                      {/* Decorative Line that draws */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                        className="h-1.5 w-16 bg-[var(--color-accent)] rounded-full mb-3 origin-left"
                      />
                      <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                        Precision-engineered digital platforms tailored for enterprise scale.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)] p-2 flex flex-col justify-end">
                        <span className="text-[10px] font-bold text-[var(--color-foreground)]">+140%</span>
                        <span className="text-[9px] text-[var(--color-foreground-muted)]">Organic Traffic</span>
                      </div>
                      <div className="h-16 bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)] p-2 flex flex-col justify-end">
                        <span className="text-[10px] font-bold text-[var(--color-foreground)]">3.2x</span>
                        <span className="text-[9px] text-[var(--color-foreground-muted)]">Lead Conversion</span>
                      </div>
                      <div className="h-16 bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)] p-2 flex flex-col justify-end">
                        <span className="text-[10px] font-bold text-[var(--color-foreground)]">&lt;1.0s</span>
                        <span className="text-[9px] text-[var(--color-foreground-muted)]">Page Speed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Portfolio Grid with Stagger ── */}
        <Stagger staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Coming soon notice */}
        <FadeUp delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-[var(--color-foreground-muted)] text-sm">
              More projects coming soon. In the meantime,{" "}
              <Link
                href="/contact"
                className="text-[var(--color-accent)] hover:underline font-semibold"
              >
                get in touch to discuss your project
              </Link>
              .
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
