const stats = [
  { label: "Bénéficiaires formés", value: "2000+" },
  { label: "Hectares d'acajou", value: "40" },
  { label: "Jardin fruitier (ha)", value: "3" },
  { label: "Cheptel total", value: "170+" }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6">Chiffres clés</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-50 border rounded-lg p-4 text-center"
            >
              <p className="text-2xl font-bold text-hohBlue">{s.value}</p>
              <p className="text-xs text-slate-700">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

