"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 sm:gap-8 group"
    >
      {/* Number Badge & Animated Connecting Line */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="w-11 h-11 bg-[var(--color-surface)] border-2 border-[var(--color-accent)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10 shadow-xs transition-colors duration-200 cursor-default"
        >
          {number}
        </motion.div>
        {!isLast && (
          <div className="w-0.5 flex-1 my-2 bg-gradient-to-b from-[var(--color-accent)]/60 via-[var(--color-accent)]/20 to-transparent min-h-[56px]" />
        )}
      </div>

      {/* Content Card */}
      <div className={`pt-1 flex-1 ${isLast ? "pb-0" : "pb-10"}`}>
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-200 cursor-default"
        >
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] mb-2 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
