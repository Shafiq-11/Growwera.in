import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessStep from "@/components/shared/ProcessStep";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import { DigitalMarketingVisual } from "@/components/shared/ServiceVisualizations";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Growwera builds and manages digital marketing campaigns — paid advertising, content strategy, conversion optimisation, and analytics — to grow your business.",
};

const whatWeDeliver = [
  "Marketing strategy and planning",
  "Paid advertising (Google, Meta)",
  "Content strategy and creation",
  "Conversion rate optimisation",
  "Email marketing campaigns",
  "Campaign analytics and reporting",
  "Audience research and targeting",
  "Landing page optimisation",
];

const process = [
  { number: "01", title: "Understand your business", description: "We learn about your business, customers, and what success looks like — before making any marketing recommendations." },
  { number: "02", title: "Define your audience", description: "We identify your most valuable customer segments and where best to reach them." },
  { number: "03", title: "Build the strategy", description: "We create a focused marketing plan with clear objectives, channels, and budgets." },
  { number: "04", title: "Execute and test", description: "We launch campaigns, test different approaches, and optimise based on real performance data." },
  { number: "05", title: "Measure and improve", description: "We report clearly on what's working, what isn't, and what we're doing about it." },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/services" className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)] transition-colors">Services</Link>
                  <span className="text-[var(--color-foreground-muted)]">/</span>
                  <span className="text-sm text-[var(--color-foreground)] font-medium">Digital Marketing</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EC4899]">03 — Digital Marketing</p>
                  <DoodleStar variant="sparkle" size={13} color="#EC4899" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
                  Reach the right people. Turn attention into growth.
                </h1>
                <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl mb-10 font-normal">
                  Digital marketing that is focused on measurable outcomes — not vanity metrics.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]">
                  Start a marketing project <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md">
                  <DigitalMarketingVisual />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">01 — What is this?</p>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">Marketing that drives results.</h2>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-4 text-base">
                Digital marketing is how you put your business in front of the right people — at the right time, in the right place, with the right message. When executed well, it generates a consistent and predictable flow of new customers.
              </p>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-base">
                Growwera approaches marketing strategically. We start with your business objectives and work backwards to identify the most effective and cost-efficient approach for your specific situation.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">02 — Who needs this?</p>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">Is this right for you?</h2>
              <ul className="space-y-3.5">
                {[
                  "You need more customers but aren't sure how to reach them digitally",
                  "You're running ads but not seeing a clear return",
                  "You want to reduce reliance on referrals or word of mouth",
                  "You've launched a new product or service and need to build awareness",
                  "Your marketing is inconsistent or lacks a clear strategy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--color-foreground-secondary)] text-base">
                    <CheckCircle2 size={18} className="text-[var(--color-accent)] mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">03 — What we provide</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-12 tracking-tight">What Growwera delivers.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeDeliver.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.05}>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--color-foreground-muted)] font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-7 h-7 bg-[#EC4899]/10 border border-[#EC4899]/20 rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#EC4899] rounded-full" />
                    </div>
                  </div>
                  <p className="text-[var(--color-foreground)] text-sm font-semibold leading-snug">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">04 — Process</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">How marketing works with Growwera.</h2>
                <p className="text-[var(--color-foreground-secondary)] text-base leading-relaxed">Strategy first. Execution second. Results always measured.</p>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.15}>
                {process.map((step, i) => (
                  <ProcessStep key={step.number} {...step} isLast={i === process.length - 1} />
                ))}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Client Story / Solvia */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">05 — Campaign Outcomes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-8 tracking-tight">Marketing & Growth Case: Solvia.</h2>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-xs font-mono font-semibold mb-3">
                  Digital Marketing & Strategy
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">Solvia</h3>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-sm sm:text-base mb-6">
                  Structured multi-channel campaigns combining paid advertising, high-intent landing pages, and content distribution to build awareness and generate measurable customer acquisition.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  View Case Study in Work <ArrowRight size={14} />
                </Link>
              </div>

              {/* Client Quote */}
              <div className="p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] md:max-w-xs shrink-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground-muted)] mb-2">07 — Client Feedback</p>
                <p className="text-sm italic text-[var(--color-foreground)] mb-4">
                  &ldquo;Professional, responsive and truly invested in our growth. Our website and SEO have brought in real business opportunities.&rdquo;
                </p>
                <p className="text-xs font-bold text-[var(--color-foreground)]">Priya Sharma</p>
                <p className="text-[11px] text-[var(--color-foreground-muted)]">CEO, Solvia</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--color-border)] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">08 — Next Step</p>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">Ready to grow your digital presence?</h2>
            <p className="text-[var(--color-foreground-secondary)] text-lg mb-8">Tell us about your business and marketing goals. We&apos;ll review your situation and come back with a realistic plan.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]">
              Start a Marketing Project <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
