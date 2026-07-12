const sectors = [
  {
    title: "Training & Learning",
    description:
      "Continuous training programs, capacity building, and professional integration.",
    image: "/Formation&apprentissage.jpg",
    link: "/en/activities/training-learning",
  },
  {
    title: "Technology & Digital Innovation",
    description:
      "Digital solutions, web development, digital tools, and automation.",
    image: "/technologie_innovations.jpg",
    link: "/en/activities/technology-innovation",
  },
  {
    title: "Agriculture",
    description:
      "Agricultural production, plantations, and sustainable resource management.",
    image: "/agriculture.jpg",
    link: "/en/activities/agriculture_en",
  },
  {
    title: "Livestock",
    description:
      "Animal production, herd management, and modern livestock practices.",
    image: "/elevage.jpg",
    link: "/en/activities/livestock",
  },
  {
    title: "Industry & Processing",
    description:
      "Agri‑food processing, local production, and resource valorization.",
    image: "/industries.jpeg",
    link: "/en/activities/industry-processing",
  },
  {
    title: "Import‑Export",
    description:
      "International trade, logistics, and product distribution.",
    image: "/import_export.jpg",
    link: "/en/activities/import-export_en",
  },
  {
    title: "Travel & Administrative Support",
    description:
      "Travel assistance, administrative documents, and international mobility.",
    image: "/voyages.jpg",
    link: "/en/activities/travel-support",
  },
  {
    title: "Various Services",
    description:
      "Multi‑service solutions for individuals and businesses.",
    image: "/prestation_servive.jpg",
    link: "/en/activities/various-services",
  },
];

export default function SectorsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {sectors.map((sector, index) => (
        <a
          key={index}
          href={sector.link}
          className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
        >
          <img
            src={sector.image}
            alt={sector.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {sector.title}
            </h3>
            <p className="text-slate-600 text-sm">{sector.description}</p>
            <p className="text-blue-600 font-semibold mt-4">Learn more →</p>
          </div>
        </a>
      ))}
    </div>
  );
}

