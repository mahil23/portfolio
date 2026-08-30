"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: isInView ? 1 : 0, y: isInView ? 0 : 16 };

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={reveal}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        ease: "easeOut",
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
