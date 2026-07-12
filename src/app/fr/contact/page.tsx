import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

export default function ContactPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contactez HOH Group
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Nous sommes à votre écoute pour toute demande d’information, de collaboration ou d’assistance.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <p className="text-slate-700 leading-relaxed">
          Vous pouvez nous joindre via nos coordonnées, consulter notre localisation ou nous envoyer un message
          directement via le formulaire ci‑dessous. Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="container mx-auto px-6 max-w-5xl py-12">
        <ContactInfo />
      </section>

      {/* MAP */}
      <section className="container mx-auto px-6 max-w-5xl py-12">
        <ContactMap />
      </section>

      {/* FORM */}
      <section className="container mx-auto px-6 max-w-5xl py-12">
        <ContactForm />
      </section>

      {/* NEWSLETTER */}
      <section className="container mx-auto px-6 max-w-3xl py-16 border-t">
        <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">
          Abonnez‑vous à notre newsletter
        </h3>
        <p className="text-slate-600 text-center mb-6">
          Recevez les actualités, projets et actions de Hope Of Horizons Group directement dans votre boîte mail.
        </p>

        <NewsletterForm />
      </section>

      {/* CONFIDENTIALITÉ */}
      <section className="bg-slate-100 py-12 text-center">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Confidentialité & Sécurité
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Vos informations sont protégées et utilisées uniquement dans le cadre de votre demande.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d’une assistance immédiate</h2>
        <p className="opacity-90 mb-6">
          Notre équipe est disponible pour vous accompagner.
        </p>

        <a
          href="https://wa.me/224XXXXXXXX"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Nous écrire sur WhatsApp
        </a>
      </section>

    </main>
  );
}

