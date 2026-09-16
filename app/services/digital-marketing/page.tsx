"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Megaphone,
  Target,
  FileSpreadsheet,
  MousePointerClick,
  BarChart3,
  RefreshCw,
  HelpCircle,
} from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import MarketingHeroVisual, { MarketingFlowDiagram } from "@/components/services/MarketingHeroVisual";
import ServicePricingEnquiry from "@/components/services/ServicePricingEnquiry";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";

/* ── 03: WHAT WE DO CARDS ── */
const whatWeDo = [
  {
    step: "01",
    title: "Campaign Strategy",
    description:
      "We define clear acquisition goals, customer personas, budget allocations, and multi-channel roadmaps tailored to your commercial margins.",
    icon: Target,
  },
  {
    step: "02",
    title: "Paid Advertising",
    description:
      "We manage targeted advertising campaigns across Google Search, Meta (Instagram/Facebook), and LinkedIn to reach buyers when intent is highest.",
    icon: Megaphone,
  },
  {
    step: "03",
    title: "Content & Copywriting",
    description:
      "We write high-converting ad copy, positioning hooks, and value propositions that clearly articulate why customers should choose you.",
    icon: FileSpreadsheet,
  },
  {
    step: "04",
    title: "Conversion Optimisation",
    description:
      "We design landing pages and frictionless user paths that maximize the percentage of visitors who pick up the phone or fill out your form.",
    icon: MousePointerClick,
  },
  {
    step: "05",
    title: "Marketing Analytics",
    description:
      "We configure server-side tracking, pixels, and automated dashboards to attribute leads, phone calls, and revenue back to exact ad spend.",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "Iterative Testing",
    description:
      "We continually split-test headlines, creative variants, and audience segments, cutting underperforming ads to compound efficiency.",
    icon: RefreshCw,
  },
];

/* ── 04: WHAT'S INCLUDED (6 SERVICE BLOCKS) ── */
const whatsIncluded = [
  {
    num: "01",
    title: "Full-Funnel Campaign Strategy",
    description:
      "In-depth market positioning, competitor analysis, and audience segmentation designed for sustainable acquisition.",
  },
  {
    num: "02",
    title: "Paid Advertising Management",
    description:
      "End-to-end setup and daily management of Google Search, Meta Ads, and LinkedIn campaigns with strict budget discipline.",
  },
  {
    num: "03",
    title: "Conversion-Focused Creative & Copy",
    description:
      "Direct-response ad copy, banner graphics, and messaging variants engineered to capture attention and inspire action.",
  },
  {
    num: "04",
    title: "Dedicated Landing Page Design",
    description:
      "Fast-loading, high-intent landing pages designed specifically around campaign offers to eliminate drop-off.",
  },
  {
    num: "05",
    title: "Multi-Touch Analytics & Attribution",
    description:
      "Clean Google Analytics 4, Meta Pixel, and CRM tracking to track cost per qualified lead without guesswork.",
  },
  {
    num: "06",
    title: "Continuous Optimisation & Reviews",
    description:
      "Ongoing A/B testing, negative keyword maintenance, audience refinement, and transparent monthly performance calls.",
  },
];

/* ── 05: HOW WE WORK (TIMELINE) ── */
const workflow = [
  {
    step: "01",
    name: "DISCOVER",
    desc: "We examine your customer lifetime value, market positioning, and revenue targets.",
  },
  {
    step: "02",
    name: "PLAN",
    desc: "We select the highest-performing channels and map an intentional campaign funnel.",
  },
  {
    step: "03",
    name: "CREATE",
    desc: "We build persuasive copy, tailored visual assets, and high-converting landing pages.",
  },
  {
    step: "04",
    name: "LAUNCH",
    desc: "We test all tracking pixels, configure conversion tags, and launch campaigns live.",
  },
  {
    step: "05",
    name: "MEASURE",
    desc: "We monitor actual cost per acquisition, bounce rates, and lead quality daily.",
  },
  {
    step: "06",
    name: "OPTIMISE",
    desc: "We reallocate budget toward winning campaigns, test fresh angles, and scale return.",
  },
];

/* ── 06: WHAT YOU GET (DELIVERABLES) ── */
const deliverables = [
  "Tailored digital marketing strategy aligned to actual business margins",
  "Complete campaign setup across verified high-performing ad networks",
  "Compelling direct-response ad copy and conversion-focused creative assets",
  "High-converting landing page structure and lead capture integration",
  "Clean analytics dashboards and end-to-end conversion tracking",
  "Transparent reporting on cost per acquisition and genuine commercial return",
  "Continuous split testing and weekly campaign performance management",
  "Direct communication with senior marketers without agency jargon",
];

/* ── 07: FAQS ── */
const faqs = [
  {
    q: "How much should I budget for advertising?",
    a: "Budgets vary based on your industry, customer lifetime value, and growth targets. We generally recommend starting with a focused test budget to validate messaging and conversion unit economics before scaling spend with confidence.",
  },
  {
    q: "Which platforms should my business be on?",
    a: "You don't need to be everywhere. B2B businesses typically perform best on Google Search and LinkedIn, while B2C, ecommerce, and consumer services thrive on Meta (Instagram/Facebook) and Google. We help you choose the channels where your actual buyers spend time.",
  },
  {
    q: "How quickly will we see results from digital marketing?",
    a: "Paid advertising campaigns can begin generating inquiries and qualified leads within days of launching. We continuously optimize targeting and ad creative over the first 30 to 60 days to reduce cost per lead and maximize your return on ad spend.",
  },
  {
    q: "What makes Growwera's marketing approach different?",
    a: "We don't focus on vanity metrics like impressions, views, or cheap accidental clicks. Everything we build is tied directly to customer acquisition cost, conversion quality, and measurable revenue growth.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-background)]">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 01 — HERO                                                 */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#315CFF] shadow-[0_0_8px_#315CFF]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                    DIGITAL MARKETING
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-[1.12] mb-6">
                  Turn attention into meaningful{" "}
                  <span className="font-serif italic font-normal text-[#315CFF]">
                    business action.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed max-w-xl mb-8">
                  We design and execute disciplined digital marketing campaigns that cut through
                  noise, connect with the right audience, and turn interest into qualified inquiries.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?service=digital-marketing"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#315CFF] hover:bg-[#2446D8] transition-all duration-200 shadow-[0_4px_20px_rgba(49,92,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Enquire for Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#how-we-work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--color-foreground)] hover:text-[#315CFF] glass-pill transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Our Marketing Process</span>
                    <ChevronRight className="w-4 h-4 text-[var(--color-foreground-muted)]" />
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Audience / Campaign Ecosystem Metaphor Visual */}
            <div className="lg:col-span-6 relative">
              <FadeUp delay={0.15}>
                <MarketingHeroVisual />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 02 — WHY DIGITAL MARKETING?                                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                    WHY DIGITAL MARKETING?
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-5 leading-tight">
                  Getting attention is only the beginning.
                </h2>
                <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6">
                  Traffic without strategy is just noise. Effective marketing doesn&apos;t mean
                  spamming every channel or chasing vanity impressions—it means understanding your
                  audience, delivering a clear message, and guiding interested prospects toward
                  taking action.
                </p>
                <p className="text-sm font-semibold text-[#315CFF] mb-2">
                  Our growth approach is built on four disciplined pillars:
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.15}>
                <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-4">
                  {[
                    "Reaching the right audience rather than wasting budget on broad traffic",
                    "Crafting clear messaging that communicates your genuine value proposition",
                    "Guiding prospects through an intentional, low-friction conversion funnel",
                    "Measuring real business outcomes (leads and sales) instead of vanity metrics",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#315CFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--color-foreground)]">
                        {point}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-[var(--color-border)] mt-4">
                    <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                      We optimize for customer acquisition cost and lifetime value, ensuring your marketing budget generates sustainable commercial momentum.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 03 — WHAT WE DO                                            */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  WHAT WE DO
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-4">
                What does Growwera do for your marketing?
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed">
                From campaign strategy and ad management to creative copy and conversion tracking, we handle your growth end-to-end.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {whatWeDo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.step} delay={idx * 0.08}>
                  <div className="glass-glossy rounded-3xl p-6 sm:p-7 border border-[var(--color-border)] hover:border-[#315CFF]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xs h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#315CFF] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#315CFF]">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Embedded Marketing Flow Diagram */}
          <FadeUp delay={0.2}>
            <div className="pt-8 border-t border-[var(--color-border)]">
              <div className="text-center mb-4">
                <span className="text-xs font-mono font-bold text-[#315CFF] uppercase tracking-wider">
                  The Complete Marketing Value Chain
                </span>
              </div>
              <MarketingFlowDiagram />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 04 — WHAT'S INCLUDED (6 SERVICE BLOCKS)                    */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-4">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  WHAT&apos;S INCLUDED
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight">
                A disciplined digital marketing system.
              </h2>
            </FadeUp>
            <div className="hidden sm:flex items-center gap-2 select-none pointer-events-none">
              <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] rotate-3">
                Action-oriented
              </span>
              <HandDrawnArrow
                variant="curved-down-right"
                className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75"
                color="currentColor"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item, idx) => (
              <FadeUp key={item.num} delay={idx * 0.06}>
                <div className="glass-glossy rounded-3xl p-6 sm:p-7 border border-[var(--color-border)] shadow-xs h-full flex flex-col justify-between group hover:border-[#315CFF]/30 transition-colors">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#315CFF] mb-2">
                      {item.num}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 05 — HOW WE WORK (TIMELINE)                                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="how-we-work" className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  HOW WE WORK
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-4">
                Our campaign deployment process.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)]">
                A structured execution sequence from discovery to continuous optimisation.
              </p>
            </FadeUp>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workflow.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.06}>
                <div className="glass-glossy rounded-3xl p-6 border border-[var(--color-border)] shadow-xs flex flex-col justify-between h-full hover:border-[#315CFF]/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#315CFF]">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
                        STAGE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-foreground-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 06 — WHAT YOU GET (DELIVERABLES)                           */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-14">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  WHAT YOU GET
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-3">
                Tangible deliverables on every marketing project.
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)]">
                Clarity, accountability, and transparent commercial tracking at every stage.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-[var(--color-border)]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#315CFF] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 07 — FAQ                                                   */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  FAQ
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
                Frequently asked questions.
              </h2>
            </FadeUp>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.05}>
                <div className="glass-glossy rounded-2xl p-6 border border-[var(--color-border)] shadow-xs">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] tracking-tight mb-2 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#315CFF] shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[var(--color-foreground-secondary)] leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 08 — ENQUIRE FOR PRICING (SHARED CONVERSION COMPONENT)     */}
      {/* ────────────────────────────────────────────────────────── */}
      <ServicePricingEnquiry
        serviceId="digital-marketing"
        serviceName="Digital Marketing"
        customHeadline="Ready to turn attention into measurable business growth?"
      />
    </div>
  );
}
