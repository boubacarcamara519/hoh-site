"use client";

import { useState } from "react";

export default function ProfessionalForm() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/forms/professionals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold mb-2">
        Formulaire Professionnels / Particuliers
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Nom et prénom</label>
          <input
            name="fullName"
            required
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Sexe</label>
          <select name="gender" className="mt-1 w-full border rounded px-3 py-2">
            <option value="">Sélectionner</option>
            <option>Femme</option>
            <option>Homme</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Nationalité</label>
          <input name="nationality" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Résidence actuelle</label>
          <input name="residence" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Date de naissance</label>
          <input
            type="date"
            name="birthDate"
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Occupation (facultatif)</label>
          <input name="occupation" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Nom de l&apos;organisation (facultatif)
          </label>
          <input name="organization" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Numéro WhatsApp</label>
          <input
            name="whatsapp"
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
        <label className="block text-sm font-medium">Motif de la demande</label>
        <textarea
          name="reason"
          required
          rows={3}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Message complémentaire (facultatif)
        </label>
        <textarea
          name="message"
          rows={3}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-hohBlue text-white px-5 py-2 rounded font-semibold"
      >
        {status === "loading" ? "Envoi..." : "Envoyer la demande"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 mt-2">
          Merci, votre demande a bien été envoyée.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2">
          Une erreur est survenue. Merci de réessayer.
        </p>
      )}
    </form>
  );
}

