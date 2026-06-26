"use client";

import { TELL_ME_QUESTIONS, TELL_ME_STORAGE_KEY } from "@/content/features";
import { useEffect, useState } from "react";

type Answers = Record<string, string>;

export function TellMeSomething() {
  const [answers, setAnswers] = useState<Answers>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TELL_ME_STORAGE_KEY);
      if (raw) setAnswers(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const update = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setSaved(false);
  };

  const save = () => {
    try {
      localStorage.setItem(TELL_ME_STORAGE_KEY, JSON.stringify(answers));
      setSaved(true);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="space-y-8">
      <p className="story-body text-lg leading-relaxed text-white/75">
        Your words are safe here — just for us, on your device, held with love.
      </p>

      {TELL_ME_QUESTIONS.map((q) => (
        <label key={q.id} className="block">
          <span className="story-display block text-xl text-white md:text-2xl">{q.label}</span>
          <textarea
            value={answers[q.id] ?? ""}
            onChange={(e) => update(q.id, e.target.value)}
            rows={3}
            className="story-body mt-3 w-full resize-none rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-base leading-relaxed text-white placeholder:text-white/30 focus:border-shez-rose/40 focus:outline-none"
            placeholder="Type here…"
          />
        </label>
      ))}

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <button
          type="button"
          onClick={save}
          className="rounded-full bg-white px-8 py-3 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
        >
          Save for me
        </button>
        {saved && (
          <p className="font-sans text-sm text-shez-rose">Saved with love.</p>
        )}
      </div>
    </div>
  );
}
