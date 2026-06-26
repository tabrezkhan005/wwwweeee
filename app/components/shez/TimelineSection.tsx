"use client";

import { homeContent } from "@/content/home";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { timeline } = homeContent;

  return (
    <section ref={ref} className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="letter-serif text-center text-xs font-medium tracking-[0.3em] text-shez-rose uppercase"
        >
          {timeline.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="bilbo-regular mt-4 text-center text-4xl text-white sm:text-5xl"
        >
          {timeline.title}
        </motion.h2>

        <div className="mt-14 space-y-6">
          {timeline.moments.map((moment, i) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="liquid-glass rounded-2xl p-6 sm:p-8"
            >
              <h3 className="bilbo-regular text-2xl text-shez-rose sm:text-3xl">{moment.title}</h3>
              <p className="letter-serif mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
                {moment.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
