"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "up" = fade + slide up (default), "scale" = fade + scale in */
  variant?: "up" | "scale";
}

/** Scroll-triggered fade/slide-in wrapper used throughout the page for section reveals. */
export default function Reveal({ children, delay = 0, className, variant = "up" }: RevealProps) {
  const initial = variant === "scale" ? { opacity: 0, scale: 0.94 } : { opacity: 0, y: 28 };
  const animate = variant === "scale" ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
