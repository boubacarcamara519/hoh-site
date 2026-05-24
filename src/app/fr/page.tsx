import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import Sectors from "@/components/home/Sectors";
import Stats from "@/components/home/Stats";
import PartnersStrip from "@/components/home/PartnersStrip";
import QuickContact from "@/components/home/QuickContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Sectors />
      <Stats />
      <PartnersStrip />
      <QuickContact />
    </>
  );
}

