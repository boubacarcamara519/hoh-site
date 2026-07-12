"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links =
    pathname.startsWith("/en")
      ? [
          { href: "/en/home", label: "Home" },
          { href: "/en/about", label: "About" },
          { href: "/en/activities", label: "Activities" },
          { href: "/en/impact", label: "Impact" },
          { href: "/en/forms", label: "Forms" },
          { href: "/en/contact", label: "Contact" },
        ]
      : [
          { href: "/fr/home", label: "Accueil" },
          { href: "/fr/about", label: "À propos" },
          { href: "/fr/activities", label: "Activités" },
          { href: "/fr/impact", label: "Impact" },
          { href: "/fr/forms", label: "Formulaires" },
          { href: "/fr/contact", label: "Contact" },
        ];

  return (
    <>
      {/* Bouton hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-blue-900 focus:outline-none"
      >
        <svg width="32" height="32" fill="currentColor">
          <path d="M4 8h24M4 16h24M4 24h24" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Menu mobile */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">

          {/* Bouton fermer */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-slate-600"
          >
            <svg width="28" height="28" fill="currentColor">
              <path d="M6 6l16 16M22 6L6 22" />
            </svg>
          </button>

          {/* Liens */}
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium ${
                  pathname === link.href
                    ? "text-blue-700 underline"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sélecteur de langue */}
          <div className="pt-4 border-t">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}

