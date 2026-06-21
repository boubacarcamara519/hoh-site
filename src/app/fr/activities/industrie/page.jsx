export default function IndustriePage() {
  return (
    <main className="w-full">

      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Industrie & Transformation</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Valoriser les ressources locales grâce à la transformation industrielle.
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Présentation du pôle</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group investit dans la transformation agroalimentaire et la production
          locale pour créer de la valeur ajoutée et soutenir l’économie nationale.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectifs</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Valoriser les produits agricoles.</li>
          <li>Créer des chaînes de production locales.</li>
          <li>Renforcer l’autonomie industrielle.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services proposés</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Transformation agroalimentaire.</li>
          <li>Conditionnement et distribution.</li>
          <li>Accompagnement technique.</li>
        </ul>
      </section>

      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Un projet industriel ?</h2>
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

