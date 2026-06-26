"use client";

import {
  getFlowerUnlockMessage,
  questions,
  QUESTIONS_STORAGE_KEY,
  type QuestionAnswers,
} from "@/content/questions";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function QuestionsFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionAnswers>({});
  const [draft, setDraft] = useState("");
  const [done, setDone] = useState(false);

  const current = questions[step];
  const isLast = step >= questions.length - 1;

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(QUESTIONS_STORAGE_KEY);
      if (saved) setAnswers(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, []);

  const saveAnswers = (next: QuestionAnswers) => {
    setAnswers(next);
    try {
      sessionStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(next));
      const flowerMsg = getFlowerUnlockMessage(next.flower);
      if (flowerMsg) {
        sessionStorage.setItem("shez-flower-unlock", flowerMsg);
      }
    } catch {
      /* ignore */
    }
  };

  const goNext = (value: string) => {
    if (!current) return;
    const next = { ...answers, [current.id]: value };
    saveAnswers(next);
    setDraft("");
    if (isLast) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (done) {
      setDone(false);
      return;
    }
    if (step > 0) setStep((s) => s - 1);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
      >
        <div className="liquid-glass max-w-md rounded-3xl p-10">
          <p className="bilbo-regular text-4xl text-shez-rose">Thank you</p>
          <p className="letter-serif mt-5 text-lg leading-relaxed text-white/85">
            Thank you for being you. Your answers are just for us — they stay here, on your device,
            private and safe.
          </p>
          <Link
            href="/"
            className="letter-serif mt-8 inline-block rounded-full bg-white/90 px-8 py-3 text-base font-medium text-black transition-colors hover:bg-white"
          >
            Go back home
          </Link>
        </div>
      </motion.div>
    );
  }

  if (!current) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="mb-10 flex gap-2">
        {questions.map((q, i) => (
          <span
            key={q.id}
            className={cn(
              "h-1.5 w-8 rounded-full transition-colors",
              i <= step ? "bg-shez-rose" : "bg-white/20",
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg"
        >
          <p className="letter-serif text-center text-2xl leading-snug text-white sm:text-3xl">
            {current.prompt}
          </p>

          {current.type === "text" && (
            <div className="mt-10">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={current.placeholder}
                rows={3}
                className="letter-serif w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-lg text-white placeholder:text-white/40 focus:border-shez-rose/50 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => draft.trim() && goNext(draft.trim())}
                disabled={!draft.trim()}
                className="mt-4 w-full rounded-full bg-white/90 py-3 text-sm font-medium text-black transition-colors hover:bg-white disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          )}

          {current.type === "choice" && current.options && (
            <div className="mt-10 flex flex-col gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => goNext(opt.id)}
                  className="liquid-glass rounded-2xl px-5 py-4 text-left text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white sm:text-base"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          {current.type === "flower" && current.flowers && (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {current.flowers.map((flower) => (
                <button
                  key={flower.id}
                  type="button"
                  onClick={() => goNext(flower.id)}
                  className="liquid-glass flex flex-col items-center gap-2 rounded-2xl px-4 py-6 transition-colors hover:bg-white/10"
                >
                  <span className="text-3xl">{flower.emoji}</span>
                  <span className="letter-serif text-sm text-white/80">{flower.label}</span>
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {(step > 0 || done) && (
        <button
          type="button"
          onClick={handleBack}
          className="letter-serif mt-10 text-sm text-white/50 transition-colors hover:text-white"
        >
          Back
        </button>
      )}
    </div>
  );
}
