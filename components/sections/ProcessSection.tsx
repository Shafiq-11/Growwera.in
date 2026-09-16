"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

/* ── 6-STAGE CLIENT JOURNEY DATA MATCHING THE PHOTO ── */
const stages = [
  {
    number: "01",
    title: "Share Your Idea",
    description: "Tell us what you're thinking, even if it's just a rough idea.",
    icon: IdeaIcon,
  },
  {
    number: "02",
    title: "Tell Us Your Goals",
    description: "Share your business, your challenges, and what you want to achieve.",
    icon: ChatGoalsIcon,
  },
  {
    number: "03",
    title: "We Plan the Right Solution",
    description: "We analyse your needs and recommend the right approach for your business.",
    icon: PlanDocumentIcon,
  },
  {
    number: "04",
    title: "We Build It",
    description: "We design, develop, create and configure your solution.",
    icon: BuildBrowserIcon,
  },
  {
    number: "05",
    title: "You Review & Refine",
    description: "You see the progress, share feedback, and we make the right adjustments.",
    icon: LaptopReviewIcon,
  },
  {
    number: "06",
    title: "We Launch",
    description: "Once everything is ready, we launch and help you take the next step.",
    icon: LaunchRocketIcon,
    isRocket: true,
  },
];

/* ── CUSTOM SVG ICONS (EXACT REPRODUCTION FROM PHOTO) ── */

// 01: Lightbulb with radiant lines
function IdeaIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-slate-800 dark:text-neutral-100"
      >
        {/* Radiating rays */}
        <line x1="24" y1="5" x2="24" y2="9" stroke="#315CFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="10" x2="15" y2="13" stroke="#315CFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="10" x2="33" y2="13" stroke="#315CFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="7" y1="22" x2="11" y2="22" stroke="#315CFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="41" y1="22" x2="37" y2="22" stroke="#315CFF" strokeWidth="2" strokeLinecap="round" />

        {/* Bulb outline */}
        <path
          d="M17 23C17 19.134 20.134 16 24 16C27.866 16 31 19.134 31 23C31 25.8 29.5 28 28 29.5V33H20V29.5C18.5 28 17 25.8 17 23Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Filament lines */}
        <path d="M21 36H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 39H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 23L24 21L26 23" stroke="#315CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// 02: Chat Bubbles (one outline + one filled blue)
function ChatGoalsIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* Left outlined chat bubble */}
        <path
          d="M11 25C11 19.4772 15.4772 15 21 15H25C30.5228 15 35 19.4772 35 25C35 30.5228 30.5228 35 25 35H20L14 39V34.2C12.1 32 11 28.7 11 25Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          className="text-slate-800 dark:text-neutral-200"
        />
        <line x1="17" y1="23" x2="26" y2="23" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-slate-800 dark:text-neutral-300" />
        <line x1="17" y1="27" x2="22" y2="27" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-slate-800 dark:text-neutral-300" />

        {/* Right solid blue filled speech bubble (overlapping foreground) */}
        <path
          d="M24 27C24 23.134 27.134 20 31 20H33C36.866 20 40 23.134 40 27C40 30.866 36.866 34 33 34H31L27 37V33.8C25.2 32.2 24 29.8 24 27Z"
          fill="#315CFF"
        />
        {/* Dots inside blue bubble */}
        <circle cx="29" cy="27" r="1" fill="white" />
        <circle cx="32" cy="27" r="1" fill="white" />
        <circle cx="35" cy="27" r="1" fill="white" />
      </svg>
    </div>
  );
}

// 03: Document with Magnifying Glass
function PlanDocumentIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* Document sheet */}
        <rect
          x="12"
          y="10"
          width="22"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-800 dark:text-neutral-200"
          fill="none"
        />
        {/* Document text bars */}
        <line x1="17" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-800 dark:text-neutral-300" />
        <line x1="17" y1="21" x2="28" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-800 dark:text-neutral-300" />
        <line x1="17" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-800 dark:text-neutral-300" />

        {/* Magnifying glass in bottom right */}
        <circle
          cx="29"
          cy="29"
          r="6.5"
          stroke="#315CFF"
          strokeWidth="2.5"
          className="fill-blue-50/70 dark:fill-blue-950/60"
        />
        <line
          x1="34"
          y1="34"
          x2="41"
          y2="41"
          stroke="#315CFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// 04: Browser Window with Settings Gear
function BuildBrowserIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* Browser window */}
        <rect
          x="9"
          y="13"
          width="27"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-800 dark:text-neutral-200"
          fill="none"
        />
        {/* Browser top header bar */}
        <path d="M9 19H36" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-neutral-400" />
        {/* Three window control dots */}
        <circle cx="13" cy="16" r="1" fill="currentColor" className="text-slate-800 dark:text-neutral-300" />
        <circle cx="16" cy="16" r="1" fill="currentColor" className="text-slate-800 dark:text-neutral-300" />
        <circle cx="19" cy="16" r="1" fill="currentColor" className="text-slate-800 dark:text-neutral-300" />

        {/* Blue Gear in bottom right */}
        <g transform="translate(24, 23)">
          <path
            d="M9 3.5V5.5M9 12.5V14.5M3.5 9H5.5M12.5 9H14.5M5.1 5.1L6.5 6.5M11.5 11.5L12.9 12.9M5.1 12.9L6.5 11.5M11.5 6.5L12.9 5.1"
            stroke="#315CFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="4" fill="#315CFF" />
          <circle cx="9" cy="9" r="1.75" fill="white" />
        </g>
      </svg>
    </div>
  );
}

// 05: Laptop with Checkmark on Display
function LaptopReviewIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* Laptop screen body */}
        <rect
          x="11"
          y="13"
          width="26"
          height="18"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-800 dark:text-neutral-200"
          fill="none"
        />
        {/* Laptop keyboard base */}
        <path
          d="M7 34H41C41 34 39 36 37 36H11C9 36 7 34 7 34Z"
          fill="currentColor"
          className="text-slate-800 dark:text-neutral-300"
        />
        {/* Checkmark circle badge on screen */}
        <circle cx="24" cy="21.5" r="5" fill="#315CFF" />
        <path
          d="M21.8 21.5L23.3 23L26.2 20.1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// 06: Launch Rocket & Speed Rays
function LaunchRocketIcon() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 3 speed rays on left side */}
      <div className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 pointer-events-none select-none">
        <span className="w-2.5 h-[2px] bg-blue-500 rounded-full transform -rotate-25 origin-right" />
        <span className="w-3.5 h-[2px] bg-blue-500 rounded-full" />
        <span className="w-2.5 h-[2px] bg-blue-500 rounded-full transform rotate-25 origin-right" />
      </div>

      {/* Pure white rocket angled at 45° */}
      <Rocket className="w-9 h-9 sm:w-10 sm:h-10 text-white -rotate-12 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
    </div>
  );
}

/* ── MAIN PROCESS SECTION COMPONENT ── */
export default function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-[var(--color-background)]"
      aria-label="How It Works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── SECTION HEADER (EXACT REPRODUCTION FROM PHOTO) ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <FadeUp>
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#315CFF] mb-3 select-none">
              HOW IT WORKS
            </p>

            {/* Headline with serif italic blue 'launch.' */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-foreground)]">
              From idea to{" "}
              <span className="font-serif italic font-normal text-[#315CFF] underline decoration-transparent">
                launch.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[var(--color-foreground-muted)] max-w-xl mx-auto leading-relaxed">
              A simple process designed to keep you informed, involved, and
              clear on what&apos;s happening at every stage.
            </p>
          </FadeUp>
        </div>

        {/* ── DESKTOP: THE WAVY UNDULATING SERPENTINE PROCESS (LG+) ── */}
        <div className="hidden lg:block relative pt-10 pb-16">
          {/* Handwritten Annotation 01: "Your idea starts here" */}
          <div className="absolute top-0 left-0 xl:left-2 z-20 flex flex-col items-center select-none pointer-events-none">
            <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] -rotate-12 tracking-wide whitespace-nowrap">
              Your idea starts here
            </span>
            <HandDrawnArrow
              variant="curved-down-right"
              className="w-10 h-8 -mt-1 ml-6 text-[var(--color-foreground-muted)] opacity-75"
              color="currentColor"
            />
          </div>

          {/* Handwritten Annotation 06: "Live and grow together" */}
          <div className="absolute top-4 right-0 xl:right-4 z-20 flex flex-col items-center select-none pointer-events-none">
            <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] rotate-6 tracking-wide whitespace-nowrap">
              Live and grow together
            </span>
            <HandDrawnArrow
              variant="curved-down-left"
              className="w-10 h-8 -mt-1 mr-6 text-[var(--color-foreground-muted)] opacity-75"
              color="currentColor"
            />
          </div>

          {/* SVG Undulating Dashed Spline with Intermediate Blue Dots and Exit Arrow */}
          <svg
            className="absolute top-10 left-0 w-full h-[220px] pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1200 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* The undulating dashed wave through all 6 node centers */}
            <path
              d="M 100 44 C 180 44, 220 124, 300 124 C 380 124, 420 44, 500 44 C 580 44, 620 124, 700 124 C 780 124, 820 44, 900 44 C 980 44, 1030 108, 1100 108"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeDasharray="6 6"
              className="text-slate-300 dark:text-neutral-700"
            />

            {/* Intermediate waypoints (solid blue dots on the line) */}
            <circle cx="200" cy="84" r="3.5" fill="#315CFF" />
            <circle cx="400" cy="84" r="3.5" fill="#315CFF" />
            <circle cx="600" cy="84" r="3.5" fill="#315CFF" />
            <circle cx="800" cy="84" r="3.5" fill="#315CFF" />
            <circle cx="1000" cy="76" r="3.5" fill="#315CFF" />

            {/* Exit Arrow from Node 6 curving up-right */}
            <path
              d="M 1145 100 C 1170 88, 1195 72, 1215 54"
              stroke="#315CFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 1202 54 L 1215 54 L 1215 67"
              stroke="#315CFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* The 6 Stages Grid */}
          <div className="grid grid-cols-6 gap-3 xl:gap-5 relative z-10">
            {stages.map((stage, idx) => {
              const IconComponent = stage.icon;
              // Alternating wave vertical rhythm
              const isTrough = idx === 1 || idx === 3;
              const isRocketTrough = idx === 5;

              return (
                <div
                  key={stage.number}
                  className={cn(
                    "flex flex-col items-center text-center transition-transform duration-300",
                    isTrough && "pt-20",
                    isRocketTrough && "pt-16",
                    !isTrough && !isRocketTrough && "pt-0"
                  )}
                >
                  {/* Node Circle */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="relative group cursor-default"
                  >
                    {stage.isRocket ? (
                      /* Highlighted Solid Blue Launch Orb */
                      <div className="relative w-22 h-22 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 shadow-[0_12px_36px_rgba(49,92,255,0.45)] dark:shadow-[0_12px_42px_rgba(49,92,255,0.65)] flex items-center justify-center transition-all duration-300">
                        <IconComponent />
                      </div>
                    ) : (
                      /* Soft Frosted Glass Node Circle */
                      <div className="relative w-22 h-22 rounded-full bg-white dark:bg-[#121214] border border-neutral-200/80 dark:border-white/10 shadow-[0_8px_28px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 group-hover:border-[#315CFF]/40 group-hover:shadow-[0_12px_36px_rgba(49,92,255,0.18)]">
                        {/* Soft blue glow backdrop */}
                        <div className="absolute inset-0 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-md pointer-events-none" />
                        <IconComponent />
                      </div>
                    )}
                  </motion.div>

                  {/* Stage Details Below Circle */}
                  <div className="mt-5 max-w-[170px]">
                    <span className="block text-xs font-bold font-mono tracking-wider text-[#315CFF] mb-1 select-none">
                      {stage.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--color-foreground)] tracking-tight mb-1.5 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--color-foreground-muted)] leading-relaxed text-balance">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE & TABLET RESPONSIVE FLOW (< LG) ── */}
        <div className="block lg:hidden relative">
          {/* Top annotation */}
          <div className="flex items-center justify-center gap-2 mb-8 select-none">
            <span className="font-handwriting text-lg text-[var(--color-foreground-secondary)] -rotate-6">
              Your idea starts here
            </span>
            <HandDrawnArrow
              variant="curved-down-right"
              className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75"
              color="currentColor"
            />
          </div>

          {/* Vertical timeline cards with connected dashed line */}
          <div className="relative pl-8 sm:pl-10 space-y-8">
            {/* Vertical connector line */}
            <div className="absolute left-[29px] sm:left-[35px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-slate-300 dark:border-neutral-700 pointer-events-none -z-0" />

            {stages.map((stage) => {
              const IconComponent = stage.icon;

              return (
                <div
                  key={stage.number}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Left Circle Node */}
                  <div className="relative z-10 shrink-0">
                    {stage.isRocket ? (
                      <div className="w-15 h-15 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 shadow-md shadow-blue-500/30 flex items-center justify-center">
                        <IconComponent />
                      </div>
                    ) : (
                      <div className="w-15 h-15 rounded-full bg-white dark:bg-[#121214] border border-neutral-200 dark:border-white/10 shadow-sm flex items-center justify-center">
                        <IconComponent />
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="pt-1.5 flex-1">
                    <span className="inline-block text-xs font-bold font-mono tracking-wider text-[#315CFF] mb-0.5">
                      {stage.number}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-foreground)] tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed mt-1">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom annotation */}
          <div className="flex items-center justify-center gap-2 mt-8 select-none">
            <HandDrawnArrow
              variant="curved-down-left"
              className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75"
              color="currentColor"
            />
            <span className="font-handwriting text-lg text-[var(--color-foreground-secondary)] rotate-3">
              Live and grow together
            </span>
          </div>
        </div>

        {/* ── BOTTOM REASSURANCE BANNER & CTA ── */}
        <FadeUp delay={0.25} className="mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/70 backdrop-blur-md p-6 sm:p-8 text-center shadow-xs">
            <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] mb-4">
              You don&apos;t need everything figured out. Just start the conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#315CFF] hover:bg-[#2446D8] transition-all shadow-md shadow-[#315CFF]/25 hover:shadow-lg hover:shadow-[#315CFF]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
