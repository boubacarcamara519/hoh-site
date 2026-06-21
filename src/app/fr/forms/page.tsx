import TabsForms from "@/components/forms/TabsForms";

export default function FormsPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Formulaires HOH
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Choisissez le formulaire adapté à votre situation. Toutes les informations
          transmises sont traitées avec confidentialité et respect.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Deux catégories de formulaires
        </h2>
        <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
          HOH Group met à votre disposition deux formulaires distincts pour répondre
          à vos besoins : l’un destiné aux <strong>professionnels et particuliers</strong>,
          l’autre aux <strong>étudiants</strong>. Merci de sélectionner celui qui correspond
          à votre profil.
        </p>
      </section>

      {/* FORM TABS */}
      <section className="container mx-auto px-6 max-w-5xl py-12">
        <TabsForms />
      </section>

      {/* CONFIDENTIALITÉ */}
      <section className="bg-slate-100 py-12 text-center">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Confidentialité & Sécurité
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Vos données sont protégées et ne seront jamais partagées avec des tiers.
          Elles sont utilisées uniquement dans le cadre de votre demande auprès de HOH Group.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d’assistance ?</h2>
        <p className="opacity-90 mb-6">
          Notre équipe est disponible pour vous accompagner dans votre démarche.
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

