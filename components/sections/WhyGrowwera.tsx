"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  TrendingUp,
  Search,
  Sparkles,
  CheckCircle2,
  Activity,
  Image as ImageIcon,
} from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

/* ── 5 PILLARS WITH PHOTO THEME CONTENT ── */
const pillars = [
  {
    number: "01",
    title: "We understand your business first.",
    description:
      "Before recommending anything, we ask the right questions to understand your business, your customers, and your goals.",
    tags: ["Your business", "Your audience", "Your goals", "Your challenges"],
    handwritten: "Real Conversations",
    hasSparkle: true,
  },
  {
    number: "02",
    title: "We identify the actual problem.",
    description:
      "The solution you think you need isn't always the right one. We analyse the real problem and recommend the most effective, practical solution — not the most expensive one.",
    tags: ["Research", "Analysis", "Right solution"],
    handwritten: "Clarity before Code",
    hasSparkle: true,
  },
  {
    number: "03",
    title: "We build around business goals.",
    description:
      "Every design, piece of content, and line of code is created with your business objectives in mind — not trends or personal preferences.",
    tags: ["Strategy", "Design", "Development", "Content"],
    handwritten: "Built for your growth",
    hasSparkle: false,
  },
  {
    number: "04",
    title: "We focus on measurable outcomes.",
    description:
      "A great-looking website means nothing if it doesn't perform. We build with usability, visibility, and conversion in mind from the beginning.",
    tags: ["More visibility", "Better engagement", "Real business impact"],
    handwritten: "From Launch to Growth",
    hasSparkle: false,
  },
  {
    number: "05",
    title: "We improve after launch.",
    description:
      "Launch isn't the end. We monitor performance, identify opportunities, and continue improving the solution as your business grows.",
    tags: ["Performance tracking", "Ongoing optimisation", "Long-term support"],
    handwritten: "Always Evolving",
    hasSparkle: true,
  },
];

/* ── CURVED ARROW SVG HELPER ── */
function CurvedArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 42 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-5 text-[var(--color-foreground-muted)]", className)}
      aria-hidden="true"
    >
      <path
        d="M3 24C12 24 28 20 36 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M30 4L37 5L36 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── DOODLE SPARKLE LINES ── */
function SparkleLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4 text-[var(--color-accent)]", className)}
      aria-hidden="true"
    >
      <path d="M12 2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 5L8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 5L16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ── ANIMATED VISUAL 01: Chat Dialogue / Real Conversations ── */
function ChatVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-36 sm:w-44 h-28 sm:h-32 bg-[var(--color-surface-elevated)]/90 border border-[var(--color-border)] rounded-2xl p-3 sm:p-4 flex flex-col justify-center gap-2.5 shadow-[0_4px_16px_rgba(49,92,255,0.06)] overflow-hidden">
      {/* Top Speech Bubble (Blue) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="self-end bg-[var(--color-accent)] text-white px-3 py-2 rounded-xl rounded-br-xs text-[10px] sm:text-xs shadow-xs max-w-[85%]"
      >
        <div className="space-y-1">
          <div className="w-16 h-1.5 bg-white/90 rounded-full" />
          <div className="w-10 h-1.5 bg-white/70 rounded-full" />
        </div>
      </motion.div>

      {/* Bottom Speech Bubble (Light / Surface) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 3, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="self-start bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] px-3 py-2 rounded-xl rounded-bl-xs text-[10px] sm:text-xs shadow-xs max-w-[85%]"
      >
        <div className="space-y-1">
          <div className="w-14 h-1.5 bg-[var(--color-foreground-muted)]/50 rounded-full" />
          <div className="w-8 h-1.5 bg-[var(--color-foreground-muted)]/30 rounded-full" />
        </div>
      </motion.div>

      {/* Ambient background glow */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-[var(--color-accent)]/10 rounded-full blur-xl pointer-events-none" />
    </div>
  );
}

/* ── ANIMATED VISUAL 02: Document Scanning / Clarity before Code ── */
function DocumentVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-36 sm:w-44 h-28 sm:h-32 bg-[var(--color-surface-elevated)]/90 border border-[var(--color-border)] rounded-2xl p-3 sm:p-4 flex items-center justify-center shadow-[0_4px_16px_rgba(49,92,255,0.06)] overflow-hidden">
      {/* Document Sheet */}
      <div className="w-20 sm:w-24 h-20 sm:h-22 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-2.5 shadow-xs flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="w-6 h-1.5 bg-[var(--color-accent)]/40 rounded-full" />
          <div className="w-full h-1 bg-[var(--color-foreground-muted)]/20 rounded-full" />
          <div className="w-4/5 h-1 bg-[var(--color-foreground-muted)]/20 rounded-full" />
          <div className="w-full h-1 bg-[var(--color-foreground-muted)]/20 rounded-full" />
        </div>
        <div className="w-10 h-1 bg-[var(--color-accent)]/30 rounded-full self-end" />
      </div>

      {/* Floating Magnifying Glass */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-3, 5, -3],
                y: [-3, 4, -3],
                rotate: [0, 4, 0],
              }
        }
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 sm:right-6 bottom-3 sm:bottom-4 w-9 h-9 rounded-full bg-[var(--color-surface)]/90 border-2 border-[var(--color-accent)] shadow-md flex items-center justify-center text-[var(--color-accent)] backdrop-blur-xs"
      >
        <Search size={16} strokeWidth={2.4} />
      </motion.div>

      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[var(--color-accent)]/10 rounded-full blur-xl pointer-events-none" />
    </div>
  );
}

/* ── ANIMATED VISUAL 03: Browser Wireframe / Built for Your Growth ── */
function BrowserVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-36 sm:w-44 h-28 sm:h-32 bg-[var(--color-surface-elevated)]/90 border border-[var(--color-border)] rounded-2xl p-2.5 sm:p-3 shadow-[0_4px_16px_rgba(49,92,255,0.06)] overflow-hidden flex flex-col justify-between">
      {/* Browser Window Chrome */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-2 sm:p-2.5 flex flex-col justify-between shadow-xs"
      >
        {/* Top 3 window dots */}
        <div className="flex items-center gap-1 pb-1.5 border-b border-[var(--color-border)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/30" />
        </div>

        {/* Browser Layout Wireframe */}
        <div className="grid grid-cols-12 gap-1.5 py-1 items-center flex-1">
          {/* Left image block */}
          <div className="col-span-5 h-full rounded-md bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/25 flex items-center justify-center text-[var(--color-accent)]">
            <ImageIcon size={14} />
          </div>
          {/* Right text lines */}
          <div className="col-span-7 space-y-1.5 pl-1">
            <div className="w-full h-1.5 bg-[var(--color-foreground-muted)]/30 rounded-full" />
            <div className="w-3/4 h-1.5 bg-[var(--color-foreground-muted)]/20 rounded-full" />
            <div className="w-1/2 h-1.5 bg-[var(--color-accent)]/40 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── ANIMATED VISUAL 04: Upward Growth Chart / From Launch to Growth ── */
function ChartVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-36 sm:w-44 h-28 sm:h-32 bg-[var(--color-surface-elevated)]/90 border border-[var(--color-border)] rounded-2xl p-3 sm:p-4 shadow-[0_4px_16px_rgba(49,92,255,0.06)] overflow-hidden flex flex-col justify-end">
      {/* Chart Box */}
      <div className="w-full h-full flex flex-col justify-between">
        {/* Upward Curved Spline Arrow */}
        <div className="flex justify-end pr-1 pt-1">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -3, 0], x: [0, 2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp size={18} className="text-[var(--color-accent)]" />
          </motion.div>
        </div>

        {/* 3 Rising Growth Bars */}
        <div className="flex items-end justify-center gap-3 sm:gap-4 h-14 pb-1">
          <motion.div
            animate={shouldReduceMotion ? {} : { height: ["35%", "45%", "35%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 rounded-t-md bg-[var(--color-accent)]/25 border-t border-x border-[var(--color-accent)]/40 h-[40%]"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : { height: ["60%", "72%", "60%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="w-4 rounded-t-md bg-[var(--color-accent)]/55 border-t border-x border-[var(--color-accent)]/70 h-[68%]"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : { height: ["85%", "98%", "85%"] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="w-4 rounded-t-md bg-[var(--color-accent)] border-t border-x border-[var(--color-accent)] h-[95%] shadow-xs"
          />
        </div>
      </div>

      <div className="absolute -top-6 -right-6 w-20 h-20 bg-[var(--color-accent)]/10 rounded-full blur-xl pointer-events-none" />
    </div>
  );
}

/* ── ANIMATED VISUAL 05: Evolution Monitor / Always Evolving ── */
function EvolutionVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-36 sm:w-44 h-28 sm:h-32 bg-[var(--color-surface-elevated)]/90 border border-[var(--color-border)] rounded-2xl p-3 sm:p-4 shadow-[0_4px_16px_rgba(49,92,255,0.06)] overflow-hidden flex flex-col justify-between">
      {/* Live Monitor Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--color-foreground-muted)]">
            Active Pulse
          </span>
        </div>
        <span className="text-[9px] font-mono text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded border border-[var(--color-accent)]/20">
          Ongoing
        </span>
      </div>

      {/* Pulse Heartbeat / Cycle Loop */}
      <div className="my-auto py-1 flex items-center justify-center">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], rotate: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-accent)]/40 flex items-center justify-center text-[var(--color-accent)] shadow-xs"
        >
          <Activity size={22} className="text-[var(--color-accent)]" />
        </motion.div>
      </div>

      {/* Status Bar */}
      <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full h-1.5 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["-100%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1/2 h-full bg-[var(--color-accent)] rounded-full"
        />
      </div>
    </div>
  );
}

export default function WhyGrowwera() {
  return (
    <section
      id="why-growwera"
      className="py-20 lg:py-28 border-t border-[var(--color-border)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: Header, Note, CTAs & Trust Indicators (col-span-5)
              ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeUp>
              {/* Eyebrow Pill with horizontal trailing line */}
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-semibold tracking-wider uppercase text-[var(--color-foreground-muted)] mb-5 shadow-xs">
                <span>WHY GROWWERA</span>
                <span className="w-5 h-px bg-[var(--color-border)]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[var(--color-foreground)] leading-[1.08] tracking-tight mb-5">
                Built around your <br className="hidden sm:block" />
                business. <br />
                <span className="font-serif italic font-normal text-[#315CFF]">
                  Not a template.
                </span>
              </h2>

              {/* Subtitle Copy */}
              <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed mb-8 max-w-lg font-normal">
                We take the time to understand your business, identify what really matters, and
                build digital solutions that create real impact — not just good-looking websites.
              </p>

              {/* Hand-drawn Arrow curving into Post-it Note */}
              <div className="relative mb-8">
                {/* Curved arrow from above */}
                <div className="absolute -top-7 left-12 text-[var(--color-foreground-muted)] pointer-events-none hidden sm:block">
                  <svg
                    viewBox="0 0 54 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-8"
                  >
                    <path
                      d="M6 4C18 4 36 12 44 26"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 28L45 28L48 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Sticky Post-it Card */}
                <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-paper)] max-w-sm rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                  {/* Tape / Pin header */}
                  <div className="absolute -top-2.5 left-8 w-10 h-4 bg-[var(--sticky-tape)] rounded-xs border border-[var(--sticky-tape-border)]" />

                  {/* Sparkle lines top right */}
                  <div className="absolute -top-3.5 -right-2 text-[var(--color-foreground-muted)]">
                    <SparkleLines className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 font-handwriting text-2xl sm:text-[1.75rem] text-[var(--color-foreground)] leading-snug">
                    <p className="text-[var(--color-foreground-secondary)]">Your business</p>
                    <p className="text-[var(--color-foreground-secondary)]">Your goals</p>
                    <p className="text-[var(--color-foreground-secondary)]">Our expertise</p>
                    <div className="pt-1">
                      <p className="font-bold text-[var(--color-foreground)] underline decoration-[#315CFF] decoration-2 underline-offset-4">
                        Real growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* "From Ideas to Impact" Annotation curving towards right column */}
                <div className="hidden lg:block absolute -right-6 bottom-[-20px] pointer-events-none text-right">
                  <p className="font-handwriting text-xl text-[var(--color-foreground-secondary)] leading-none rotate-[-6deg] mb-1">
                    From Ideas <br /> to Impact
                  </p>
                  <div className="flex justify-end mr-3">
                    <svg
                      viewBox="0 0 32 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-8 text-[var(--color-foreground-muted)]"
                    >
                      <path
                        d="M8 2C16 12 24 24 18 34"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 30L17 36L22 30"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Two CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-foreground)] text-[var(--color-background)] font-semibold rounded-xl text-sm hover:opacity-90 transition-all duration-200 shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center px-6 py-3.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold rounded-xl text-sm hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-strong)] transition-all duration-200"
                >
                  See Our Work
                </Link>
              </div>

              {/* Three Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border)] text-[var(--color-foreground-secondary)]">
                <div className="flex items-start gap-2.5">
                  <Users size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="text-xs leading-snug">Flexible & friendly collaboration</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="text-xs leading-snug">Clear communication at every step</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <TrendingUp size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="text-xs leading-snug">Solutions built for long-term growth</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: 5 Cards with Connecting Spine & Animated Visuals (col-span-7)
              ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 relative">
            {/* Curved Connector Spine on Desktop */}
            <div className="hidden lg:block absolute -left-8 top-10 bottom-12 w-1 pointer-events-none">
              <svg
                viewBox="0 0 20 800"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full text-[var(--color-accent)]/30"
              >
                <path
                  d="M10 0 C 4 160, 16 320, 10 480 C 4 640, 14 740, 10 800"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <FadeUp key={pillar.number} delay={idx * 0.09}>
                  <div className="relative group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-paper)] hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-paper-hover)] hover:-translate-y-0.5 transition-all duration-300">
                    {/* Node Dot on left connector rail */}
                    <div className="hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent)] items-center justify-center shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Number & Text Details (col-span-7) */}
                      <div className="md:col-span-7">
                        {/* Number Badge */}
                        <div className="mb-3">
                          <span className="inline-block text-xs font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-lg border border-[var(--color-accent)]/20">
                            {pillar.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)] mb-2.5 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                          {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[var(--color-foreground-secondary)] leading-relaxed mb-5 font-normal">
                          {pillar.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {pillar.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium text-[var(--color-foreground-secondary)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Visual Illustration + Handwritten Label (col-span-5) */}
                      <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center relative pt-4 md:pt-0">
                        {/* Handwritten Note Annotation */}
                        <div className="flex items-center gap-1.5 mb-2 self-center md:self-end text-[var(--color-foreground-secondary)]">
                          {pillar.hasSparkle && <SparkleLines className="w-3.5 h-3.5 mr-0.5" />}
                          <span className="font-handwriting text-lg sm:text-xl leading-none">
                            {pillar.handwritten}
                          </span>
                        </div>

                        {/* Dedicated Animated Visual */}
                        <div className="relative">
                          {idx === 0 && <ChatVisual />}
                          {idx === 1 && <DocumentVisual />}
                          {idx === 2 && <BrowserVisual />}
                          {idx === 3 && <ChartVisual />}
                          {idx === 4 && <EvolutionVisual />}

                          {/* Curved arrow pointing from bottom of visual */}
                          <div className="flex justify-end mt-1 mr-1">
                            <CurvedArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
