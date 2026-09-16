"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Play,
  Users,
  Box,
  BarChart3,
  ShieldCheck,
  RefreshCw,
  MessageSquare,
  FileText,
  Calendar,
  Check,
  X,
  MousePointer2,
} from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import GlassSphere from "@/components/decorative/GlassSphere";
import IsometricGlassStack from "@/components/decorative/IsometricGlassStack";
import AboutHeroVisual from "@/components/decorative/AboutHeroVisual";
import { cn } from "@/lib/utils";

/* ── 5 CORE PRINCIPLES DATA ── */
const principles = [
  {
    num: "01",
    title: "Understand first. Build second.",
    description:
      "We spend time properly understanding your business, your customers, and your goals. The right solution comes from asking the right questions.",
    icon: Users,
  },
  {
    num: "02",
    title: "Simple solutions beat complex ones.",
    description:
      "The best solution is usually the simplest one that effectively solves the problem — and the one your team can actually use and maintain.",
    icon: Box,
  },
  {
    num: "03",
    title: "Outcomes over outputs.",
    description:
      "A website is not a success because it was delivered on time. It's a success because it generates enquiries and helps your business grow.",
    icon: BarChart3,
  },
  {
    num: "04",
    title: "Honest over impressive.",
    description:
      "We'd rather tell you what we can't do than overpromise. If something won't work for your situation, we'll tell you — and suggest what will.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Improve continuously.",
    description:
      "Launch is the beginning, not the end. Businesses change. Markets change. We stay engaged and help you identify what to improve next.",
    icon: RefreshCw,
  },
];

/* ── 3 WORKING PROCESS STEPS DATA ── */
const workSteps = [
  {
    num: "01",
    title: "Clear communication",
    description:
      "You'll always know what's happening, what's next, and why. No black boxes.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Defined scope",
    description:
      "We agree on exactly what's being built before starting. No surprise changes.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Honest timelines",
    description:
      "We give realistic estimates and let you know early if anything changes.",
    icon: Calendar,
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden bg-[var(--color-background)]">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                           */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-6">
              <FadeUp>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#F5BA27] shadow-[0_0_8px_#F5BA27]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5BA27] select-none">
                    ABOUT GROWWERA
                  </p>
                </div>

                {/* Main Headline with italic serif blue 'simpler.' */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-[1.12] mb-6">
                  Technology should make business{" "}
                  <span className="font-serif italic font-normal text-[#F5BA27]">
                    simpler.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed max-w-xl mb-8">
                  Growwera exists to help businesses use technology practically — not as a way to look modern, but as a genuine tool for growth.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black font-bold bg-[#F5BA27] hover:bg-[#D99F04] transition-all duration-200 shadow-[0_4px_20px_rgba(245,186,39,0.38),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#philosophy"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-[var(--color-foreground)] hover:text-[#F5BA27] glass-pill transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#F5BA27] text-[#F5BA27]" />
                    <span>Meet Our Approach</span>
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: 3D Glossy Liquid Glass Centerpiece */}
            <div className="lg:col-span-6 relative">
              <FadeUp delay={0.15}>
                <AboutHeroVisual />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 2. WHY WE EXIST / THE PROBLEM WE'RE SOLVING                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Problem Copy */}
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5BA27]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5BA27] select-none">
                    WHY WE EXIST
                  </p>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-5">
                  The problem we&apos;re solving.
                </h2>

                <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6">
                  Too many businesses end up with digital solutions that don&apos;t actually solve their problems.
                </p>

                {/* 3 Problem Points with Chevron Icons */}
                <div className="space-y-3.5 mb-7">
                  {[
                    "A website that looks nice but doesn't generate leads.",
                    "An SEO campaign that produces traffic but no customers.",
                    "Marketing spend with no clear return.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl glass-glossy shadow-xs"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#F5BA27] text-black font-bold flex items-center justify-center shrink-0 shadow-sm shadow-[#F5BA27]/30">
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--color-foreground)]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-4">
                  This usually happens because the solution was built without properly understanding the business first.
                </p>

                <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] leading-relaxed">
                  Growwera was built to do it differently. We start with your business — your customers, your goals, your constraints — and work backwards to the right solution.
                </p>
              </FadeUp>
            </div>

            {/* Right Column: Common Outcome vs Growwera Approach Glass Cards */}
            <div className="lg:col-span-6 relative">
              {/* Handwritten Note Top Right */}
              <div className="absolute -top-10 right-0 sm:right-4 z-20 hidden sm:flex items-center gap-2 select-none pointer-events-none">
                <span className="font-handwriting text-lg text-[var(--color-foreground-secondary)] rotate-6 whitespace-nowrap">
                  Practical Technology Real Growth
                </span>
                <HandDrawnArrow
                  variant="curved-down-left"
                  className="w-8 h-7 text-[var(--color-foreground-muted)] opacity-75"
                  color="currentColor"
                />
              </div>

              {/* Floating Center 3D Sphere */}
              <GlassSphere
                size="lg"
                className="absolute top-1/2 -right-4 -translate-y-1/2 z-30 hidden sm:block shadow-[0_16px_36px_rgba(37,99,235,0.6)]"
                delay={0.3}
              />

              <div className="space-y-6 relative z-10">
                {/* Card 1: The Common Outcome */}
                <FadeUp delay={0.1}>
                  <div className="glass-glossy rounded-3xl p-6 sm:p-7 border border-red-500/20 dark:border-red-500/15 shadow-sm">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-500 mb-4">
                      The Common Outcome
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Looks good but no leads",
                        "Traffic but no customers",
                        "Spend with no clear return",
                        "Built without understanding",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                            <X className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[var(--color-foreground-muted)]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* Card 2: The Growwera Approach */}
                <FadeUp delay={0.2}>
                  <div className="glass-glossy rounded-3xl p-6 sm:p-7 border border-[#F5BA27]/35 shadow-[0_12px_36px_rgba(245,186,39,0.12)]">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5BA27] mb-4">
                      The Growwera Approach
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Built around your business",
                        "Focused on real goals",
                        "Practical and effective solutions",
                        "Designed for long-term growth",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#F5BA27] text-black font-bold flex items-center justify-center shrink-0 shadow-xs">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-[var(--color-foreground)]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Handwritten Note Bottom Right */}
              <div className="mt-4 flex items-center justify-end gap-2 select-none pointer-events-none">
                <span className="font-handwriting text-lg text-[var(--color-foreground-secondary)] -rotate-3">
                  Solutions that work
                </span>
                <HandDrawnArrow
                  variant="curved-down-right"
                  className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75"
                  color="currentColor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 3. OUR PHILOSOPHY (DARK THEATER WITH 3D ISOMETRIC STACK)   */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="philosophy" className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-[2.5rem] bg-[#06070a] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden text-white shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
            {/* Ambient Cyan/Blue Backlight */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              {/* Left Column: Philosophy Text */}
              <div className="lg:col-span-6">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 select-none">
                      OUR PHILOSOPHY
                    </p>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                    &ldquo;Understand first. Build second.{" "}
                    <span className="font-serif italic font-normal text-blue-400">
                      Improve continuously.&rdquo;
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-lg mb-8">
                    This isn&apos;t a tagline. It&apos;s how we run every project, from a simple website to a complex automation system.
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Our Approach</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeUp>
              </div>

              {/* Right Column: 3D Stacked Isometric Glass Layers */}
              <div className="lg:col-span-6 relative flex flex-col items-center">
                {/* Handwritten Callout Top Right */}
                <div className="absolute -top-6 right-0 sm:right-6 z-30 flex items-center gap-2 select-none pointer-events-none">
                  <span className="font-handwriting text-xl text-neutral-300 rotate-6 whitespace-nowrap">
                    A Smarter Way to Grow
                  </span>
                  <HandDrawnArrow
                    variant="curved-down-left"
                    className="w-8 h-7 text-neutral-400 opacity-80"
                    color="currentColor"
                  />
                </div>

                <FadeUp delay={0.15}>
                  <IsometricGlassStack />
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4. WHAT WE BELIEVE / THE PRINCIPLES WE BUILD BY            */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-4">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5BA27]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5BA27] select-none">
                  WHAT WE BELIEVE
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-3">
                The principles we build by.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] max-w-xl">
                These aren&apos;t values on a wall. They&apos;re decisions we make every day.
              </p>
            </FadeUp>

            {/* Handwritten Note */}
            <div className="hidden sm:flex items-center gap-2 select-none pointer-events-none">
              <HandDrawnArrow
                variant="curved-down-right"
                className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75"
                color="currentColor"
              />
              <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] rotate-3 whitespace-nowrap">
                Real Principles Real Decisions
              </span>
            </div>
          </div>

          {/* 5 Glass Cards in 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.num} delay={idx * 0.08}>
                  <div className="glass-glossy rounded-2xl p-6 h-full flex flex-col justify-between border border-[var(--color-border)] hover:border-[#F5BA27]/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-xs">
                    <div>
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#F5BA27]/10 dark:bg-[#F5BA27]/20 text-[#F5BA27] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Number */}
                      <span className="block text-xs font-mono font-bold tracking-wider text-[#F5BA27] mb-1.5">
                        {item.num}
                      </span>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[var(--color-foreground)] tracking-tight mb-2.5 leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[var(--color-foreground-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 5. HOW WE WORK / WHAT WORKING WITH GROWWERA LOOKS LIKE     */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5BA27]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5BA27] select-none">
                  HOW WE WORK
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-4">
                What working with Growwera looks like.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed">
                A clear and straightforward process, designed to make your experience smooth and transparent.
              </p>
            </FadeUp>
          </div>

          {/* 3 Step Connected Process */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Horizontal Connecting Dashed Spline */}
            <svg
              className="hidden md:block absolute top-12 left-[10%] right-[10%] w-[80%] h-10 pointer-events-none -z-0"
              viewBox="0 0 600 40"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 20 20 C 120 20, 180 35, 300 20 C 420 5, 480 20, 580 20"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeDasharray="6 6"
                className="text-slate-300 dark:text-neutral-700"
              />
              <circle cx="150" cy="24" r="3.5" fill="#F5BA27" />
              <circle cx="450" cy="16" r="3.5" fill="#F5BA27" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {workSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <FadeUp key={step.num}>
                    <div className="glass-glossy rounded-3xl p-7 text-center flex flex-col items-center border border-[var(--color-border)] hover:border-[#F5BA27]/30 transition-all shadow-xs">
                      {/* Icon Circle */}
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-[#121214] border border-neutral-200/80 dark:border-white/10 shadow-sm flex items-center justify-center text-[#F5BA27] mb-4">
                        <Icon className="w-7 h-7" />
                      </div>

                      <span className="text-xs font-mono font-bold tracking-wider text-[#F5BA27] mb-1">
                        {step.num}
                      </span>
                      <h3 className="text-base font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 6. BOTTOM GLOSSY CTA ("HAVE AN IDEA? LET'S BUILD IT.")      */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-[2.5rem] bg-[#06070a] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden text-white shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
            {/* Ambient Cyan/Blue Light */}
            <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Floating 3D Blue Sphere on Bottom-Left */}
            <GlassSphere
              size="lg"
              className="absolute bottom-6 left-8 z-20 hidden sm:block shadow-[0_16px_36px_rgba(37,99,235,0.6)]"
              delay={0.2}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Left Side: Headline */}
              <div className="lg:col-span-6">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 select-none">
                      HAVE AN IDEA?
                    </p>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
                    Have an idea?{" "}
                    <span className="block font-serif italic font-normal text-blue-400">
                      Let&apos;s build it.
                    </span>
                  </h2>
                </FadeUp>
              </div>

              {/* Right Side: Copy & Actions */}
              <div className="lg:col-span-6 relative">
                {/* 3D Arrow / Cursor Indicator with Handwritten Note */}
                <div className="absolute -top-10 right-0 sm:right-4 z-20 hidden sm:flex items-center gap-2 select-none pointer-events-none">
                  <span className="font-handwriting text-xl text-neutral-300 rotate-6 whitespace-nowrap">
                    Ideas to Impact
                  </span>
                  <HandDrawnArrow
                    variant="curved-down-left"
                    className="w-8 h-7 text-neutral-400 opacity-80"
                    color="currentColor"
                  />
                </div>

                <FadeUp delay={0.15}>
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
                    Whether you need a new website, better visibility on Google, a stronger digital presence, or an AI-powered workflow, start by telling us what you&apos;re trying to achieve.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black font-bold bg-[#F5BA27] hover:bg-[#D99F04] transition-all duration-200 shadow-[0_4px_20px_rgba(245,186,39,0.45),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Start a Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact?topic=consultation"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>I&apos;m Not Sure What I Need</span>
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
