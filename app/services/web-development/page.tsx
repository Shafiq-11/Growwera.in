"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Layout,
  Layers,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  HelpCircle,
  Lightbulb,
  FileText,
  Pencil,
  MessageSquare,
} from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import WebDevHeroVisual from "@/components/services/WebDevHeroVisual";
import WebDevValueChainDiagram from "@/components/services/WebDevValueChainDiagram";
import CircularProcessOrbit from "@/components/services/CircularProcessOrbit";
import ServicePricingEnquiry from "@/components/services/ServicePricingEnquiry";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";

/* ── 03: WHAT WE DO STEPS ── */
const whatWeDo = [
  {
    step: "01",
    title: "Strategy",
    description: "Understand your business, audience, goals, and requirements.",
    icon: Layers,
  },
  {
    step: "02",
    title: "UX & Structure",
    description: "Plan the pages, navigation, content hierarchy, and user journey.",
    icon: Layout,
  },
  {
    step: "03",
    title: "UI Design",
    description: "Create a clean visual system around your brand.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    description: "Turn the design into a responsive, functional website.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing",
    description: "Check responsiveness, usability, performance, and functionality.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    description: "Deploy the finished website and make it ready for your audience.",
    icon: Rocket,
  },
];

/* ── 04: WHAT'S INCLUDED (6 BLOCKS) ── */
const whatsIncluded = [
  {
    num: "01",
    title: "Business Websites",
    description: "Professional websites designed around your business.",
  },
  {
    num: "02",
    title: "Landing Pages",
    description: "Focused pages designed around a specific goal.",
  },
  {
    num: "03",
    title: "E-commerce",
    description: "Online stores and product experiences.",
  },
  {
    num: "04",
    title: "Portfolio Websites",
    description: "Personal, professional, and creative portfolios.",
  },
  {
    num: "05",
    title: "Web Applications",
    description: "Custom browser-based applications and tools.",
  },
  {
    num: "06",
    title: "Website Improvements",
    description: "Redesigns, UI improvements, responsiveness, and performance improvements.",
  },
];

/* ── 05: HOW WE WORK (CIRCULAR PROCESS ORBIT) ── */
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your business and goals.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    description: "We define the right approach for your needs.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Design",
    description: "We create a clean and effective design.",
    icon: Pencil,
  },
  {
    number: "04",
    title: "Develop",
    description: "We build a fast, responsive and functional solution.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Review",
    description: "You give feedback and we make refinements.",
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Launch",
    description: "We make it live and help you take the next step.",
    icon: Rocket,
  },
];

/* ── 06: WHAT YOU GET (DELIVERABLES) ── */
const deliverables = [
  "Responsive experience",
  "Clear user journey",
  "Modern interface",
  "Functional development",
  "Mobile optimization",
  "Performance consideration",
  "SEO-ready foundation",
];

/* ── 07: FAQS ── */
const faqs = [
  {
    q: "How long does it take to design and build a website?",
    a: "Most business websites take between 2 to 6 weeks, depending on the scope, number of pages, and technical integrations required. We outline an exact timeline before we begin.",
  },
  {
    q: "Will I be able to update text and photos myself?",
    a: "Yes. We configure intuitive content management workflows so you and your team can effortlessly edit text, add blog posts, and update photos without touching code.",
  },
  {
    q: "Do you build custom designs or use generic templates?",
    a: "We do not use generic templates. Every site is custom designed and engineered around your business identity, audience expectations, and specific growth goals.",
  },
  {
    q: "Can you redesign or improve our existing website?",
    a: "Absolutely. We routinely modernise outdated websites, fix mobile responsiveness, speed up slow page loads, and restructure user journeys for higher conversion.",
  },
];

export default function WebDevelopmentPage() {
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
                    WEB DESIGN & DEVELOPMENT
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-[1.12] mb-6">
                  Your business deserves a digital home{" "}
                  <span className="font-serif italic font-normal text-[#315CFF]">
                    that works.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed max-w-xl mb-8">
                  We design and build modern websites and digital experiences that
                  communicate your business clearly, build credibility, and make it
                  easier for visitors to take the next step.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?service=web-development"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#315CFF] hover:bg-[#2446D8] transition-all duration-200 shadow-[0_4px_20px_rgba(49,92,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Enquire for Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--color-foreground)] hover:text-[#315CFF] glass-pill transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>See Our Work</span>
                    <ChevronRight className="w-4 h-4 text-[var(--color-foreground-muted)]" />
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: 3D Glossy Interactive Browser Composition */}
            <div className="lg:col-span-6 relative">
              <FadeUp delay={0.15}>
                <WebDevHeroVisual />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 02 — WHY WEB DESIGN? (WHY IT MATTERS)                      */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                    WHY WEB DESIGN?
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-5 leading-tight">
                  Your website is often the first impression of your business.
                </h2>
                <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6">
                  A website shouldn&apos;t simply look attractive. It should help people
                  understand your business immediately without confusion.
                </p>
                <p className="text-sm font-semibold text-[#315CFF] mb-2">
                  A good website makes four things crystal clear:
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.15}>
                <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-4">
                  {[
                    "Who you are and what you stand for",
                    "What you offer and who it helps",
                    "Why customers should trust you over competitors",
                    "What they should do next (enquire, book, purchase)",
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
                      Poor structure creates hesitation and bounces. Purposeful design turns clarity into business growth.
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
                What exactly does Growwera provide?
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed">
                From initial blueprint to production launch, we handle every stage of your website.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Embedded Web Development Value Chain Diagram */}
          <FadeUp delay={0.2}>
            <div className="pt-10 border-t border-[var(--color-border)]">
              <div className="text-center mb-4">
                <span className="text-xs font-mono font-bold text-[#315CFF] uppercase tracking-wider">
                  The Complete Web Development Value Chain
                </span>
              </div>
              <WebDevValueChainDiagram />
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
                Solutions built around your needs.
              </h2>
            </FadeUp>
            <div className="hidden sm:flex items-center gap-2 select-none pointer-events-none">
              <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] rotate-3">
                Built to perform
              </span>
              <HandDrawnArrow variant="curved-down-right" className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75" color="currentColor" />
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
      {/* 05 — HOW WE WORK (ANIMATED VISUAL TIMELINE)                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
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
                Our step-by-step process.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)]">
                A predictable, collaborative workflow from concept to live deployment.
              </p>
            </FadeUp>
          </div>

          {/* Circular Orbit Process Visual */}
          <FadeUp delay={0.15}>
            <CircularProcessOrbit
              steps={processSteps}
              title="Our"
              titleAccent="Process"
              subtitle="From idea to launch."
              startNote="Your idea starts here."
              endNote="A digital solution that works for you."
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
                Tangible standards on every project.
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)]">
                We build with technical rigor and user-centered design principles.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-[var(--color-border)]">
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
        serviceId="web-development"
        serviceName="Web Design & Development"
        customHeadline="Have a website in mind? Tell us what you're trying to build."
      />
    </div>
  );
}
