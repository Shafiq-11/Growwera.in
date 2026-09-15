import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-bold text-[var(--color-foreground)] mb-3 tracking-tight">Terms of Service</h1>
        <p className="text-[var(--color-foreground-muted)] mb-12">Last updated: September 2026</p>

        <div className="space-y-8">
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Services</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">Growwera provides web design and development, SEO, digital marketing, and AI & automation services. The specific scope, deliverables, timeline, and pricing for each project are defined in a separate project agreement.</p>
          </section>
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Intellectual property</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">Upon full payment, clients receive ownership of the deliverables as agreed in the project scope. Growwera retains the right to display completed work in its portfolio unless otherwise agreed.</p>
          </section>
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Limitation of liability</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">Growwera's liability is limited to the value of the project fee paid. We are not liable for indirect or consequential losses.</p>
          </section>
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Contact</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">For questions about these terms, contact <a href="mailto:hello@growwera.com" className="text-[var(--color-accent)] hover:underline">hello@growwera.com</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-[var(--color-accent)] text-sm font-medium hover:underline">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
