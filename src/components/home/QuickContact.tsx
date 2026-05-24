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
            href="https://wa.me/XXXXXXXXXXX"
            className="inline-block bg-hohGreen px-5 py-3 rounded-md font-semibold"
          >
            WhatsApp
          </a>
        </div>

        <form className="bg-white text-slate-900 rounded-lg p-4 space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Nom"
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            type="email"
          />

          <textarea
            className="w-full border rounded px-3 py-2"
            rows={3}
            placeholder="Message"
          />

          <button className="bg-hohBlue text-white px-4 py-2 rounded">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

