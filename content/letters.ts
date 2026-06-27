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
  greeting?: string;
  pages: readonly [
    readonly string[],
    readonly string[],
    readonly string[],
    readonly string[],
    readonly string[],
  ];
  signOff?: string;
};

export const moodLetters: MoodLetter[] = [
  {
    id: "happy",
    cardLabel: "Open when you're happy",
    cardImage: "/assets/b1.jpg",
    emoji: "🌸",
    greeting: "My dear sheemuu",
    pages: [
      [
        "If you're reading this then I'm hoping you're smiling right now and I honestly think the world becomes a little more beautiful whenever you smile.",
        "I don't even know if you realize how much light you carry with you because to you it might just be another normal day but to me your happiness has always been something special to witness.",
        "Whenever you're happy I feel like everything around you changes and maybe it's because I've always looked at you differently than everyone else has.",
      ],
      [
        "You have this way of laughing that makes people around you forget whatever they were worried about and every single time I heard it I wanted to hear it one more time because it never got old.",
        "You have always been beautiful but not just because of the way you look. It's the way you get excited over little things, the way flowers make you smile, the way you talk about skincare with so much interest, the way music becomes part of your day, the way you get completely lost watching a good drama, the way your eyes somehow become even prettier when you're genuinely happy.",
        "I don't think I've ever found the right words to explain how beautiful you are because every compliment feels too small compared to what I actually see.",
      ],
      [
        "Sometimes I look at the sky and imagine those aurora lights you love so much and I think even something as magical as that wouldn't make me stop looking at you because somehow you've always been my favorite view.",
        "I hope today reminded you that you deserve happiness without needing a reason. You deserve peaceful mornings, good music playing in the background, fresh flowers on your table, clear skies, healthy skin that you're always taking care of, late night conversations that make you laugh until your cheeks hurt.",
        "You deserve people who choose you every single day without making you question your worth.",
      ],
      [
        "I know life hasn't always been easy and I know I haven't always made things easier either. There are things I wish I could go back and change, moments I wish I could handle differently. I can't rewrite those memories but I can promise you that they taught me things I should have understood much earlier.",
        "Today though isn't about mistakes. Today is about your smile. If you're happy today then please stay in that moment a little longer. Take another picture, listen to another song, buy yourself those flowers even if nobody else does, laugh a little louder, watch one more episode of your favorite drama. Enjoy the little things because they suit you so well.",
        "I hope one day you see yourself the way I see you — not through doubts, not through insecurities, not through mirrors, but through the little moments that make you who you are.",
      ],
      [
        "The girl who somehow makes flowers look prettier just by holding them. The girl who can spend time taking care of herself because she enjoys it and not because she has to. The girl whose happiness feels so genuine that it spreads to everyone around her. The girl whose smile has stayed in my heart longer than she probably knows.",
        "If today has been kind to you then I'm thankful for that. Because whether I'm beside you or simply cheering for you from wherever life takes us, your happiness will always be something I quietly wish for.",
        "So keep smiling, keep singing along to your favorite songs, keep chasing skies that look like auroras, keep collecting flowers, keep laughing the way only you can. And please never forget that there was someone who thought all of those little things about you were extraordinary. I hope this smile stays with you for the rest of today because if you're smiling, then somewhere deep inside me, I'll probably end up smiling too ❤️",
      ],
    ],
  },
  {
    id: "angry",
    cardLabel: "Open when you're angry",
    cardImage: "/assets/b2.jpg",
    emoji: "🌧️",
    greeting: "Hey beautiful",
    pages: [
      [
        "If you opened this then I'm guessing you're angry with me right now. Maybe you're annoyed, maybe you're disappointed, maybe you're tired of hearing from me, or maybe you're reading this just because you're curious. Whatever the reason is I'm still grateful that you decided to open it because it means you're giving my words a few minutes of your time.",
        "I know being angry isn't something that disappears just because someone says sorry. If it did then life would be so much easier, trust would be easy to fix, hearts would never stay heavy for long. But that's not how things work and I understand that now.",
        "I know I've hurt you. I know there are moments that still come back to you and make you wonder why things happened the way they did. I've asked myself the same question more times than I can count — not because I'm looking for an excuse but because I wish I had been a better person in those moments.",
      ],
      [
        "Sometimes people make choices without realizing how deeply those choices can affect someone they love. That doesn't make them okay, it doesn't erase the pain, it just means I learned the lesson after causing the damage and I wish that wasn't true. I wish I had understood earlier, I wish I had chosen differently, I wish I had protected your heart instead of giving you reasons to question it.",
        "You know something that has always stayed in my mind — every single time we met, before either of us even said a word, we smiled. Not the kind of smile people force for pictures, not the polite smile you give everyone. It was always this strange automatic smile that just appeared on both our faces.",
        "I still don't know how that happened. One second we'd be walking toward each other pretending to act normal, the next second we'd both be smiling like complete idiots. I don't think either of us ever planned it. It just happened. And honestly that's one of my favorite memories because it was so real.",
      ],
      [
        "There was never a conversation about it, there was never a reason, it was just us. Whenever I think about that smile I can't help smiling too — even now, even while writing this, I'm probably smiling like an idiot remembering it. I hope one day that memory makes you smile too instead of making your heart feel heavy.",
        "If you're angry right now then be angry. I'm not going to tell you not to be. Your feelings deserve space. If I've made you cry then I can't expect you to pretend everything is okay. If I've broken your trust then I can't ask you to rebuild it overnight. I know that and I respect that.",
        "All I want you to know is that I'm not ignoring what happened. I'm not pretending it didn't matter. It mattered because you mattered. You still do.",
      ],
      [
        "I also hope that even while you're angry you remember the version of us that laughed over the smallest things — the random conversations that made no sense, the moments where we'd tease each other, the times when your laugh made me laugh even harder without either of us knowing why.",
        "You have one of those laughs that is impossible not to join. It's the kind that makes everyone around you want to smile. I don't know if anyone has ever told you that but it's true.",
        "And yes, you're still unfairly beautiful even when you're angry. I don't know how that's possible either. Maybe it's because you're expressive, maybe it's because your eyes always say what you're feeling before your words do, maybe it's just because you're you.",
      ],
      [
        "If this letter changes absolutely nothing today then that's okay. I didn't write it to erase your anger. I wrote it because I never wanted you to think your feelings were invisible to me. I see them, I understand why they're there, and I know I have to earn back what I lost through my actions and not through these words.",
        "Still, if while reading this you smiled for even one second remembering that silly automatic smile we'd always have whenever we saw each other, then I'm happy because that smile has always been my favorite thing.",
        "Take all the time you need. Be angry if you need to be, laugh when you feel like laughing, listen to your favorite songs, watch another drama, buy yourself flowers because I know how much you love them. And whenever you look at the sky and imagine those beautiful aurora lights, I hope they remind you that even after the darkest nights, beautiful things can still appear — just like that little smile that somehow always found both of us before either of us even said hello. And I hope that wherever life takes us, you'll always know that meeting you was one of the most beautiful parts of mine ❤️",
      ],
    ],
  },
  {
    id: "smile",
    cardLabel: "Open when you need a smile",
    cardImage: "/assets/b3.jpg",
    emoji: "☀️",
    greeting: "Hey sweetiepieeee",
    pages: [
      [
        "So today isn't one of those days, is it? Maybe nothing really went wrong but somehow everything feels a little heavier than usual. Maybe someone annoyed you, maybe your skincare didn't go the way you wanted and now you're staring at the mirror wondering why your skin decided to betray you today, maybe your favorite drama just gave you the saddest ending imaginable, maybe you've listened to the same song five times hoping it would magically fix your mood, or maybe you're just having one of those days where you don't even know why you're not smiling.",
        "Whatever it is I'm really glad you opened this because if there's anyone whose smile deserves to come back it's yours.",
        "You know what's funny — I don't think you realize how contagious your smile actually is. Whenever you're smiling everyone around you somehow becomes a little happier without even noticing, especially me. I don't even think I've ever had a choice. The moment you smiled I smiled too. It happened every single time, even when I tried to act serious for absolutely no reason.",
      ],
      [
        "One look at you and somehow both of us ended up smiling anyway. I still don't understand how we managed to do that. It was like our faces had already decided before our brains had a chance to think and honestly I don't think I'll ever forget that.",
        "Can I remind you of something? You're ridiculously cute when you're excited about something — when you find a flower you really like, when you discover a new skincare product and suddenly you're explaining every ingredient like you're giving a TED Talk, when your favorite song comes on and you don't even realize you're singing along, when a drama has a plot twist and your reactions become funnier than the actual episode.",
        "Those little moments — that's the version of you I always loved watching. Not because you were trying to impress anyone but because you were simply being yourself. And somehow that was always enough. Actually more than enough.",
      ],
      [
        "Now imagine this for a second. It's evening, the weather is perfect, the sky has that soft pink and orange color you always stop to admire, there's a field full of flowers stretching as far as you can see, the air is cool, your favorite music is playing quietly, and above you the sky slowly fills with those beautiful aurora lights you've always loved. No noise, no stress, no overthinking — just peace.",
        "I don't know why but every time I imagine a peaceful place it somehow always has you in it. Probably because you've always made beautiful places feel even more beautiful.",
        "Also I need to tell you something very important — please don't ever stop laughing the way you do. I mean it. Your laugh is honestly one of my favorite sounds in the entire world. Not the polite laugh you give people. I'm talking about the real one, the one where you completely forget you're supposed to look pretty, the one where you can't stop, the one where your eyes light up and suddenly everyone around you starts laughing too.",
      ],
      [
        "That laugh deserves to exist for a very very long time so don't hide it. The world needs more of it and selfishly, I do too.",
        "If today has been difficult then don't pressure yourself to suddenly become happy. It's okay if all you can manage today is a tiny smile. Sometimes that's enough. Sometimes healing looks like listening to one more song, watching one more episode, buying yourself flowers just because you felt like it, making yourself your favorite drink, putting on your favorite hoodie, taking care of your skin, looking at the night sky for a few minutes, or simply sitting quietly until your heart feels a little lighter.",
        "There is absolutely nothing wrong with taking your time.",
      ],
      [
        "I hope this letter gave you at least one tiny smile, even if it only lasted for a second, because that's all I wanted. I wanted to remind you that somewhere out there is someone who still remembers the way your smile appeared before you even realized you were smiling.",
        "Someone who still remembers those moments where we'd see each other and for absolutely no reason we'd both end up grinning like two idiots — no words, no jokes, no effort, just one look and somehow that was enough. I still think about that sometimes and it makes me smile every single time.",
        "So if you're reading this while your day hasn't been the best, here's one request — go put on your favorite song, make yourself something nice to drink, look at a flower if you happen to see one, take care of yourself the way you always remind everyone else to, and before you close this letter smile for just one second. Not for me, not because this letter asked you to, but because your smile has always looked like it belonged on your face and I honestly think the world looks a little brighter every time you wear it ❤️",
      ],
    ],
  },
  {
    id: "forgive",
    cardLabel: "Open when you want to forgive me",
    cardImage: "/assets/b4.gif",
    emoji: "🤍",
    pages: [
      [
        "If you've opened this then maybe you're standing somewhere between holding on and letting go. I don't know if you've already forgiven me or if you're only thinking about it and honestly I'm not reading this as a sign that everything is okay because I know it isn't that simple.",
        "I know what I did hurt you and I know there were moments where you probably questioned everything about us because of me. For a long time I kept thinking about where everything went wrong and I always ended up at the same place — it wasn't one big mistake that ruined things, it was the small decisions I kept making without thinking about how they would make you feel.",
        "I didn't protect the relationship the way I should have. I didn't protect your trust the way I should have. And the hardest part about accepting all of this is knowing that the person who paid the price for my mistakes was you.",
      ],
      [
        "If I could go back I genuinely would — not because I want to erase the consequences for myself but because I wish you never had to carry that pain in the first place. I wish you never had to cry because of something I did. I wish you never had to wonder if you were enough.",
        "You were never the problem. I was. That's probably the hardest sentence I've ever had to accept because it's easier to blame situations or timing or misunderstandings. The truth is much simpler than that — I made choices that I shouldn't have made and I hurt someone who only ever wanted honesty from me.",
        "I can't change that now. I can't ask you to forget it. I can't ask you to pretend it never happened. All I can do is be honest about it.",
      ],
      [
        "You know what hurts me the most now? It's not that we fought, it's not that things became difficult — it's knowing that I became the reason you stopped feeling safe with me. The one person who should have protected your heart became the one who broke it. I think about that more often than you probably know.",
        "There isn't a single day where I don't wish I had been more mature, more patient, more honest — not because I'm trying to rewrite history but because I finally understand what I had while I was busy taking it for granted.",
        "People always say you realize someone's value after you lose them. I used to think that was just something people said after breakups. Now I understand it — not because I lost you but because losing your trust showed me the difference between loving someone and actually knowing how to love them.",
      ],
      [
        "Back then I thought love was about being there. Now I know it's about making the other person feel secure even when you're not around. It's about choosing honesty even when the truth is uncomfortable. It's about protecting someone's peace instead of expecting them to forgive your chaos. That's something I learned too late.",
        "If you ever decide to forgive me I don't want you to do it because of this letter. I don't want you to do it because of memories, or because of guilt, or because of the time we spent together. I only want you to do it if one day you genuinely believe I've become someone who deserves another chance.",
        "Because if you ever choose me again I don't want to love you the way I did before. I want to love you better. I want to become the kind of man who makes you feel calm instead of anxious, the kind of man whose actions make his words believable, the kind of man who never puts you in a position where you have to question whether you're enough.",
      ],
      [
        "I know another chance isn't something I deserve simply because I regret what I did. Regret alone changes nothing. People change through what they choose to do after they regret something. That's the person I've been trying to become — not for this letter, not for this website, not even just for us, but because I never want to be the version of myself that hurt you ever again.",
        "If forgiveness ever finds its way into your heart I promise I won't treat it like everything is fixed. I'll treat it like the beginning of earning back something I should never have lost in the first place.",
        "And if that day never comes I'll still be grateful that I got to love you because meeting you changed me in ways I didn't understand until it was almost too late. Thank you for reading this. No matter what you decide, thank you for giving my heart one more chance to be honest with yours ❤️",
      ],
    ],
  },
  {
    id: "together",
    cardLabel: "Open when you want to know how I wanna be with you",
    cardImage: "/assets/b5.jpg",
    emoji: "💕",
    pages: [
      [
        "If you've opened this letter then maybe you're wondering what life with me would actually look like if we were given another chance. I've thought about that question more times than I can count and every time the answer becomes a little clearer.",
        "I don't dream about a perfect relationship anymore because I don't think perfect relationships exist. I dream about an honest one, a peaceful one, a relationship where neither of us has to guess what the other person is thinking because we've made honesty a habit instead of something we only choose when it's easy.",
        "I want to be the kind of man you never have to doubt — the kind of man whose actions make you feel secure even when I'm not standing next to you. I want you to know where I am, what I'm doing, what I'm feeling, not because you're asking me to but because I want there to be no space for uncertainty between us.",
      ],
      [
        "I don't want secrets, I don't want half truths, I don't ever want you to wonder if I'm hiding something from you because I know what that feeling is like and I know I created that feeling for you once before. If life gives me another chance with you I want trust to become the strongest part of our relationship — not because we ignore mistakes but because we choose honesty before mistakes even have the chance to grow.",
        "I want to become your safe place — the person you call after a good day because you're excited to tell me everything, the person you call after a bad day because you know I'll listen before I try to fix anything.",
        "I want to hear about every little part of your day even the things you think are boring because if they're important to you they'll always be important to me. I want us to sit together late at night talking about everything and nothing — about our childhood memories, about the dreams we're afraid to tell other people, about the future we're trying to build together, about random thoughts that don't even make sense but somehow become our favorite conversations.",
      ],
      [
        "I want to know you so deeply that even your silence starts making sense to me. I want to learn the little things that make you smile and the little things that make your heart heavy — not because I have to but because loving someone means never stopping learning about them.",
        "I want to support every dream you have whether it's something big that takes years or something small that only lasts a day. I want to be the first person celebrating your wins and the first person reminding you not to give up when life becomes difficult. I never want you to feel like you're carrying your problems alone because if we're together then your battles become mine too.",
        "I want to be patient when we misunderstand each other. I don't want silence to become punishment, I don't want ego to become louder than love. If something hurts you then I want us to sit together and talk until we understand each other — not until one person wins the argument but until both of us feel heard.",
      ],
      [
        "I want our home to become the kind of place where we always feel safe coming back to — a place filled with laughter and random conversations and music playing in the background while we're doing absolutely nothing special. I want us to cook together even if we completely mess up the recipe, I want random midnight walks where we don't even know where we're going, long drives with no destination, small trips whenever life becomes too loud, watching sunsets without saying much because sometimes peace doesn't need words.",
        "I want to surprise you for no reason at all — not because it's your birthday or because it's a special occasion but because I saw something that reminded me of you. I want to bring you flowers so often that they stop feeling like gifts and start feeling like part of our life.",
        "One day I'd love for us to build a little garden together, to spend quiet evenings taking care of it side by side, watching things grow slowly and realizing our relationship has grown the same way through patience and consistency.",
      ],
      [
        "I want us to build a home that feels like us — not the biggest house, not the fanciest one, just one that's full of warmth. A place where we can laugh without pretending, cry without feeling judged, pray together, celebrate together, grow older together. I want us to become a team — not just two people in love but two people who choose each other every single day.",
        "One day I hope we get to hold our little Zoya in our arms and tell her stories about how much love existed even before she came into this world. I hope she grows up watching two parents who respect each other, who apologise when they're wrong, who never let pride become more important than kindness, who teach her that love isn't loud promises but quiet consistency.",
        "Most importantly I never want to be the reason tears fall from your eyes again. Life will already give us enough reasons to struggle and I don't ever want to become one of them. I want to protect your peace instead of disturbing it, to bring comfort instead of confusion, to make your life lighter instead of heavier. If you ever choose this future with me I won't promise that we'll never disagree — we'll have misunderstandings, difficult days, moments of frustration because we're human — but I promise we'll never stop choosing each other in those moments. I'll never stop talking to you, listening to you, respecting you, protecting the trust that took us so long to build. Because if there's one thing this journey has taught me it's that love isn't found once and kept forever — it's built every single day through honesty, patience, respect, forgiveness, and showing up for the person you love even on the ordinary days. That's the life I dream about. Not a perfect one. Just one where I get to wake up every morning knowing I have another day to love you a little better than I did yesterday ❤️",
      ],
    ],
  },
];
