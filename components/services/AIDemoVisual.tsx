"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowRight, Bot, CheckCircle } from "lucide-react";

export default function AIDemoVisual() {
  return (
    <motion.div
      animate={{ y: [3, -3, 3] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      className="w-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-xs p-3 relative select-none"
    >
      {/* Node Pipeline Visual */}
      <div className="grid grid-cols-4 gap-1.5 items-center relative">
        {/* Node 1: Input */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-2 text-center">
          <span className="text-[9px] font-mono text-[var(--color-foreground-muted)] block mb-0.5">01</span>
          <p className="text-[10px] font-bold text-[var(--color-foreground)] leading-none">Input</p>
          <span className="text-[8px] text-[var(--color-foreground-muted)] mt-1 block">Data / Inquiry</span>
        </div>

        {/* Node 2: AI */}
        <div className="bg-[var(--color-surface)] border border-[#8B5CF6]/30 rounded-lg p-2 text-center relative">
          <span className="text-[9px] font-mono text-[#8B5CF6] block mb-0.5">02</span>
          <div className="flex items-center justify-center gap-0.5">
            <Bot size={11} className="text-[#8B5CF6]" />
            <p className="text-[10px] font-bold text-[var(--color-foreground)] leading-none">AI</p>
          </div>
          <span className="text-[8px] text-[#8B5CF6] mt-1 block">Context</span>
        </div>

        {/* Node 3: Automation */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-2 text-center">
          <span className="text-[9px] font-mono text-[var(--color-foreground-muted)] block mb-0.5">03</span>
          <div className="flex items-center justify-center gap-0.5">
            <Cpu size={11} className="text-[var(--color-accent)]" />
            <p className="text-[10px] font-bold text-[var(--color-foreground)] leading-none">Auto</p>
          </div>
          <span className="text-[8px] text-[var(--color-foreground-muted)] mt-1 block">Action</span>
        </div>

        {/* Node 4: Output */}
        <div className="bg-[var(--color-surface)] border border-emerald-500/30 rounded-lg p-2 text-center">
          <span className="text-[9px] font-mono text-emerald-500 block mb-0.5">04</span>
          <div className="flex items-center justify-center gap-0.5">
            <CheckCircle size={10} className="text-emerald-500" />
            <p className="text-[10px] font-bold text-[var(--color-foreground)] leading-none">Result</p>
          </div>
          <span className="text-[8px] text-emerald-500 mt-1 block">Completed</span>
        </div>
      </div>

      {/* Traveling Energy Pulse Bar */}
      <div className="mt-3 relative w-full h-1.5 bg-[var(--color-surface)] rounded-full overflow-hidden border border-[var(--color-border)]">
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent rounded-full opacity-80"
        />
      </div>

      <div className="flex items-center justify-between mt-2 pt-1 text-[9px] text-[var(--color-foreground-muted)] font-mono">
        <span>Workflow Pipeline</span>
        <span className="text-[var(--color-accent)]">Active System</span>
      </div>
    </motion.div>
  );
}
