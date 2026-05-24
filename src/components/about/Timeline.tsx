export default function Timeline() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Notre histoire</h1>

      <ul className="border-l border-slate-300 pl-6 space-y-6">

        <li>
          <p className="text-xs text-slate-500">2013</p>
          <h3 className="font-semibold">Rencontre des fondateurs</h3>
          <p className="text-sm text-slate-700">
            Alseny Cissé et Moussa Camara se rencontrent lors d’une séance de révision du baccalauréat en Guinée.
          </p>
        </li>

        <li>
          <p className="text-xs text-slate-500">2017 – 2023</p>
          <h3 className="font-semibold">Développement des activités</h3>
          <p className="text-sm text-slate-700">
            Formations, accompagnement académique, projets technologiques et agricoles dans plusieurs villes du pays.
          </p>
        </li>

        <li>
          <p className="text-xs text-slate-500">2024</p>
          <h3 className="font-semibold">Création officielle de HOH</h3>
          <p className="text-sm text-slate-700">
            Hope of Horizons Group est officiellement enregistré à Matoto, Conakry.
          </p>
        </li>

      </ul>
    </section>
  );
}

