"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  MessageSquare,
  Network,
  Layers,
  MousePointer,
  Rocket,
  Check,
  CheckCircle2,
  Globe,
  Sparkles,
  Layout,
  Sliders,
} from "lucide-react";
import DoodleStar from "@/components/decorative/DoodleStar";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

/* ── THE 6-STAGE CLIENT JOURNEY DATA ── */
const clientStages = [
  {
    id: "idea",
    number: "01",
    badge: "01 · START WITH YOUR IDEA",
    shortName: "Idea",
    title: "Have an idea? Start there.",
    description:
      "You don't need everything figured out before contacting us. Tell us what you're thinking, even if it's still just an idea.",
  },
  {
    id: "tell-us",
    number: "02",
    badge: "02 · TELL US WHAT YOU NEED",
    shortName: "Talk",
    title: "Tell us about your business.",
    description:
      "Share what you do, what you're trying to achieve, and what you're looking for. If you're not sure what you need, that's okay too.",
  },
  {
    id: "plan",
    number: "03",
    badge: "03 · WE PLAN THE RIGHT SOLUTION",
    shortName: "Plan",
    title: "We figure out what makes sense.",
    description:
      "We turn what you've shared into a clear plan — choosing the right combination of design, technology, marketing, SEO, or automation for your needs.",
  },
  {
    id: "build",
    number: "04",
    badge: "04 · WE BUILD IT",
    shortName: "Build",
    title: "We turn the plan into something real.",
    description:
      "Once the direction is clear, we design, develop, create, configure, and bring the solution together.",
  },
  {
    id: "refine",
    number: "05",
    badge: "05 · YOU REVIEW & REFINE",
    shortName: "Refine",
    title: "You see it, give feedback, and we refine it.",
    description:
      "You'll be able to review the work, share feedback, and make sure the final result feels right for your business.",
  },
  {
    id: "launch",
    number: "06",
    badge: "06 · WE LAUNCH & MOVE FORWARD",
    shortName: "Launch",
    title: "We launch it and keep the next step clear.",
    description:
      "Once everything is ready, we launch the solution and move forward with whatever support or next stage your business needs.",
  },
];

/* ── MINI VISUAL 01: Idea Spark / Lightbulb Entry ── */
function IdeaSparkVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl p-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] flex flex-col justify-between shadow-xs">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
        <span>Step 01: Spark</span>
        <span className="text-[var(--color-accent)] font-semibold">Raw Concept</span>
      </div>

      <div className="my-auto flex items-center justify-center gap-4 relative">
        {/* Your Idea Node */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative px-3.5 py-2 rounded-xl bg-[var(--color-surface)] border border-[#315CFF]/40 shadow-sm flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-lg bg-[#315CFF]/15 text-[#315CFF] flex items-center justify-center">
            <Lightbulb size={13} className="text-[#315CFF]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[var(--color-foreground)] block leading-tight">
              YOUR IDEA
            </span>
            <span className="text-[9px] text-[var(--color-foreground-muted)]">Unformed / Rough</span>
          </div>
          {/* Sparkle badge */}
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#315CFF] text-white flex items-center justify-center text-[8px]">
            ✦
          </div>
        </motion.div>

        {/* Traveling Connector Pulse */}
        <div className="relative w-10 sm:w-16 flex items-center justify-center">
          <div className="w-full h-0.5 bg-[var(--color-border)]" />
          <motion.div
            animate={shouldReduceMotion ? {} : { x: [-16, 16, -16] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 rounded-full bg-[#315CFF] shadow-[0_0_8px_#315CFF]"
          />
        </div>

        {/* Growwera Entry Node */}
        <div className="px-3 py-2 rounded-xl bg-[#315CFF]/10 border border-[#315CFF]/30 text-center">
          <span className="text-[10px] font-mono font-bold text-[#315CFF] block leading-tight">
            GROWWERA
          </span>
          <span className="text-[9px] text-[var(--color-foreground-muted)]">Reception</span>
        </div>
      </div>

      <div className="text-[10px] text-center text-[var(--color-foreground-muted)] font-mono">
        &ldquo;No technical documentation needed&rdquo;
      </div>
    </div>
  );
}

/* ── MINI VISUAL 02: Conversation & Discovery Dialogue ── */
function ConversationVisual() {
  const shouldReduceMotion = useReducedMotion();

  const responsePills = [
    { label: "Your business", x: 0 },
    { label: "Your goal", x: 3 },
    { label: "Your challenge", x: -2 },
    { label: "Your idea", x: 2 },
  ];

  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl p-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] flex flex-col justify-between shadow-xs">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
        <span>Step 02: Dialogue</span>
        <span className="text-[#315CFF] font-semibold">Discovery Interface</span>
      </div>

      <div className="my-auto space-y-2">
        {/* Chat Prompt */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-2.5 flex items-center gap-2 max-w-[95%]">
          <MessageSquare size={13} className="text-[#315CFF] shrink-0" />
          <p className="text-[11px] text-[var(--color-foreground)] leading-snug">
            Tell us about your business. What are you trying to achieve?
          </p>
        </div>

        {/* Floating Context Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {responsePills.map((pill, idx) => (
            <motion.span
              key={pill.label}
              animate={shouldReduceMotion ? {} : { y: [0, -2.5, 0] }}
              transition={{
                duration: 3 + idx * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.15,
              }}
              className="px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[10px] font-medium text-[var(--color-foreground-secondary)] shadow-xs flex items-center gap-1"
            >
              <span className="w-1 h-1 rounded-full bg-[#315CFF]" />
              {pill.label}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="text-[10px] text-center text-[var(--color-foreground-muted)] font-mono">
        &ldquo;Not sure what you need? That is okay too.&rdquo;
      </div>
    </div>
  );
}

/* ── MINI VISUAL 03: Solution Blueprint Convergence ── */
function SolutionBlueprintVisual() {
  const shouldReduceMotion = useReducedMotion();

  const ingredients = ["WEB", "SEO", "MARKETING", "AI"];

  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl p-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] flex flex-col justify-between shadow-xs">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
        <span>Step 03: Strategy</span>
        <span className="text-[#315CFF] font-semibold">Custom Convergence</span>
      </div>

      <div className="my-auto flex flex-col items-center">
        {/* 4 Input Nodes */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          {ingredients.map((item, idx) => (
            <motion.div
              key={item}
              animate={shouldReduceMotion ? {} : { scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
              className="px-2 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[9px] font-mono font-bold text-[var(--color-foreground-secondary)]"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Converging arrow lines */}
        <div className="text-[#315CFF] text-xs font-mono mb-1.5 opacity-70">
          \ | | /
        </div>

        {/* Combined Solution Node */}
        <div className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#315CFF]/15 to-[#38BDF8]/15 border border-[#315CFF]/40 text-center shadow-xs flex items-center gap-2">
          <Network size={12} className="text-[#315CFF]" />
          <span className="text-[11px] font-mono font-bold text-[#315CFF]">
            TAILORED SOLUTION PLAN
          </span>
        </div>
      </div>

      <div className="text-[10px] text-center text-[var(--color-foreground-muted)] font-mono">
        &ldquo;Only the combination your business genuinely needs&rdquo;
      </div>
    </div>
  );
}

/* ── MINI VISUAL 04: System Assembling Browser ── */
function BuildAssemblyVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl p-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] flex flex-col justify-between shadow-xs">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
        <span>Step 04: Construction</span>
        <span className="text-[#315CFF] font-semibold">Assembly In Progress</span>
      </div>

      {/* Mini Assembling Browser Wireframe */}
      <div className="my-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-2.5 max-w-sm mx-auto w-full shadow-xs">
        {/* Nav Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-[var(--color-border)] mb-2">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
          </div>
          <span className="text-[8px] font-mono text-[#315CFF] font-semibold">
            [NAV LOCK]
          </span>
        </div>

        {/* Assembling Blocks */}
        <div className="grid grid-cols-12 gap-1.5 items-center">
          {/* Content Block */}
          <motion.div
            animate={shouldReduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="col-span-7 space-y-1"
          >
            <div className="w-full h-1.5 bg-[#315CFF]/30 rounded-full" />
            <div className="w-4/5 h-1.5 bg-[var(--color-foreground-muted)]/20 rounded-full" />
            <div className="w-2/3 h-1.5 bg-[var(--color-foreground-muted)]/20 rounded-full" />
          </motion.div>
          {/* Image & CTA */}
          <div className="col-span-5 flex flex-col items-center gap-1">
            <div className="w-full h-7 rounded bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[8px] text-[#315CFF] font-mono">
              [ASSET]
            </div>
            <div className="w-full h-3 rounded bg-[#315CFF] text-white text-[7px] font-bold flex items-center justify-center">
              CTA
            </div>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-center text-[var(--color-foreground-muted)] font-mono">
        &ldquo;Design, develop, configure & integrate&rdquo;
      </div>
    </div>
  );
}

/* ── MINI VISUAL 05: Client Feedback & Review Cursor ── */
function ReviewRefineVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl p-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] flex flex-col justify-between shadow-xs">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
        <span>Step 05: Collaboration</span>
        <span className="text-[#315CFF] font-semibold">Review & Feedback</span>
      </div>

      <div className="my-auto relative max-w-sm mx-auto w-full">
        {/* Preview Frame */}
        <div className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs flex items-center justify-between gap-3">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-[var(--color-foreground)]">
                Staging Preview
              </span>
            </div>
            <p className="text-[10px] text-[var(--color-foreground-secondary)]">
              &ldquo;Looks good. Small adjustment here →&rdquo;
            </p>
          </div>

          <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 text-[10px] font-bold font-mono shrink-0 flex items-center gap-1">
            <Check size={11} />
            Refined
          </div>
        </div>

        {/* Animated Feedback Cursor */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [4, 18, 4],
                  y: [-2, 8, -2],
                }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1 right-12 pointer-events-none flex items-center gap-1 text-[#315CFF]"
        >
          <MousePointer size={15} fill="#315CFF" />
          <span className="text-[9px] font-mono font-bold bg-[#315CFF] text-white px-1.5 py-0.5 rounded shadow-xs">
            Review
          </span>
        </motion.div>
      </div>

      <div className="text-[10px] text-center text-[var(--color-foreground-muted)] font-mono">
        &ldquo;You share feedback until it feels completely right&rdquo;
      </div>
    </div>
  );
}

/* ── MINI VISUAL 06: Launch Pipeline & Live System ── */
function LaunchPipelineVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl p-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)] flex flex-col justify-between shadow-xs">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
        <span>Step 06: Go-Live</span>
        <span className="text-emerald-500 font-semibold">Active & Live</span>
      </div>

      <div className="my-auto space-y-2.5">
        {/* Pipeline: READY -> LAUNCH -> LIVE */}
        <div className="flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1 text-[var(--color-foreground-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-foreground-muted)]" />
            READY
          </div>
          <span className="text-[var(--color-accent)] font-bold">→</span>
          <div className="flex items-center gap-1 text-[#315CFF] font-semibold">
            <Rocket size={12} className="text-[#315CFF]" />
            LAUNCH
          </div>
          <span className="text-[var(--color-accent)] font-bold">→</span>
          <div className="flex items-center gap-1 text-emerald-500 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </div>
        </div>

        {/* Live Domain Status Card */}
        <div className="p-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <Globe size={13} className="text-[#315CFF]" />
            <span className="text-xs font-mono font-medium text-[var(--color-foreground)]">
              yourbusiness.com
            </span>
          </div>
          <span className="text-[9px] font-mono text-[var(--color-foreground-muted)]">
            Continuous Support ✓
          </span>
        </div>
      </div>

      <div className="text-[10px] text-center text-[var(--color-foreground-muted)] font-mono">
        &ldquo;Smooth handover with clear next steps&rdquo;
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 border-t border-[var(--color-border)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: Sticky Overview & Bridge (col-span-5)
              ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <FadeUp>
              {/* Bridge subtitle linking from Why Growwera */}
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  How It Works
                </p>
                <DoodleStar variant="four-point" size={13} color="#315CFF" />
              </div>

              <p className="text-xs font-mono text-[#315CFF] font-semibold uppercase tracking-wider mb-3">
                So, what happens when we start?
              </p>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[var(--color-foreground)] leading-[1.1] tracking-tight mb-4">
                From idea to{" "}
                <span className="font-serif italic font-normal text-[#315CFF]">
                  launch.
                </span>{" "}
                <br />
                Without the confusion.
              </h2>

              {/* Supporting explanation */}
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6 max-w-md font-normal">
                A simple process designed to keep you informed, involved, and clear on what&apos;s
                happening at every stage.
              </p>

              {/* Reassurance Journey Card */}
              <div className="p-5 sm:p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-[var(--shadow-paper)] mb-6 max-w-md">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-foreground-muted)] mb-3">
                  The Client Journey at a glance
                </p>

                {/* 6 Quick Stage Trackers */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {clientStages.map((st, idx) => (
                    <button
                      key={st.id}
                      onClick={() => setActiveStage(idx)}
                      className={cn(
                        "px-2 py-1.5 rounded-lg border text-[11px] font-mono font-medium transition-all text-left",
                        activeStage === idx
                          ? "bg-[#315CFF]/15 border-[#315CFF] text-[#315CFF] font-bold"
                          : "bg-[var(--color-surface-elevated)] border-[var(--color-border)] text-[var(--color-foreground-secondary)] hover:border-[var(--color-border-strong)]"
                      )}
                    >
                      <span className="block text-[9px] opacity-60">0{idx + 1}</span>
                      {st.shortName}
                    </button>
                  ))}
                </div>

                <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed border-t border-[var(--color-border)] pt-3">
                  No technical background required. You bring the vision — we handle the planning,
                  development, and execution.
                </p>
              </div>

              {/* CTA link */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#315CFF] hover:text-[#2446D8] transition-colors"
                >
                  <span>Ready to start? Let&apos;s talk</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <div className="hidden sm:block">
                  <HandDrawnArrow
                    variant="swoop-right"
                    color="#315CFF"
                    className="w-12 h-6"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Connected 6-Stage Visual Journey (col-span-7)
              ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 relative">
            {/* Continuous Vertical Connector Rail */}
            <div className="absolute left-3.5 sm:left-4.5 top-6 bottom-10 w-0.5 bg-[var(--color-border)]">
              <motion.div
                className="w-full bg-[#315CFF] origin-top"
                animate={{
                  height: `${((activeStage + 1) / clientStages.length) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="space-y-8 pl-8 sm:pl-10">
              {clientStages.map((stage, idx) => {
                const isActive = activeStage === idx;

                return (
                  <FadeUp key={stage.id} delay={idx * 0.07}>
                    <div
                      onMouseEnter={() => setActiveStage(idx)}
                      onClick={() => setActiveStage(idx)}
                      className={cn(
                        "relative group rounded-3xl border transition-all duration-300 p-6 sm:p-7 cursor-pointer",
                        isActive
                          ? "bg-[var(--color-surface)] border-[#315CFF]/60 shadow-[var(--shadow-paper-hover)] ring-1 ring-[#315CFF]/20"
                          : "bg-[var(--color-surface)]/70 border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] opacity-85 hover:opacity-100"
                      )}
                    >
                      {/* Rail Node Indicator */}
                      <div
                        className={cn(
                          "absolute -left-8 sm:-left-10 top-7 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10",
                          isActive
                            ? "border-[#315CFF] bg-[var(--color-background)] scale-110 shadow-[0_0_12px_rgba(49,92,255,0.4)]"
                            : "border-[var(--color-border)] bg-[var(--color-surface)] group-hover:border-[var(--color-foreground-muted)]"
                        )}
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            isActive ? "bg-[#315CFF]" : "bg-transparent"
                          )}
                        />
                      </div>

                      {/* Header Badge */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span
                          className={cn(
                            "text-xs font-mono font-bold px-3 py-1 rounded-lg border transition-colors",
                            isActive
                              ? "text-[#315CFF] bg-[#315CFF]/10 border-[#315CFF]/30"
                              : "text-[var(--color-foreground-muted)] bg-[var(--color-surface-elevated)] border-[var(--color-border)]"
                          )}
                        >
                          {stage.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--color-foreground-muted)]">
                          Stage {stage.number} of 06
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3
                        className={cn(
                          "text-xl sm:text-2xl font-bold mb-2 tracking-tight transition-colors",
                          isActive
                            ? "text-[var(--color-foreground)]"
                            : "text-[var(--color-foreground-secondary)] group-hover:text-[var(--color-foreground)]"
                        )}
                      >
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--color-foreground-secondary)] leading-relaxed mb-6 font-normal">
                        {stage.description}
                      </p>

                      {/* Dedicated Mini Visual */}
                      <div>
                        {idx === 0 && <IdeaSparkVisual />}
                        {idx === 1 && <ConversationVisual />}
                        {idx === 2 && <SolutionBlueprintVisual />}
                        {idx === 3 && <BuildAssemblyVisual />}
                        {idx === 4 && <ReviewRefineVisual />}
                        {idx === 5 && <LaunchPipelineVisual />}
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

            {/* ════════════════════════════════════════════════════════════════
                FINAL REASSURANCE CTA AFTER HOW IT WORKS
                ════════════════════════════════════════════════════════════════ */}
            <FadeUp delay={0.25}>
              <div className="mt-12 ml-8 sm:ml-10 p-7 sm:p-9 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl text-center shadow-[var(--shadow-paper)] relative overflow-hidden">
                <div className="max-w-md mx-auto relative z-10">
                  <DoodleStar variant="sparkle" size={16} color="#315CFF" className="mx-auto mb-3" />
                  <p className="text-lg sm:text-xl font-bold text-[var(--color-foreground)] mb-2 tracking-tight">
                    You don&apos;t need everything figured out.
                  </p>
                  <p className="text-sm text-[var(--color-foreground-secondary)] mb-6 leading-relaxed">
                    Just start the conversation. Tell us what you&apos;re thinking, and we&apos;ll help
                    figure out the rest.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#315CFF] text-white font-semibold rounded-xl text-sm hover:bg-[#2446D8] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]"
                  >
                    <span>Start a Project</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
