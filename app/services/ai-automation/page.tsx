import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessStep from "@/components/shared/ProcessStep";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import { AIAutomationVisual } from "@/components/shared/ServiceVisualizations";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "Growwera builds AI assistants, workflow automation, and custom AI integrations to help businesses save time and reduce manual work.",
};

const whatWeDeliver = [
  "AI-powered chatbots and assistants",
  "Workflow and process automation",
  "Integration between business tools",
  "Custom AI solutions for specific tasks",
  "Internal tools and dashboards",
  "Data processing and analysis automation",
  "Document and form automation",
  "AI strategy and scoping consultation",
];

const process = [
  { number: "01", title: "Identify the opportunity", description: "We review your current workflows and identify where automation or AI would genuinely save time, reduce errors, or create better outcomes." },
  { number: "02", title: "Define the solution", description: "We design the most practical solution — which might be a simple automation, an AI integration, or a custom tool." },
  { number: "03", title: "Build and integrate", description: "We build and connect the solution to your existing systems, keeping it simple and maintainable." },
  { number: "04", title: "Test and refine", description: "We test thoroughly, gather feedback, and refine until the solution is reliable and easy to use." },
  { number: "05", title: "Hand over and support", description: "We make sure your team knows how to use it and remain available for questions, updates, or improvements." },
];

export default function AIAutomationPage() {
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
                  <span className="text-sm text-[var(--color-foreground)] font-medium">AI & Automation</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]">04 — AI & Automation</p>
                  <DoodleStar variant="sparkle" size={13} color="#8B5CF6" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
                  Make your business work smarter.
                </h1>
                <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl mb-10 font-normal">
                  Automate the repetitive. Augment the complex. Free your team to focus on what matters.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]">
                  Explore automation for your business <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-md">
                  <AIAutomationVisual />
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
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">AI and automation, practically applied.</h2>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-4 text-base">
                AI and automation aren&apos;t just buzzwords. For the right businesses, they can eliminate hours of manual work, reduce errors, and create better customer experiences — without a large engineering team.
              </p>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-base">
                Growwera focuses on practical applications: identifying where automation genuinely makes sense for your business, and building solutions that are reliable, maintainable, and genuinely useful.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">02 — Who needs this?</p>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight">Is this right for you?</h2>
              <ul className="space-y-3.5">
                {[
                  "Your team spends significant time on repetitive, manual tasks",
                  "You need to respond to customers faster but lack the capacity",
                  "Your business tools don't talk to each other (causing manual data entry)",
                  "You have an idea for a custom internal tool or AI-powered feature",
                  "You want to understand what AI can realistically do for your business",
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-12 tracking-tight">What Growwera can build.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeDeliver.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.05}>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--color-foreground-muted)] font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-7 h-7 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
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
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">How an AI project works.</h2>
                <p className="text-[var(--color-foreground-secondary)] text-base leading-relaxed">We always start by understanding the problem before proposing a solution.</p>
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

      {/* 05 — Automation Case: Orbis */}
      <section className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">05 — Automation in Action</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-8 tracking-tight">Workflow Case: Orbis Automation.</h2>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-mono font-semibold mb-3">
                  AI & Process Automation
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">Orbis</h3>
                <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-sm sm:text-base mb-6">
                  Orbis streamlined customer inquiry classification and tool synchronisation, removing repetitive spreadsheet management and saving their operations team dozens of weekly manual hours.
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
                  &ldquo;The automation system they built has saved us hours of manual work. The team is knowledgeable and easy to work with.&rdquo;
                </p>
                <p className="text-xs font-bold text-[var(--color-foreground)]">Rohit Verma</p>
                <p className="text-[11px] text-[var(--color-foreground-muted)]">Operations Head, Orbis</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--color-border)] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">08 — Next Step</p>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">Curious about what AI could do for your business?</h2>
            <p className="text-[var(--color-foreground-secondary)] text-lg mb-8">You don&apos;t need to have a specific idea. Describe your current workflows and we&apos;ll identify the most practical opportunities.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35)]">
              Let&apos;s explore the possibilities <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
