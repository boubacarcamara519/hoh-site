export default function PartnershipPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Partenariats HOH Group
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Construisons ensemble des projets à fort impact humain, économique et social.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Pourquoi devenir partenaire ?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group collabore avec des institutions, entreprises, ONG et acteurs locaux
          pour développer des initiatives durables en Guinée. Nos partenariats permettent
          d’amplifier l’impact de nos actions dans la formation, l’agriculture, la technologie,
          l’import‑export et le développement communautaire.
        </p>
      </section>

      {/* TYPES DE PARTENARIATS */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Types de partenariats
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Partenariat institutionnel
              </h3>
              <p className="text-slate-600">
                Collaboration avec les institutions publiques pour soutenir les programmes
                de formation, d’agriculture et de développement rural.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Partenariat entreprise
              </h3>
              <p className="text-slate-600">
                Coopération avec les entreprises pour des projets technologiques,
                agro‑industriels, logistiques ou d’import‑export.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Partenariat ONG & associations
              </h3>
              <p className="text-slate-600">
                Actions conjointes pour renforcer l’autonomie des jeunes, soutenir
                les communautés rurales et promouvoir l’éducation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Avantages pour nos partenaires
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>✔ Accès à un réseau multisectoriel en Guinée.</li>
          <li>✔ Visibilité sur nos projets et actions.</li>
          <li>✔ Collaboration sur des initiatives à fort impact.</li>
          <li>✔ Expertise dans la formation, l’agriculture et la technologie.</li>
          <li>✔ Engagement social et contribution au développement durable.</li>
        </ul>
      </section>

      {/* PROCESSUS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Processus de partenariat
          </h2>

          <ol className="space-y-6 text-slate-700 max-w-3xl mx-auto">
            <li>
              <strong>1. Premier contact :</strong> prise de contact via notre formulaire ou WhatsApp.
            </li>
            <li>
              <strong>2. Analyse des besoins :</strong> étude du projet ou de la collaboration envisagée.
            </li>
            <li>
              <strong>3. Proposition HOH :</strong> élaboration d’un plan d’action adapté.
            </li>
            <li>
              <strong>4. Signature & lancement :</strong> mise en œuvre du partenariat.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à devenir partenaire ?</h2>
        <p className="opacity-90 mb-6">
          Contactez‑nous pour discuter de votre projet ou de votre organisation.
        </p>

        <a
          href="/fr/forms"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Remplir le formulaire partenaire
        </a>
      </section>

    </main>
  );
}

