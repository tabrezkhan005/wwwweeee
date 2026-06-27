"use client";

import { LoveBalloon } from "@/components/ui/love-balloon";
import { BALLOON_LOVE_MESSAGES } from "@/content/features";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, type MouseEvent } from "react";

type BalloonState = {
  id: number;
  message: string;
  left: number;
  top: number;
  colorIndex: number;
  delay: number;
};

function burstAt(x: number, y: number, color: string) {
  confetti({
    particleCount: 55,
    spread: 72,
    origin: { x, y },
    colors: [color, "#ffffff", "#f4c2c2", "#ffc8dd"],
    startVelocity: 28,
    gravity: 0.9,
    scalar: 0.9,
    ticks: 120,
  });
}

export function PopBalloons() {
  const balloons = useMemo<BalloonState[]>(
    () =>
      BALLOON_LOVE_MESSAGES.map((message, i) => ({
        id: i,
        message,
        left: 6 + ((i * 19) % 72),
        top: 8 + ((i * 13) % 58),
        colorIndex: i,
        delay: i * 0.35,
      })),
    [],
  );

  const [popped, setPopped] = useState<Set<number>>(new Set());
  const [popping, setPopping] = useState<Set<number>>(new Set());
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  const pop = (balloon: BalloonState, event: MouseEvent<HTMLButtonElement>) => {
    if (popped.has(balloon.id) || popping.has(balloon.id)) return;

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    burstAt(x, y, "#f4c2c2");

    setPopping((prev) => new Set(prev).add(balloon.id));
    setActiveMessage(balloon.message);

    window.setTimeout(() => {
      setPopped((prev) => new Set(prev).add(balloon.id));
      setPopping((prev) => {
        const next = new Set(prev);
        next.delete(balloon.id);
        return next;
      });
    }, 350);
  };

  return (
    <div>
      <p className="story-body mb-8 text-center text-lg text-white/75 md:text-xl">
        Tap a balloon — each pop holds something sweet I needed you to hear.
      </p>

      <div className="relative mx-auto min-h-[440px] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/4 to-transparent md:min-h-[480px]">
        {balloons.map((b) =>
          popped.has(b.id) ? null : (
            <LoveBalloon
              key={b.id}
              colorIndex={b.colorIndex}
              popping={popping.has(b.id)}
              onPop={(e) => pop(b, e)}
              delay={b.delay}
              style={{ left: `${b.left}%`, top: `${b.top}%` }}
            />
          ),
        )}

        {popped.size === balloons.length && (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="bilbo-regular text-center text-4xl text-shez-rose md:text-5xl">
              All my love, popped open for you ♥
            </p>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeMessage && (
          <motion.div
            key={activeMessage}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass mx-auto mt-8 max-w-lg rounded-2xl px-8 py-7 text-center"
          >
            <p className="font-sans text-[10px] tracking-[0.3em] text-shez-rose uppercase">For you</p>
            <p className="story-display mt-3 text-2xl leading-snug text-white md:text-3xl">
              {activeMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-center font-sans text-xs tracking-widest text-white/35 uppercase">
        {popped.size} of {balloons.length} popped
      </p>
    </div>
  );
}
