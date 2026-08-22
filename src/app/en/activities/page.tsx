import SectorsGrid from "@/components/activities/SectorsGrid_en";

export default function ActivitiesPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Business Sectors
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          HOH Group operates across 8 strategic sectors to support human,
          economic, and technological development in Guinea.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">A Multisector Impact</h2>
        <p className="text-slate-700 leading-relaxed">
          Since its creation, HOH Group has been developing innovative solutions
          in training, technology, agriculture, livestock, industry, import-export,
          travel services, and various professional activities.
          Each sector contributes to strengthening skills, creating opportunities,
          and supporting the sustainable development of communities.
        </p>
      </section>

      {/* SECTORS GRID */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <SectorsGrid />
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need support?</h2>
        <p className="opacity-90 mb-6">
          Contact us to learn more about our services or to collaborate with HOH Group.
        </p>

        <a
          href="/en/contact"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Contact us
        </a>
      </section>

    </main>
  );
}

