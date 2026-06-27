"use client";

import { APOLOGY_RATING_LABELS, APOLOGY_RESPONSES } from "@/content/features";
import { submitWeb3Form } from "@/lib/web3forms";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

function getRatingLabel(value: number) {
  return APOLOGY_RATING_LABELS.find((r) => value <= r.max) ?? APOLOGY_RATING_LABELS.at(-1)!;
}

export function RateApology() {
  const [value, setValue] = useState(50);
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const ratingLabel = getRatingLabel(value);
  const response = useMemo(
    () => APOLOGY_RESPONSES.find((r) => value <= r.max)?.text ?? APOLOGY_RESPONSES.at(-1)!.text,
    [value],
  );

  const submit = async () => {
    setSending(true);
    setError("");

    const message = [
      `Apology rating: ${value} / 100`,
      `How it felt: ${ratingLabel.label} ${ratingLabel.emoji}`,
      "",
      "My response to you:",
      response,
      note.trim() ? `\n──────────────────\n\nShe also wrote:\n\n${note.trim()}` : "",
    ].join("\n");

    const result = await submitWeb3Form({
      subject: "Shez rated my apology",
      message,
    });

    setSending(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  };

  const fillPercent = `${value}%`;

  return (
    <div className="mx-auto max-w-lg">
      <p className="story-body mb-10 text-center text-lg leading-relaxed text-white/75 md:text-xl">
        Slide with your heart — tell me honestly if I said it well enough.
      </p>

      <div className="liquid-glass rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase">How it felt</p>
            <p className="bilbo-regular mt-2 text-3xl text-white sm:text-4xl">
              {ratingLabel.emoji} {ratingLabel.label}
            </p>
          </div>
          <p className="font-sans text-3xl font-bold tabular-nums text-shez-rose">{value}</p>
        </div>

        <div className="relative py-2">
          <div className="absolute top-1/2 right-0 left-0 h-3 -translate-y-1/2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-white/20 via-shez-rose/70 to-shez-rose"
              animate={{ width: fillPercent }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => {
              setValue(Number(e.target.value));
              setSubmitted(false);
              setError("");
            }}
            className="apology-slider relative z-10 w-full cursor-pointer appearance-none bg-transparent"
            aria-label="Rate my apology from 0 to 100"
          />

          <div className="mt-4 flex justify-between font-sans text-[11px] tracking-wide text-white/35 uppercase">
            <span>Not enough</span>
            <span>Perfect</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={response}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="story-body mt-8 border-t border-white/10 pt-6 text-center text-lg leading-relaxed text-white/82"
          >
            {response}
          </motion.p>
        </AnimatePresence>

        <label className="mt-8 block">
          <span className="story-display block text-lg text-white/90">
            Anything else you want me to know?
          </span>
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              setSubmitted(false);
            }}
            rows={3}
            disabled={sending || submitted}
            placeholder="Optional — say it in your own words…"
            className="story-body mt-3 w-full resize-none rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-shez-rose/40 focus:outline-none disabled:opacity-60"
          />
        </label>

        <button
          type="button"
          onClick={submit}
          disabled={sending || submitted}
          className="mt-6 w-full rounded-full bg-white py-3.5 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : submitted ? "Sent — thank you ♥" : "Send my verdict"}
        </button>

        {error && <p className="mt-4 text-center font-sans text-sm text-red-300/90">{error}</p>}
        {submitted && (
          <p className="mt-4 text-center font-sans text-sm text-shez-rose">
            I got your answer. That means everything to me.
          </p>
        )}
      </div>
    </div>
  );
}
