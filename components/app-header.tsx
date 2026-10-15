"use client";

import { BrandMark } from "@/components/brand-mark";

/**
 * Shared top bar: logo + title on the left, no background or border. Pass
 * actions (sign out, leave game, etc.) as children on the right.
 */
export function AppHeader({
  homeHref = "/dashboard",
  children,
}: {
  homeHref?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative z-50 flex items-center justify-between border-0 bg-transparent px-6 py-4 shadow-none">
      <BrandMark href={homeHref} />
      {children ? (
        <div className="flex items-center gap-3">{children}</div>
      ) : null}
    </header>
  );
}
