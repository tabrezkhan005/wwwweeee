"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { TellMeSomething } from "@/app/components/shez/features/TellMeSomething";

export default function TellMePage() {
  return (
    <FeaturePageShell eyebrow="Your heart" title="Tell me what's on your mind.">
      <TellMeSomething />
    </FeaturePageShell>
  );
}
