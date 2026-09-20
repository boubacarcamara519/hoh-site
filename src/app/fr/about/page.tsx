import Timeline from "@/components/about/Timeline";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Founders from "@/components/about/Founders";
import LogoSlogan from "@/components/about/LogoSlogan";

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          À propos de Hope of Horizons Group
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Une vision, une mission, un engagement pour un impact durable.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Qui sommes-nous ?</h2>
        <p className="text-slate-700 leading-relaxed">
          Hope of Horizons Group est une entreprise multisectorielle fondée en 2024,
          engagée dans la formation, la technologie, l’agriculture, l’import-export,
          les voyages et les services divers. Notre objectif est de créer un impact
          durable dans les communautés grâce à des solutions innovantes et inclusives.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <Timeline />
      </section>

      {/* MISSION - VISION - VALEURS */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <MissionVisionValues />
        </div>
      </section>

      {/* FONDATEURS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <Founders />
      </section>

      {/* LOGO & SLOGAN */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <LogoSlogan />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Envie d’en savoir plus ?</h2>
        <p className="opacity-90 mb-6">
          Découvrez nos activités ou contactez-nous pour collaborer.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/fr/activities"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-200 transition"
          >
            Nos activités
          </a>
          <a
            href="/fr/contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Nous contacter
          </a>
        </div>
      </section>

    </main>
  );
}

