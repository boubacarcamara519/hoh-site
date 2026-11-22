type SocialLinksProps = {
  locale: "fr" | "en";
};

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/hopeofhorizonsg",
    icon: (
      <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.406l-5.8-7.584-6.64 7.584h-3.68l8.6-9.83L.99 1.153h7.594l5.243 6.93zm-1.29 19.49h2.039L7.893 3.24H5.704z" />
    ),
    iconClass: "bg-slate-950 text-white"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hope-of-horizons-group",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
    iconClass: "bg-[#0A66C2] text-white"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1edKzyCkJ8/?mibextid=wwXIfr",
    icon: (
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.016 4.388 11.001 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.02 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.976h-1.513c-1.491 0-1.956.931-1.956 1.886v2.262h3.328l-.532 3.469h-2.796v8.385C19.612 23.074 24 18.089 24 12.073z" />
    ),
    iconClass: "bg-[#1877F2] text-white"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hopeofhorizonsgroup2025/",
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.25" />
      </>
    ),
    iconClass: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white"
  }
];

export default function SocialLinks({ locale }: SocialLinksProps) {
  const heading =
    locale === "fr" ? "Retrouvez-nous sur les réseaux" : "Connect with us";
  const description =
    locale === "fr"
      ? "Suivez nos actualités et nos projets."
      : "Follow our latest news and projects.";

  return (
    <section
      aria-labelledby="social-links-heading"
      className="py-2 text-center"
    >
      <h2
        id="social-links-heading"
        className="text-2xl font-semibold text-slate-800"
      >
        {heading}
      </h2>
      <p className="mt-2 text-slate-600">{description}</p>

      <nav
        aria-label={locale === "fr" ? "Réseaux sociaux" : "Social media"}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-40 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-hohBlue/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hohBlue"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${social.iconClass}`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                {social.icon}
              </svg>
            </span>
            <span className="font-semibold">{social.name}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
