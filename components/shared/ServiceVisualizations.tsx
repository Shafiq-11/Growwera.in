"use client";

import { motion } from "framer-motion";
import { Search, MousePointer, ArrowRight, Sparkles, Database, Cog, CheckCircle2, UserCheck, Send } from "lucide-react";

/**
 * 01 — Web Design & Development Visual
 * Floating mini browser window with URL bar, mock wireframe, and an animated cursor moving over an [Explore] button.
 */
export function WebDesignVisual() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-2.5 overflow-hidden flex flex-col justify-between select-none">
      {/* Mini Browser Chrome Bar */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-amber-400/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="px-2.5 py-0.5 rounded-md bg-[var(--color-background)] border border-[var(--color-border)] text-[9px] font-mono text-[var(--color-foreground-muted)] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
          <span>yourbusiness.com</span>
        </div>
        <div className="w-6" />
      </div>

      {/* Mock Wireframe Layout */}
      <div className="grid grid-cols-12 gap-2 pt-1.5 items-center">
        <div className="col-span-7 space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-[var(--color-foreground)] opacity-70" />
          <div className="h-1.5 w-full rounded-full bg-[var(--color-foreground-muted)] opacity-40" />
          <div className="h-1.5 w-4/5 rounded-full bg-[var(--color-foreground-muted)] opacity-30" />
          
          {/* Animated Mini Button with Cursor */}
          <div className="relative inline-block pt-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--color-accent)] text-[9px] font-semibold text-white">
              Explore
            </span>
            {/* Animated Cursor */}
            <motion.div
              animate={{
                x: [18, 6, 18],
                y: [8, 0, 8],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1 right-[-8px] text-[var(--color-foreground)] drop-shadow"
            >
              <MousePointer size={13} className="fill-white text-black" />
            </motion.div>
          </div>
        </div>

        {/* Mock Graphic Box */}
        <div className="col-span-5 h-14 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/15 to-[var(--color-accent)]/5 border border-[var(--color-accent)]/25 flex items-center justify-center">
          <Sparkles size={16} className="text-[var(--color-accent)]" />
        </div>
      </div>
    </div>
  );
}

/**
 * 02 — SEO Visual
 * Search query simulation ("your business"), search ranking card preview, and upward discovery visibility indicator.
 */
export function SEOVisual() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-2.5 overflow-hidden flex flex-col justify-between select-none">
      {/* Search Input Simulation */}
      <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)]">
        <Search size={12} className="text-amber-500 shrink-0" />
        <span className="text-[10px] font-mono text-[var(--color-foreground-secondary)] truncate">
          best digital solutions near me
        </span>
      </div>

      {/* Result Card Preview with Upward Pulse */}
      <div className="relative p-2 rounded-lg bg-[var(--color-background)] border border-amber-500/30 flex items-center justify-between">
        <div className="space-y-1 max-w-[75%]">
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-amber-500/15 text-amber-500 font-mono">
              Top Result
            </span>
            <span className="text-[10px] font-semibold text-[var(--color-foreground)] truncate">
              Your Business
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[var(--color-foreground-muted)] opacity-40" />
        </div>

        {/* Rising Visibility Badge */}
        <motion.div
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/25"
        >
          <span className="text-[10px] font-bold text-amber-500">↑ #1</span>
          <span className="text-[8px] font-mono text-[var(--color-foreground-muted)]">RANK</span>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * 03 — Digital Marketing Visual
 * Visual campaign composition: CONTENT -> AUDIENCE -> ACTION -> GROWTH.
 */
export function DigitalMarketingVisual() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-2.5 overflow-hidden flex flex-col justify-between select-none">
      {/* Top flow indicator: CONTENT -> AUDIENCE -> ACTION -> GROWTH */}
      <div className="flex items-center justify-between text-[9px] font-mono font-semibold uppercase text-[var(--color-foreground-muted)] border-b border-[var(--color-border)] pb-1.5 px-0.5">
        <span className="text-[#EC4899]">Content</span>
        <ArrowRight size={10} className="text-[var(--color-border-strong)]" />
        <span className="text-[#EC4899]">Audience</span>
        <ArrowRight size={10} className="text-[var(--color-border-strong)]" />
        <span className="text-[#EC4899]">Action</span>
        <ArrowRight size={10} className="text-[var(--color-border-strong)]" />
        <span className="text-emerald-500">Growth</span>
      </div>

      {/* Campaign Visual Stack */}
      <div className="grid grid-cols-3 gap-2 items-center pt-1">
        {/* Step 1: Content card */}
        <div className="p-1.5 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-center">
          <Send size={12} className="mx-auto text-[#EC4899] mb-1" />
          <span className="text-[9px] font-medium text-[var(--color-foreground)] block">Campaign</span>
        </div>

        {/* Step 2: Target Audience */}
        <div className="p-1.5 rounded-lg bg-[var(--color-background)] border border-[#EC4899]/30 text-center relative">
          <UserCheck size={12} className="mx-auto text-[#EC4899] mb-1" />
          <span className="text-[9px] font-medium text-[var(--color-foreground)] block">Audience</span>
        </div>

        {/* Step 3: Conversion Outcome */}
        <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-center">
          <CheckCircle2 size={12} className="mx-auto text-emerald-500 mb-1" />
          <span className="text-[9px] font-bold text-emerald-500 block">Results</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 04 — AI & Automation Visual
 * Workflow visualization: INPUT -> AI -> AUTOMATION -> OUTPUT with connected path and traveling glowing pulse.
 */
export function AIAutomationVisual() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-2.5 overflow-hidden flex flex-col justify-between select-none">
      {/* Title / Flow label */}
      <div className="flex items-center justify-between text-[9px] font-mono font-semibold uppercase text-[var(--color-foreground-muted)] border-b border-[var(--color-border)] pb-1.5 px-0.5">
        <span className="text-[#8B5CF6]">INPUT</span>
        <span>→</span>
        <span className="text-[#8B5CF6]">AI</span>
        <span>→</span>
        <span className="text-[#8B5CF6]">AUTOMATION</span>
        <span>→</span>
        <span className="text-emerald-500">OUTPUT</span>
      </div>

      {/* Connected Nodes with animated traveling pulse */}
      <div className="relative flex items-center justify-between px-1 pt-1">
        {/* Node 1: Input */}
        <div className="flex flex-col items-center z-10">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground-muted)]">
            <Database size={13} />
          </div>
          <span className="text-[8px] font-mono text-[var(--color-foreground-muted)] mt-1">Data</span>
        </div>

        {/* Connecting Line 1 */}
        <div className="flex-1 h-[2px] bg-[var(--color-border)] relative mx-1">
          <motion.div
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 -top-[3px] absolute rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]"
          />
        </div>

        {/* Node 2: AI Engine */}
        <div className="flex flex-col items-center z-10">
          <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
            <Sparkles size={14} />
          </div>
          <span className="text-[8px] font-mono text-[#8B5CF6] mt-1 font-semibold">AI Model</span>
        </div>

        {/* Connecting Line 2 */}
        <div className="flex-1 h-[2px] bg-[var(--color-border)] relative mx-1">
          <motion.div
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 2.2, delay: 1.1, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 -top-[3px] absolute rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]"
          />
        </div>

        {/* Node 3: Automated Output */}
        <div className="flex flex-col items-center z-10">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
            <Cog size={14} className="animate-spin" style={{ animationDuration: "10s" }} />
          </div>
          <span className="text-[8px] font-mono text-emerald-500 mt-1 font-semibold">Output</span>
        </div>
      </div>
    </div>
  );
}
