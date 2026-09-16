"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Trap scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-background)]/85 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-xl tracking-[0.14em] text-[var(--color-foreground)] hover:opacity-85 transition-opacity"
              aria-label="Growwera home"
            >
              GROWWERA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-[var(--color-surface)]/80 backdrop-blur-xl p-1.5 rounded-full border border-[var(--color-border)] shadow-[0_4px_20px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.15)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-150",
                    isActive(link.href)
                      ? "text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] border border-[var(--color-border-strong)] font-semibold shadow-xs"
                      : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)]/40"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions: Theme Toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-full hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
              >
                Start a Project
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </Link>
            </div>

            {/* Mobile Actions: Theme Toggle + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)]/50 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[calc(100vw-2rem)] bg-[var(--color-surface)] paper-grid-bg shadow-2xl md:hidden transition-transform duration-300 ease-in-out border-l border-[var(--color-border)]",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
            <span className="font-bold text-xl tracking-[0.12em] text-[var(--color-foreground)]">
              GROWWERA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)]/50 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-4 pt-6 gap-1.5 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                  isActive(link.href)
                    ? "text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] font-semibold"
                    : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)]/30"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Theme Toggle Row & CTA */}
          <div className="px-4 pb-8 pt-4 border-t border-[var(--color-border)] space-y-3">
            <div className="flex items-center justify-between px-3 py-2 bg-[var(--color-surface-elevated)] rounded-xl border border-[var(--color-border)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground-muted)]">
                Theme
              </span>
              <ThemeToggle showLabel />
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[var(--color-accent)] text-white text-base font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-[0_2px_12px_rgba(49,92,255,0.3)]"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
