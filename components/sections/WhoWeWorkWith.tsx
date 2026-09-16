import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DoodleStar from "@/components/decorative/DoodleStar";

const clientTypes = [
  "Small businesses",
  "Startups",
  "Growing companies",
  "Professional services",
  "Local businesses",
  "Businesses modernising",
  "Teams automating workflows",
  "Businesses building products",
];

export default function WhoWeWorkWith() {
  return (
    <section className="py-20 lg:py-24 border-t border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-18 items-center">
          {/* Left Column (col-span-5) */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  Who we work with
                </p>
                <DoodleStar variant="sparkle" size={13} color="#F5BA27" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight mb-4">
                If technology can solve it, let&apos;s talk.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-8">
                Growwera works with businesses at different stages — from early-stage
                startups building their first website to established companies looking
                to modernise or automate.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-accent)] text-black text-sm font-bold rounded-full hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(245,186,39,0.35)]"
                >
                  Start a conversation
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column (col-span-7) */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {clientTypes.map((type) => (
                  <span
                    key={type}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm font-medium text-[var(--color-foreground-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-elevated)] transition-all duration-200 cursor-default"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-xs">
                <p className="text-[var(--color-foreground-secondary)] text-sm sm:text-base leading-relaxed">
                  <strong className="text-[var(--color-foreground)] font-semibold">
                    If you have a business problem that can be improved with
                    technology
                  </strong>
                  , Growwera can help. You don&apos;t need to know the solution — just
                  describe the problem.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
