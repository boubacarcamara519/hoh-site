export default function ImportExportPage() {
  return (
    <main className="w-full">

      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Import‑Export</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Faciliter les échanges commerciaux et la distribution de produits.
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Présentation du pôle</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group intervient dans l’importation et l’exportation de produits
          essentiels, en assurant la logistique, la distribution et la qualité.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectifs</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Faciliter les échanges commerciaux.</li>
          <li>Assurer la disponibilité des produits.</li>
          <li>Garantir la qualité et la conformité.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services proposés</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Importation de produits alimentaires et industriels.</li>
          <li>Exportation de produits locaux.</li>
          <li>Logistique et distribution.</li>
        </ul>
      </section>

      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d’un partenaire commercial ?</h2>
        <a
          href="/fr/contact"
          className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-slate-200 transition"
        >
          Nous contacter
        </a>
      </section>

    </main>
  );
}

