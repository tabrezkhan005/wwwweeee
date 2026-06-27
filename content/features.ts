export type WheelPrize = {
  id: "mountain" | "flowers" | "dairymilk" | "photo" | "beach" | "aurora";
  label: string;
  icon: string;
  title: string;
  message: string;
  image?: string;
};

export const WHEEL_SEGMENT_COUNT = 6;

export const WHEEL_PRIZES: WheelPrize[] = [
  {
    id: "mountain",
    label: "Mountain trek",
    icon: "/icons/mountain.png",
    title: "I want to trek with you",
    message:
      "I think about this more than I probably should — taking you on a trek, just the two of us, with nothing but mountains, fresh air, and the kind of quiet that makes conversations feel honest. I want to walk beside you on trails that feel endless, stop at every viewpoint because the view is beautiful but honestly I'd still be looking at you, and capture so many pictures that our phones run out of storage before our hearts run out of things to say. And when your legs get tired — because I know you — I want to carry you on my back without you having to ask, not because I'm trying to be dramatic but because being close to you in moments like that feels like the whole point of the journey. I don't just want a trek with you. I want the laughter when we stumble, the selfies at the top, the shared water bottle, the cold breeze, and the memory of you leaning on me when the path gets hard. That's the adventure I keep saving for us.",
  },
  {
    id: "flowers",
    label: "Flower bouquet",
    icon: "/icons/flowers.png",
    title: "Flowers for you, always",
    message:
      "If I could, I would personally conserve every flower I see — the ones on roadside bushes, the ones in gardens, the ones that bloom for only a day and disappear before most people even notice. I would collect them carefully, one by one, and build a bouquet with my own hands because no florist in the world could ever arrange something as beautiful as you deserve. You love flowers, and I love the way your face softens when you see them — like the whole world paused for a second just to be kind to you. And maybe that's why I always think of you when I see them, because you are as beautiful as flowers — not in a simple way, but in the way that makes people stop, look again, and feel something they can't quite explain. One day I want to bring you flowers so often that it stops feeling like a surprise and starts feeling like a promise — that I see you, that I remember what you love, and that you will never have to wonder if you're worth that kind of tenderness.",
  },
  {
    id: "dairymilk",
    label: "Chocolate",
    icon: "/icons/dairymilk.webp",
    title: "This time, no melting",
    message:
      "I still remember last time — the chocolate melted before I could give it to you properly, and somehow that small thing stayed in my head longer than it should have. Not because the chocolate mattered that much, but because I wanted you to have something sweet in that moment and life decided to be inconvenient. So this spin is me making a tiny promise: next time, no melting, no excuses, no almost. I'll give you so much chocolate you'll wonder if I'm trying to bribe you into forgiving me — Dairy Milk after Dairy Milk, the way you like it, kept safe until it's actually in your hands. Sweet things suit you. You deserve things that arrive intact, the way you deserve people who show up properly. Consider this your official warning — I'm coming with chocolates, and this time they're surviving the journey.",
  },
  {
    id: "photo",
    label: "Our album",
    icon: "/icons/photo.png",
    title: "Pictures like this, forever",
    image: "/assets/sheemu.jpeg",
    message:
      "I wish we captured a hundred more pictures like this — unplanned, a little imperfect, both of us smiling like we forgot the rest of the world existed for a second. Not posed for anyone else, not trying too hard, just us being us in a moment that felt warm enough to keep. I want to build an album with you — not one photo here and there, but a whole collection of memories we can scroll through on quiet nights and laugh at how happy we looked, how young we felt, how naturally we found each other in every frame. Every picture would be proof that we existed in these beautiful ordinary moments together. And if life gives us more days like this, I promise I won't forget to capture them — because one day I think we'll want to look back and remember that we were really, truly happy, and the photos will show it even if words fail.",
  },
  {
    id: "beach",
    label: "Beach day",
    icon: "/icons/beach.png",
    title: "Sand, sea, and you",
    message:
      "I want a beach day with you — the kind where we don't rush anywhere. Bare feet in warm sand, the sound of waves doing all the talking, the sky turning gold while we're still sitting there pretending we aren't cold. I want to walk with you along the shoreline, let the water reach our ankles, collect shells like we're kids again, and take pictures where the wind messes up your hair and you still look unfairly beautiful. I imagine us finding a quiet spot, sharing something cold to drink, you leaning into me while the sun sets like it's trying to match how soft my heart feels when you're near. No plans, no noise — just you, the ocean, and the kind of peace that only happens when the person beside you is the one your soul chose. That's the day I keep saving in my head for us.",
  },
  {
    id: "aurora",
    label: "Aurora skies",
    icon: "/icons/aurora.webp",
    title: "Under the aurora with you",
    message:
      "You love aurora lights — and I love the way your face changes when you talk about something that beautiful. I keep imagining us somewhere cold and quiet, wrapped in blankets, looking up at a sky that looks like it was painted just for you — greens and purples moving slowly while you lean into me and forget to check your phone for once. I want to take you to see skies like that, not because it's romantic in a movie way but because you deserve to stand in front of something magical and feel small in the best possible way. Music playing softly, maybe a drama waiting for us when we get back to warmth, hot chocolate in our hands, and the kind of silence that doesn't need filling. Every time I see the night sky now I think of you — and I hope one day we're standing under those lights together, and I get to watch the aurora and you at the same time, and somehow you still end up being the more beautiful view.",
  },
];

export const TELL_ME_QUESTIONS = [
  { id: "happiest", label: "What is your happiest memory with me?" },
  { id: "improve", label: "What is one thing I can do to love you better?" },
  { id: "visit", label: "Where should we go together someday?" },
  { id: "dream-date", label: "What does your dream date with me look like?" },
] as const;

export const SCRATCH_REVEAL = {
  headline: "Will you marry me?",
  subline: "I would never let you down.",
  footnote: "That scratch was enough for me — but your answer means everything.",
};

export const APOLOGY_RATING_LABELS = [
  { max: 15, label: "Not yet", emoji: "💔" },
  { max: 35, label: "Still hurting", emoji: "😔" },
  { max: 55, label: "Getting there", emoji: "🤍" },
  { max: 75, label: "I felt it", emoji: "🥺" },
  { max: 100, label: "You said it well", emoji: "❤️" },
] as const;

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

export const BALLOON_LOVE_MESSAGES = [
  "Your laugh is the sound my soul recognizes as home.",
  "You are soft and strong and impossibly beautiful to me.",
  "Every ordinary day with you still feels like a gift I never expected.",
  "I still replay the moments when you looked at me like I was enough.",
  "Loving you is the easiest and truest thing I know.",
  "You make me want to be gentler, braver, and better — just for you.",
  "Somewhere between your smile and your silence, I found my forever.",
  "When you smile, the whole world feels like it was made a little kinder.",
  "You deserve flowers, aurora skies, and a love that never makes you doubt yourself.",
  "I would choose you in every version of every day.",
  "Your happiness is something I quietly pray for, even from far away.",
  "You are my favourite person — not because you're perfect, but because you're you.",
];
