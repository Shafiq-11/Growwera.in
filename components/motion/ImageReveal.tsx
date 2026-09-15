"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ImageReveal({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: ImageRevealProps) {
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
