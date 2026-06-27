"use client";

import { TELL_ME_QUESTIONS } from "@/content/features";
import { useState } from "react";

type Answers = Record<string, string>;

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function TellMeSomething() {
  const [answers, setAnswers] = useState<Answers>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setSent(false);
    setError("");
  };

  const send = async () => {
    if (!ACCESS_KEY) {
      setError("Email is not configured yet. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    setSending(true);
    setError("");
    setSent(false);

    const message = TELL_ME_QUESTIONS.map((q) => {
      const answer = answers[q.id]?.trim() || "(no answer)";
      return `${q.label}\n\n${answer}`;
    }).join("\n\n──────────────────\n\n");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Shez answered — Tell me what's on your mind",
          name: "Shez",
          message,
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message ?? "Could not send email. Please try again.");
        return;
      }

      setSent(true);
      setAnswers({});
    } catch {
      setError("Could not send right now. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-8">
      <p className="story-body text-lg leading-relaxed text-white/75">
        Write whatever is on your heart — when you send this, your answers come straight to me by email.
      </p>

      {TELL_ME_QUESTIONS.map((q) => (
        <label key={q.id} className="block">
          <span className="story-display block text-xl text-white md:text-2xl">{q.label}</span>
          <textarea
            value={answers[q.id] ?? ""}
            onChange={(e) => update(q.id, e.target.value)}
            rows={3}
            disabled={sending}
            className="story-body mt-3 w-full resize-none rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-base leading-relaxed text-white placeholder:text-white/30 focus:border-shez-rose/40 focus:outline-none disabled:opacity-60"
            placeholder="Type here…"
          />
        </label>
      ))}

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <button
          type="button"
          onClick={send}
          disabled={sending}
          className="rounded-full bg-white px-8 py-3 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send to me"}
        </button>
        {sent && (
          <p className="font-sans text-sm text-shez-rose">Sent with love — I got your words.</p>
        )}
        {error && <p className="font-sans text-sm text-red-300/90">{error}</p>}
      </div>
    </div>
  );
}
