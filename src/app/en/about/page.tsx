import Timeline from "@/components/about/Timeline_en";
import MissionVisionValues from "@/components/about/MissionVisionValues_en";
import Founders from "@/components/about/Founders_en";
import LogoSlogan from "@/components/about/LogoSlogan_en";

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Hope of Horizons Group
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          A vision, a mission, a commitment to lasting impact.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Who are we?</h2>
        <p className="text-slate-700 leading-relaxed">
          Hope of Horizons Group is a multisector company founded in 2024,
          operating in training, technology, agriculture, import-export,
          travel services, and various professional solutions. Our goal is to
          create sustainable impact within communities through innovative and
          inclusive solutions.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <Timeline />
      </section>

      {/* MISSION - VISION - VALUES */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <MissionVisionValues />
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <Founders />
      </section>

      {/* LOGO & SLOGAN */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <LogoSlogan />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
        <p className="opacity-90 mb-6">
          Explore our activities or contact us to collaborate.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/en/activities"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-200 transition"
          >
            Our activities
          </a>
          <a
            href="/en/contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact us
          </a>
        </div>
      </section>

    </main>
  );
}

