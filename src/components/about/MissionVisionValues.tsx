export default function MissionVisionValues() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Mission, Vision & Valeurs</h2>

      <div className="space-y-6">

        <div>
          <h3 className="font-semibold text-lg mb-1">Mission</h3>
          <p className="text-slate-700">
            Apporter des solutions concrètes, durables et inclusives pour répondre aux besoins réels
            des communautés guinéennes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Vision</h3>
          <p className="text-slate-700">
            Bâtir un avenir plus juste, connecté et durable, en valorisant les ressources locales
            et en créant des passerelles entre la Guinée et le reste du monde.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Valeurs</h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Confiance</li>
            <li>Esprit d’équipe</li>
            <li>Engagement</li>
            <li>Innovation</li>
            <li>Résilience</li>
            <li>Service communautaire</li>
            <li>Ouverture internationale</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

