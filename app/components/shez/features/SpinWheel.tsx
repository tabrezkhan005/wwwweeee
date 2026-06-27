"use client";

import { WHEEL_PRIZES, WHEEL_SEGMENT_COUNT, type WheelPrize } from "@/content/features";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SEGMENT = 360 / WHEEL_SEGMENT_COUNT;
const SPIN_MS = 4500;
const WHEEL_SIZE = 320;
const CENTER = WHEEL_SIZE / 2;
const OUTER_R = CENTER - 6;
const INNER_R = 52;

function polarToCartesian(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function wedgePath(index: number) {
  const start = index * SEGMENT - SEGMENT / 2;
  const end = start + SEGMENT;
  const outerStart = polarToCartesian(start, OUTER_R);
  const outerEnd = polarToCartesian(end, OUTER_R);
  const innerStart = polarToCartesian(start, INNER_R);
  const innerEnd = polarToCartesian(end, INNER_R);
  const largeArc = SEGMENT > 180 ? 1 : 0;

  return [
    `M ${innerStart.x} ${innerStart.y}`,
    `L ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

function WheelPrizeModal({ prize, onClose }: { prize: WheelPrize; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl p-8 sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-white/15 bg-white/5 p-2 text-white/60 transition-colors hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/8 ring-1 ring-white/10">
            <img src={prize.icon} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-shez-rose uppercase">You spun</p>
            <h2 className="story-display mt-1 text-2xl text-white sm:text-3xl">{prize.title}</h2>
          </div>
        </div>

        {prize.image && (
          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              src={prize.image}
              alt="A memory of us together"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        )}

        <p className="letter-body mt-6 text-base leading-relaxed text-white/82 sm:text-lg">
          {prize.message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-full border border-white/15 py-3 font-sans text-sm tracking-wide text-white/75 transition-colors hover:border-shez-rose/40 hover:text-white"
        >
          Close ♥
        </button>
      </motion.div>
    </motion.div>
  );
}

export function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<WheelPrize | null>(null);
  const spinCount = useRef(0);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const segmentCenter = prizeIndex * SEGMENT;
    spinCount.current += 1;
    const nextRotation = 360 * (5 + spinCount.current) + (360 - segmentCenter);

    setRotation(nextRotation);

    window.setTimeout(() => {
      setResult(WHEEL_PRIZES[prizeIndex]);
      setSpinning(false);
    }, SPIN_MS);
  }, [spinning]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-[-16px] rounded-full bg-[radial-gradient(circle,rgba(244,194,194,0.2)_0%,transparent_68%)] blur-md" />
          <div className="absolute inset-[-6px] rounded-full border border-shez-rose/25" />

          <div className="absolute -top-6 left-1/2 z-30 -translate-x-1/2">
            <div className="h-0 w-0 border-x-[14px] border-x-transparent border-t-[26px] border-t-shez-rose drop-shadow-[0_4px_14px_rgba(244,194,194,0.5)]" />
          </div>

          <div
            className="relative transition-transform ease-[cubic-bezier(0.12,0.85,0.22,1)]"
            style={{
              width: WHEEL_SIZE,
              height: WHEEL_SIZE,
              transform: `rotate(${rotation}deg)`,
              transitionDuration: `${SPIN_MS}ms`,
            }}
          >
            <svg
              width={WHEEL_SIZE}
              height={WHEEL_SIZE}
              viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
              className="drop-shadow-[0_0_40px_rgba(244,194,194,0.12)]"
            >
              <defs>
                <clipPath id="wheel-clip">
                  <circle cx={CENTER} cy={CENTER} r={OUTER_R} />
                </clipPath>
              </defs>

              <g clipPath="url(#wheel-clip)">
                {WHEEL_PRIZES.map((_, i) => (
                  <path
                    key={`wedge-${i}`}
                    d={wedgePath(i)}
                    fill={i % 2 === 0 ? "rgba(244,194,194,0.14)" : "rgba(255,255,255,0.06)"}
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                ))}
              </g>

              <circle
                cx={CENTER}
                cy={CENTER}
                r={OUTER_R}
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="3"
              />
            </svg>

            {WHEEL_PRIZES.map((prize, i) => {
              const angle = i * SEGMENT;
              const iconPos = polarToCartesian(angle, (OUTER_R + INNER_R) / 2);
              return (
                <div
                  key={prize.id}
                  className="absolute z-20 flex h-14 w-14 items-center justify-center transition-transform ease-[cubic-bezier(0.12,0.85,0.22,1)]"
                  style={{
                    left: iconPos.x,
                    top: iconPos.y,
                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                    transitionDuration: `${SPIN_MS}ms`,
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-black/50 ring-1 ring-white/20 backdrop-blur-sm">
                    <img
                      src={prize.icon}
                      alt={prize.label}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ width: WHEEL_SIZE, height: WHEEL_SIZE }}
          >
            <div className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-linear-to-br from-[#1a1010] to-black text-2xl shadow-[0_0_24px_rgba(0,0,0,0.9)] ring-2 ring-shez-rose/55">
              ♥
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          className="mt-12 rounded-full border border-white/20 bg-white/8 px-12 py-3.5 font-sans text-sm font-medium tracking-[0.12em] text-white uppercase transition-all hover:border-shez-rose/50 hover:bg-white/12 hover:shadow-[0_0_32px_rgba(244,194,194,0.15)] disabled:opacity-50"
        >
          {spinning ? "Spinning…" : "Spin for love"}
        </button>

        <p className="mt-6 max-w-md text-center font-sans text-xs leading-relaxed tracking-wide text-white/40">
          6 surprises — mountain, flowers, chocolate, photos, beach, aurora. Each spin opens a promise for you.
        </p>
      </div>

      <AnimatePresence>
        {result && <WheelPrizeModal prize={result} onClose={() => setResult(null)} />}
      </AnimatePresence>
    </>
  );
}
