export default function ImpactPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Impact & Achievements
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          A concrete commitment to human, economic, and social development.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <p className="text-slate-700 leading-relaxed">
          Since its creation, HOH Group has been working on the ground to strengthen skills,
          support rural communities, develop sustainable agriculture, and guide young people
          toward autonomy. Our impact is measurable, tangible, and continuously growing.
        </p>
      </section>

      {/* KEY FIGURES */}
      <section className="bg-slate-100 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Key Figures
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-extrabold text-blue-700">2000+</p>
            <p className="text-slate-600">Beneficiaries trained</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">40 ha</p>
            <p className="text-slate-600">Mahogany plantations</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">3 ha</p>
            <p className="text-slate-600">Fruit garden</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">5 ha</p>
            <p className="text-slate-600">Peanut production</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">170+</p>
            <p className="text-slate-600">Livestock heads</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">4</p>
            <p className="text-slate-600">Cities of intervention</p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Achievements 2014 – 2024
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>✔ Establishment of 40 hectares of mahogany plantations.</li>
          <li>✔ Training of more than 2000 young people and professionals.</li>
          <li>✔ Development of 3 hectares of fruit gardens.</li>
          <li>✔ Annual peanut production across 5 hectares.</li>
          <li>✔ Expansion of livestock to over 170 heads.</li>
          <li>✔ Operations in 4 regions: Conakry, Kindia, Fria, Kankan.</li>
        </ul>
      </section>

      {/* INTERVENTION ZONES */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Intervention Zones
        </h2>

        <img
          src="/images/impact/carte-guinee.png"
          alt="HOH intervention zones map"
          className="w-full max-w-3xl mx-auto mb-10 rounded-lg shadow"
        />

        <ul className="grid md:grid-cols-2 gap-6 text-slate-700">
          <li><strong>Conakry:</strong> Training, services, administrative support.</li>
          <li><strong>Kindia:</strong> Mahogany plantations and agricultural projects.</li>
          <li><strong>Fria:</strong> Agricultural production and livestock.</li>
          <li><strong>Kankan:</strong> Rural development and livestock expansion.</li>
        </ul>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-50 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Gallery & Visual Annexes
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
              alt="HOH project"
              className="rounded-xl shadow object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      {/* FUTURE PROJECTS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Future Projects (2025 – 2030)
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>🚀 Expansion of plantations to 100 hectares.</li>
          <li>🚀 Creation of the HOH Academy training center.</li>
          <li>🚀 Development of an agro‑processing unit.</li>
          <li>🚀 Professional integration program for 5000 young people.</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Fatoumata",
              text: "Thanks to HOH, I was able to receive training and quickly find a job.",
              image: "/images/impact/fatoumata.jpg",
            },
            {
              name: "Mamadou Bah",
              text: "The agricultural program helped us increase our production.",
              image: "/images/impact/mamadou.jpg",
            },
            {
              name: "Aïssatou",
              text: "Professional and human support. Thank you HOH!",
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

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in collaborating with HOH?</h2>
        <p className="opacity-90 mb-6">
          Contact us to learn more about our projects and initiatives.
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

