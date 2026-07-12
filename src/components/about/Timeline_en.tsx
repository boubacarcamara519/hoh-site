export default function Timeline() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Our History</h1>

      <ul className="border-l border-slate-300 pl-6 space-y-6">

        <li>
          <p className="text-xs text-slate-500">2013</p>
          <h3 className="font-semibold">Meeting of the Founders</h3>
          <p className="text-sm text-slate-700">
            Alseny Cissé and Moussa Camara met during a high‑school exam preparation session in Guinea.
          </p>
        </li>

        <li>
          <p className="text-xs text-slate-500">2017 – 2023</p>
          <h3 className="font-semibold">Development of Activities</h3>
          <p className="text-sm text-slate-700">
            Training programs, academic support, technological initiatives, and agricultural projects
            carried out in several cities across the country.
          </p>
        </li>

        <li>
          <p className="text-xs text-slate-500">2024</p>
          <h3 className="font-semibold">Official Creation of HOH</h3>
          <p className="text-sm text-slate-700">
            Hope of Horizons Group was officially registered in Matoto, Conakry.
          </p>
        </li>

      </ul>
    </section>
  );
}

