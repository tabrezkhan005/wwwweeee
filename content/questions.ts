export type QuestionType = "text" | "choice" | "flower";

export type Question = {
  id: string;
  type: QuestionType;
  prompt: string;
  placeholder?: string;
  options?: { id: string; label: string }[];
  flowers?: { id: string; label: string; emoji: string }[];
};

export const questions: Question[] = [
  {
    id: "smile",
    type: "text",
    prompt: "What's one small thing that made you smile lately?",
    placeholder: "Tell me anything — even something tiny…",
  },
  {
    id: "flower",
    type: "flower",
    prompt: "Pick a flower that feels like today.",
    flowers: [
      { id: "rose", label: "Rose", emoji: "🌹" },
      { id: "daisy", label: "Daisy", emoji: "🌼" },
      { id: "sunflower", label: "Sunflower", emoji: "🌻" },
      { id: "lavender", label: "Lavender", emoji: "💜" },
    ],
  },
  {
    id: "loved",
    type: "choice",
    prompt: "When do you feel most loved?",
    options: [
      { id: "words", label: "When someone says what they feel" },
      { id: "time", label: "When someone makes time for me" },
      { id: "touch", label: "When someone is close" },
      { id: "surprise", label: "When someone remembers small things" },
    ],
  },
  {
    id: "anywhere",
    type: "text",
    prompt: "If we could be anywhere right now, where?",
    placeholder: "Anywhere at all…",
  },
];

export const QUESTIONS_STORAGE_KEY = "shez-questions-answers";

export type QuestionAnswers = Record<string, string>;

export function getFlowerUnlockMessage(flowerId: string | undefined): string | null {
  if (!flowerId) return null;
  const messages: Record<string, string> = {
    rose: "You picked a rose — passionate, beautiful, unmistakably you.",
    daisy: "You picked a daisy — soft, bright, easy to love. Like you.",
    sunflower: "You picked a sunflower — you turn toward the light. I notice.",
    lavender: "You picked lavender — calm, gentle, a little magic. That's you.",
  };
  return messages[flowerId] ?? null;
}
