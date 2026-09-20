import ContactInfo from "@/components/contact/ContactInfo_en";
import ContactMap from "@/components/contact/ContactMap_en";
import ContactForm from "@/components/contact/ContactForm_en";
import NewsletterForm from "@/components/newsletter/NewsletterForm_en";
import { WHATSAPP_URL } from "@/lib/site";

export default function ContactPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact HOH Group
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          We are available for any request regarding information, collaboration, or assistance.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <p className="text-slate-700 leading-relaxed">
          You can reach us through our contact details, check our location, or send us a message
          directly using the form below. Our team will get back to you as soon as possible.
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
          Subscribe to our newsletter
        </h3>
        <p className="text-slate-600 text-center mb-6">
          Receive updates, projects, and news from Hope Of Horizons Group directly in your inbox.
        </p>

        <NewsletterForm />
      </section>

      {/* CONFIDENTIALITY */}
      <section className="bg-slate-100 py-12 text-center">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Privacy & Security
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Your information is protected and used solely for the purpose of your request.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need immediate assistance</h2>
        <p className="opacity-90 mb-6">
          Our team is available to support you.
        </p>

        <a
          href={WHATSAPP_URL}
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Write to us on WhatsApp
        </a>
      </section>

    </main>
  );
}
