export default function ServicesDiversPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Various Services</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Multi‑service solutions for individuals and businesses.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Overview of the Division</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group offers a wide range of services designed to meet the daily needs
          of individuals and businesses. Our goal is to provide reliable, fast, and
          tailored solutions for every situation.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectives</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Provide practical and efficient solutions.</li>
          <li>Simplify clients’ daily tasks.</li>
          <li>Ensure professional and accessible service delivery.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services Offered</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Administrative assistance.</li>
          <li>Cleaning and maintenance services.</li>
          <li>Logistical and organizational support.</li>
          <li>Customized services based on specific needs.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a service?</h2>
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

