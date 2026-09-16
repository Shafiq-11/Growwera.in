"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function IsometricGlassStack() {
  const shouldReduceMotion = useReducedMotion();

  const layers = [
    {
      id: "understand",
      num: "01",
      label: "Understand",
      yOffset: 0,
      glowColor: "rgba(56, 189, 248, 0.4)",
      borderColor: "rgba(56, 189, 248, 0.5)",
      delay: 0,
    },
    {
      id: "build",
      num: "02",
      label: "Build",
      yOffset: 38,
      glowColor: "rgba(245, 186, 39, 0.4)",
      borderColor: "rgba(96, 165, 250, 0.4)",
      delay: 0.25,
    },
    {
      id: "improve",
      num: "03",
      label: "Improve",
      yOffset: 76,
      glowColor: "rgba(99, 102, 241, 0.4)",
      borderColor: "rgba(129, 140, 248, 0.35)",
      delay: 0.5,
    },
  ];

  return (
    <div className="relative w-full max-w-[420px] h-[340px] flex items-center justify-center select-none">
      {/* Ambient Blue Backlight */}
      <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Isometric Viewport */}
      <div
        className="relative w-[340px] sm:w-[380px] h-[220px]"
        style={{
          perspective: 1200,
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: "rotateX(52deg) rotateZ(-22deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [layer.yOffset, layer.yOffset - 8, layer.yOffset],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: layer.delay,
              }}
              style={{
                top: `${layer.yOffset}px`,
                boxShadow: `0 16px 36px -6px rgba(0,0,0,0.6), 0 0 24px ${layer.glowColor}, inset 0 1.5px 0 0 rgba(255,255,255,0.4)`,
                borderColor: layer.borderColor,
                zIndex: 30 - index * 10,
              }}
              className="absolute left-0 right-0 h-22 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border flex items-center justify-between px-6 transition-all duration-300"
            >
              {/* Left Step Details */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                  {layer.num}
                </span>
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {layer.label}
                </span>
              </div>

              {/* Right Number Badge */}
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold font-mono text-white/80">
                {layer.num}
              </div>

              {/* Specular Diagonal Sheen Bar */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
