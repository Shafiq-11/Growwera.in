"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionCheckpoint {
  id: string;
  number: string;
  label: string;
}

const CHECKPOINTS: SectionCheckpoint[] = [
  { id: "home", number: "01", label: "Home" },
  { id: "services", number: "02", label: "Services" },
  { id: "process", number: "03", label: "Process" },
  { id: "about", number: "04", label: "About" },
  { id: "contact", number: "05", label: "Contact" },
];

export default function ScrollTracker() {
  const [activeId, setActiveId] = useState<string>("home");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 280;

      for (let i = CHECKPOINTS.length - 1; i >= 0; i--) {
        const item = CHECKPOINTS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            return;
          }
        }
      }

      // Default to first if at the top
      setActiveId(CHECKPOINTS[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70; // offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Bottom-left golden ambient luxury glow (from screenshot) */}
      <div
        className="fixed bottom-0 left-0 w-96 h-96 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(245,186,39,0.12),transparent_65%)]" />
        {/* Subtle geometric diagonal ray polygon */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 border-t border-r border-[#F5BA27]/15 rotate-12 pointer-events-none" />
      </div>

      {/* Left Scroll Tracking Rail */}
      <aside
        aria-label="Page navigation"
        className="fixed left-5 sm:left-7 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-start select-none"
      >
        {/* Vertical Rail Container */}
        <div className="relative flex flex-col gap-6 py-2">
          {/* Continuous vertical connector line */}
          <div
            className="absolute left-[7px] top-3 bottom-3 w-[1.5px] bg-white/10 dark:bg-white/15 pointer-events-none"
            aria-hidden="true"
          />

          {CHECKPOINTS.map((checkpoint) => {
            const isActive = activeId === checkpoint.id;

            return (
              <button
                key={checkpoint.id}
                onClick={() => scrollToSection(checkpoint.id)}
                className="group flex items-center gap-3.5 text-left focus:outline-none relative py-1 cursor-pointer"
                aria-label={`Scroll to ${checkpoint.label}`}
                aria-current={isActive ? "location" : undefined}
              >
                {/* Checkpoint Node / Dot */}
                <div className="relative flex items-center justify-center w-4 h-4 shrink-0">
                  {isActive ? (
                    <motion.div
                      layoutId="active-scroll-dot"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="w-2.5 h-2.5 rounded-full bg-[#F5BA27] shadow-[0_0_12px_#F5BA27] ring-4 ring-[#F5BA27]/25"
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-white/25 dark:bg-white/30 group-hover:bg-[#F5BA27]/70 group-hover:scale-125 transition-all duration-200" />
                  )}
                </div>

                {/* Number & Label */}
                <div className="flex items-center gap-2 text-xs transition-all duration-200">
                  <span
                    className={cn(
                      "font-mono font-bold tracking-wider transition-colors duration-200",
                      isActive
                        ? "text-[#F5BA27]"
                        : "text-[var(--color-foreground-muted)] group-hover:text-[var(--color-foreground-secondary)]"
                    )}
                  >
                    {checkpoint.number}
                  </span>
                  <span
                    className={cn(
                      "font-semibold tracking-wide transition-all duration-200",
                      isActive
                        ? "text-[var(--color-foreground)] font-bold translate-x-0.5"
                        : "text-[var(--color-foreground-muted)] group-hover:text-[var(--color-foreground-secondary)]"
                    )}
                  >
                    {checkpoint.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
