"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

export default function PaperBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle Checkered / Grid Background (44px × 44px) using CSS variables */}
      <div className="absolute inset-0 paper-grid-bg" />

      {/* Very subtle SVG noise / paper grain */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          isDark
            ? "opacity-[0.03] mix-blend-screen"
            : "opacity-[0.03] mix-blend-multiply"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="growwera-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#growwera-paper-noise)" />
      </svg>

      {/* Gentle radial depth gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,rgba(245, 186, 39,0.035)_0%,transparent_60%,rgba(0,0,0,0.5)_100%)]"
            : "bg-[radial-gradient(ellipse_at_top,rgba(245, 186, 39,0.02)_0%,transparent_65%,rgba(0,0,0,0.02)_100%)]"
        }`}
      />
    </div>
  );
}
