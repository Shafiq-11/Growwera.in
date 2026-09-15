import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessStep from "@/components/shared/ProcessStep";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import { WebDesignVisual } from "@/components/shared/ServiceVisualizations";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Growwera designs and builds business websites, landing pages, e-commerce stores, and custom web applications that turn visitors into customers.",
};

const whatWeDeliver = [
  "Business websites and portfolio sites",
  "Landing pages optimised for conversion",
  "E-commerce stores and product catalogues",
  "Custom web applications and portals",
  "Website redesigns and modernisations",
  "Mobile-first, responsive layouts",
  "Fast-loading, SEO-ready builds",
  "CMS integration (so you can update content yourself)",
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, customers, and goals. We review any existing site and understand what's working and what isn't.",
  },
  {
    number: "02",
    title: "Strategy & structure",
    description: "We define the site structure, content hierarchy, and user journeys before touching any design.",
  },
  {
    number: "03",
    title: "Design",
    description: "We create a clean, professional design that reflects your brand and communicates clearly to your customers.",
  },
  {
    number: "04",
    title: "Development",
    description: "We build the site to a high technical standard — fast, accessible, and optimised for search engines from the start.",
  },
  {
    number: "05",
    title: "Launch & handover",
    description: "We launch the site, train you on how to update content, and remain available for any post-launch support.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/services" className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)] transition-colors">
                    Services
                  </Link>
                  <span className="text-[var(--color-foreground-muted)]">/</span>
                  <span className="text-sm text-[var(--color-foreground)] font-medium">Web Design & Development</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">01 — Web Design & Development</p>
                  <DoodleStar variant="sparkle" size={13} color="var(--color-accent)" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight mb-6">
                  A website that works as hard as you do.
                </h1>
                <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed mb-10 font-normal">
                  Websites and digital products that make your business look credible,
                  communicate clearly, and turn visitors into customers.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]"
                >
                  Start your web project
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>

            {/* Right: Floating Visual */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md">
                  <WebDesignVisual />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What & Who */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">01 — What is this?</p>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">More than a website.</h2>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-4 text-base">
                A well-built website is often a business&apos;s most important sales tool. It&apos;s where
                potential customers form their first impression, decide whether to trust you, and
                choose whether to contact you.
              </p>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-base">
                Growwera builds websites that are designed with your customers in mind — easy to
                navigate, clear about what you offer, and structured to encourage action.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">02 — Who needs this?</p>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">Is this right for you?</h2>
              <ul className="space-y-3.5">
                {[
                  "You don't have a website, or your current one is outdated",
                  "Your website isn't generating enquiries or sales",
                  "Your website looks unprofessional or doesn't reflect your brand",
                  "You need a specific landing page for a product or campaign",
                  "You need a custom web application or customer portal",
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

      {/* What we deliver */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">03 — What we provide</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-12 tracking-tight">What Growwera can build.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeDeliver.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.05}>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--color-foreground-muted)] font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-6 h-6 bg-[var(--color-accent)]/15 rounded-lg flex items-center justify-center border border-[var(--color-accent)]/25">
                      <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    </div>
                  </div>
                  <p className="text-[var(--color-foreground)] text-sm font-semibold leading-snug">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">04 — Process</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">How a web project works.</h2>
                <p className="text-[var(--color-foreground-secondary)] text-base leading-relaxed">A straightforward process with no surprises.</p>
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

      {/* 05 — Finished Solution Preview (Nexora) */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">05 — Finished Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-8 tracking-tight">Featured Web Project: Nexora.</h2>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-mono font-semibold mb-3">
                  Web Development & SEO
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">Nexora</h3>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-sm sm:text-base mb-6">
                  Nexora needed a modern, professional website that could clearly communicate their services and improve their visibility on search engines. We designed and developed a clean, high-converting website and implemented an SEO strategy tailored to their industry.
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
                  &ldquo;Growwera understood what we were trying to achieve and turned the idea into something that actually works for our business.&rdquo;
                </p>
                <p className="text-xs font-bold text-[var(--color-foreground)]">Aarav Menon</p>
                <p className="text-[11px] text-[var(--color-foreground-muted)]">Founder, Nexora</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">08 — Next Step</p>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">
              Ready to build your website?
            </h2>
            <p className="text-[var(--color-foreground-secondary)] text-lg mb-8">
              Tell us about your business and what you need. We&apos;ll come back with a clear plan and quote.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]"
            >
              Start a Web Project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
