export default function LogoSlogan() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Logo & Slogan</h2>

      <div className="space-y-4">

        <p className="text-slate-700">
          The HOH logo symbolizes growth, elevation, and new horizons.
          The triangles represent the diversity of our activity sectors converging toward a shared objective:
          human and economic development.
        </p>

        <p className="text-slate-700">
          The colors illustrate the multisector nature of HOH:
        </p>

        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li>
            <span className="font-semibold text-hohBlue">Blue</span> — Education & Training
          </li>
          <li>
            <span className="font-semibold text-black">Black</span> — Technology
          </li>
          <li>
            <span className="font-semibold text-hohGray">Gray</span> — Services
          </li>
          <li>
            <span className="font-semibold text-hohGreen">Green</span> — Agriculture & Livestock
          </li>
          <li>
            <span className="font-semibold text-hohOrange">Orange</span> — Import‑Export
          </li>
        </ul>

        <p className="text-slate-700 font-semibold text-lg">
          “Local action, global impact”
        </p>

      </div>
    </section>
  );
}

