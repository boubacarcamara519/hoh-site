import SectorsGrid from "@/components/activities/SectorsGrid";

export default function ActivitiesPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nos secteurs d’activité
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          HOH Group intervient dans 6 pôles stratégiques pour soutenir le développement humain,
          économique et technologique en Guinée.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Un impact multisectoriel</h2>
        <p className="text-slate-700 leading-relaxed">
          Depuis sa création, HOH Group développe des solutions innovantes dans les domaines de
          la formation, de la technologie, de l’agriculture, de l’élevage, de l’industrie,
          de l’import-export, des voyages et des services divers.  
          Chaque pôle contribue à renforcer les compétences, créer des opportunités et soutenir
          le développement durable des communautés.
        </p>
      </section>

      {/* GRID DES SECTEURS */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <SectorsGrid />
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d’un accompagnement ?</h2>
        <p className="opacity-90 mb-6">
          Contactez-nous pour en savoir plus sur nos services ou pour collaborer avec HOH Group.
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

