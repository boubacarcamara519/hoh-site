export default function PartnershipPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          HOH Group Partnerships
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Let’s build high‑impact human, economic, and social projects together.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Why become a partner?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group collaborates with institutions, companies, NGOs, and local actors
          to develop sustainable initiatives in Guinea. Our partnerships help amplify
          the impact of our actions in training, agriculture, technology, import‑export,
          and community development.
        </p>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Types of Partnerships
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Institutional Partnership
              </h3>
              <p className="text-slate-600">
                Collaboration with public institutions to support training programs,
                agriculture initiatives, and rural development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Corporate Partnership
              </h3>
              <p className="text-slate-600">
                Cooperation with companies for technological, agro‑industrial,
                logistical, or import‑export projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                NGO & Association Partnership
              </h3>
              <p className="text-slate-600">
                Joint actions to empower young people, support rural communities,
                and promote education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Benefits for Our Partners
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>✔ Access to a multisector network in Guinea.</li>
          <li>✔ Visibility across our projects and initiatives.</li>
          <li>✔ Collaboration on high‑impact programs.</li>
          <li>✔ Expertise in training, agriculture, and technology.</li>
          <li>✔ Social engagement and contribution to sustainable development.</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Partnership Process
          </h2>

          <ol className="space-y-6 text-slate-700 max-w-3xl mx-auto">
            <li>
              <strong>1. Initial contact:</strong> reach out through our form or WhatsApp.
            </li>
            <li>
              <strong>2. Needs assessment:</strong> review of the project or collaboration proposal.
            </li>
            <li>
              <strong>3. HOH proposal:</strong> development of a tailored action plan.
            </li>
            <li>
              <strong>4. Agreement & launch:</strong> implementation of the partnership.
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
          href="/en/forms"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Fill out the partnership form
        </a>
      </section>

    </main>
  );
}

