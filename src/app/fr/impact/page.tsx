export default function ImpactPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Impact & Réalisations
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Un engagement concret pour le développement humain, économique et social.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <p className="text-slate-700 leading-relaxed">
          Depuis sa création, HOH Group agit sur le terrain pour renforcer les compétences,
          soutenir les communautés rurales, développer l’agriculture durable et accompagner
          les jeunes vers l’autonomie. Notre impact est mesurable, concret et en croissance.
        </p>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-slate-100 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Nos chiffres clés
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-extrabold text-blue-700">2000+</p>
            <p className="text-slate-600">Bénéficiaires formés</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">40 ha</p>
            <p className="text-slate-600">Plantations d’acajou</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">3 ha</p>
            <p className="text-slate-600">Jardin fruitier</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">5 ha</p>
            <p className="text-slate-600">Production d’arachide</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">170+</p>
            <p className="text-slate-600">Têtes de cheptel</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">4</p>
            <p className="text-slate-600">Villes d’intervention</p>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Réalisations 2014 – 2024
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>✔ Mise en place de 40 hectares de plantations d’acajou.</li>
          <li>✔ Formation de plus de 2000 jeunes et professionnels.</li>
          <li>✔ Développement de 3 hectares de jardins fruitiers.</li>
          <li>✔ Production annuelle d’arachide sur 5 hectares.</li>
          <li>✔ Constitution d’un cheptel de plus de 170 têtes.</li>
          <li>✔ Interventions dans 4 régions : Conakry, Kindia, Fria, Kankan.</li>
        </ul>
      </section>

      {/* ZONES D’INTERVENTION */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Zones d’intervention
        </h2>

        <img
          src="/images/impact/carte-guinee.png"
          alt="Carte des zones d'intervention HOH"
          className="w-full max-w-3xl mx-auto mb-10 rounded-lg shadow"
        />

        <ul className="grid md:grid-cols-2 gap-6 text-slate-700">
          <li><strong>Conakry :</strong> Formations, services, accompagnement administratif.</li>
          <li><strong>Kindia :</strong> Plantations d’acajou et projets agricoles.</li>
          <li><strong>Fria :</strong> Production agricole et élevage.</li>
          <li><strong>Kankan :</strong> Développement rural et cheptel.</li>
        </ul>
      </section>

      {/* GALERIE */}
      <section className="bg-slate-50 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Galerie & Annexes visuelles
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "/images/impact/photo1.jpg",
            "/images/impact/photo2.jpg",
            "/images/impact/photo3.jpg",
            "/images/impact/photo4.jpg",
            "/images/impact/photo5.jpg",
            "/images/impact/photo6.jpg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Projet HOH"
              className="rounded-xl shadow object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      {/* PROJETS FUTURS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Projets futurs (2025 – 2030)
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>🚀 Extension des plantations à 100 hectares.</li>
          <li>🚀 Création d’un centre de formation HOH Academy.</li>
          <li>🚀 Développement d’une unité de transformation agroalimentaire.</li>
          <li>🚀 Programme d’insertion professionnelle pour 5000 jeunes.</li>
        </ul>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-slate-50 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Témoignages
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Fatoumata",
              text: "Grâce à HOH, j’ai pu suivre une formation et trouver un emploi rapidement.",
              image: "/images/impact/fatoumata.jpg",
            },
            {
              name: "Mamadou Bah",
              text: "Le programme agricole nous a permis d’augmenter notre production.",
              image: "/images/impact/mamadou.jpg",
            },
            {
              name: "Aïssatou",
              text: "Un accompagnement professionnel et humain. Merci HOH !",
              image: "/images/impact/aissatou.jpg",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <p className="italic text-slate-600 mb-2">“{t.text}”</p>
              <p className="font-semibold text-blue-700">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Envie de collaborer avec HOH ?</h2>
        <p className="opacity-90 mb-6">
          Contactez-nous pour en savoir plus sur nos projets et nos actions.
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

