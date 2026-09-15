import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessStep from "@/components/shared/ProcessStep";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import { SEOVisual } from "@/components/shared/ServiceVisualizations";

export const metadata: Metadata = {
  title: "SEO — Search Engine Optimisation",
  description:
    "Growwera helps businesses get discovered on Google through technical SEO, on-page optimisation, local SEO, and keyword strategy.",
};

const whatWeDeliver = [
  "SEO audit of your current website",
  "Technical SEO fixes (speed, crawlability, structure)",
  "On-page optimisation (titles, content, headings)",
  "Local SEO and Google Business Profile",
  "Keyword research and content strategy",
  "Link building and authority development",
  "Monthly performance reporting",
  "Ongoing monitoring and adjustments",
];

const process = [
  {
    number: "01",
    title: "Audit",
    description: "We analyse your current website, keyword rankings, and competitive landscape to understand where you stand.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We identify the most valuable keywords and opportunities for your business and define a clear SEO roadmap.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We fix technical issues, optimise your pages, and build the right content and link structure.",
  },
  {
    number: "04",
    title: "Monitor & report",
    description: "We track rankings, traffic, and conversions and report clearly on progress each month.",
  },
  {
    number: "05",
    title: "Refine",
    description: "SEO is ongoing. We continuously refine the strategy based on what's working and what the data shows.",
  },
];

export default function SEOPage() {
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
                  <span className="text-sm text-[var(--color-foreground)] font-medium">SEO</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">02 — SEO</p>
                  <DoodleStar variant="sparkle" size={13} color="#F59E0B" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
                  Get found by the right people at the right time.
                </h1>
                <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl mb-10 font-normal">
                  Help your business appear on Google when potential customers are searching for exactly what you offer.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]">
                  Start your SEO project <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md">
                  <SEOVisual />
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
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">Visibility that compounds.</h2>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-4 text-base">
                SEO (Search Engine Optimisation) is the process of improving how your website appears in Google search results. When done properly, it brings a consistent stream of relevant visitors to your site without paying for every click.
              </p>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-base">
                Growwera takes a practical approach to SEO — focused on what will actually move the needle for your specific business, not generic checklists.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">02 — Who needs this?</p>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">Is this right for you?</h2>
              <ul className="space-y-3.5">
                {[
                  "Your website isn't appearing in Google for relevant searches",
                  "You're relying entirely on paid ads or word of mouth",
                  "A competitor is outranking you for important keywords",
                  "You've launched a new website and need to build visibility",
                  "You serve a local area and want to appear in local searches",
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
                    <div className="w-6 h-6 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full" />
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
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">How SEO works with Growwera.</h2>
                <p className="text-[var(--color-foreground-secondary)] text-base leading-relaxed">A structured process with clear milestones and honest reporting.</p>
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

      {/* 05 — Client Results & Proof (Solvia) */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">05 — Proven Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-8 tracking-tight">SEO Case Study: Solvia.</h2>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-mono font-semibold mb-3">
                  Search Engine Optimisation & Marketing
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">Solvia</h3>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-sm sm:text-base mb-6">
                  Solvia implemented a comprehensive technical SEO roadmap, local search enhancements, and keyword targeting to drive high-intent organic visitors directly into qualified business enquiries.
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
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">Ready to improve your search visibility?</h2>
            <p className="text-[var(--color-foreground-secondary)] text-lg mb-8">Tell us about your business and current situation. We&apos;ll review it and come back with a clear plan.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]">
              Start an SEO Project <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
