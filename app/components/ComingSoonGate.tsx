"use client";

import { type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LAUNCH_DATE = new Date("2026-06-23T17:00:00");

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260520_133010_cb9c806d-bc9d-47f1-ac4c-b1759134ec8b.mp4";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function getTimeLeft(): TimeLeft {
  const total = LAUNCH_DATE.getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    total,
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex w-[4.5rem] flex-col items-center gap-2 sm:w-20">
      <span className="font-sans text-4xl font-bold leading-none tracking-tight text-white tabular-nums drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-sans text-[10px] font-semibold tracking-[0.22em] text-white uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
        {label}
      </span>
    </div>
  );
}

function ComingSoonScreen() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bilbo-regular text-5xl leading-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,1)] sm:text-6xl md:text-7xl"
        >
          I made this for you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bilbo-regular mt-4 text-2xl text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] sm:text-3xl"
        >
          See you on 23 · 06 · 2026 at 5 PM
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex w-full max-w-sm items-start justify-between sm:mt-14"
        >
          {timeLeft ? (
            <>
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </>
          ) : (
            <p className="font-sans w-full text-center text-sm font-medium text-white">…</p>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex items-center gap-2 font-sans text-sm font-bold tracking-[0.4em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] sm:mt-16"
        >
          <span>SHEZ</span>
          <span className="tracking-normal text-base" aria-hidden>
            ♥
          </span>
        </motion.p>
      </div>
    </div>
  );
}

export function ComingSoonGate({ children }: { children: ReactNode }) {
  const bypassGate = process.env.NODE_ENV === "development";
  const [isLive, setIsLive] = useState(bypassGate);
  const [ready, setReady] = useState(bypassGate);

  useEffect(() => {
    if (bypassGate) return;

    setIsLive(getTimeLeft().total <= 0);
    setReady(true);
    const interval = window.setInterval(() => {
      setIsLive(getTimeLeft().total <= 0);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [bypassGate]);

  if (!ready) {
    return <div className="min-h-screen bg-black" />;
  }

  if (bypassGate) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLive && (
          <motion.div
            key="coming-soon"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <ComingSoonScreen />
          </motion.div>
        )}
      </AnimatePresence>
      {isLive && children}
    </>
  );
}
