"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const password = new FormData(event.currentTarget).get("password");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Connexion impossible.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Connexion impossible. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-hohBlue">
          Espace privé
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          Administration HOH
        </h1>
        <p className="mt-2 text-slate-600">
          Connecte-toi pour gérer la newsletter.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label htmlFor="admin-password" className="block text-sm font-medium">
            Mot de passe administrateur
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={1024}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-hohBlue focus:outline-none focus:ring-2 focus:ring-hohBlue/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-hohBlue px-4 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
