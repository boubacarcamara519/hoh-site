export default function ImportExportPage() {
  return (
    <main className="w-full">

      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Import‑Export</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Facilitating commercial exchanges and product distribution.
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Overview of the Division</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group is involved in the import and export of essential goods,
          ensuring logistics, distribution, and quality control.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectives</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Facilitate commercial exchanges.</li>
          <li>Ensure product availability.</li>
          <li>Guarantee quality and compliance.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services Offered</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Import of food and industrial products.</li>
          <li>Export of local goods.</li>
          <li>Logistics and distribution.</li>
        </ul>
      </section>

      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for a commercial partner?</h2>
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

