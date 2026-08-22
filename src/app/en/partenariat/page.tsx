export default function PartnershipPage() {
  const partners: string[] = [
    "CFP de Kindia.jpeg",
    "ENPETP.png",
    "Unversité Roi Mohamed VI de Conakry.jpeg",
    "Kalinga Institute of Industrial Technology (KIIT University).jpeg",
    "Université Julius Nyéréré de kankan (UJNK ).jpeg",
    "Université Ahmadou Dieng.jpeg",
    "Toroko Services.jpeg",
  ];

  // Function to remove extension and display a clean name
  const cleanName = (file: string): string =>
    file
      .replace(/\.(jpeg|jpg|png)$/i, "")
      .replace(
        /WhatsApp Image \d{4}-\d{2}-\d{2} at \d{2}\.\d{2}\.\d{2}/i,
        "Partner"
      )
      .replace(/_/g, " ");

  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          HOH Group Partnerships
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Let’s build together projects with strong human, economic, and social impact.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Why become a partner?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group collaborates with institutions, companies, NGOs, and local stakeholders
          to develop sustainable initiatives in Guinea. Our partnerships help amplify the
          impact of our actions in education, agriculture, technology, import‑export,
          and community development.
        </p>
      </section>

      {/* TYPES OF PARTNERSHIPS */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Types of partnerships
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Institutional partnership
              </h3>
              <p className="text-slate-600">
                Collaboration with public institutions to support training,
                agricultural, and rural development programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Corporate partnership
              </h3>
              <p className="text-slate-600">
                Cooperation with companies on technological, agro‑industrial,
                logistics, or import‑export projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                NGO & association partnership
              </h3>
              <p className="text-slate-600">
                Joint actions to strengthen youth empowerment, support rural
                communities, and promote education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐️ OUR PARTNERS */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Our partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">

          {partners.map((img, index) => (
            <div key={index} className="text-center">
              <div
                className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={`/partenaires/${img}`}
                  alt={cleanName(img)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Partner name */}
              <p className="mt-3 text-sm font-medium text-slate-700">
                {cleanName(img)}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* BENEFITS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Benefits for our partners
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>✔ Access to a multisector network in Guinea.</li>
          <li>✔ Visibility across our projects and initiatives.</li>
          <li>✔ Collaboration on high‑impact initiatives.</li>
          <li>✔ Expertise in education, agriculture, and technology.</li>
          <li>✔ Social commitment and contribution to sustainable development.</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Partnership process
          </h2>

          <ol className="space-y-6 text-slate-700 max-w-3xl mx-auto">
            <li>
              <strong>1. Initial contact:</strong> reach out through our form or WhatsApp.
            </li>
            <li>
              <strong>2. Needs analysis:</strong> assessment of the project or proposed collaboration.
            </li>
            <li>
              <strong>3. HOH proposal:</strong> development of a tailored action plan.
            </li>
            <li>
              <strong>4. Signing & launch:</strong> implementation of the partnership.
            </li>
          </ol>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to become a partner?</h2>
        <p className="opacity-90 mb-6">
          Contact us to discuss your project or organization.
        </p>

        <a
          href="/fr/forms"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Fill out the partner form
        </a>
      </section>

    </main>
  );
}

