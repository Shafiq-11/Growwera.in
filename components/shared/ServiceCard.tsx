"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  WebDesignVisual,
  SEOVisual,
  DigitalMarketingVisual,
  AIAutomationVisual,
} from "@/components/shared/ServiceVisualizations";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  examples: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: React.ReactNode;
  pastelBg?: string;
  accentColor?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  examples,
  ctaLabel,
  ctaHref,
  icon,
  pastelBg = "rgba(245, 186, 39, 0.12)",
  accentColor = "#F5BA27",
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-250 cursor-pointer h-full"
    >
      <div>
        {/* Top Header: Number and Icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-mono font-bold tracking-wider text-[var(--color-foreground-muted)]">
            {number}
          </span>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-250 group-hover:scale-105 group-hover:rotate-3 shadow-xs border border-black/5 dark:border-white/5"
            style={{ backgroundColor: pastelBg, color: accentColor }}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2.5 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed mb-5 font-normal">
          {description}
        </p>

        {/* Interactive Visual Demonstration for Service */}
        <div className="mb-5">
          {number === "01" && <WebDesignVisual />}
          {number === "02" && <SEOVisual />}
          {number === "03" && <DigitalMarketingVisual />}
          {number === "04" && <AIAutomationVisual />}
        </div>

        {/* Example Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {examples.map((ex) => (
            <span
              key={ex}
              className="px-2.5 py-1 text-xs font-medium text-[var(--color-foreground-secondary)] bg-[var(--color-surface-elevated)] rounded-md border border-[var(--color-border)]"
            >
              {ex}
            </span>
          ))}
        </div>
      </div>

      {/* CTA link with arrow micro-interaction */}
      <div className="pt-4 border-t border-[var(--color-border)]">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-all duration-200"
        >
          <span>{ctaLabel}</span>
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}
