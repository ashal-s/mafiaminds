import { redirect } from "next/navigation";
import { HomeHero } from "@/components/home-hero";
import { getCurrentUserWithProfile } from "@/lib/profile";

export default async function Home() {
  const { user, profile } = await getCurrentUserWithProfile();

  // Signed-in users skip the marketing page.
  if (user) {
    redirect(profile?.username ? "/dashboard" : "/profile/setup");
  }

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-black px-6 py-6 text-center text-zinc-100 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(220,38,38,0.12),transparent_42%)]"
      />
      <HomeHero />
    </div>
  );
}
