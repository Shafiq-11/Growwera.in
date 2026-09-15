"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DrawLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  direction?: "horizontal" | "vertical";
  delay?: number;
}

export default function DrawLine({
  className,
  color = "#0F62FE",
  strokeWidth = 2,
  direction = "horizontal",
  delay = 0.2,
}: DrawLineProps) {
  if (direction === "vertical") {
    return (
      <svg
        viewBox="0 0 4 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-1 h-28 overflow-visible", className)}
        aria-hidden="true"
      >
        <motion.path
          d="M2 0V120"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 160 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-2 overflow-visible", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M2 4C40 2 120 2 158 5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      />
    </svg>
  );
}
