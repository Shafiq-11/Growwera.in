"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Design & Development", href: "/services/web-development" },
    { label: "SEO", href: "/services/seo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "AI & Automation", href: "/services/ai-automation" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[var(--color-background-secondary)] text-[var(--color-foreground)] border-t border-[var(--color-border-strong)] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block font-bold text-2xl tracking-[0.14em] text-[var(--color-accent)] hover:opacity-90 transition-opacity mb-4"
            >
              GROWWERA
            </Link>
            <p className="text-[var(--color-foreground-secondary)] text-base leading-relaxed max-w-xs font-normal">
              Digital solutions for growing businesses.
            </p>
            <p className="text-[var(--color-foreground-muted)] text-sm mt-6 leading-relaxed max-w-sm">
              Websites, SEO, digital marketing, AI and automation — built around
              what your business actually needs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-foreground)] uppercase tracking-[0.18em] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-foreground-secondary)] text-sm hover:text-[var(--color-foreground)] hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-foreground)] uppercase tracking-[0.18em] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-foreground-secondary)] text-sm hover:text-[var(--color-foreground)] hover:translate-x-0.5 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-foreground-muted)] text-sm">
            © 2026 Growwera. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-foreground-muted)] text-sm hover:text-[var(--color-foreground-secondary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
