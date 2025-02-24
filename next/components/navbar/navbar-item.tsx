"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  href: never;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: string;
};

export function NavbarItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center  text-sm leading-[110%] px-4 py-2 rounded-md  hover:bg-dim hover:text-typo/80 text-typo hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200",
        (active || pathname?.includes(href)) && "bg-transparent text-typo",
        className
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
