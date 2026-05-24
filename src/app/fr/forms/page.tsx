import TabsForms from "@/components/forms/TabsForms";

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 space-y-6">
      <h1 className="text-3xl font-bold">Formulaires</h1>

      <p className="text-slate-700 max-w-3xl">
        Merci de choisir le formulaire correspondant à votre situation. Les
        informations transmises seront traitées avec confidentialité.
      </p>

      <TabsForms />
    </div>
  );
}

