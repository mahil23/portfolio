"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? {} : { opacity: 0, y: 16 },
    animate: reduceMotion ? {} : { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="flex min-h-[60vh] w-full max-w-5xl flex-col justify-center py-20">
      <motion.h1
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="max-w-4xl text-4xl font-medium leading-tight text-foreground md:text-6xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ duration: 0.32, ease: "easeOut", delay: 0.08 }}
        className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75 md:text-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ duration: 0.32, ease: "easeOut", delay: 0.16 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/20"
        >
          View Projects
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.05]"
        >
          GitHub
        </a>
        <a
          href="https://docs.google.com/document/d/1F0RV-yhNjS7pFXjR1syqiNbnl1zJJMTEWV5-cJPtqPA/preview"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.02]"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
