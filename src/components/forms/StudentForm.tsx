"use client";

import { useState } from "react";

export default function StudentForm() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/forms/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 shadow-sm space-y-6"
    >
      <h2 className="text-xl font-semibold mb-2">Formulaire Étudiants</h2>

      {/* Infos personnelles */}
      <div>
        <h3 className="font-semibold mb-2">Informations personnelles</h3>
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
            <label className="block text-sm font-medium">Département</label>
            <input name="department" className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Filière</label>
            <input name="field" className="mt-1 w-full border rounded px-3 py-2" />
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
            <label className="block text-sm font-medium">
              Occupation actuelle
            </label>
            <input
              name="currentOccupation"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Nom de l&apos;organisation / université
            </label>
            <input
              name="institution"
              className="mt-1 w-full border rounded px-3 py-2"
            />
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
      </div>

      {/* Infos passeport */}
      <div>
        <h3 className="font-semibold mb-2">Informations passeport</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Numéro de passeport</label>
            <input
              name="passportNumber"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date de délivrance</label>
            <input
              type="date"
              name="passportIssueDate"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date d&apos;expiration</label>
            <input
              type="date"
              name="passportExpiryDate"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Pièces (structure simple pour l’instant) */}
      <div>
        <h3 className="font-semibold mb-2">Pièces à fournir (structure)</h3>
        <p className="text-sm text-slate-700 mb-2">
          Vous pourrez téléverser vos pièces dans une version ultérieure. Pour
          l’instant, indiquez les documents disponibles.
        </p>
        <textarea
          name="documents"
          rows={3}
          className="mt-1 w-full border rounded px-3 py-2"
          placeholder="Ex : Passeport, diplômes, relevés de notes, lettre de motivation..."
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

