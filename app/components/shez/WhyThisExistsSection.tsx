"use client";

import { homeContent } from "@/content/home";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhyThisExistsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-black px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,194,194,0.06)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="letter-serif text-xs font-medium tracking-[0.3em] text-shez-rose uppercase"
        >
          {homeContent.why.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bilbo-regular mt-5 text-4xl text-white sm:text-5xl md:text-6xl"
        >
          {homeContent.why.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="letter-serif mt-8 text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          {homeContent.why.body}
        </motion.p>
      </div>
    </section>
  );
}
