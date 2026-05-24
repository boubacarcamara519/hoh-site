export default function GuineaMap() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Zones d’intervention</h2>

      <p className="text-slate-700 mb-6 max-w-3xl">
        HOH intervient dans plusieurs régions de Guinée, avec des projets
        agricoles, éducatifs, technologiques et communautaires.
      </p>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <img
          src="/map-guinea.png"
          alt="Carte de la Guinée - Zones d'intervention HOH"
          className="w-full rounded"
        />
      </div>

      <ul className="list-disc pl-6 mt-4 text-slate-700 space-y-1">
        <li><strong>Conakry</strong> — Siège, formations, services</li>
        <li><strong>Kindia</strong> — Plantation d’acajou (40 ha)</li>
        <li><strong>Fria</strong> — Jardin fruitier (3 ha), arachide (5 ha)</li>
        <li><strong>Kankan</strong> — Formations & accompagnement académique</li>
      </ul>
    </section>
  );
}

