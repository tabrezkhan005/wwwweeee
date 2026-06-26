"use client";

import { FeaturePageShell } from "@/app/components/shez/FeaturePageShell";
import { MakeAWish } from "@/app/components/shez/features/MakeAWish";

export default function WishPage() {
  return (
    <FeaturePageShell eyebrow="Make a wish" title="Send it to the sky, my love.">
      <MakeAWish />
    </FeaturePageShell>
  );
}
