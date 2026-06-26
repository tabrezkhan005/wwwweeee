export const LETTERS_HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4";

/** @deprecated Use LETTERS_HERO_VIDEO_URL */
export const LETTERS_VIDEO_URL = LETTERS_HERO_VIDEO_URL;

export type LetterMood = "happy" | "angry" | "smile" | "forgive" | "together";

export type MoodLetter = {
  id: LetterMood;
  cardLabel: string;
  cardImage: string;
  emoji: string;
  pages: [string, string, string, string, string];
  signOff: string;
};

export const moodLetters: MoodLetter[] = [
  {
    id: "happy",
    cardLabel: "Open when you're happy",
    cardImage:
      "https://images.unsplash.com/photo-1490750967868-88ea4486c2fe?w=400&h=700&fit=crop",
    emoji: "🌸",
    pages: [
      "Hey my love — if you're happy right now, I want to be the first person who celebrates that with you.",
      "Your joy is contagious. When you shine, the whole world feels warmer — and my heart feels like it finally knows where home is.",
      "I hope you know that your happiness matters to me more than almost anything. I would do anything to protect that light in you.",
      "Save this moment. Laugh loudly. Take pictures in your mind. I wish I were there to see your smile in person.",
      "Never forget: you deserve every beautiful thing coming your way. And I am so proud to love someone as wonderful as you.",
    ],
    signOff: "Always cheering for you",
  },
  {
    id: "angry",
    cardLabel: "Open when you're angry",
    cardImage:
      "https://images.unsplash.com/photo-1504386106331-3e4e91712a39?w=400&h=700&fit=crop",
    emoji: "🌧️",
    pages: [
      "If you're angry — especially at me — I understand. You have every right to feel what you feel.",
      "I am not here to rush you or defend myself too quickly. I am here to listen, to hold space, and to respect your heart.",
      "Anger often comes from caring deeply. And I know I hurt someone I care about deeply. That truth sits heavy on me.",
      "Take your time. Breathe. You don't owe me forgiveness on anyone's timeline but your own.",
      "When you're ready, I will still be here — softer, more patient, and more determined to love you the way you deserve.",
    ],
    signOff: "I am listening",
  },
  {
    id: "smile",
    cardLabel: "Open when you need a smile",
    cardImage:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=700&fit=crop",
    emoji: "☀️",
    pages: [
      "Hi, beautiful. If today feels heavy, let me try to lift it — even just a little.",
      "Remember that time you laughed so hard you couldn't breathe? I replay that memory like a favourite song.",
      "You are ridiculously cute when you're pretending to be mad but failing because you almost smiled.",
      "If I could send you a hug through this screen, I would — the long kind, where you don't have to say anything.",
      "One more thing: the world is genuinely better because you're in it. And I am lucky every day I get to love you.",
    ],
    signOff: "Hope this helped a little",
  },
  {
    id: "forgive",
    cardLabel: "Open when you want to forgive me",
    cardImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=700&fit=crop",
    emoji: "🤍",
    pages: [
      "If you're reading this, maybe a part of you is willing to try again. That alone means more than I can say.",
      "I am sorry — not just with words, but with my whole heart. I never want to be the reason you feel small or unloved.",
      "Forgiveness isn't owed. I don't expect it lightly. I only hope you'll let me prove I can do better.",
      "I want to rebuild trust slowly, gently, with actions — not promises alone. You are worth that effort.",
      "Thank you for even considering giving us another chance. I will spend every day trying to be worthy of you.",
    ],
    signOff: "Thank you, from my heart",
  },
  {
    id: "together",
    cardLabel: "Open when you want to know how I wanna be with you",
    cardImage:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=700&fit=crop",
    emoji: "💕",
    pages: [
      "I want mornings with you — slow ones, where coffee gets cold because we're talking instead.",
      "I want ordinary days: grocery runs, bad movies, long drives with no destination, your hand in mine.",
      "I want to be the person you run to on hard days — and the one you laugh with on the easy ones.",
      "I want a future with you. Real, messy, beautiful, ours. Built on patience, honesty, and a love that doesn't quit.",
      "I don't just want moments with you. I want a life. With you. Always.",
    ],
    signOff: "Yours, in every way",
  },
];
