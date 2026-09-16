"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import GlassSphere from "@/components/decorative/GlassSphere";

export default function WebDevHeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const floatingBadges = [
    { label: "Responsive", x: "10%", y: "8%", delay: 0 },
    { label: "Fast", x: "78%", y: "12%", delay: 0.2 },
    { label: "Modern", x: "6%", y: "82%", delay: 0.4 },
    { label: "Mobile", x: "75%", y: "80%", delay: 0.15 },
    { label: "SEO-ready", x: "82%", y: "46%", delay: 0.35 },
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[440px] sm:h-[480px] mx-auto flex flex-col items-center justify-center select-none">
      {/* Ambient Blue Backlight */}
      <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none -z-10" />

      {/* Floating 3D Blue Glass Spheres */}
      <GlassSphere
        size="md"
        className="absolute top-4 right-10 z-30 shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
        delay={0.2}
      />
      <GlassSphere
        size="sm"
        className="absolute bottom-10 left-6 z-30 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
        delay={0.5}
      />

      {/* Top Label & Down Arrow */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center mb-3 text-center"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#F5BA27] bg-[#F5BA27]/10 px-3 py-1 rounded-full border border-[#F5BA27]/20">
          WEBSITE
        </span>
        <div className="w-[1px] h-3 bg-gradient-to-b from-[#F5BA27] to-transparent mt-1" />
      </motion.div>

      {/* Central Glossy Interactive Browser Window */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[340px] sm:w-[380px] rounded-3xl glass-glossy p-4 shadow-[0_24px_50px_rgba(0,0,0,0.12),0_0_40px_rgba(245, 186, 39,0.18),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white/40 dark:border-white/20 backdrop-blur-2xl z-20"
      >
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[var(--color-foreground-secondary)]">
            GROWWERA / BRAND
          </span>
          <div className="w-8" />
        </div>

        {/* Browser Inner Page Content */}
        <div className="rounded-2xl bg-white/70 dark:bg-black/40 border border-neutral-200/60 dark:border-white/10 p-6 text-center relative overflow-hidden">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5BA27] block mb-1">
            ONLINE EXPERIENCES
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-2">
            Your Business<br />Online
          </h3>
          <p className="text-xs text-[var(--color-foreground-muted)] max-w-[200px] mx-auto mb-5 leading-relaxed">
            Fast, credible, and built to turn visitors into enquiries.
          </p>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F5BA27] text-black font-bold text-xs font-semibold shadow-md shadow-[#F5BA27]/30">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* Animated Cursor */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [40, 20, 40],
                    y: [15, 30, 15],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-5 right-12 pointer-events-none text-[#F5BA27] drop-shadow-md z-30"
          >
            <MousePointer2 className="w-5 h-5 fill-[#F5BA27] stroke-white stroke-[1.5]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Glossy Tags */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -6, 0],
                }
          }
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: badge.delay,
          }}
          style={{
            top: badge.y,
            left: badge.x,
          }}
          className="absolute z-30 hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold glass-pill text-[var(--color-foreground)] shadow-sm border border-white/30 dark:border-white/15"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5BA27] mr-2" />
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}
