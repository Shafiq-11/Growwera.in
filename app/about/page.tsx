import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Growwera believes technology should make business simpler. We understand your business first, build the right solution second, and improve it continuously.",
};

const beliefs = [
  {
    title: "Understand first. Build second.",
    description:
      "Before writing a single line of code or designing a single pixel, we spend time properly understanding your business, your customers, and your goals. The right solution comes from asking the right questions.",
  },
  {
    title: "Simple solutions beat complex ones.",
    description:
      "Technology has a tendency to become unnecessarily complicated. We resist that. The best solution is usually the simplest one that effectively solves the problem — and the one your team can actually use and maintain.",
  },
  {
    title: "Outcomes over outputs.",
    description:
      "A website is not a success because it was delivered on time. It's a success because it generates enquiries, communicates clearly, and helps your business grow. We build with outcomes in mind from the start.",
  },
  {
    title: "Honest over impressive.",
    description:
      "We'd rather tell you what we can't do than overpromise and underdeliver. If something won't work for your specific situation, we'll tell you — and suggest what will.",
  },
  {
    title: "Improve continuously.",
    description:
      "Launch is the beginning, not the end. Businesses change. Markets change. The best digital solutions evolve alongside them. We stay engaged after launch and help you identify what to improve next.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                About Growwera
              </p>
              <DoodleStar variant="sparkle" size={13} color="#315CFF" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
              Technology should make business simpler.
            </h1>
            <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl font-normal">
              Growwera exists to help businesses use technology practically — not as a way to look modern, but as a genuine tool for growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Growwera exists */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6">
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">
                  Why we exist
                </p>
                <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">
                  The problem we&apos;re solving.
                </h2>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-5 text-base">
                  Too many businesses end up with digital solutions that don&apos;t actually solve their problems. A website that looks nice but doesn&apos;t generate leads. An SEO campaign that produces traffic but no customers. Marketing spend with no clear return.
                </p>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-5 text-base">
                  This usually happens because the solution was built without properly understanding the business first.
                </p>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-base">
                  Growwera was built to do it differently. We start with your business — your customers, your goals, your constraints — and work backwards to the right solution.
                </p>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6">
              <AnimatedSection delay={0.1}>
                <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-paper)] rotate-[0.5deg]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
                    Our philosophy
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] leading-snug mb-6">
                    &ldquo;Understand first. Build second. Improve continuously.&rdquo;
                  </p>
                  <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-base">
                    This isn&apos;t a tagline. It&apos;s how we run every project, from a simple website to a complex automation system.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">
                What we believe
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight mb-3">
                The principles we build by.
              </h2>
              <p className="text-[var(--color-foreground-secondary)] text-base">
                These aren&apos;t values on a wall. They&apos;re decisions we make every day.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, i) => (
              <AnimatedSection key={belief.title} delay={i * 0.08}>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-5" aria-hidden="true" />
                  <h3 className="text-base font-bold text-[var(--color-foreground)] mb-3">{belief.title}</h3>
                  <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed">{belief.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">
              How we work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight mb-12">
              What working with Growwera looks like.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Clear communication", desc: "You'll always know what's happening, what's next, and why. No black boxes." },
                { label: "Defined scope", desc: "We agree on exactly what's being built before starting. No surprise changes." },
                { label: "Honest timelines", desc: "We give realistic estimates and let you know early if anything changes." },
              ].map((item) => (
                <div key={item.label} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] mb-2">{item.label}</h3>
                  <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">Interested in working together?</h2>
            <p className="text-[var(--color-foreground-secondary)] text-lg mb-8">Tell us about your business and what you&apos;re trying to achieve. We&apos;ll take it from there.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.3)]">
              Start a conversation <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
