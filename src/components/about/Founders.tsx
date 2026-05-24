export default function Founders() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Les fondateurs</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <img
            src="/founders/moussa.jpg"
            alt="Moussa Camara"
            className="rounded mb-3 w-full h-64 object-cover"
          />
          <h3 className="font-semibold text-lg">Moussa Camara</h3>
          <p className="text-sm text-slate-700">Stratégie, Partenariats & Rayonnement</p>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <img
            src="/founders/alseny.jpg"
            alt="Alseny Cissé"
            className="rounded mb-3 w-full h-64 object-cover"
          />
          <h3 className="font-semibold text-lg">Alseny Cissé</h3>
          <p className="text-sm text-slate-700">Opérations, Développement & Territoires</p>
        </div>

      </div>
    </section>
  );
}

