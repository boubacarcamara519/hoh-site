const sectors = [
  {
    title: "Formation & Apprentissage",
    description:
      "Programmes de formation continue, renforcement de capacités, insertion professionnelle.",
    image: "/images/activities/formation.jpg",
    link: "/fr/activities/formation-apprentissage",
  },
  {
    title: "Technologie & Innovation Digitale",
    description:
      "Solutions numériques, développement web, outils digitaux, automatisation.",
    image: "/images/activities/technologie.jpg",
    link: "/fr/activities/technologie-innovation",
  },
  {
    title: "Agriculture",
    description:
      "Production agricole, plantations, gestion durable des ressources.",
    image: "/images/activities/agriculture.jpg",
    link: "/fr/activities/agriculture",
  },
  {
    title: "Élevage",
    description:
      "Production animale, gestion de cheptel, élevage moderne.",
    image: "/images/activities/elevage.jpg",
    link: "/fr/activities/elevage",
  },
  {
    title: "Industrie & Transformation",
    description:
      "Transformation agroalimentaire, production locale, valorisation des ressources.",
    image: "/images/activities/industrie.jpg",
    link: "/fr/activities/industrie",
  },
  {
    title: "Import‑Export",
    description:
      "Commerce international, logistique, distribution de produits.",
    image: "/images/activities/import-export.jpg",
    link: "/fr/activities/import-export",
  },
  {
    title: "Voyages & Accompagnement Administratif",
    description:
      "Assistance voyage, documents administratifs, mobilité internationale.",
    image: "/images/activities/voyages.jpg",
    link: "/fr/activities/voyages",
  },
  {
    title: "Services Divers",
    description:
      "Prestations multiservices pour particuliers et entreprises.",
    image: "/images/activities/services.jpg",
    link: "/fr/activities/services-divers",
  },
];

export default function SectorsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {sectors.map((sector, index) => (
        <a
          key={index}
          href={sector.link}
          className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
        >
          <img
            src={sector.image}
            alt={sector.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {sector.title}
            </h3>
            <p className="text-slate-600 text-sm">{sector.description}</p>
            <p className="text-blue-600 font-semibold mt-4">En savoir plus →</p>
          </div>
        </a>
      ))}
    </div>
  );
}

