"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/fr/home", label: "Accueil" },
  { href: "/fr/about", label: "À propos" },
  { href: "/fr/activities", label: "Activités" },
  { href: "/fr/impact", label: "Impact" },
  { href: "/fr/forms", label: "Formulaires" },
  { href: "/fr/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700">
          HOH Group
        </Link>

        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-blue-700 underline"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

