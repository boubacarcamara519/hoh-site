import Timeline from "@/components/about/Timeline";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Founders from "@/components/about/Founders";
import LogoSlogan from "@/components/about/LogoSlogan";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 space-y-12">
      <Timeline />
      <MissionVisionValues />
      <Founders />
      <LogoSlogan />
    </div>
  );
}

