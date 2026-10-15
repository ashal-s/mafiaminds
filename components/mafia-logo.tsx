"use client";

import Image from "next/image";
import Link from "next/link";

const SIZES = {
  sm: 40,
  md: 48,
  lg: 64,
  xl: 192,
} as const;

export function MafiaLogo({
  size = "md",
  href,
  className = "",
}: {
  size?: keyof typeof SIZES;
  href?: string;
  className?: string;
}) {
  const px = SIZES[size];
  const image = (
    <Image
      src="/logo.png"
      alt="Mafia Minds"
      width={px}
      height={px}
      unoptimized
      className={className}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0"
        aria-label="Mafia Minds home"
      >
        {image}
      </Link>
    );
  }

  return image;
}
