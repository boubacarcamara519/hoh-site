export default function FormationPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Training & Learning</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Developing skills to strengthen employability and autonomy.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Overview of the Division</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group offers continuing education programs, professional training,
          and capacity‑building initiatives for youth, professionals, and organizations.
          Our goal is to promote employability and empowerment.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectives</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Strengthen technical and professional skills.</li>
          <li>Facilitate access to employment and entrepreneurship.</li>
          <li>Support young people in their career orientation and integration.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services Offered</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Qualifying and certification training programs.</li>
          <li>Practical workshops and coaching.</li>
          <li>In‑company apprenticeship programs.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for training?</h2>
        <a
          href="/en/contact"
          className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-slate-200 transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}

