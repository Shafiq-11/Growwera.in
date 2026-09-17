"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GrowweraLoader() {
  const [stage, setStage] = useState<"logo" | "tagline" | "done">("logo");

  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setStage("done");
      return;
    }

    // Check if already visited during this session
    const hasSeenIntro = sessionStorage.getItem("growwera_intro_shown");
    if (hasSeenIntro) {
      setStage("done");
      return;
    }

    // Stage 1: Logo & sketch lines (0 - 650ms)
    // Stage 2: "WELCOME TO THE ERA OF GROWTH." (650ms - 1500ms)
    // Stage 3: Smooth dissolve into page
    const timer1 = setTimeout(() => {
      setStage("tagline");
    }, 650);

    const timer2 = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("growwera_intro_shown", "true");
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[var(--color-background)] paper-grid-bg flex flex-col items-center justify-center select-none px-6"
          role="status"
          aria-live="polite"
          aria-label="Welcome to Growwera"
        >
          {/* Subtle vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

          <div className="relative flex flex-col items-center text-center max-w-xl w-full">
            {stage === "logo" ? (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45 }}
                className="relative w-64 h-32 flex flex-col items-center justify-center"
              >
                {/* Thin elegant drawn orbiting lines */}
                <svg
                  viewBox="0 0 240 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <motion.ellipse
                    cx="120"
                    cy="60"
                    rx="96"
                    ry="38"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    className="text-[var(--color-foreground)]"
                    transform="rotate(-8 120 60)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="120"
                    cy="60"
                    rx="82"
                    ry="32"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    className="text-[var(--color-accent)]"
                    transform="rotate(6 120 60)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  />
                </svg>

                <div className="relative z-10 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Growwera"
                    width={220}
                    height={34}
                    priority
                    className="h-9 w-auto object-contain drop-shadow-[0_4px_12px_rgba(245,186,39,0.3)]"
                  />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--color-foreground-muted)] mt-3 relative z-10">
                  Building digital experiences...
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="tagline"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--color-foreground-muted)] mb-3">
                  Digital Solutions For Growing Businesses
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] leading-tight mb-3">
                  WELCOME TO THE ERA OF{" "}
                  <span className="font-serif italic font-normal text-[var(--color-accent)] text-4xl sm:text-5xl md:text-6xl">
                    GROWTH.
                  </span>
                </h1>

                {/* Hand-drawn underline */}
                <motion.svg
                  viewBox="0 0 160 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-36 sm:w-44 h-2.5 text-[var(--color-accent)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <motion.path
                    d="M4 6C40 2 110 3 156 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
