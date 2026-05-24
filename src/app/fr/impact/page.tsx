import ImpactStats from "@/components/impact/ImpactStats";
import GuineaMap from "@/components/impact/GuineaMap";
import Testimonials from "@/components/impact/Testimonials";

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 space-y-12">
      <h1 className="text-3xl font-bold">Impact & Réalisations</h1>

      <p className="text-slate-700 max-w-3xl">
        Depuis sa création, HOH agit sur le terrain pour renforcer les compétences,
        soutenir les communautés, développer l’agriculture, encourager l’innovation
        et accompagner les jeunes vers des opportunités académiques et professionnelles.
      </p>

      <ImpactStats />
      <GuineaMap />
      <Testimonials />
    </div>
  );
}

