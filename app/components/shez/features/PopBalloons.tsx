"use client";

import { BALLOON_ITEMS } from "@/content/features";
import { useMemo, useState } from "react";

const COLORS = ["#f4c2c2", "#e8b4b8", "#ffb7c5", "#ffc8dd", "#f8bbd9"];

export function PopBalloons() {
  const balloons = useMemo(
    () =>
      BALLOON_ITEMS.map((item, i) => ({
        item,
        id: i,
        left: 8 + ((i * 17) % 75),
        top: 10 + ((i * 23) % 55),
        color: COLORS[i % COLORS.length],
        delay: i * 0.08,
      })),
    [],
  );

  const [popped, setPopped] = useState<Set<number>>(new Set());
  const [active, setActive] = useState<number | null>(null);

  const pop = (id: number) => {
    setPopped((prev) => new Set(prev).add(id));
    setActive(id);
  };

  return (
    <div>
      <p className="story-body mb-8 text-center text-lg text-white/75">
        Tap a balloon — each one holds something I adore about you.
      </p>

      <div className="relative mx-auto min-h-[400px] w-full max-w-2xl rounded-2xl border border-white/10 bg-white/2">
        {balloons.map((b) =>
          popped.has(b.id) ? null : (
            <button
              key={b.id}
              type="button"
              onClick={() => pop(b.id)}
              className="absolute transition-transform hover:scale-110"
              style={{ left: `${b.left}%`, top: `${b.top}%` }}
              aria-label="Pop balloon"
            >
              <span
                className="block h-14 w-11 rounded-[50%] shadow-md md:h-16 md:w-12"
                style={{ backgroundColor: b.color }}
              />
            </button>
          ),
        )}

        {active !== null && popped.has(active) && (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="story-display max-w-sm text-center text-2xl leading-snug text-white md:text-3xl">
              {balloons[active].item.text}
            </p>
          </div>
        )}
      </div>

      <p className="mt-6 text-center font-sans text-xs tracking-widest text-white/35 uppercase">
        {popped.size} of {balloons.length} opened
      </p>
    </div>
  );
}
