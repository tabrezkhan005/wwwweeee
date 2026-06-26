"use client";

import { useState } from "react";

type Lantern = { id: number; text: string };

export function MakeAWish() {
  const [wish, setWish] = useState("");
  const [lanterns, setLanterns] = useState<Lantern[]>([]);

  const release = () => {
    const trimmed = wish.trim();
    if (!trimmed) return;
    setLanterns((prev) => [...prev, { id: Date.now(), text: trimmed }]);
    setWish("");
  };

  return (
    <div className="relative">
      <p className="story-body mb-8 text-lg text-white/75">
        Close your eyes for a moment. Type your wish — I will send it into the sky for you.
      </p>

      <div className="flex gap-3">
        <input
          type="text"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && release()}
          placeholder="Make a wish…"
          className="story-body flex-1 rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-white placeholder:text-white/30 focus:border-shez-rose/40 focus:outline-none"
        />
        <button
          type="button"
          onClick={release}
          className="shrink-0 rounded-full bg-white px-6 py-3 font-sans text-sm font-medium text-black hover:bg-white/90"
        >
          Release
        </button>
      </div>

      <div className="pointer-events-none relative mt-12 h-[min(55vh,420px)] overflow-hidden rounded-2xl border border-white/8 bg-linear-to-t from-[#0a0a12] via-[#0d0d18] to-black">
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-px w-px rounded-full bg-white"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                opacity: 0.3 + (i % 5) * 0.1,
              }}
            />
          ))}
        </div>

        {lanterns.map((lantern, i) => (
          <div
            key={lantern.id}
            className="lantern-rise absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              animationDelay: `${i * 0.15}s`,
              left: `${20 + (i * 13) % 60}%`,
            }}
          >
            <div className="relative flex flex-col items-center">
              <div className="min-w-[120px] max-w-[200px] rounded-lg border border-shez-rose/30 bg-shez-rose/20 px-4 py-2 text-center shadow-[0_0_30px_rgba(244,194,194,0.35)]">
                <p className="story-body text-sm leading-snug text-white">{lantern.text}</p>
              </div>
              <div className="h-3 w-16 rounded-b-full bg-shez-rose/50" />
              <div className="h-8 w-px bg-shez-rose/40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
