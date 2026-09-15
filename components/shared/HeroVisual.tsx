"use client";

import { motion } from "framer-motion";
import { Monitor, Search, BarChart2, Cpu, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeroVisual() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div
      className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center select-none"
      aria-label="Growwera digital solutions ecosystem"
    >
      {/* Background Ambience Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl" />
      </div>

      {/* SVG Connecting Lines between Nodes */}
      <svg
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        {/* Core Center to Web (Top Left) */}
        <path
          d="M220 70 L95 135"
          stroke={hoveredNode === "web" ? "var(--color-accent)" : "var(--color-border)"}
          strokeWidth={hoveredNode === "web" ? "2" : "1.2"}
          strokeDasharray={hoveredNode === "web" ? "none" : "4 4"}
          className="transition-all duration-300"
        />

        {/* Core Center to SEO (Top Right) */}
        <path
          d="M220 70 L345 135"
          stroke={hoveredNode === "seo" ? "var(--color-accent)" : "var(--color-border)"}
          strokeWidth={hoveredNode === "seo" ? "2" : "1.2"}
          strokeDasharray={hoveredNode === "seo" ? "none" : "4 4"}
          className="transition-all duration-300"
        />

        {/* Core Center down to AI & Automation (Center) */}
        <path
          d="M220 70 L220 205"
          stroke={hoveredNode === "ai" ? "var(--color-accent)" : "var(--color-border)"}
          strokeWidth={hoveredNode === "ai" ? "2" : "1.2"}
          className="transition-all duration-300"
        />

        {/* Web down to Marketing (Left to Bottom-Right Flow) */}
        <path
          d="M100 190 C100 250 200 270 330 290"
          stroke={hoveredNode === "web" || hoveredNode === "marketing" ? "var(--color-accent)" : "var(--color-border)"}
          strokeWidth="1"
          strokeOpacity="0.5"
          className="transition-all duration-300"
        />

        {/* SEO to Marketing */}
        <path
          d="M345 190 L330 275"
          stroke={hoveredNode === "seo" || hoveredNode === "marketing" ? "var(--color-accent)" : "var(--color-border)"}
          strokeWidth="1"
          strokeOpacity="0.5"
          className="transition-all duration-300"
        />

        {/* AI & Automation to Growth (Bottom) */}
        <path
          d="M220 275 L220 375"
          stroke="var(--color-accent)"
          strokeWidth="1.6"
          strokeDasharray="3 3"
        />
      </svg>

      {/* NODE 0: GROWWERA (Top Center Core) */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-5 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border-strong)] rounded-full shadow-sm hover:border-[var(--color-accent)] transition-colors">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-foreground)]">
            GROWWERA
          </span>
          <span className="text-[10px] text-[var(--color-foreground-muted)] uppercase tracking-wider pl-0.5">
            PLATFORM
          </span>
        </div>
      </motion.div>

      {/* NODE 1: WEB DESIGN & DEV (Top Left, 4.5s cycle) */}
      <motion.div
        animate={{
          y: [-6, 7, -6],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setHoveredNode("web")}
        onMouseLeave={() => setHoveredNode(null)}
        className="absolute top-20 left-2 sm:left-6 z-10"
      >
        <Link href="/services/web-development" className="block group">
          <div
            className={`px-3.5 py-3 rounded-xl border bg-[var(--color-surface)] shadow-sm transition-all duration-300 w-44 ${
              hoveredNode === "web"
                ? "border-[var(--color-accent)] shadow-[0_0_22px_rgba(49,92,255,0.25)] -translate-y-1"
                : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)] flex items-center justify-center">
                <Monitor size={15} />
              </div>
              <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] font-semibold">01</span>
            </div>
            <p className="text-xs font-bold text-[var(--color-foreground)] leading-tight group-hover:text-[var(--color-accent)] transition-colors">
              Web Design & Dev
            </p>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[var(--color-border)] text-[10px] text-[var(--color-foreground-muted)] font-mono">
              <span>Conversion-ready</span>
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* NODE 2: SEO (Top Right, 5.5s cycle) */}
      <motion.div
        animate={{
          y: [7, -6, 7],
          rotate: [1, -1, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setHoveredNode("seo")}
        onMouseLeave={() => setHoveredNode(null)}
        className="absolute top-20 right-2 sm:right-6 z-10"
      >
        <Link href="/services/seo" className="block group">
          <div
            className={`px-3.5 py-3 rounded-xl border bg-[var(--color-surface)] shadow-sm transition-all duration-300 w-40 ${
              hoveredNode === "seo"
                ? "border-[#F59E0B] shadow-[0_0_22px_rgba(245,158,11,0.25)] -translate-y-1"
                : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center">
                <Search size={15} />
              </div>
              <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] font-semibold">02</span>
            </div>
            <p className="text-xs font-bold text-[var(--color-foreground)] leading-tight group-hover:text-[#F59E0B] transition-colors">
              Search (SEO)
            </p>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[var(--color-border)] text-[10px] text-[#F59E0B] font-mono">
              <span>↑ Search visibility</span>
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* NODE 3: AI & AUTOMATION (Center Node, 5.0s cycle) */}
      <motion.div
        animate={{
          y: [-5, 6, -5],
        }}
        transition={{
          duration: 5.0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setHoveredNode("ai")}
        onMouseLeave={() => setHoveredNode(null)}
        className="absolute top-[200px] left-1/2 -translate-x-1/2 z-20"
      >
        <Link href="/services/ai-automation" className="block group">
          <div
            className={`px-4 py-3 rounded-xl border bg-[var(--color-surface)] shadow-sm transition-all duration-300 w-52 text-center ${
              hoveredNode === "ai"
                ? "border-[#8B5CF6] shadow-[0_0_22px_rgba(139,92,246,0.25)] -translate-y-1"
                : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-md bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center">
                <Cpu size={14} />
              </div>
              <p className="text-xs font-bold text-[var(--color-foreground)] group-hover:text-[#8B5CF6] transition-colors">
                AI & Automation
              </p>
            </div>
            <p className="text-[10px] text-[var(--color-foreground-muted)] font-mono">
              Workflows · Save team hours
            </p>
          </div>
        </Link>
      </motion.div>

      {/* NODE 4: DIGITAL MARKETING (Bottom Right, 6.0s cycle) */}
      <motion.div
        animate={{
          y: [7, -7, 7],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 6.0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setHoveredNode("marketing")}
        onMouseLeave={() => setHoveredNode(null)}
        className="absolute bottom-24 right-4 sm:right-10 z-10"
      >
        <Link href="/services/digital-marketing" className="block group">
          <div
            className={`px-3.5 py-3 rounded-xl border bg-[var(--color-surface)] shadow-sm transition-all duration-300 w-44 ${
              hoveredNode === "marketing"
                ? "border-[#EC4899] shadow-[0_0_22px_rgba(236,72,153,0.25)] -translate-y-1"
                : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#EC4899]/15 text-[#EC4899] flex items-center justify-center">
                <BarChart2 size={15} />
              </div>
              <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] font-semibold">03</span>
            </div>
            <p className="text-xs font-bold text-[var(--color-foreground)] leading-tight group-hover:text-[#EC4899] transition-colors">
              Digital Marketing
            </p>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[var(--color-border)] text-[10px] text-[#EC4899] font-mono">
              <span>Targeted campaigns</span>
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* NODE 5: BUSINESS GROWTH (Bottom Destination) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-white rounded-full shadow-[0_4px_20px_rgba(49,92,255,0.35)] hover:scale-105 transition-transform duration-200">
          <Sparkles size={14} className="text-white animate-pulse" />
          <span className="text-xs font-bold tracking-wider uppercase font-mono">
            BUSINESS GROWTH
          </span>
        </div>
      </motion.div>
    </div>
  );
}
