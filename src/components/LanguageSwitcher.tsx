"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLang = (lang: "fr" | "en") => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => changeLang("fr")}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-200 transition"
      >
        <Image src="/flags/fr.png" alt="French flag" width={20} height={14} />
        FR
      </button>

      <span className="text-slate-400">|</span>

      <button
        onClick={() => changeLang("en")}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-200 transition"
      >
        <Image src="/flags/gb.png" alt="UK flag" width={20} height={14} />
        EN
      </button>
    </div>
  );
}

