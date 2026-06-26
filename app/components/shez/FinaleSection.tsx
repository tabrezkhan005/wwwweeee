"use client";

import { FINALE_VIDEO_URL, homeContent } from "@/content/home";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function FinaleSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [unlockLine, setUnlockLine] = useState<string | null>(null);

  useEffect(() => {
    try {
      const msg = sessionStorage.getItem("shez-flower-unlock");
      if (msg) setUnlockLine(msg);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section ref={ref} className="relative min-h-[80vh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={FINALE_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bilbo-regular text-5xl text-white drop-shadow-[0_2px_24px_rgba(0,0,0,1)] sm:text-6xl md:text-7xl"
        >
          {homeContent.finale.line}
        </motion.p>

        {unlockLine && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="letter-serif mt-6 max-w-md text-lg text-shez-rose"
          >
            {unlockLine}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center gap-2.5 font-sans text-sm font-bold tracking-[0.4em] text-white"
        >
          <span>{homeContent.finale.name}</span>
          <span aria-hidden>♥</span>
        </motion.p>
      </div>
    </section>
  );
}
