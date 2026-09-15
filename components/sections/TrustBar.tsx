import AnimatedSection from "@/components/shared/AnimatedSection";

const signals = [
  {
    label: "Business-first approach",
    description: "We understand your goals before recommending any solution.",
  },
  {
    label: "Practical solutions",
    description: "No unnecessary complexity. Only what your business actually needs.",
  },
  {
    label: "Built to perform",
    description: "Every project is optimized for real outcomes, not just appearances.",
  },
  {
    label: "Clear process",
    description: "You always know what's happening, what's next, and why.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-20 lg:py-24 border-b border-[var(--color-border)] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-[var(--color-foreground-muted)] text-xs font-semibold tracking-[0.2em] uppercase mb-12">
            The Growwera approach
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {signals.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.08}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-6 h-0.5 bg-[var(--color-accent)] mb-4" aria-hidden="true" />
                <h3 className="text-base font-bold text-[var(--color-foreground)] mb-2 tracking-tight">
                  {item.label}
                </h3>
                <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
