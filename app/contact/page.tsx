import { Suspense } from "react";
import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactPageClient from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Tell Growwera about your business and what you're trying to achieve. You don't need to have everything figured out before getting in touch.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-10 lg:pt-36 lg:pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">
              Get in touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
              Let&apos;s build something useful.
            </h1>
            <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl">
              Tell us about your business, idea, or problem. You don&apos;t need to
              have everything figured out before contacting us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form section */}
      <section className="pt-2 pb-16 relative">
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-sm text-[var(--color-foreground-muted)]">Loading contact form...</div>}>
          <ContactPageClient />
        </Suspense>
      </section>
    </>
  );
}
