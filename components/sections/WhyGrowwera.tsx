import AnimatedSection from "@/components/shared/AnimatedSection";
import DoodleStar from "@/components/decorative/DoodleStar";

const pillars = [
  {
    number: "01",
    title: "We understand your business first.",
    description:
      "Before recommending anything, we ask questions. We want to understand what your business does, who your customers are, and what success looks like for you.",
  },
  {
    number: "02",
    title: "We identify the actual problem.",
    description:
      "The solution you think you need isn't always the right one. We help clarify the real problem and recommend the most appropriate solution — not the most expensive one.",
  },
  {
    number: "03",
    title: "We build around business goals.",
    description:
      "Every decision — design, content, technology — is made in relation to your business objectives. Not trends. Not personal preferences. What actually works for your goals.",
  },
  {
    number: "04",
    title: "We focus on measurable outcomes.",
    description:
      "A website that looks good but doesn't generate enquiries isn't a success. We build with usability and conversion in mind from the beginning.",
  },
  {
    number: "05",
    title: "We improve after launch.",
    description:
      "Launch isn't the end. We monitor performance, identify opportunities, and continue improving the solution as your business grows.",
  },
];

export default function WhyGrowwera() {
  return (
    <section className="py-20 lg:py-24 border-t border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-18">
          {/* Left Column — Heading & Highlight Note (col-span-5) */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  Why Growwera
                </p>
                <DoodleStar variant="cross" size={12} color="#315CFF" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[var(--color-foreground)] leading-tight tracking-tight mb-4">
                Built around your business. Not a template.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-8">
                Most digital agencies start with a template and fit your business into it.
                We start with your business and build around it.
              </p>

              {/* Creative paper note with tape */}
              <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 sm:p-8 shadow-[var(--shadow-paper)] rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                {/* Washi tape header */}
                <div className="absolute -top-2.5 left-10 w-12 h-4 bg-[var(--sticky-tape)] rounded-sm border border-[var(--sticky-tape-border)]" />
                <p className="text-[var(--color-foreground)] font-bold text-lg leading-snug mb-2.5">
                  &ldquo;You don&apos;t need to know exactly what you need.&rdquo;
                </p>
                <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed">
                  Tell Growwera what you&apos;re trying to achieve, and we&apos;ll help
                  figure out the right solution.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column — 5 Pillars (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.number} delay={i * 0.08}>
                <div className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-5">
                  <span className="text-xs font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/15 px-2.5 py-1 rounded-md border border-[var(--color-accent)]/25 shrink-0 mt-0.5">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--color-foreground)] mb-1.5 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
