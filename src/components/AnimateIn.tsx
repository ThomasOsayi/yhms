"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export default function AnimateIn({
  children,
  delay = 0,
  y = 40,
  x = 0,
  duration = 0.7,
  className = "",
  once = true,
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}