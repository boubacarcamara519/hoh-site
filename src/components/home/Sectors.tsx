const sectors = [
  { title: "Formation & apprentissage", icon: "🎓" },
  { title: "Technologie & innovation digitale", icon: "💻" },
  { title: "Agriculture", icon: "🌱" },
  { title: "Élevage", icon: "🐄" },
  { title: "Industrie", icon: "🏭" },
  { title: "Import-Export", icon: "🚢" },
  { title: "Voyages & accompagnement", icon: "✈️" }
];

export default function Sectors() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6">Nos secteurs d'activité</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="bg-white border rounded-lg p-4 shadow-sm flex gap-3"
            >
              <div className="text-2xl">{s.icon}</div>

              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-700">
                  Découvrir nos actions dans ce domaine.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

