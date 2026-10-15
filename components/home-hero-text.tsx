"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";

const REVEAL_MS = 40;

const BRAND = "Mafia Minds";
const HEADLINE = "The classic game of deception, online.";
const BLURB =
  "Gather your friends, take on secret roles, and figure out who you can trust before the town falls.";

const brandDuration = BRAND.length * REVEAL_MS;
const headlineDuration = HEADLINE.length * REVEAL_MS;
const lineGapMs = 220;

export function HomeBrandText() {
  return (
    <EncryptedText
      text={BRAND}
      className="text-5xl font-bold tracking-tight"
      encryptedClassName="text-red-900"
      revealedClassName="text-red-500"
      revealDelayMs={REVEAL_MS}
      startDelayMs={0}
    />
  );
}

export function HomeHeadlineText() {
  return (
    <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
      <EncryptedText
        text={HEADLINE}
        encryptedClassName="text-zinc-600"
        revealedClassName="text-zinc-50"
        revealDelayMs={REVEAL_MS}
        startDelayMs={brandDuration + lineGapMs}
      />
    </h1>
  );
}

export function HomeBlurbText() {
  return (
    <p className="max-w-md text-base">
      <EncryptedText
        text={BLURB}
        encryptedClassName="text-zinc-700"
        revealedClassName="text-zinc-400"
        revealDelayMs={REVEAL_MS}
        startDelayMs={brandDuration + headlineDuration + lineGapMs * 2}
      />
    </p>
  );
}
