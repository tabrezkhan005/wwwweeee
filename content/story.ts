export const SKY_MEMORY_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4";

export type StoryChapter =
  | {
      id: string;
      number: string;
      label: string;
      title: string;
      body: string;
      type: "prose";
    }
  | {
      id: string;
      number: string;
      label: string;
      title: string;
      body: string;
      videoUrl: string;
      type: "sky";
    }
  | {
      id: string;
      number: string;
      label: string;
      title: string;
      moments: { title: string; note: string }[];
      type: "moments";
    }
  | {
      id: string;
      label: string;
      title: string;
      body: string;
      cta: string;
      href: string;
      align?: "left" | "right";
      type: "teaser";
    }
  | {
      id: string;
      number: string;
      label: string;
      title: string;
      body: string;
      type: "promise";
    }
  | {
      id: string;
      number: string;
      label: string;
      line: string;
      name: string;
      type: "finale";
    };

export const storyChapters: StoryChapter[] = [
  {
    id: "why",
    number: "01",
    label: "What I needed to say",
    title: "I love you — and I'm sorry.",
    body: "I know I hurt you. I know you're upset — and you have every right to be. I built this because one sorry wasn't enough. Every word here is me trying to show you how deeply you're loved, and how much I want you to feel cherished again.",
    type: "prose",
  },
  {
    id: "sky",
    number: "02",
    label: "A memory I keep",
    title: "Butterflies, flowers,\nand us.",
    body: "I still think about those days — open sky, soft wind, colour everywhere, you beside me. That is the version of the world I carry in my heart when I miss you.",
    videoUrl: SKY_MEMORY_VIDEO_URL,
    type: "sky",
  },
  {
    id: "teaser-letters",
    label: "For when you need me",
    title: "I wrote you letters.",
    body: "Some feelings are too tender for a quick text. I saved them here — for your happy days, your heavy ones, and every moment in between.",
    cta: "Open my letters",
    href: "/letters",
    type: "teaser",
  },
  {
    id: "moments",
    number: "03",
    label: "Us",
    title: "Moments I never want to lose",
    moments: [
      {
        title: "When I knew",
        note: "It wasn't one grand moment — it was a hundred quiet ones. But somewhere in all of them, I knew my heart had chosen you.",
      },
      {
        title: "Your smile",
        note: "The way you smile when you think no one is watching — that is the smile I would cross any distance to see again.",
      },
      {
        title: "Just us",
        note: "The looks we share, the jokes only we understand, the comfort of simply being together. That is my favourite place in the world.",
      },
    ],
    type: "moments",
  },
  {
    id: "teaser-wheel",
    label: "A little surprise",
    title: "Something sweet, just for you.",
    body: "Hugs, roses, secrets, little jokes — I tucked them all in here. Spin when you need a reminder that you are adored.",
    cta: "Open surprises",
    href: "/wheel",
    align: "right",
    type: "teaser",
  },
  {
    id: "promise",
    number: "04",
    label: "My promise",
    title: "I will keep choosing you.",
    body: "On the easy days and the hard ones. In laughter and in silence. In every season of us. I am not perfect — but my love for you is steady, real, and yours.",
    type: "promise",
  },
  {
    id: "teaser-tell-me",
    label: "Your voice matters",
    title: "Tell me what's on your heart.",
    body: "I want to know you — the little things, the big things, the things you're afraid to say out loud. Leave me your words. I will hold them gently.",
    cta: "Share with me",
    href: "/tell-me",
    type: "teaser",
  },
  {
    id: "teaser-scratch",
    label: "A hidden note",
    title: "Scratch away the grey.",
    body: "Beneath the surface is something I wrote just for you — a small piece of my heart, waiting to be found.",
    cta: "Reveal it",
    href: "/scratch",
    align: "right",
    type: "teaser",
  },
  {
    id: "teaser-apology",
    label: "From my heart",
    title: "Did I say it well enough?",
    body: "I mean every word of my sorry. Tell me where I stand — I want to earn your trust and your smile back.",
    cta: "Tell me honestly",
    href: "/rate-apology",
    type: "teaser",
  },
  {
    id: "teaser-balloons",
    label: "Little joys",
    title: "Pop one open for me.",
    body: "Each balloon holds something I love about you — a compliment, a memory, a moment that made me fall harder.",
    cta: "Pop a balloon",
    href: "/balloons",
    align: "right",
    type: "teaser",
  },
  {
    id: "teaser-wish",
    label: "Before the end",
    title: "Make a wish, my love.",
    body: "Close your eyes. Think of something beautiful. Send it into the sky — I will carry it in my heart and hope the universe listens.",
    cta: "Send a wish",
    href: "/wish",
    type: "teaser",
  },
  {
    id: "finale",
    number: "05",
    label: "Always",
    line: "Forever yours.",
    name: "SHEZ",
    type: "finale",
  },
];
