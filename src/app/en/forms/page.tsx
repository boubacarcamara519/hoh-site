import TabsForms from "@/components/forms/TabsForms_en";

export default function FormsPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          HOH Forms
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Choose the form that best fits your situation. All information submitted
          is handled with confidentiality and respect.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Two categories of forms
        </h2>
        <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
          HOH Group provides two distinct forms to meet your needs: one designed for
          <strong>professionals and individuals</strong>, and the other for
          <strong>students</strong>. Please select the one that corresponds to your profile.
        </p>
      </section>

      {/* FORM TABS */}
      <section className="container mx-auto px-6 max-w-5xl py-12">
        <TabsForms />
      </section>

      {/* CONFIDENTIALITY */}
      <section className="bg-slate-100 py-12 text-center">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Privacy & Security
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Your data is protected and will never be shared with third parties.
          It is used solely for the purpose of your request with HOH Group.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need assistance?</h2>
        <p className="opacity-90 mb-6">
          Our team is available to support you throughout your process.
        </p>

        <a
          href="/en/contact"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-slate-200 transition"
        >
          Contact us
        </a>
      </section>

    </main>
  );
}

