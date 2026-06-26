"use client";

import { homeContent } from "@/content/home";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PromiseSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { promise } = homeContent;

  return (
    <section ref={ref} className="relative bg-black px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,180,184,0.08)_0%,transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="letter-serif text-xs font-medium tracking-[0.3em] text-shez-rose uppercase"
        >
          {promise.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="bilbo-regular mt-5 text-4xl text-white sm:text-5xl md:text-6xl"
        >
          {promise.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="letter-serif mt-8 text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          {promise.body}
        </motion.p>
      </div>
    </section>
  );
}
