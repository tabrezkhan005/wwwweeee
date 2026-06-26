"use client";

import { homeContent } from "@/content/home";
import { motion } from "framer-motion";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

export function WelcomeSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <video
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bilbo-regular text-2xl text-shez-rose sm:text-3xl"
        >
          {homeContent.welcome.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="bilbo-regular mt-4 text-5xl leading-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl"
        >
          {homeContent.welcome.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="letter-serif mt-6 text-lg text-white/85 sm:text-xl"
        >
          {homeContent.welcome.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
