import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  href?: string | null;
  className?: string;
};

export function BrandMark({
  href = "/dashboard",
  className,
}: BrandMarkProps) {
  const content = (
    <>
      <Image
        src="/logo-mark.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
      />
      <span className="text-lg font-normal tracking-tight text-red-500">
        Mafia Minds
      </span>
    </>
  );

  if (!href) {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      {content}
    </Link>
  );
}
