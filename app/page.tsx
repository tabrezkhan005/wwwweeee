"use client";

import { AboutSection } from "./components/AboutSection";
import { ComingSoonGate } from "./components/ComingSoonGate";
import { CtaSection } from "./components/CtaSection";
import { FeaturedVideoSection } from "./components/FeaturedVideoSection";
import { HeroSection } from "./components/HeroSection";
import { LuminaFooter } from "./components/LuminaFooter";
import { PhilosophySection } from "./components/PhilosophySection";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <ComingSoonGate>
      <main className="w-full bg-black">
        <HeroSection />
        <AboutSection />
        <FeaturedVideoSection />
        <CtaSection />
        <PhilosophySection />
        <ServicesSection />
        <LuminaFooter />
      </main>
    </ComingSoonGate>
  );
}
