"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  href?: string;
  accentColor?: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  href = "/work",
  accentColor = "#F5BA27",
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-250 flex flex-col justify-between h-full cursor-pointer"
    >
      {/* Project visual banner with clipped container & scale on hover */}
      <div
        className="relative h-52 sm:h-56 overflow-hidden flex items-center justify-center p-6 border-b border-[var(--color-border)]"
        style={{ backgroundColor: `${accentColor}10` }}
      >
        <div className="absolute inset-0 paper-grid-bg opacity-30" />

        {/* Minimalist browser frame with scale 1 -> 1.03 on hover */}
        <div className="relative w-full max-w-[240px] bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)] shadow-[var(--shadow-paper)] p-4 transform transition-transform duration-300 group-hover:scale-[1.03]">
          <div className="flex items-center gap-1.5 mb-3 border-b border-[var(--color-border)] pb-2">
            <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-[var(--color-foreground-muted)]/20 rounded" />
            <div className="h-2.5 w-1/2 bg-[var(--color-foreground-muted)]/15 rounded" />
            <div className="h-14 w-full bg-[var(--color-surface)] rounded border border-[var(--color-border)] flex items-center justify-center text-[10px] text-[var(--color-foreground-muted)] font-medium">
              Live Preview
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-[11px] font-semibold text-white rounded-full tracking-wide shadow-xs"
            style={{ backgroundColor: accentColor }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>
        <div className="pt-4 border-t border-[var(--color-border)]">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
