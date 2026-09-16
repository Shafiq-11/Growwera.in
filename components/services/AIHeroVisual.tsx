"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Zap, ArrowDown, CheckCircle2, GitBranch } from "lucide-react";
import GlassSphere from "@/components/decorative/GlassSphere";

export default function AIHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    { label: "INPUT", sub: "Incoming leads, files, inquiries" },
    { label: "AI LOGIC", sub: "Extraction, reasoning & structuring" },
    { label: "AUTOMATION", sub: "Integrate with CRM, DB, Email" },
    { label: "OUTPUT", sub: "Formatted action, alert, or report" },
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[480px] sm:h-[520px] mx-auto flex flex-col items-center justify-center select-none">
      {/* Ambient Deep Blue/Cyan Glow */}
      <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-cyan-600/20 blur-3xl pointer-events-none -z-10" />

      {/* Floating 3D Blue Glass Spheres */}
      <GlassSphere
        size="md"
        className="absolute top-4 right-4 z-30 shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
        delay={0.15}
      />
      <GlassSphere
        size="sm"
        className="absolute bottom-6 left-4 z-30 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
        delay={0.4}
      />

      {/* ── 4-STAGE VERTICAL PIPELINE WITH ACTIVE PULSES ── */}
      <div className="relative w-[300px] sm:w-[340px] flex flex-col items-center space-y-3 z-20">
        {stages.map((stg, idx) => (
          <div key={stg.label} className="w-full flex flex-col items-center">
            {/* Stage Box */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.015, 1],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5,
              }}
              className="w-full px-5 py-3.5 rounded-2xl glass-glossy border border-white/40 dark:border-white/20 shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs">
                  0{idx + 1}
                </div>
                <div>
                  <span className="text-xs font-bold text-[var(--color-foreground)] tracking-tight block">
                    {stg.label}
                  </span>
                  <span className="text-[10px] text-[var(--color-foreground-muted)] block">
                    {stg.sub}
                  </span>
                </div>
              </div>

              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </motion.div>

            {/* Connecting Pulse Line Between Stages */}
            {idx < stages.length - 1 && (
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#F5BA27] to-cyan-400 relative my-0.5">
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 24, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: idx * 0.4,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 -left-[2px] absolute shadow-[0_0_8px_#38BDF8]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── INTERACTIVE AUTOMATION NODE SYSTEM DIAGRAM ── */
export function AutomationNodeSystem() {
  const nodes = [
    { label: "TRIGGER", desc: "Webhook or schedule event" },
    { label: "DATA", desc: "Clean & parse payload" },
    { label: "AI / LOGIC", desc: "LLM reasoning & filtering" },
    { label: "DECISION", desc: "Condition rule evaluation" },
    { label: "ACTION", desc: "Execute target workflow" },
    { label: "RESULT", desc: "Verified business outcome" },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
        {nodes.map((node, idx) => (
          <div
            key={node.label}
            className="glass-glossy rounded-2xl p-4 text-center border border-[var(--color-border)] shadow-xs flex flex-col items-center justify-between h-full group hover:border-[#F5BA27]/40 transition-colors"
          >
            <div className="w-7 h-7 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-mono font-bold mb-2">
              0{idx + 1}
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[var(--color-foreground)] tracking-tight mb-1">
              {node.label}
            </h4>
            <p className="text-[10px] text-[var(--color-foreground-muted)] leading-tight">
              {node.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
