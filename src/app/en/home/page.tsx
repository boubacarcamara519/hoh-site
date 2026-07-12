export default function HomePage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Hope of Horizons Group
        </h1>
        <p className="text-xl opacity-90 mb-6">
          Local action, global impact
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="/en/activities"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-200 transition"
          >
            Explore our activities
          </a>
          <a
            href="/en/contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact us
          </a>
          <a
            href="/en/partenariat"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            Become a partner
          </a>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Who are we?</h2>
        <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
          Hope of Horizons Group is a multisector company founded in 2024,
          operating in training, technology, agriculture, import-export,
          travel services, and various professional solutions. We are committed
          to sustainable development and creating a positive impact within communities.
        </p>
      </section>

      {/* KEY FIGURES */}
      <section className="bg-slate-100 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Key figures
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-extrabold text-blue-700">2024</p>
            <p className="text-slate-600">Year of creation</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">11</p>
            <p className="text-slate-600">Team members</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">+2000</p>
            <p className="text-slate-600">Beneficiaries trained</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">40 ha</p>
            <p className="text-slate-600">Agricultural land & plantations</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">6</p>
            <p className="text-slate-600">Business sectors</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-700">4</p>
            <p className="text-slate-600">Regions of operation</p>
          </div>
        </div>
      </section>

      {/* BUSINESS SECTORS */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Our business sectors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Training & Learning", link: "/en/activities/training-learning" },
            { title: "Technology & Digital Innovation", link: "/en/activities/technology-innovation" },
            { title: "Agriculture, Livestock & Industry", link: "/en/activities/agriculture-livestock-industry" },
            { title: "Import-Export", link: "/en/activities/import-export" },
            { title: "Travel & Administrative Support", link: "/en/activities/travel" },
            { title: "General Services", link: "/en/activities/general-services" },
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

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to collaborate with HOH?</h2>
        <p className="opacity-90 mb-6">
          Together, let’s build projects with lasting impact.
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

