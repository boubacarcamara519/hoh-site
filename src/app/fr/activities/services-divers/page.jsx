export default function ServicesDiversPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Services Divers</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Des prestations multiservices pour particuliers et entreprises.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Présentation du pôle</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group propose une large gamme de services pour répondre aux besoins
          quotidiens des particuliers et des entreprises. Notre objectif est de fournir
          des solutions fiables, rapides et adaptées à chaque situation.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectifs</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Offrir des solutions pratiques et efficaces.</li>
          <li>Simplifier le quotidien des clients.</li>
          <li>Garantir un service professionnel et accessible.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services proposés</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Assistance administrative.</li>
          <li>Services de nettoyage et entretien.</li>
          <li>Support logistique et organisationnel.</li>
          <li>Services personnalisés selon les besoins.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d’un service ?</h2>
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

