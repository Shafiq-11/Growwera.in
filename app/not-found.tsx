import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-lg relative z-10">
        <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-foreground)] tracking-tight mb-4">
          Page not found.
        </h1>
        <p className="text-[var(--color-foreground-secondary)] text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(245, 186, 39,0.35)]"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-surface)] text-[var(--color-foreground)] font-semibold rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
