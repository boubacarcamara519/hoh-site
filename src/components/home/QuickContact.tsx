import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export default function QuickContact() {
  return (
    <section className="py-12 bg-hohDark text-white">
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact rapide</h2>
          <p className="text-slate-200 mb-4">
            Une question, un projet, une demande d’accompagnement ?
          </p>

          <a
            href={WHATSAPP_URL}
            className="inline-block bg-hohGreen px-5 py-3 rounded-md font-semibold"
          >
            WhatsApp
          </a>
        </div>

        <div className="bg-white text-slate-900 rounded-lg p-4 space-y-3">
          <p className="font-semibold">Envoyez-nous votre demande</p>
          <Link
            href="/fr/contact"
            className="inline-block bg-hohBlue text-white px-4 py-2 rounded font-semibold shadow hover:bg-blue-800 transition-colors"
          >
            Ouvrir le formulaire de contact
          </Link>
        </div>
      </div>
    </section>
  );
}
