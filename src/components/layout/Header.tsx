"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEnglish = pathname.startsWith("/en");

  const links = isEnglish
    ? [
        { href: "/en/home", label: "Home" },
        { href: "/en/about", label: "About" },
        { href: "/en/activities", label: "Activities" },
        { href: "/en/impact", label: "Impact" },
        { href: "/en/forms", label: "Forms" },
        { href: "/en/contact", label: "Contact" }
      ]
    : [
        { href: "/fr/home", label: "Accueil" },
        { href: "/fr/about", label: "À propos" },
        { href: "/fr/activities", label: "Activités" },
        { href: "/fr/impact", label: "Impact" },
        { href: "/fr/forms", label: "Formulaires" },
        { href: "/fr/contact", label: "Contact" }
      ];

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO + NOM COMPLET — INTACT */}
	<div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
	  {/* LOGO */}
	  <Link
	    href={isEnglish ? "/en/home" : "/fr/home"}
	    className="flex items-center gap-3 max-w-[65%] md:max-w-none"
	  >
	    <Image
	      src="/hoh-logo.jpg"
	      alt="Hope Of Horizons Group"
	      width={80}
	      height={40}
	      priority
	    />
	    <div className="flex flex-col">
	      <span className="text-lg font-bold text-gray-800">
		Hope Of Horizons Group
	      </span>
	      <span className="text-xs text-gray-500 hidden sm:block">
		L’action locale, l’impact global
	      </span>
	    </div>
	  </Link>

	  {/* BOUTON HAMBURGER MOBILE */}
	  <button
	    onClick={() => setOpen(true)}
	    className="md:hidden text-blue-900 focus:outline-none absolute right-4 top-1/2 -translate-y-1/2"
	  >
	    <svg width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none">
	      <path d="M4 8h20M4 16h20M4 24h20" />
	    </svg>
	  </button>
	</div>

        {/* MENU DESKTOP — INTACT */}
        <nav className="hidden md:flex items-center gap-6">
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

          <LanguageSwitcher />
        </nav>

        {/* BOUTON HAMBURGER MOBILE — AMÉLIORÉ */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-blue-900 focus:outline-none"
        >
          <svg width="32" height="32" fill="currentColor">
            <path d="M4 8h24M4 16h24M4 24h24" />
          </svg>
        </button>
      </div>

      {/* OVERLAY — AMÉLIORÉ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENU MOBILE — AMÉLIORÉ */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">

          {/* BOUTON FERMER — AMÉLIORÉ */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-slate-600"
          >
            <svg width="28" height="28" fill="currentColor">
              <path d="M6 6l16 16M22 6L6 22" />
            </svg>
          </button>

          {/* LIENS MOBILE — INTACT MAIS PLUS BEAUX */}
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

          {/* LANG SWITCHER — INTACT */}
          <div className="pt-4 border-t">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

