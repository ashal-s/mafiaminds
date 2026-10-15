import Link from "next/link";
import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = {
  title: "About · Mafia Minds",
  description:
    "Learn how Mafia Minds works: real-time roles, nights, votes, and how the town survives.",
};

const PHASES = [
  {
    name: "Night",
    blurb:
      "When night falls in the real world, night falls in the game. Mafia choose a target. Detectives investigate. Healers protect. Snipers may take a shot.",
  },
  {
    name: "Discussion",
    blurb:
      "Morning comes and the table opens up. Share what you know, or what you want others to believe, and hunt for the liars over the course of the day.",
  },
  {
    name: "Voting",
    blurb:
      "The table votes. Accuse carefully: the wrong elimination can hand the night to the mafia.",
  },
  {
    name: "Results",
    blurb:
      "Votes and night outcomes resolve. Someone may leave the table. Then the next real day begins.",
  },
] as const;

const ROLES = [
  {
    name: "Mafia",
    alignment: "Mafia",
    blurb:
      "A private team that eliminates one player each night. They win when they equal or outnumber the town.",
  },
  {
    name: "Detective",
    alignment: "Town",
    blurb:
      "Investigate one player each night to learn whether they are aligned with the mafia.",
  },
  {
    name: "Healer",
    alignment: "Town",
    blurb:
      "Protect one player from the night's attack. Keep the right people alive long enough to find the killers.",
  },
  {
    name: "Sniper",
    alignment: "Town",
    blurb:
      "Hold a limited supply of bullets. Spend them wisely to take down mafia, or hold fire and wait.",
  },
  {
    name: "Villager",
    alignment: "Town",
    blurb:
      "No special power. Watch, listen, and vote. The town wins by eliminating every mafia member.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-black text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.14),transparent_42%)]"
      />

      <header className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <BrandMark href="/" />
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            Get started
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-red-400/80">
          About
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Real-time mafia. One day is a real day.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          Mafia Minds is a live social deduction game for friends. Most players
          are town, trying to root out the killers. A few are mafia, hiding in
          plain sight, striking when night falls, and winning when they take
          control of the table. Trust is a weapon. Silence is a tell. Survive
          the night.
        </p>

        <section className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-lg font-semibold text-zinc-100">
            Played on the clock
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            This is not a one-sitting party game. Mafia Minds runs in real time
            against the real world. One in-game day lasts about 24 hours. Night
            is actually night. Day is actually day. Check in when you can, make
            your move before the phase ends, and live with the consequences
            until tomorrow.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Chat stays open. Roles stay secret. The table keeps going while you
            sleep, work, or wait for the next reveal.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-zinc-100">How a round works</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Games move through night and day until one side wins.
          </p>
          <ol className="mt-6 space-y-3">
            {PHASES.map((phase, index) => (
              <li
                key={phase.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-red-400/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {phase.name}
                  </h3>
                </div>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-zinc-400">
                  {phase.blurb}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-zinc-100">Roles</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Hosts pick a roster. Everyone gets a secret role at the start.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {ROLES.map((role) => (
              <li
                key={role.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {role.name}
                  </h3>
                  <span
                    className={
                      role.alignment === "Mafia"
                        ? "rounded-full border border-red-700/60 bg-red-950/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-300"
                        : "rounded-full border border-zinc-700 bg-zinc-950/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400"
                    }
                  >
                    {role.alignment}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {role.blurb}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="text-lg font-semibold text-zinc-100">Ready to play?</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Create an account, host a table, and invite your friends with a room
            code. No one should trust anyone, including you.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-red-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Get started
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-700 px-5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-600"
            >
              Back home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
