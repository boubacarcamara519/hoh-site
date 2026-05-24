const sectors = [
  {
    title: "Formation continue & apprentissage",
    icon: "🎓",
    desc:
      "Formations en informatique, communication, marketing, employabilité, accompagnement des universités et instituts."
  },
  {
    title: "Technologie & innovation digitale",
    icon: "💻",
    desc:
      "Création de sites web, applications, maintenance informatique, solutions digitales et accompagnement technologique."
  },
  {
    title: "Agriculture",
    icon: "🌱",
    desc:
      "Plantations d’acajou, cultures vivrières, jardin fruitier, projets agricoles durables."
  },
  {
    title: "Élevage",
    icon: "🐄",
    desc:
      "Élevage de vaches, moutons et poulets, avec une approche adaptée au contexte local."
  },
  {
    title: "Industrie & transformation",
    icon: "🏭",
    desc:
      "Transformation locale : jus, huile d’arachide, pâte d’arachide, biscuits à base d’acajou."
  },
  {
    title: "Import-Export",
    icon: "🚢",
    desc:
      "Approvisionnement en matériels, exportation de produits agricoles, ouverture vers les marchés internationaux."
  },
  {
    title: "Voyages & accompagnement administratif",
    icon: "✈️",
    desc:
      "Études à l’étranger, orientation académique, accompagnement administratif, mobilité internationale."
  },
  {
    title: "Prestations de services divers",
    icon: "🧩",
    desc:
      "Création de supports visuels, location/vente de matériel informatique, animation d’événements."
  }
];

export default function SectorsGrid() {
  return (
    <section className="py-6">
      <div className="grid md:grid-cols-3 gap-6">
        {sectors.map((s) => (
          <div
            key={s.title}
            className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-3">{s.icon}</div>

            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>

            <p className="text-sm text-slate-700 leading-relaxed">{s.desc}</p>

            <div className="mt-4">
              <a
                href="#"
                className="text-hohBlue font-semibold hover:underline"
              >
                En savoir plus →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

