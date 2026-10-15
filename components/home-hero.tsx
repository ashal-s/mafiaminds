"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";

const REVEAL_MS = 45;
const BRAND = "Mafia Minds";
const BRAND_DURATION = BRAND.length * REVEAL_MS;

const LOGO_DELAY_MS = 120;
const BRAND_START_MS = 700;
const BUTTONS_START_MS = BRAND_START_MS + BRAND_DURATION + 280;

export function HomeHero() {
  const [showLogo, setShowLogo] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShowLogo(true), LOGO_DELAY_MS),
      window.setTimeout(() => setShowBrand(true), BRAND_START_MS),
      window.setTimeout(() => setShowButtons(true), BUTTONS_START_MS),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="relative z-10 flex max-w-xl flex-col items-center gap-10 py-8 sm:gap-12 sm:py-10">
      <div
        className={`transition-all duration-700 ease-out ${
          showLogo
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
      >
        <Image
          src="/logo.svg"
          alt="Mafia Minds"
          width={192}
          height={192}
          priority
          unoptimized
          className="h-48 w-48"
        />
      </div>

      <div
        className={`min-h-[3.5rem] py-2 transition-opacity duration-500 ${
          showBrand ? "opacity-100" : "opacity-0"
        }`}
      >
        {showBrand ? (
          <EncryptedText
            text={BRAND}
            className="text-5xl font-bold tracking-tight"
            encryptedClassName="text-red-900"
            revealedClassName="text-red-500"
            revealDelayMs={REVEAL_MS}
          />
        ) : null}
      </div>

      <div
        className={`flex flex-col items-center gap-5 pt-2 transition-all duration-700 ease-out ${
          showButtons
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="flex h-11 items-center justify-center rounded-lg bg-red-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="flex h-11 items-center justify-center rounded-lg border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-600"
          >
            Log in
          </Link>
        </div>
        <Link
          href="/about"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          About the game
        </Link>
      </div>
    </main>
  );
}
