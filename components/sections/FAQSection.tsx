"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";
import DoodleStar from "@/components/decorative/DoodleStar";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn(
            "mt-0.5 shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 border",
            open
              ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/40"
              : "bg-[var(--color-surface-elevated)] text-[var(--color-foreground-muted)] border-[var(--color-border)] group-hover:border-[var(--color-border-strong)]"
          )}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[var(--color-foreground-secondary)] text-sm sm:text-base leading-relaxed pr-8 pb-6 font-normal">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-24 border-t border-[var(--color-border)] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                FAQ
              </p>
              <DoodleStar variant="sparkle" size={13} color="#315CFF" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight mb-3">
              Common questions.
            </h2>
            <p className="text-[var(--color-foreground-secondary)] text-base">
              Can&apos;t find what you&apos;re looking for? Just ask us directly.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl px-6 sm:px-10 shadow-[var(--shadow-paper)]">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
