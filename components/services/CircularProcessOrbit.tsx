"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface OrbitStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CircularProcessOrbitProps {
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  steps: OrbitStep[];
  startNote?: string;
  endNote?: string;
}

export default function CircularProcessOrbit({
  title = "Our",
  titleAccent = "Process",
  subtitle = "From idea to launch.",
  steps,
  startNote = "Your idea starts here.",
  endNote = "A digital solution that works for you.",
}: CircularProcessOrbitProps) {
  const shouldReduceMotion = useReducedMotion();

  // Desktop coordinates for 6 nodes around a 1000x640 canvas
  // Center is (500, 320), Orbit Radius R = 210
  const nodeConfigs = [
    {
      // 01: 12 o'clock (-90 deg)
      stepIdx: 0,
      nodePos: "left-[calc(50%-38px)] top-[72px]",
      labelPos: "left-[calc(50%+54px)] top-[46px] text-left max-w-[210px]",
    },
    {
      // 02: 2 o'clock (-30 deg)
      stepIdx: 1,
      nodePos: "left-[calc(50%+144px)] top-[177px]",
      labelPos: "left-[calc(50%+236px)] top-[182px] text-left max-w-[210px]",
    },
    {
      // 03: 4 o'clock (+30 deg)
      stepIdx: 2,
      nodePos: "left-[calc(50%+144px)] top-[387px]",
      labelPos: "left-[calc(50%+236px)] top-[392px] text-left max-w-[210px]",
    },
    {
      // 04: 6 o'clock (+90 deg)
      stepIdx: 3,
      nodePos: "left-[calc(50%-38px)] top-[492px]",
      labelPos: "left-[calc(50%+54px)] top-[516px] text-left max-w-[210px]",
    },
    {
      // 05: 8 o'clock (+150 deg)
      stepIdx: 4,
      nodePos: "left-[calc(50%-220px)] top-[387px]",
      labelPos: "right-[calc(50%+236px)] top-[392px] text-left max-w-[210px]",
    },
    {
      // 06: 10 o'clock (+210 deg)
      stepIdx: 5,
      nodePos: "left-[calc(50%-220px)] top-[177px]",
      labelPos: "right-[calc(50%+236px)] top-[182px] text-left max-w-[210px]",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#040711] text-white py-16 sm:py-20 lg:py-24 rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] select-none">
      {/* ── BACKGROUND AMBIENCE & BLURRED 3D GLASS ORBS ── */}
      <div className="absolute inset-0 bg-radial from-blue-950/20 via-transparent to-black pointer-events-none" />

      {/* Top-right floating glass sphere reflection */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-br from-white/15 via-blue-500/10 to-transparent blur-2xl pointer-events-none border border-white/10 shadow-[inset_0_2px_30px_rgba(255,255,255,0.2)]" />

      {/* Bottom-left floating dark glass sphere reflection */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-900/30 via-blue-600/10 to-transparent blur-3xl pointer-events-none border border-white/5 shadow-[inset_0_2px_40px_rgba(59,130,246,0.3)]" />

      {/* ── DESKTOP CIRCULAR ORBIT VIEW (lg and above) ── */}
      <div className="hidden lg:block relative w-full max-w-[1060px] h-[660px] mx-auto">
        {/* ── SVG ORBIT RINGS & ARROWS ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1060 660"
          fill="none"
        >
          <defs>
            {/* Clockwise Arrowhead Marker */}
            <marker
              id="orbit-arrow"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#60A5FA" opacity="0.8" />
            </marker>

            {/* Glowing Orbit Stroke Gradient */}
            <radialGradient id="orbit-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Faint Outer Ring */}
          <circle
            cx="530"
            cy="330"
            r="310"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Main Orbit Ring (Radius = 210) */}
          <circle
            cx="530"
            cy="330"
            r="210"
            stroke="rgba(59, 130, 246, 0.28)"
            strokeWidth="1.5"
          />

          {/* Clockwise Directional Arrowhead Ticks on Orbit (Between nodes) */}
          {/* 1. Between 01 & 02 (~30 deg): (530 + 210*0.866 = 712, 330 - 210*0.5 = 225) */}
          <g transform="translate(670, 248) rotate(45)">
            <path d="M-3,0 L3,0 M0,-3 L3,0 L0,3" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.85" />
          </g>

          {/* 2. Between 02 & 03 (~90 deg): (530 + 210 = 740, 330) */}
          <g transform="translate(740, 330) rotate(90)">
            <path d="M-3,0 L3,0 M0,-3 L3,0 L0,3" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.85" />
          </g>

          {/* 3. Between 03 & 04 (~150 deg): (530 + 210*0.866 = 712, 330 + 210*0.5 = 435) */}
          <g transform="translate(670, 412) rotate(135)">
            <path d="M-3,0 L3,0 M0,-3 L3,0 L0,3" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.85" />
          </g>

          {/* 4. Between 04 & 05 (~210 deg): (530 - 210*0.5 = 425, 330 + 210*0.866 = 512) */}
          <g transform="translate(390, 412) rotate(-135)">
            <path d="M-3,0 L3,0 M0,-3 L3,0 L0,3" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.85" />
          </g>

          {/* 5. Between 05 & 06 (~270 deg): (530 - 210 = 320, 330) */}
          <g transform="translate(320, 330) rotate(-90)">
            <path d="M-3,0 L3,0 M0,-3 L3,0 L0,3" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.85" />
          </g>

          {/* 6. Between 06 & 01 (~330 deg): (530 - 210*0.866 = 348, 330 - 210*0.5 = 225) */}
          <g transform="translate(390, 248) rotate(-45)">
            <path d="M-3,0 L3,0 M0,-3 L3,0 L0,3" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.85" />
          </g>

          {/* Orbit Connector Diamond Nodes */}
          <circle cx="530" cy="120" r="2.5" fill="#93C5FD" opacity="0.8" />
          <circle cx="712" cy="225" r="2.5" fill="#93C5FD" opacity="0.8" />
          <circle cx="712" cy="435" r="2.5" fill="#93C5FD" opacity="0.8" />
          <circle cx="530" cy="540" r="2.5" fill="#93C5FD" opacity="0.8" />
          <circle cx="348" cy="435" r="2.5" fill="#93C5FD" opacity="0.8" />
          <circle cx="348" cy="225" r="2.5" fill="#93C5FD" opacity="0.8" />
        </svg>

        {/* ── TOP-LEFT HANDWRITTEN ANNOTATION & CURVED ARROW ── */}
        <div className="absolute top-10 left-8 z-30 flex items-start gap-2">
          <div className="text-right">
            <span className="font-handwriting text-xl text-slate-200 block -rotate-6">
              {startNote}
            </span>
          </div>
          <svg width="65" height="40" viewBox="0 0 65 40" fill="none" className="mt-1">
            <path
              d="M 5,28 C 25,8 42,6 58,18"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeDasharray="none"
              fill="none"
            />
            <path
              d="M 58,18 L 50,14 M 58,18 L 54,26"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ── BOTTOM-RIGHT HANDWRITTEN ANNOTATION & CURVED ARROW ── */}
        <div className="absolute bottom-12 right-10 z-30 flex items-center gap-3">
          <svg width="65" height="40" viewBox="0 0 65 40" fill="none">
            <path
              d="M 58,12 C 38,28 20,28 5,16"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 5,16 L 12,21 M 5,16 L 10,9"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-left">
            <span className="font-handwriting text-xl text-slate-200 block -rotate-6 max-w-[160px] leading-tight">
              {endNote}
            </span>
          </div>
        </div>

        {/* ── CENTRAL GLOSSY DARK BLUE SPHERE ── */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.015, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[calc(50%-125px)] top-[calc(50%-125px)] w-[250px] h-[250px] rounded-full z-20 flex flex-col items-center justify-center text-center p-6 border border-white/25 shadow-[0_0_70px_rgba(59,130,246,0.45),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-16px_36px_rgba(37,99,235,0.5)] overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 120%, rgba(59, 130, 246, 0.7) 0%, rgba(29, 78, 216, 0.35) 45%, rgba(10, 18, 42, 0.95) 75%, rgba(3, 6, 17, 1) 100%)",
          }}
        >
          {/* Specular Highlight Arc on Top of Sphere */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-10 rounded-full bg-gradient-to-b from-white/35 via-white/10 to-transparent blur-[1.5px] pointer-events-none" />

          {/* Growwera Logo Mark Icon */}
          <div className="relative mb-2">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
              <ellipse cx="14" cy="11" rx="9.5" ry="6.5" transform="rotate(-15 14 11)" fill="#60A5FA" />
              <ellipse cx="26" cy="21" rx="9.5" ry="6.5" transform="rotate(-15 26 21)" fill="#3B82F6" />
            </svg>
          </div>

          {/* Central Title */}
          <h3 className="text-2xl font-extrabold tracking-tight text-white mb-1">
            {title} <span className="text-[#3B82F6]">{titleAccent}</span>
          </h3>

          {/* Central Subtitle */}
          <p className="text-xs text-slate-300 font-normal">{subtitle}</p>

          {/* Small Center Dash */}
          <div className="w-6 h-0.5 bg-blue-400/60 rounded-full mx-auto mt-2" />
        </motion.div>

        {/* ── 6 ORBITING 3D GLASS NODES WITH LABELS ── */}
        {nodeConfigs.map((cfg) => {
          const step = steps[cfg.stepIdx];
          if (!step) return null;
          const Icon = step.icon;

          return (
            <React.Fragment key={step.number}>
              {/* 3D Glass Node Circle Button */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`absolute ${cfg.nodePos} w-[76px] h-[76px] rounded-full z-20 flex items-center justify-center border border-white/30 shadow-[0_10px_25px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.45),0_0_22px_rgba(59,130,246,0.3)] cursor-pointer group`}
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(15, 23, 42, 0.85) 65%, rgba(6, 11, 25, 0.98) 100%)",
                }}
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors duration-300 pointer-events-none" />
                <Icon className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-200" />
              </motion.div>

              {/* Node Text Label (Number, Title, Description) */}
              <div className={`absolute ${cfg.labelPos} z-20 pointer-events-none`}>
                <span className="block text-xs font-mono font-bold text-[#3B82F6] mb-0.5 tracking-wider">
                  {step.number}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight leading-tight mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-snug">
                  {step.description}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* ── MOBILE & TABLET RESPONSIVE VIEW (< lg) ── */}
      <div className="lg:hidden px-4 sm:px-6 relative z-10 max-w-xl mx-auto">
        {/* Mobile Central Orb */}
        <div
          className="w-[200px] h-[200px] rounded-full mx-auto mb-10 flex flex-col items-center justify-center text-center p-4 border border-white/25 shadow-[0_0_50px_rgba(59,130,246,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-12px_28px_rgba(37,99,235,0.45)] relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 120%, rgba(59, 130, 246, 0.7) 0%, rgba(29, 78, 216, 0.35) 45%, rgba(10, 18, 42, 0.95) 75%, rgba(3, 6, 17, 1) 100%)",
          }}
        >
          <svg width="34" height="26" viewBox="0 0 40 32" fill="none" className="mb-1.5">
            <ellipse cx="14" cy="11" rx="9.5" ry="6.5" transform="rotate(-15 14 11)" fill="#60A5FA" />
            <ellipse cx="26" cy="21" rx="9.5" ry="6.5" transform="rotate(-15 26 21)" fill="#3B82F6" />
          </svg>
          <h3 className="text-xl font-extrabold tracking-tight text-white mb-0.5">
            {title} <span className="text-[#3B82F6]">{titleAccent}</span>
          </h3>
          <p className="text-[11px] text-slate-300 font-normal">{subtitle}</p>
          <div className="w-5 h-0.5 bg-blue-400/60 rounded-full mx-auto mt-2" />
        </div>

        {/* Mobile Handwritten Callout */}
        <div className="text-center mb-8">
          <span className="font-handwriting text-lg text-slate-300 block -rotate-3">
            {startNote}
          </span>
        </div>

        {/* Connected Vertical Stepped Nodes */}
        <div className="space-y-4 relative">
          {/* Vertical Connecting Light Guide Line */}
          <div className="absolute left-[34px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-blue-500/40" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative z-10"
              >
                {/* 3D Glass Node Circle Button */}
                <div
                  className="w-[68px] h-[68px] rounded-full shrink-0 flex items-center justify-center border border-white/25 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.4),0_0_15px_rgba(59,130,246,0.25)]"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(15, 23, 42, 0.85) 65%, rgba(6, 11, 25, 0.98) 100%)",
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Node Label Details */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#3B82F6]">
                      {step.number}
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Bottom Annotation */}
        <div className="text-center mt-8 pt-4">
          <span className="font-handwriting text-lg text-slate-300 block -rotate-3">
            {endNote}
          </span>
        </div>
      </div>
    </div>
  );
}
