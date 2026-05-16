"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="floating-background" aria-hidden="true">
      <div className="noise-layer" />
      <div className="wave-grid" />
      <motion.div
        className="light-field field-a"
        animate={reduceMotion ? undefined : { x: [0, 26, -8, 0], y: [0, -18, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="light-field field-b"
        animate={reduceMotion ? undefined : { x: [0, -22, 14, 0], y: [0, 16, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="current-line"
        animate={reduceMotion ? undefined : { opacity: [0.22, 0.5, 0.22], y: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
