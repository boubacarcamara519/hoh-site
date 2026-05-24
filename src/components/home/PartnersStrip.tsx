const partners = ["Partenaire 1", "Partenaire 2", "Partenaire 3"];

export default function PartnersStrip() {
  return (
    <section className="py-8 bg-slate-100 border-y">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">
          Partenaires & collaborations
        </p>

        <div className="flex flex-wrap gap-6 items-center">
          {partners.map((p) => (
            <div
              key={p}
              className="px-4 py-2 bg-white border rounded text-sm text-slate-700"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

