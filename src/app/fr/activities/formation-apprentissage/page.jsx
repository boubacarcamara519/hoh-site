export default function FormationPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Formation & Apprentissage</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Développer les compétences pour renforcer l’employabilité et l’autonomie.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Présentation du pôle</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group propose des programmes de formation continue, d’apprentissage
          professionnel et de renforcement de capacités destinés aux jeunes, aux
          professionnels et aux organisations. Notre objectif est de favoriser
          l’insertion professionnelle et l’autonomisation.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectifs</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Renforcer les compétences techniques et professionnelles.</li>
          <li>Faciliter l’accès à l’emploi et à l’entrepreneuriat.</li>
          <li>Accompagner les jeunes dans leur orientation et leur insertion.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services proposés</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Formations qualifiantes et certifiantes.</li>
          <li>Ateliers pratiques et coaching.</li>
          <li>Programmes d’apprentissage en entreprise.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d’une formation ?</h2>
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

