"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function NavLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <a
      href={href}
      className={`${
        active ? "text-hohBlue font-semibold" : "text-slate-600"
      } hover:text-hohBlue`}
    >
      {children}
    </a>
  );
}

