export default function VoyagesPage() {
  return (
    <main className="w-full">

      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Travel & Administrative Support</h1>
        <p className="opacity-90 max-w-2xl mx-auto">
          Simplifying your procedures and facilitating your mobility.
        </p>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">Overview of the Division</h2>
        <p className="text-slate-700 leading-relaxed">
          HOH Group supports individuals and professionals in their administrative
          procedures, travel plans, and international mobility projects.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Objectives</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Simplify administrative procedures.</li>
          <li>Support mobility and travel projects.</li>
          <li>Ensure reliable and fast service delivery.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Services Offered</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Visa assistance and documentation.</li>
          <li>Travel planning and organization.</li>
          <li>Administrative support.</li>
        </ul>
      </section>

      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need assistance?</h2>
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

