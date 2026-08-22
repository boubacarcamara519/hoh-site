export default function HomePage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Bienvenue chez Hope of Horizons Group
        </h1>
        <p className="text-xl opacity-90 mb-6">
          L’action locale, l’impact global
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="/fr/activities"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-200 transition"
          >
            Découvrir nos activités
          </a>
          <a
            href="/fr/contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Nous contacter
          </a>
          <a
            href="/fr/partenariat"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            Devenir partenaire
          </a>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Qui sommes-nous ?</h2>
        <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
          Hope of Horizons Group est une entreprise multisectorielle fondée en 2024,
          engagée dans la formation, la technologie, l’agriculture, l’import-export,
          les voyages et les services divers. Nous œuvrons pour un développement durable
          et un impact positif dans les communautés.
        </p>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-slate-100 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Nos chiffres clés
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-extrabold text-blue-700">2024</p>
            <p className="text-slate-600">Année de création</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">11</p>
            <p className="text-slate-600">Collaborateurs</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">+2000</p>
            <p className="text-slate-600">Bénéficiaires formés</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">40 ha</p>
            <p className="text-slate-600">Plantations & agriculture</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">8</p>
            <p className="text-slate-600">Secteurs d’activité</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">4</p>
            <p className="text-slate-600">Régions d’intervention</p>
          </div>
        </div>
      </section>

      {/* SECTEURS D’ACTIVITÉ */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Nos secteurs d’activité
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Formation & Apprentissage", link: "/fr/activities/formation-apprentissage" },
            { title: "Technologie & Innovation Digitale", link: "/fr/activities/technologie-innovation" },
            { title: "Agriculture", link: "/fr/activities/agriculture" },
            { title: "Élevage", link: "/fr/activities/elevage" },
            { title: "Industrie", link: "/fr/activities/industrie" },
            { title: "Import-Export", link: "/fr/activities/import-export" },
            { title: "Voyages & Accompagnement Administratif", link: "/fr/activities/voyages" },
            { title: "Services Divers", link: "/fr/activities/services-divers" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à collaborer avec HOH ?</h2>
        <p className="opacity-90 mb-6">
          Ensemble, construisons des projets à impact durable.
        </p>
        <a
          href="/fr/contact"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Nous contacter
        </a>
      </section>

    </main>
  );
}

