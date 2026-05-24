const stats = [
  { value: "2000+", label: "Bénéficiaires formés depuis 2017" },
  { value: "40 ha", label: "Plantations d'acajou à Kindia" },
  { value: "3 ha", label: "Jardin fruitier à Fria" },
  { value: "5 ha", label: "Culture d'arachide à Fria" },
  { value: "170+", label: "Cheptel total (vaches, moutons, poulets)" },
  { value: "4 villes", label: "Présence : Conakry, Kindia, Kankan, Fria" }
];

export default function ImpactStats() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Chiffres d’impact</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border rounded-lg p-6 shadow-sm text-center"
          >
            <p className="text-3xl font-bold text-hohBlue">{s.value}</p>
            <p className="text-sm text-slate-700 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

