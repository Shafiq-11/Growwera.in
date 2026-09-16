"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Search,
  FileCode2,
  MapPin,
  KeyRound,
  FileText,
  LineChart,
  HelpCircle,
  Code2,
  Rocket,
} from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import SEOHeroVisual from "@/components/services/SEOHeroVisual";
import SEOValueChainDiagram from "@/components/services/SEOValueChainDiagram";
import CircularProcessOrbit from "@/components/services/CircularProcessOrbit";
import ServicePricingEnquiry from "@/components/services/ServicePricingEnquiry";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";

/* ── 03: WHAT WE DO CARDS ── */
const whatWeDo = [
  {
    step: "01",
    title: "Technical SEO",
    description:
      "We audit and fix site structure, page speed, mobile responsiveness, crawlability, and indexing to ensure search bots navigate seamlessly.",
    icon: FileCode2,
  },
  {
    step: "02",
    title: "On-Page SEO",
    description:
      "We optimize page titles, meta descriptions, heading structures, internal links, and body content so search engines understand your exact relevance.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Local SEO",
    description:
      "We optimize your Google Business Profile, local directory citations, and geographic signals so nearby customers discover you first on maps and local search.",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Keyword Strategy",
    description:
      "We uncover high-intent search terms your prospective buyers actually type into Google, prioritizing queries that translate into genuine enquiries.",
    icon: KeyRound,
  },
  {
    step: "05",
    title: "Content Strategy",
    description:
      "We map clear content structures and topic clusters that directly address customer queries, establishing authority without keyword stuffing.",
    icon: Search,
  },
  {
    step: "06",
    title: "SEO Monitoring",
    description:
      "We monitor organic impressions, keyword positions, click-through rates, and crawl health, using data to continuously improve search outcomes.",
    icon: LineChart,
  },
];

/* ── 04: WHAT'S INCLUDED (6 SERVICE BLOCKS) ── */
const whatsIncluded = [
  {
    num: "01",
    title: "Technical SEO Audit & Fixes",
    description:
      "Deep diagnostics of crawl errors, broken redirects, site architecture, and Core Web Vitals performance.",
  },
  {
    num: "02",
    title: "Keyword & Competitor Research",
    description:
      "Data-backed discovery of what your ideal clients search for and where your competitors are currently vulnerable.",
  },
  {
    num: "03",
    title: "On-Page Structure Optimisation",
    description:
      "Precise semantic HTML headings, title tags, OpenGraph previews, and structured metadata for every key page.",
  },
  {
    num: "04",
    title: "Local SEO & Google Business Profile",
    description:
      "Full GBP verification, category calibration, review schema, and local NAP consistency to dominate regional queries.",
  },
  {
    num: "05",
    title: "Search Console & Sitemaps",
    description:
      "Direct indexing integration with Google Search Console, clean XML sitemaps, and robots.txt configuration.",
  },
  {
    num: "06",
    title: "Monthly Transparent Reporting",
    description:
      "Honest, jargon-free monthly reports highlighting ranking movements, traffic growth, and conversion progress.",
  },
];

/* ── 05: HOW WE WORK (CIRCULAR PROCESS ORBIT) ── */
const seoProcessSteps = [
  {
    number: "01",
    title: "Audit",
    description: "We analyze your website, search health, and competitors.",
    icon: Search,
  },
  {
    number: "02",
    title: "Research",
    description: "We identify high-intent terms your customers actually use.",
    icon: KeyRound,
  },
  {
    number: "03",
    title: "Strategy",
    description: "We define a clear, prioritized SEO and content roadmap.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Optimise",
    description: "We fix technical issues and refine page heading structures.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Monitor",
    description: "We track indexing health, search impressions, and rankings.",
    icon: LineChart,
  },
  {
    number: "06",
    title: "Scale",
    description: "We review data trends to compound long-term organic traffic.",
    icon: Rocket,
  },
];

/* ── 06: WHAT YOU GET (DELIVERABLES) ── */
const deliverables = [
  "Comprehensive technical SEO audit and resolution checklist",
  "High-intent keyword roadmap mapped to your core offerings",
  "Optimized meta titles, descriptions, and semantic headings",
  "Clean site architecture, XML sitemap, and robots.txt setup",
  "Google Business Profile setup and local citation calibration",
  "Google Search Console integration and indexing verification",
  "Monthly transparent ranking, traffic, and conversion reports",
  "Clear, jargon-free progress reviews and continuous refinement",
];

/* ── 07: FAQS ── */
const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a compounding, medium-to-long-term investment. Technical fixes and indexing corrections often take effect in 2 to 4 weeks, while measurable organic rankings and steady search traffic typically build consistently over 3 to 6 months.",
  },
  {
    q: "Can you guarantee the #1 ranking on Google?",
    a: "No legitimate agency can guarantee #1 rankings because Google's ranking algorithms are proprietary and continually updated. What we guarantee is rigorous, best-practice optimisation, clean technical architecture, and high-intent targeting that consistently improves your search visibility.",
  },
  {
    q: "What is the difference between SEO and paid Google ads?",
    a: "Google Ads deliver immediate traffic, but the clicks stop the moment you pause your ad budget. SEO builds long-term organic authority and durable search visibility that continues bringing in high-intent visitors without paying for every single click.",
  },
  {
    q: "Do local businesses really need SEO?",
    a: "Yes. For service businesses, medical practices, trades, and local shops, local SEO and Google Maps optimization are frequently the single highest-converting channels, directly driving phone calls, directions, and local quotes.",
  },
];

export default function SEOPage() {
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
                    SEARCH ENGINE OPTIMISATION
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-[1.12] mb-6">
                  Be easier to find when your customers{" "}
                  <span className="font-serif italic font-normal text-[#315CFF]">
                    are searching.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed max-w-xl mb-8">
                  We help your business appear when high-intent customers search on Google.
                  We focus on strong technical foundations, honest search relevance, and bringing
                  the right people to your website.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?service=seo"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#315CFF] hover:bg-[#2446D8] transition-all duration-200 shadow-[0_4px_20px_rgba(49,92,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Enquire for Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#how-we-work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--color-foreground)] hover:text-[#315CFF] glass-pill transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Our SEO Process</span>
                    <ChevronRight className="w-4 h-4 text-[var(--color-foreground-muted)]" />
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Interactive Search & Discovery Visual */}
            <div className="lg:col-span-6 relative">
              <FadeUp delay={0.15}>
                <SEOHeroVisual />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 02 — WHY SEO MATTERS                                       */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                    WHY SEO MATTERS
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-5 leading-tight">
                  Being good at what you do isn&apos;t enough if people can&apos;t find you.
                </h2>
                <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6">
                  Most customer journeys start with a search. If you&apos;re not visible when people
                  search for what you offer, those customers go to competitors who are.
                </p>
                <p className="text-sm font-semibold text-[#315CFF] mb-2">
                  SEO isn&apos;t about tricks—it is about connecting genuine demand with your business:
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.15}>
                <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-4">
                  {[
                    "Appearing when customers search for your specific services",
                    "Attracting high-intent organic visitors, not accidental clicks",
                    "Building long-term credibility and sustainable digital authority",
                    "Turning search discovery into enquiries, calls, and qualified sales",
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
                      Search engine optimization is not an overnight trick—it is a compounding business asset that lowers customer acquisition costs year after year.
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
                What does Growwera do for your SEO?
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed">
                A disciplined search optimisation strategy covering technical health, content relevance, and local authority.
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

          {/* Embedded Flow Diagram */}
          <FadeUp delay={0.2}>
            <div className="pt-10 border-t border-[var(--color-border)]">
              <div className="text-center mb-4">
                <span className="text-xs font-mono font-bold text-[#315CFF] uppercase tracking-wider">
                  The Organic Discovery Value Chain
                </span>
              </div>
              <SEOValueChainDiagram />
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
                Everything needed for lasting search visibility.
              </h2>
            </FadeUp>
            <div className="hidden sm:flex items-center gap-2 select-none pointer-events-none">
              <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] rotate-3">
                No black-hat shortcuts
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
                Our step-by-step SEO roadmap.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)]">
                A methodical, evidence-led approach designed to build steady organic traffic.
              </p>
            </FadeUp>
          </div>

          {/* Circular Orbit Process Visual */}
          <FadeUp delay={0.15}>
            <CircularProcessOrbit
              steps={seoProcessSteps}
              title="Our"
              titleAccent="Process"
              subtitle="From audit to rankings."
              startNote="Your search journey starts here."
              endNote="Sustainable organic visibility that works."
            />
          </FadeUp>
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
                Tangible deliverables on every SEO project.
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)]">
                Transparent work without smoke, mirrors, or hidden algorithms.
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
        serviceId="seo"
        serviceName="Search Engine Optimisation"
        customHeadline="Ready to make your business easier to find on Google?"
      />
    </div>
  );
}
