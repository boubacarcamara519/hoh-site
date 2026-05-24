"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <section className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              name="name"
              required
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Sujet</label>
          <input
            name="subject"
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-hohBlue text-white px-5 py-2 rounded font-semibold"
        >
          {status === "loading" ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600 mt-2">
            Merci, votre message a bien été envoyé.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 mt-2">
            Une erreur est survenue. Merci de réessayer.
          </p>
        )}
      </form>
    </section>
  );
}

