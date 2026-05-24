import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 space-y-10">
      <h1 className="text-3xl font-bold">Contact</h1>

      <ContactInfo />
      <ContactMap />
      <ContactForm />
    </div>
  );
}

