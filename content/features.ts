export const WHEEL_PRIZES = [
  { id: "hug", label: "One virtual hug", emoji: "❤️" },
  { id: "rose", label: "One rose for you", emoji: "🌹" },
  { id: "song", label: "A song that reminds me of you", emoji: "🎵" },
  { id: "joke", label: "A silly love joke", emoji: "😂" },
  { id: "secret", label: "A secret from my heart", emoji: "💌" },
  { id: "chocolate", label: "Virtual chocolate — sweet, like you", emoji: "🍫" },
  { id: "memory", label: "A memory of us", emoji: "📸" },
] as const;

export const TELL_ME_QUESTIONS = [
  { id: "happiest", label: "What is your happiest memory with me?" },
  { id: "improve", label: "What is one thing I can do to love you better?" },
  { id: "visit", label: "Where should we go together someday?" },
  { id: "dream-date", label: "What does your dream date with me look like?" },
] as const;

export const TELL_ME_STORAGE_KEY = "shez-tell-me-answers";

export const SCRATCH_MESSAGES = [
  "You are the most beautiful part of my every day.",
  "I would choose you in every lifetime, without hesitation.",
  "My heart belongs to you — fully, quietly, completely.",
  "You make ordinary moments feel like poetry.",
  "I am sorry for the pain I caused. You deserve only tenderness.",
  "Loving you is the truest thing I have ever done.",
  "If I could give you the world, I would — but for now, take all of me.",
];

export const APOLOGY_RESPONSES = [
  {
    max: 20,
    text: "I hear you. I will keep trying — not with words alone, but with actions, patience, and love.",
  },
  {
    max: 40,
    text: "Thank you for being honest. I am not giving up on us. You are worth every effort.",
  },
  {
    max: 60,
    text: "We are getting somewhere. I feel hope — and I feel how much you still mean to me.",
  },
  {
    max: 80,
    text: "That means more than you know. I will keep showing up for you, every single day.",
  },
  {
    max: 100,
    text: "You are too kind to me. I love you deeply. Thank you for letting me love you still.",
  },
];

export type BalloonItem =
  | { type: "compliment"; text: string }
  | { type: "emoji"; text: string }
  | { type: "memory"; text: string };

export const BALLOON_ITEMS: BalloonItem[] = [
  { type: "compliment", text: "Your laugh is the sound my soul recognizes as home." },
  { type: "emoji", text: "🥰" },
  { type: "memory", text: "Every ordinary day with you still feels like a gift I never expected." },
  { type: "compliment", text: "You are soft and strong and impossibly beautiful to me." },
  { type: "emoji", text: "🌹" },
  { type: "memory", text: "I still replay the moments when you looked at me like I was enough." },
  { type: "compliment", text: "Loving you is the easiest and truest thing I know." },
  { type: "emoji", text: "💕" },
  { type: "compliment", text: "You make me want to be gentler, braver, and better — just for you." },
  { type: "memory", text: "Somewhere between your smile and your silence, I found my forever." },
];

export const BAD_JOKES = [
  "Are you a sunset? Because every time I see you, the whole world gets softer.",
  "I must be a book, because every chapter of my life is better with you in it.",
  "If kisses were flowers, I'd send you a garden every morning.",
];

export const SECRET_MESSAGES = [
  "I still get butterflies when your name lights up my phone.",
  "Sometimes I reread our messages just to feel close to you again.",
  "You are the person I think of when something beautiful happens.",
];

export const SONG_RECOMMENDATIONS = [
  "Lover — because you are mine",
  "Perfect — Ed Sheeran",
  "All of Me — John Legend",
  "A Thousand Years — Christina Perri",
];

export const WHEEL_MEMORY =
  "That quiet moment when you smiled and the whole world felt like it belonged to us.";
