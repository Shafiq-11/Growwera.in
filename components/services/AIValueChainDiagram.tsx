"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Zap,
  Binary,
  Cpu,
  GitBranch,
  Workflow,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const aiSteps = [
  {
    step: "01",
    title: "Event Trigger Ingestion",
    icon: Zap,
    category: "INGESTION SOURCE",
    description: "Webhooks, inbound leads, email arrival, or scheduled triggers.",
    signal: "Real-Time Event Catch",
    accent: "#06B6D4",
  },
  {
    step: "02",
    title: "Data Payload Validation",
    icon: Binary,
    category: "DATA PIPELINE",
    description: "Cleans, filters, sanitizes & normalizes multi-format incoming data.",
    signal: "Validated Schema",
    accent: "#3B82F6",
  },
  {
    step: "03",
    title: "AI Cognition & Extraction",
    icon: Cpu,
    category: "NEURAL PROCESSING",
    description: "LLMs reason through intent, extract entities & generate responses.",
    signal: "Context-Aware Logic",
    accent: "#8B5CF6",
  },
  {
    step: "04",
    title: "Conditional Decision Router",
    icon: GitBranch,
    category: "LOGIC ENGINE",
    description: "Evaluates rules, approval thresholds & routes along optimal branch.",
    signal: "Deterministic Path",
    accent: "#6366F1",
  },
  {
    step: "05",
    title: "Multi-App Action Dispatch",
    icon: Workflow,
    category: "EXECUTION GATE",
    description: "Auto-syncs CRMs, sends notifications, routes documents & tasks.",
    signal: "Zero-Click Execution",
    accent: "#10B981",
  },
  {
    step: "06",
    title: "Verified Operational Result",
    icon: CheckCircle2,
    category: "COMPLETION LOG",
    description: "Audit trail recorded, telemetry logged & task resolved flawlessly.",
    signal: "100% Reliable Output",
    accent: "#F59E0B",
  },
];

export default function AIValueChainDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6 select-none">
      {/* Ambient Glow */}
      <div className="absolute inset-0 m-auto w-3/4 h-32 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10" />

      {/* Blueprint Container */}
      <div className="relative rounded-3xl p-4 sm:p-8 bg-white/40 dark:bg-white/[0.02] border border-[var(--color-border)] shadow-xs overflow-hidden">
        {/* Header Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22D3EE]" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-foreground)]">
              The Intelligent Automation Value Chain
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[var(--color-foreground-muted)]">
              Trigger ➔ Logic ➔ Automated Business Outcome
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              Autonomous Pipeline
            </span>
          </div>
        </div>

        {/* ── DESKTOP PIPELINE: 6 NODES CONNECTED BY CONDUIT ── */}
        <div className="hidden lg:block relative">
          {/* Animated Connecting Conduits Bar */}
          <div className="absolute top-[42px] left-[5%] right-[5%] h-1 bg-[var(--color-border)] z-0">
            <motion.div
              animate={shouldReduceMotion ? {} : { x: ["-100%", "200%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22D3EE]"
            />
          </div>

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {aiSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col items-center group">
                  {/* Step Node Icon Circle */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                    className="w-20 h-20 rounded-2xl glass-glossy p-0.5 shadow-md flex flex-col items-center justify-center border border-white/50 dark:border-white/20 group-hover:border-cyan-400 transition-colors relative mb-4"
                  >
                    <span className="text-[10px] font-mono font-bold text-cyan-500 dark:text-cyan-400 mb-0.5">
                      {step.step}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Node Card Details */}
                  <div className="w-full glass-glossy rounded-2xl p-3.5 border border-[var(--color-border)] text-center flex flex-col justify-between h-[155px] group-hover:border-cyan-400/40 transition-all duration-300">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-cyan-500 dark:text-cyan-400 block mb-1">
                        {step.category}
                      </span>
                      <h4 className="text-xs font-bold text-[var(--color-foreground)] tracking-tight leading-tight mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-[var(--color-foreground-muted)] leading-tight">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[var(--color-border)] mt-2">
                      <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 block truncate">
                        ✓ {step.signal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE & TABLET STEPPED DIAGRAM VIEW ── */}
        <div className="lg:hidden space-y-3 relative">
          {aiSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                <div className="glass-glossy rounded-2xl p-4 border border-[var(--color-border)] flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs mt-0.5"
                    style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold text-cyan-500 dark:text-cyan-400">
                        STAGE {step.step} • {step.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        ✓ {step.signal}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[var(--color-foreground)] tracking-tight mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {idx < aiSteps.length - 1 && (
                  <div className="w-0.5 h-3 bg-cyan-400/30 mx-auto my-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-foreground-muted)]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Automations operate quietly in the background without modifying your daily human tools.</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--color-foreground-secondary)] font-medium">
            Zero human data entry • Strict data privacy
          </span>
        </div>
      </div>
    </div>
  );
}
