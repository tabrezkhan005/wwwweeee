"use client";

import { homeContent } from "@/content/home";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function GardenTeaserSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { garden } = homeContent;

  return (
    <section ref={ref} className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="letter-serif text-xs font-medium tracking-[0.3em] text-shez-rose uppercase"
        >
          {garden.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="bilbo-regular mt-4 text-4xl text-white sm:text-5xl"
        >
          {garden.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[garden.letters].map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={card.href}
                className="liquid-glass group block rounded-3xl p-8 text-left transition-colors hover:bg-white/10"
              >
                <span className="text-3xl">{i === 0 ? "💌" : "🌷"}</span>
                <h3 className="bilbo-regular mt-4 text-3xl text-white">{card.title}</h3>
                <p className="letter-serif mt-3 text-base text-white/70">{card.description}</p>
                <span className="letter-serif mt-6 inline-block text-sm text-shez-rose group-hover:text-white">
                  Enter →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
