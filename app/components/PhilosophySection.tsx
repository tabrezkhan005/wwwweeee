"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FLOWERS_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export function PhilosophySection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        src={FLOWERS_VIDEO_URL}
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-black/25" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-6xl text-5xl tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Innovation{" "}
          <span className="italic text-white/40" style={{ fontFamily: "'Instrument Serif', serif" }}>
            x
          </span>{" "}
          Vision
        </motion.h2>
      </div>
    </section>
  );
}
