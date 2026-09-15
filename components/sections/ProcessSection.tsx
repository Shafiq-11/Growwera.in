import ProcessStep from "@/components/shared/ProcessStep";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DoodleStar from "@/components/decorative/DoodleStar";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";

const steps = [
  {
    number: "01",
    title: "Tell us what you're trying to achieve.",
    description:
      "No technical knowledge required. Just explain your business, your problem, or your idea. We'll take it from there.",
  },
  {
    number: "02",
    title: "We understand.",
    description:
      "We ask the right questions and take time to properly understand what your business actually needs — not just what you've asked for.",
  },
  {
    number: "03",
    title: "We plan.",
    description:
      "We define the solution, scope, priorities, and timeline together. You'll know exactly what's being built, how long it takes, and what it costs.",
  },
  {
    number: "04",
    title: "We build.",
    description:
      "We design, develop, integrate, test, and refine the solution. You're kept informed throughout, with regular check-ins and updates.",
  },
  {
    number: "05",
    title: "We launch and improve.",
    description:
      "We help launch the solution smoothly and monitor it after go-live. We identify what's working, what can be improved, and what to build next.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-24 border-t border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-18 items-start">
          {/* Left Column — Heading (col-span-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  How it works
                </p>
                <DoodleStar variant="four-point" size={13} color="#315CFF" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[var(--color-foreground)] leading-tight tracking-tight mb-4">
                You bring the idea. We figure out the rest.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6">
                A straightforward process that keeps you informed and in control —
                without requiring you to become a tech expert.
              </p>
              <div className="hidden sm:block opacity-80">
                <HandDrawnArrow
                  variant="loop-right"
                  color="#F43F5E"
                  className="w-16 h-10"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column — 5 Steps Flow (col-span-7) */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.15}>
              <div>
                {steps.map((step, i) => (
                  <ProcessStep
                    key={step.number}
                    {...step}
                    isLast={i === steps.length - 1}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
