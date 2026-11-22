"use client";

import { useState } from "react";

type UnsubscribeConfirmationProps = {
  id: string;
  token: string;
  valid: boolean;
};

export default function UnsubscribeConfirmation({
  id,
  token,
  valid
}: UnsubscribeConfirmationProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function unsubscribe() {
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, token })
      });
      setStatus(response.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wider text-hohBlue">
        Hope Of Horizons Group
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Se désabonner de la newsletter
      </h1>

      {!valid ? (
        <p className="mt-4 text-slate-600">
          Ce lien de désabonnement est invalide ou incomplet.
        </p>
      ) : status === "done" ? (
        <p role="status" className="mt-4 text-green-700">
          Ton adresse a bien été désabonnée de la newsletter.
        </p>
      ) : (
        <>
          <p className="mt-4 text-slate-600">
            Confirme que tu ne souhaites plus recevoir nos actualités.
          </p>
          <button
            type="button"
            onClick={unsubscribe}
            disabled={status === "loading"}
            className="mt-6 rounded-lg bg-hohBlue px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {status === "loading" ? "Traitement..." : "Confirmer le désabonnement"}
          </button>
          {status === "error" && (
            <p role="alert" className="mt-4 text-sm text-red-600">
              Impossible de traiter la demande. Réessaie plus tard.
            </p>
          )}
        </>
      )}
    </div>
  );
}
