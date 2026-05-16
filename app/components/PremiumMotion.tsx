"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function MotionPage({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      className={className}
      initial={false}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.main>
  );
}

export function AnimatedSection({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.section>
  );
}

export function GlowCard({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`glow-card ${className || ""}`}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
      transition={{ duration: 0.28, ease }}
    >
      {children}
    </motion.article>
  );
}

export function PremiumButton({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`magnetic-wrap ${className || ""}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease }}
    >
      {children}
    </motion.span>
  );
}
