import SectorsGrid from "@/components/activities/SectorsGrid";

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 space-y-8">
      <h1 className="text-3xl font-bold">Nos activités</h1>

      <p className="text-slate-700 max-w-3xl">
        HOH intervient dans plusieurs secteurs clés pour soutenir le
        développement humain, économique et technologique en Guinée.
        Découvrez nos pôles d’activité et les services que nous proposons.
      </p>

      <SectorsGrid />
    </div>
  );
}

