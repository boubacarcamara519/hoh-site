export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-hohDark via-hohBlue to-hohGreen text-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          L'action locale, l'impact global
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8">
          HOH est une organisation multisectorielle engagée pour l’éducation,
          la technologie, l’agriculture, l’industrie, l’import-export et
          l’accompagnement des communautés.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/fr/activities"
            className="bg-white text-hohDark px-6 py-3 rounded-md font-semibold"
          >
            Découvrir nos activités
          </a>

          <a
            href="https://wa.me/XXXXXXXXXXX"
            className="border border-white px-6 py-3 rounded-md font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

