"use client";

import { APOLOGY_RESPONSES } from "@/content/features";
import { useMemo, useState } from "react";

export function RateApology() {
  const [value, setValue] = useState(50);
  const [locked, setLocked] = useState(false);

  const response = useMemo(
    () => APOLOGY_RESPONSES.find((r) => value <= r.max)?.text ?? APOLOGY_RESPONSES.at(-1)!.text,
    [value],
  );

  return (
    <div className="mx-auto max-w-lg">
      <p className="story-body mb-10 text-center text-lg text-white/75">
        Slide with your heart. I want to know how my apology feels to you.
      </p>

      <div className="flex items-center justify-between font-sans text-2xl">
        <span title="Worst">😐</span>
        <span title="Best">❤️</span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
          setLocked(false);
        }}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-shez-rose"
      />

      <p className="mt-2 text-center font-sans text-xs tracking-widest text-white/40">
        {value} / 100
      </p>

      <button
        type="button"
        onClick={() => setLocked(true)}
        className="mt-8 w-full rounded-full border border-white/15 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-shez-rose/40"
      >
        Lock in my verdict
      </button>

      {locked && (
        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="story-display text-2xl text-white md:text-3xl">{response}</p>
        </div>
      )}
    </div>
  );
}
