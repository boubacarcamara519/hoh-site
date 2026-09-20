import { MAP_EMBED_URL } from "@/lib/site";

export default function ContactMap() {
  return (
    <section className="bg-white border rounded-lg p-4 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Localisation</h2>

      <div className="aspect-video w-full rounded overflow-hidden">
        <iframe
          title="Localisation HOH"
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
