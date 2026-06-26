"use client";

import { ComingSoonGate } from "./components/ComingSoonGate";
import { HeroSection } from "./components/HeroSection";
import { ShezFooter } from "./components/shez/ShezFooter";
import { ShezStory } from "./components/shez/ShezStory";
import { StoryScrollOrchestrator } from "./components/shez/StoryScrollOrchestrator";

export default function Home() {
  return (
    <ComingSoonGate>
      <main className="w-full bg-black">
        <StoryScrollOrchestrator />
        <HeroSection />
        <ShezStory />
        <ShezFooter />
      </main>
    </ComingSoonGate>
  );
}
