export default function LogoSlogan() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Logo & Slogan</h2>

      <div className="space-y-4">

        <p className="text-slate-700">
          Le logo de HOH symbolise la croissance, l’élévation et les nouveaux horizons.
          Les triangles représentent la diversité des secteurs d’activité convergeant vers un objectif commun :
          le développement humain et économique.
        </p>

        <p className="text-slate-700">
          Les couleurs illustrent la nature multisectorielle de HOH :
        </p>

        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><span className="font-semibold text-hohBlue">Bleu</span> — Éducation & formation</li>
          <li><span className="font-semibold text-black">Noir</span> — Technologie</li>
          <li><span className="font-semibold text-hohGray">Gris</span> — Services</li>
          <li><span className="font-semibold text-hohGreen">Vert</span> — Agriculture & élevage</li>
          <li><span className="font-semibold text-hohOrange">Orange</span> — Import-export</li>
        </ul>

        <p className="text-slate-700 font-semibold text-lg">
          « L’action locale, l’impact global »
        </p>

      </div>
    </section>
  );
}

