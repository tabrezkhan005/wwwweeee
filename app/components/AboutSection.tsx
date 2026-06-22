"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-black px-6 pt-32 pb-10 md:pt-44 md:pb-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-7 text-sm uppercase tracking-widest text-white/40"
        >
          About Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Pioneering{" "}
          <span className="italic text-white/60" style={{ fontFamily: "'Instrument Serif', serif" }}>
            ideas
          </span>{" "}
          for
          <br className="hidden md:block" />
          <span className="italic text-white/60" style={{ fontFamily: "'Instrument Serif', serif" }}>
            {" "}
            minds that create, build, and inspire.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
