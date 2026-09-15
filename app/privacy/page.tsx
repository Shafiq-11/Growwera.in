import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-bold text-[var(--color-foreground)] mb-3 tracking-tight">Privacy Policy</h1>
        <p className="text-[var(--color-foreground-muted)] mb-12">Last updated: September 2026</p>

        <div className="space-y-8">
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">What information we collect</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">When you submit an enquiry via our contact form, we collect your name, email address, company name (optional), and the details of your enquiry. This information is used solely to respond to your enquiry.</p>
          </section>
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">How we use it</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">We use the information you provide to respond to your enquiry and, where relevant, to prepare a proposal. We do not sell, rent, or share your information with third parties for marketing purposes.</p>
          </section>
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Cookies</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">This website uses only essential cookies required for the site to function. We do not use tracking or advertising cookies.</p>
          </section>
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Contact</h2>
            <p className="text-[var(--color-foreground-secondary)] leading-relaxed">For any privacy-related questions, contact us at <a href="mailto:hello@growwera.com" className="text-[var(--color-accent)] hover:underline">hello@growwera.com</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-[var(--color-accent)] text-sm font-medium hover:underline">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
