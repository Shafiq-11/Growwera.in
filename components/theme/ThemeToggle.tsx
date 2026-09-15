"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isLoaded } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-200",
        "bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)]",
        "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]",
        "focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2",
        "hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun icon (visible in light mode) */}
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? -90 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={17} className="text-amber-500 stroke-[2.2]" />
        </motion.div>

        {/* Moon icon (visible in dark mode) */}
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 90,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon size={17} className="text-[var(--color-foreground-secondary)] group-hover:text-[var(--color-foreground)] stroke-[2]" />
        </motion.div>
      </div>

      {showLabel && (
        <span className="ml-2.5 text-xs font-medium uppercase tracking-wider text-[var(--color-foreground-secondary)]">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
