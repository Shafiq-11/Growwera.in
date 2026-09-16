"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Search,
  CheckCircle2,
  Layers,
  TrendingUp,
  MessageSquare,
  Cpu,
  Sparkles,
  Check,
} from "lucide-react";
import DoodleStar from "@/components/decorative/DoodleStar";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

interface Stage {
  id: string;
  number: string;
  title: string;
  microcopy: string;
  description: string;
  badge: string;
}

const stages: Stage[] = [
  {
    id: "understand",
    number: "01",
    title: "We understand your business first.",
    microcopy: "We listen before we build.",
    description:
      "Before recommending anything, we ask questions. We want to understand what your business does, who your customers are, and what success looks like for you.",
    badge: "01 · UNDERSTAND",
  },
  {
    id: "identify",
    number: "02",
    title: "We identify the actual problem.",
    microcopy: "We find the real problem before choosing the solution.",
    description:
      "The solution you think you need isn't always the right one. We help clarify the real problem and recommend the most appropriate solution — not the most expensive one.",
    badge: "02 · IDENTIFY",
  },
  {
    id: "build",
    number: "03",
    title: "We build around business goals.",
    microcopy: "Everything we build has a reason.",
    description:
      "Every decision — design, content, technology — is made in relation to your business objectives. Not trends. What actually works for your goals.",
    badge: "03 · BUILD",
  },
  {
    id: "outcome",
    number: "04",
    title: "We focus on measurable outcomes.",
    microcopy: "A beautiful website is not enough. It needs to work for the business.",
    description:
      "A website that looks good but doesn't generate enquiries isn't a success. We build with usability and conversion in mind from the beginning.",
    badge: "04 · OUTCOME",
  },
];

/* ── STAGE 01 VISUAL: Understand / Discovery Hub ── */
function UnderstandVisual() {
  const shouldReduceMotion = useReducedMotion();

  const floatingTags = [
    { label: "Your business", delay: 0, duration: 4.8, x: -12, y: -8 },
    { label: "Your customers", delay: 0.5, duration: 5.4, x: 14, y: -10 },
    { label: "Your goals", delay: 0.2, duration: 6.0, x: -10, y: 12 },
    { label: "Your challenges", delay: 0.8, duration: 5.0, x: 12, y: 14 },
  ];

  return (
    <div className="relative p-5 sm:p-6 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            Discovery Session
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded border border-[var(--color-accent)]/20">
          Listen First
        </span>
      </div>

      {/* Central Dialogue Hub */}
      <div className="relative my-auto py-2">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 shadow-sm max-w-sm mx-auto flex items-start gap-3 z-10 relative">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center shrink-0 mt-0.5">
            <MessageSquare size={16} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-[var(--color-foreground)] mb-0.5">
              Discovery Dialogue
            </p>
            <p className="text-[11px] text-[var(--color-foreground-secondary)] leading-relaxed">
              &ldquo;What does your business do, and what problem are you solving?&rdquo;
            </p>
          </div>
        </div>

        {/* Floating Input Tags that visually feed in */}
        <div className="grid grid-cols-2 gap-2.5 mt-4">
          {floatingTags.map((tag, idx) => (
            <motion.div
              key={tag.label}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -4, 0],
                      x: [0, idx % 2 === 0 ? 3 : -3, 0],
                    }
              }
              transition={{
                duration: tag.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tag.delay,
              }}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-foreground)] shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
              <span className="truncate font-medium">{tag.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-foreground-muted)]">
        <span>Step 01: Active Listening</span>
        <span className="text-[var(--color-accent)] font-medium">Inputs gathered →</span>
      </div>
    </div>
  );
}

/* ── STAGE 02 VISUAL: Identify / Problem Diagnostic Scan ── */
function IdentifyVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative p-5 sm:p-6 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Search size={13} className="text-[var(--color-accent)]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            Diagnostic Analysis
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded border border-[var(--color-accent)]/20">
          Find Real Problem
        </span>
      </div>

      {/* Comparison Transformation */}
      <div className="space-y-2.5 my-auto">
        {/* What you think you need */}
        <div className="p-3 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-xl flex items-center justify-between gap-3 opacity-75">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--color-foreground-muted)] shrink-0">
              Assumption:
            </span>
            <span className="text-xs text-[var(--color-foreground-secondary)] line-through truncate">
              &ldquo;Just a generic new website template&rdquo;
            </span>
          </div>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[var(--color-foreground-muted)] shrink-0">
            Symptom
          </span>
        </div>

        {/* Scanning Pulse Divider */}
        <div className="relative py-1 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-[var(--color-border)]" />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [-40, 40, -40],
                    opacity: [0.6, 1, 0.6],
                  }
            }
            transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles size={11} />
            Growwera Analysis
          </motion.div>
        </div>

        {/* What you actually need */}
        <div className="p-3 bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/30 rounded-xl flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--color-accent)] font-semibold shrink-0">
              Real Need:
            </span>
            <span className="text-xs font-semibold text-[var(--color-foreground)] truncate">
              Targeted customer conversion system
            </span>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[var(--color-accent)]/15 text-[var(--color-accent)] flex items-center gap-1 shrink-0">
            <Check size={11} />
            Verified
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-foreground-muted)]">
        <span>Step 02: Root Cause Found</span>
        <span className="text-[var(--color-accent)] font-medium">Scoping ready →</span>
      </div>
    </div>
  );
}

/* ── STAGE 03 VISUAL: Build / Modular Assembly ── */
function BuildVisual() {
  const shouldReduceMotion = useReducedMotion();

  const blocks = [
    { name: "Strategy", role: "Architecture", color: "#315CFF" },
    { name: "Design", role: "UX Flow", color: "#10B981" },
    { name: "Technology", role: "Speed & Scale", color: "#6366F1" },
    { name: "Content", role: "Messaging", color: "#F59E0B" },
    { name: "Automation", role: "Efficiency", color: "#8B5CF6" },
  ];

  return (
    <div className="relative p-5 sm:p-6 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Layers size={13} className="text-[var(--color-accent)]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            Custom Assembly
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded border border-[var(--color-accent)]/20">
          Build with Purpose
        </span>
      </div>

      {/* Assembly Canvas */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 shadow-xs my-auto">
        <div className="flex items-center justify-between mb-3 border-b border-[var(--color-border)] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20" />
          </div>
          <span className="text-[10px] font-mono text-[var(--color-foreground-muted)]">
            tailored-solution.system
          </span>
        </div>

        {/* 5 Modular Building Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.name}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.02, 1],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.4,
              }}
              className="p-2 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: block.color }}
                />
                <span className="text-[9px] font-mono text-[var(--color-foreground-muted)]">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--color-foreground)] leading-tight">
                  {block.name}
                </p>
                <p className="text-[10px] text-[var(--color-foreground-muted)]">
                  {block.role}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/25 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold text-[var(--color-accent)]">
              Unified System
            </span>
            <span className="text-[9px] text-[var(--color-foreground-muted)]">
              100% Custom
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-foreground-muted)]">
        <span>Step 03: Aligned to Goals</span>
        <span className="text-[var(--color-accent)] font-medium">Ready to deploy →</span>
      </div>
    </div>
  );
}

/* ── STAGE 04 VISUAL: Outcome / Measurable Growth Trajectory ── */
function OutcomeVisual() {
  const indicators = [
    { label: "Visibility", level: "65%" },
    { label: "Engagement", level: "75%" },
    { label: "Usability", level: "85%" },
    { label: "Conversion", level: "92%" },
    { label: "Business Impact", level: "100%", highlight: true },
  ];

  return (
    <div className="relative p-5 sm:p-6 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp size={13} className="text-[var(--color-accent)]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
            Impact Trajectory
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 rounded border border-emerald-500/20">
          Measure What Matters
        </span>
      </div>

      {/* Conceptual Growth Spectrum (strictly no fake numbers) */}
      <div className="space-y-2.5 my-auto">
        {indicators.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span
                className={cn(
                  "font-medium",
                  item.highlight
                    ? "font-bold text-[var(--color-accent)] flex items-center gap-1.5"
                    : "text-[var(--color-foreground-secondary)]"
                )}
              >
                {item.label}
                {item.highlight && <Sparkles size={12} className="text-[var(--color-accent)]" />}
              </span>
              <span className="text-[10px] font-mono text-[var(--color-foreground-muted)]">
                Upward Trend ↗
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.level }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                  "h-full rounded-full",
                  item.highlight
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-foreground-muted)]/40"
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-foreground-muted)]">
        <span>Step 04: Real Business Outcomes</span>
        <span className="text-emerald-500 font-medium">Sustainable Growth ✓</span>
      </div>
    </div>
  );
}

export default function WhyGrowwera() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  return (
    <section
      id="why-growwera"
      className="py-20 lg:py-28 border-t border-[var(--color-border)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── LEFT COLUMN: Sticky Narrative & Reassurance (col-span-5) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeUp>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  Why Growwera
                </p>
                <DoodleStar variant="sparkle" size={13} color="#315CFF" />
              </div>

              {/* Editorial Heading with selective display serif */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[var(--color-foreground)] leading-[1.15] tracking-tight mb-4">
                Built around your business.{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)] block sm:inline">
                  Not a template.
                </span>
              </h2>

              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-8">
                Most digital agencies start with a template and fit your business into it.
                We start with your business and build around it.
              </p>

              {/* Creative paper note with tape */}
              <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-paper)] rotate-[-1deg] hover:rotate-0 transition-transform duration-300 mb-8">
                {/* Washi tape header */}
                <div className="absolute -top-2.5 left-10 w-12 h-4 bg-[var(--sticky-tape)] rounded-sm border border-[var(--sticky-tape-border)]" />
                <p className="text-[var(--color-foreground)] font-bold text-base leading-snug mb-2">
                  &ldquo;You don&apos;t need to know exactly what you need.&rdquo;
                </p>
                <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed mb-4">
                  Tell Growwera what you&apos;re trying to achieve, and we&apos;ll help
                  figure out the right solution.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  <span>Start with a discovery conversation</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Hand-drawn arrow annotation pointing to the right */}
              <div className="hidden lg:flex items-center gap-3 text-xs text-[var(--color-foreground-muted)] font-mono">
                <span>Explore the 4-step philosophy</span>
                <HandDrawnArrow
                  variant="curved-down-right"
                  color="#315CFF"
                  className="w-7 h-7 rotate-12"
                />
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT COLUMN: Interactive Living System (col-span-7) ── */}
          <div className="lg:col-span-7">
            {/* Initial Root Anchor: YOUR BUSINESS */}
            <FadeUp delay={0.05}>
              <div className="flex items-center justify-between p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl mb-8 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold flex items-center justify-center text-xs">
                    00
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-wider font-mono">
                      Your Business
                    </h4>
                    <p className="text-xs text-[var(--color-foreground-muted)]">
                      The starting point for every decision we make.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-1 rounded-md border border-[var(--color-accent)]/20">
                  Ground Zero ↓
                </span>
              </div>
            </FadeUp>

            {/* Connected Stages Flow */}
            <div className="relative pl-6 sm:pl-8 space-y-8">
              {/* Vertical Active Connector Rail */}
              <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-6 w-0.5 bg-[var(--color-border)]">
                <motion.div
                  className="w-full bg-[var(--color-accent)] origin-top"
                  animate={{
                    height: `${((activeStageIndex + 1) / stages.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {stages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;

                return (
                  <FadeUp key={stage.id} delay={idx * 0.08}>
                    <div
                      onMouseEnter={() => setActiveStageIndex(idx)}
                      onClick={() => setActiveStageIndex(idx)}
                      className={cn(
                        "relative group rounded-2xl border transition-all duration-300 p-6 sm:p-7 cursor-pointer",
                        isActive
                          ? "bg-[var(--color-surface)] border-[var(--color-accent)] shadow-[var(--shadow-paper-hover)]"
                          : "bg-[var(--color-surface)]/70 border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] opacity-85 hover:opacity-100"
                      )}
                    >
                      {/* Rail Connector Node */}
                      <div
                        className={cn(
                          "absolute -left-6 sm:-left-8 top-7 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10",
                          isActive
                            ? "border-[var(--color-accent)] bg-[var(--color-background)] scale-110 shadow-[0_0_12px_rgba(49,92,255,0.4)]"
                            : "border-[var(--color-border)] bg-[var(--color-surface)] group-hover:border-[var(--color-foreground-muted)]"
                        )}
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            isActive ? "bg-[var(--color-accent)]" : "bg-transparent"
                          )}
                        />
                      </div>

                      {/* Stage Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={cn(
                            "text-xs font-mono font-bold px-2.5 py-1 rounded-md border transition-colors",
                            isActive
                              ? "text-[var(--color-accent)] bg-[var(--color-accent)]/15 border-[var(--color-accent)]/30"
                              : "text-[var(--color-foreground-muted)] bg-[var(--color-surface-elevated)] border-[var(--color-border)]"
                          )}
                        >
                          {stage.badge}
                        </span>
                        <span className="text-xs font-serif italic text-[var(--color-foreground-secondary)]">
                          {stage.microcopy}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          "text-lg sm:text-xl font-bold mb-2 tracking-tight transition-colors",
                          isActive
                            ? "text-[var(--color-foreground)]"
                            : "text-[var(--color-foreground-secondary)] group-hover:text-[var(--color-foreground)]"
                        )}
                      >
                        {stage.title}
                      </h3>

                      <p className="text-sm text-[var(--color-foreground-secondary)] leading-relaxed mb-6 font-normal">
                        {stage.description}
                      </p>

                      {/* Interactive Visual Canvas */}
                      <div className="mt-4">
                        {idx === 0 && <UnderstandVisual />}
                        {idx === 1 && <IdentifyVisual />}
                        {idx === 2 && <BuildVisual />}
                        {idx === 3 && <OutcomeVisual />}
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

            {/* ── FINAL JOURNEY SUMMARY STRIP ── */}
            <FadeUp delay={0.35}>
              <div className="mt-10 p-5 sm:p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[var(--color-foreground-secondary)]">
                  <span className="px-2 py-1 rounded bg-[var(--color-surface-elevated)] border border-[var(--color-border)] font-semibold text-[var(--color-foreground)]">
                    YOUR BUSINESS
                  </span>
                  <span className="text-[var(--color-accent)] font-bold">→</span>
                  <span className="px-2 py-1 rounded bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
                    UNDERSTAND
                  </span>
                  <span className="text-[var(--color-accent)] font-bold">→</span>
                  <span className="px-2 py-1 rounded bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
                    IDENTIFY
                  </span>
                  <span className="text-[var(--color-accent)] font-bold">→</span>
                  <span className="px-2 py-1 rounded bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
                    BUILD
                  </span>
                  <span className="text-[var(--color-accent)] font-bold">→</span>
                  <span className="px-2 py-1 rounded bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 font-semibold text-[var(--color-accent)]">
                    OUTCOME
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-[var(--color-foreground)] tracking-tight text-center sm:text-right">
                  Built around your business.{" "}
                  <span className="font-serif italic text-[var(--color-accent)]">
                    Not a template.
                  </span>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
