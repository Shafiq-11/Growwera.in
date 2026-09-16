"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Search, BarChart2, Cpu, ArrowUpRight } from "lucide-react";

interface NodeData {
  id: string;
  number: string;
  title: string;
  tag: string;
  href: string;
  icon: React.ReactNode;
  accentColor: string;
  x: number;
  y: number;
  cycle: number;
}

const nodes: NodeData[] = [
  {
    id: "web",
    number: "01",
    title: "Web Design & Dev",
    tag: "Conversion-ready",
    href: "/services/web-development",
    icon: <Monitor size={16} />,
    accentColor: "var(--color-accent)",
    x: 65,
    y: 200,
    cycle: 4.8,
  },
  {
    id: "seo",
    number: "02",
    title: "Search (SEO)",
    tag: "Google Discovery",
    href: "/services/seo",
    icon: <Search size={16} />,
    accentColor: "#F59E0B",
    x: 220,
    y: 70,
    cycle: 5.6,
  },
  {
    id: "marketing",
    number: "03",
    title: "Digital Marketing",
    tag: "Targeted Campaigns",
    href: "/services/digital-marketing",
    icon: <BarChart2 size={16} />,
    accentColor: "#EC4899",
    x: 375,
    y: 200,
    cycle: 6.2,
  },
  {
    id: "ai",
    number: "04",
    title: "AI & Automation",
    tag: "Smart Workflows",
    href: "/services/ai-automation",
    icon: <Cpu size={16} />,
    accentColor: "#8B5CF6",
    x: 220,
    y: 330,
    cycle: 5.2,
  },
];

export default function ServicesEcosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[420px] sm:h-[450px] flex items-center justify-center select-none">
      {/* Background Ambience Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-3xl" />
      </div>

      {/* SVG Connecting Lines between Center and Surrounding Service Nodes */}
      <svg
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        {/* Lines from center (220, 200) to each node */}
        {nodes.map((node) => {
          const isHovered = hoveredId === node.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
            <line
              key={`line-${node.id}`}
              x1="220"
              y1="200"
              x2={node.x}
              y2={node.y}
              stroke={isHovered ? "var(--color-accent)" : "var(--color-border)"}
              strokeWidth={isHovered ? "2.5" : "1.2"}
              strokeDasharray={isHovered ? "none" : "3 3"}
              strokeOpacity={isDimmed ? "0.2" : "1"}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* CENTER NODE: GROWWERA (Stable anchor) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="px-5 py-3 rounded-2xl bg-[var(--color-surface-elevated)] border-2 border-[var(--color-border-strong)] shadow-lg text-center min-w-[130px]">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-foreground-muted)] font-bold">
              GROWWERA
            </span>
          </div>
          <span className="text-xs font-bold text-[var(--color-foreground)] tracking-tight">
            Digital Ecosystem
          </span>
        </div>
      </div>

      {/* SURROUNDING SERVICE NODES (Floating independently) */}
      {nodes.map((node) => {
        const isHovered = hoveredId === node.id;
        const isDimmed = hoveredId !== null && !isHovered;

        // Positioning CSS offsets
        let posClasses = "";
        if (node.id === "seo") posClasses = "top-4 left-1/2 -translate-x-1/2";
        if (node.id === "web") posClasses = "top-1/2 -translate-y-1/2 left-2 sm:left-4";
        if (node.id === "marketing") posClasses = "top-1/2 -translate-y-1/2 right-2 sm:right-4";
        if (node.id === "ai") posClasses = "bottom-4 left-1/2 -translate-x-1/2";

        return (
          <motion.div
            key={node.id}
            animate={{
              y: node.id === "seo" || node.id === "ai" ? [-5, 5, -5] : [5, -6, 5],
              rotate: node.id === "web" ? [-1, 1, -1] : node.id === "marketing" ? [1, -1, 1] : 0,
            }}
            transition={{
              duration: node.cycle,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${posClasses} z-30 transition-opacity duration-300 ${
              isDimmed ? "opacity-35" : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={node.href} className="block group">
              <div
                className={`p-3 sm:p-3.5 rounded-xl border bg-[var(--color-surface)] shadow-md transition-all duration-300 w-36 sm:w-40 ${
                  isHovered
                    ? "border-[var(--color-accent)] shadow-[0_0_24px_rgba(245, 186, 39,0.28)] scale-105"
                    : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${node.accentColor}18`, color: node.accentColor }}
                  >
                    {node.icon}
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] font-bold">
                    {node.number}
                  </span>
                </div>
                <p className="text-xs font-bold text-[var(--color-foreground)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {node.title}
                </p>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-[var(--color-border)] text-[9px] font-mono text-[var(--color-foreground-muted)]">
                  <span>{node.tag}</span>
                  <ArrowUpRight size={11} className="text-[var(--color-accent)]" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
