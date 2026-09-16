"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layout, BarChart3, Megaphone, Zap } from "lucide-react";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";
import GlassSphere from "@/components/decorative/GlassSphere";
import { cn } from "@/lib/utils";

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div
      className="relative w-full max-w-[500px] h-[470px] sm:h-[510px] mx-auto flex items-center justify-center select-none"
      aria-label="Growwera 3D Glossy Ecosystem"
    >
      {/* ── AMBIENT ELECTRIC BLUE LIQUID BACKGLOW ── */}
      <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-gradient-to-tr from-amber-600/20 via-[#F5BA27]/15 to-yellow-500/10 blur-3xl pointer-events-none -z-10" />

      {/* ── TOP-RIGHT HANDWRITTEN ANNOTATION WITH CURVED ARROW ── */}
      <div className="absolute -top-6 -right-2 sm:-right-4 z-40 flex flex-col items-end pointer-events-none select-none">
        <span className="font-handwriting text-base sm:text-lg text-[var(--color-foreground-secondary)] rotate-6 text-right leading-tight whitespace-nowrap">
          Different services.<br />
          A common goal:<br />
          <span className="text-[#F5BA27] font-bold">Your growth.</span>
        </span>
        <HandDrawnArrow
          variant="curved-down-left"
          className="w-7 h-6 -mt-1 mr-3 text-[var(--color-foreground-muted)] opacity-80"
          color="currentColor"
        />
      </div>

      {/* ── ORBITAL RINGS & CONNECTING TRACES SVG ── */}
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        aria-hidden="true"
      >
        {/* Angled Elliptical Orbital Track 1 */}
        <ellipse
          cx="240"
          cy="240"
          rx="180"
          ry="115"
          transform="rotate(-18 240 240)"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="5 5"
          className="text-blue-400/25 dark:text-blue-400/20"
        />

        {/* Angled Elliptical Orbital Track 2 */}
        <ellipse
          cx="240"
          cy="240"
          rx="125"
          ry="175"
          transform="rotate(22 240 240)"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="5 5"
          className="text-cyan-400/25 dark:text-cyan-400/20"
        />

        {/* Orbiting Luminous Waypoint Dots */}
        <circle cx="105" cy="185" r="3" fill="#38BDF8" className="animate-pulse" />
        <circle cx="375" cy="295" r="3" fill="#F5BA27" className="animate-pulse [animation-delay:0.5s]" />
        <circle cx="160" cy="350" r="2.5" fill="#818CF8" />
        <circle cx="320" cy="120" r="2.5" fill="#60A5FA" />
      </svg>

      {/* ── 3D FLOATING BLUE GLASS SPHERES ── */}
      <GlassSphere
        size="md"
        className="absolute top-14 right-14 z-10 shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
        delay={0.2}
      />
      <GlassSphere
        size="sm"
        className="absolute bottom-16 left-12 z-10 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
        delay={0.5}
      />

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4 SATELLITE FLOATING GLOSSY GLASS CARDS                    */}
      {/* ────────────────────────────────────────────────────────── */}

      {/* 1. TOP-LEFT: Web Development */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setActiveCard("web")}
        onMouseLeave={() => setActiveCard(null)}
        className={cn(
          "absolute top-4 left-0 sm:left-2 z-30 w-40 sm:w-44 p-3.5 sm:p-4 rounded-2xl glass-glossy transition-all duration-300 cursor-pointer group",
          activeCard === "web"
            ? "border-[#F5BA27]/60 shadow-[0_16px_40px_rgba(245, 186, 39,0.3)] scale-[1.03]"
            : "hover:border-[#F5BA27]/40 hover:shadow-[0_12px_32px_rgba(245, 186, 39,0.18)]"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded-xl bg-[#F5BA27]/10 dark:bg-[#F5BA27]/15 text-[#F5BA27] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Layout className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F5BA27]/10 text-[#F5BA27] border border-[#F5BA27]/25">
            Web
          </span>
        </div>
        <h3 className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight leading-snug">
          Web Development
        </h3>
      </motion.div>

      {/* 2. TOP-RIGHT: SEO */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        onMouseEnter={() => setActiveCard("seo")}
        onMouseLeave={() => setActiveCard(null)}
        className={cn(
          "absolute top-6 right-0 sm:right-2 z-30 w-36 sm:w-40 p-3.5 sm:p-4 rounded-2xl glass-glossy transition-all duration-300 cursor-pointer group",
          activeCard === "seo"
            ? "border-[#F5BA27]/60 shadow-[0_16px_40px_rgba(245, 186, 39,0.3)] scale-[1.03]"
            : "hover:border-[#F5BA27]/40 hover:shadow-[0_12px_32px_rgba(245, 186, 39,0.18)]"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded-xl bg-[#F5BA27]/10 dark:bg-[#F5BA27]/15 text-[#F5BA27] flex items-center justify-center group-hover:scale-110 transition-transform">
            <BarChart3 className="w-4 h-4" />
          </div>
        </div>
        <h3 className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight leading-snug">
          SEO
        </h3>
      </motion.div>

      {/* 3. BOTTOM-LEFT: Digital Marketing */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        onMouseEnter={() => setActiveCard("marketing")}
        onMouseLeave={() => setActiveCard(null)}
        className={cn(
          "absolute bottom-4 left-0 sm:left-2 z-30 w-40 sm:w-44 p-3.5 sm:p-4 rounded-2xl glass-glossy transition-all duration-300 cursor-pointer group",
          activeCard === "marketing"
            ? "border-[#F5BA27]/60 shadow-[0_16px_40px_rgba(245, 186, 39,0.3)] scale-[1.03]"
            : "hover:border-[#F5BA27]/40 hover:shadow-[0_12px_32px_rgba(245, 186, 39,0.18)]"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded-xl bg-[#F5BA27]/10 dark:bg-[#F5BA27]/15 text-[#F5BA27] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Megaphone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F5BA27]/10 text-[#F5BA27] border border-[#F5BA27]/25">
            SEO
          </span>
        </div>
        <h3 className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight leading-snug">
          Digital Marketing
        </h3>
      </motion.div>

      {/* 4. BOTTOM-RIGHT: AI & Automation */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        onMouseEnter={() => setActiveCard("ai")}
        onMouseLeave={() => setActiveCard(null)}
        className={cn(
          "absolute bottom-4 right-0 sm:right-2 z-30 w-40 sm:w-44 p-3.5 sm:p-4 rounded-2xl glass-glossy transition-all duration-300 cursor-pointer group",
          activeCard === "ai"
            ? "border-[#F5BA27]/60 shadow-[0_16px_40px_rgba(245, 186, 39,0.3)] scale-[1.03]"
            : "hover:border-[#F5BA27]/40 hover:shadow-[0_12px_32px_rgba(245, 186, 39,0.18)]"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded-xl bg-[#F5BA27]/10 dark:bg-[#F5BA27]/15 text-[#F5BA27] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F5BA27]/10 text-[#F5BA27] border border-[#F5BA27]/25">
            PRO
          </span>
        </div>
        <h3 className="text-xs sm:text-[13px] font-bold text-[var(--color-foreground)] tracking-tight leading-snug">
          AI & Automation
        </h3>
      </motion.div>

      {/* ────────────────────────────────────────────────────────── */}
      {/* CENTER GLOSSY LIQUID GLASS CUBE (MONOGRAM G.)             */}
      {/* ────────────────────────────────────────────────────────── */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -5, 0],
                rotate: [0, 0.5, 0],
                scale: [1, 1.015, 1],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-[2.5rem] glass-glossy z-20 flex flex-col items-center justify-center shadow-[0_24px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(245, 186, 39,0.3),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_12px_rgba(0,0,0,0.3)] border border-white/40 dark:border-white/20 backdrop-blur-2xl"
      >
        {/* Top-Left Specular Sheen Arc */}
        <div className="absolute top-2.5 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

        {/* Monogram G. */}
        <span className="text-5xl sm:text-6xl font-black tracking-tight text-[var(--color-foreground)] font-sans">
          G<span className="text-[#F5BA27]">.</span>
        </span>

        {/* Bottom Internal Caustic Liquid Glow */}
        <div className="absolute bottom-3 inset-x-6 h-3 rounded-full bg-[#F5BA27]/20 dark:bg-[#F5BA27]/30 blur-sm pointer-events-none" />
      </motion.div>
    </div>
  );
}
