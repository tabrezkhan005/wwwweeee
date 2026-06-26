"use client";

import { ComingSoonGate } from "@/app/components/ComingSoonGate";
import { LettersExperience } from "@/app/components/shez/LettersExperience";

export default function LettersPage() {
  return (
    <ComingSoonGate>
      <div className="relative min-h-screen bg-black">
        <LettersExperience />
      </div>
    </ComingSoonGate>
  );
}
