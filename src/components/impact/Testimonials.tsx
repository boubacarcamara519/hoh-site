const testimonials = [
  {
    name: "Fatoumata Diallo",
    role: "Étudiante accompagnée",
    text:
      "Grâce à HOH, j’ai pu finaliser mon dossier et obtenir une admission à l’étranger. Leur accompagnement a été déterminant."
  },
  {
    name: "Mamadou Bah",
    role: "Agriculteur partenaire",
    text:
      "Le soutien de HOH dans la mise en place de la plantation d’acajou a transformé notre activité."
  },
  {
    name: "Aïssatou Camara",
    role: "Bénéficiaire formation",
    text:
      "Les formations en informatique m’ont permis d’obtenir un emploi. HOH change réellement des vies."
  }
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Témoignages</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border rounded-lg p-6 shadow-sm"
          >
            <p className="text-slate-700 italic">“{t.text}”</p>

            <div className="mt-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

