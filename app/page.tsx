import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  HomeBlurbText,
  HomeBrandText,
  HomeHeadlineText,
} from "@/components/home-hero-text";
import { getCurrentUserWithProfile } from "@/lib/profile";

export default async function Home() {
  const { user, profile } = await getCurrentUserWithProfile();

  // Signed-in users skip the marketing page.
  if (user) {
    redirect(profile?.username ? "/dashboard" : "/profile/setup");
  }

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-black px-4 text-center text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(220,38,38,0.12),transparent_42%)]"
      />
      <main className="relative z-10 flex max-w-xl flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.svg"
            alt="Mafia Minds"
            width={192}
            height={192}
            priority
            unoptimized
            className="h-48 w-48"
          />
          <HomeBrandText />
        </div>
        <HomeHeadlineText />
        <HomeBlurbText />
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
      </main>
    </div>
  );
}
