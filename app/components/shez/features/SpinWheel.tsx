"use client";

import { useCallback, useRef, useState } from "react";
import {
  BAD_JOKES,
  SECRET_MESSAGES,
  SONG_RECOMMENDATIONS,
  WHEEL_MEMORY,
  WHEEL_PRIZES,
} from "@/content/features";

function pickExtra(prizeId: string): string {
  switch (prizeId) {
    case "joke":
      return BAD_JOKES[Math.floor(Math.random() * BAD_JOKES.length)];
    case "secret":
      return SECRET_MESSAGES[Math.floor(Math.random() * SECRET_MESSAGES.length)];
    case "song":
      return SONG_RECOMMENDATIONS[Math.floor(Math.random() * SONG_RECOMMENDATIONS.length)];
    case "memory":
      return WHEEL_MEMORY;
    default:
      return "";
  }
}

export function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<(typeof WHEEL_PRIZES)[number] | null>(null);
  const [extra, setExtra] = useState("");
  const spinCount = useRef(0);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    setExtra("");

    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const segment = 360 / WHEEL_PRIZES.length;
    const center = prizeIndex * segment + segment / 2;
    spinCount.current += 1;
    const nextRotation = 360 * (4 + spinCount.current) + (360 - center);

    setRotation(nextRotation);

    window.setTimeout(() => {
      const prize = WHEEL_PRIZES[prizeIndex];
      setResult(prize);
      setExtra(pickExtra(prize.id));
      setSpinning(false);
    }, 4200);
  }, [spinning]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 text-shez-rose">▼</div>
        <div
          className="relative h-72 w-72 rounded-full border-4 border-white/15 shadow-[0_0_60px_rgba(244,194,194,0.15)] transition-transform duration-[4200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] md:h-80 md:w-80"
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(${WHEEL_PRIZES.map((_, i) => {
              const c = i % 2 === 0 ? "rgba(244,194,194,0.14)" : "rgba(255,255,255,0.05)";
              const start = (100 / WHEEL_PRIZES.length) * i;
              const end = (100 / WHEEL_PRIZES.length) * (i + 1);
              return `${c} ${start}% ${end}%`;
            }).join(", ")})`,
          }}
        >
          {WHEEL_PRIZES.map((prize, i) => {
            const angle = (360 / WHEEL_PRIZES.length) * i;
            return (
              <div
                key={prize.id}
                className="absolute inset-0 z-10 flex origin-center items-start justify-center pt-8"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <span className="text-center text-lg" style={{ transform: `rotate(${-angle}deg)` }}>
                  {prize.emoji}
                </span>
              </div>
            );
          })}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl ring-2 ring-shez-rose/40">
              ♥
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={spin}
        disabled={spinning}
        className="mt-10 rounded-full border border-white/20 bg-white/8 px-10 py-3 font-sans text-sm font-medium tracking-wide text-white transition-colors hover:border-shez-rose/50 hover:bg-white/12 disabled:opacity-50"
      >
        {spinning ? "Spinning…" : "Spin for love"}
      </button>

      {result && (
        <div className="mt-10 w-full max-w-md border-t border-white/10 pt-8 text-center">
          <p className="text-4xl">{result.emoji}</p>
          <p className="story-display mt-4 text-2xl text-white md:text-3xl">{result.label}</p>
          {extra && (
            <p className="story-body mt-4 text-lg leading-relaxed text-white/75">{extra}</p>
          )}
        </div>
      )}
    </div>
  );
}
