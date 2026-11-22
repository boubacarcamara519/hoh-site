"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Subscriber = {
  id: string;
  email: string;
  created_at: string;
};

export default function NewsletterAdmin() {
  const router = useRouter();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadSubscribers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/newsletter", {
        cache: "no-store"
      });
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result = await response.json();
      if (!response.ok) {
        setError(result.error ?? "Impossible de charger les abonnés.");
        return;
      }

      setSubscribers(result.subscribers);
    } catch {
      setError("Impossible de joindre le serveur.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void loadSubscribers();
  }, [loadSubscribers]);

  async function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      subscribers.length === 0 ||
      !window.confirm(
        `Envoyer cette newsletter à ${subscribers.length} abonné(s) actif(s) ?`
      )
    ) {
      return;
    }

    setSending(true);
    setError("");
    setNotice("");

    const formData = new FormData(form);
    try {
      const response = await fetch("/api/admin/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: formData.get("subject"),
          message: formData.get("message")
        })
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result = await response.json();
      if (!response.ok) {
        setError(result.error ?? "L’envoi de la newsletter a échoué.");
        return;
      }

      setNotice(
        `Envoi terminé : ${result.sentCount} envoyé(s) sur ${result.totalCount}.` +
          (result.failedCount > 0
            ? ` ${result.failedCount} envoi(s) ont échoué.`
            : "")
      );
      if (result.failedCount === 0) form.reset();
    } catch {
      setError("Erreur de communication pendant l’envoi.");
    } finally {
      setSending(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-hohBlue">
            Espace privé
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Gestion de la newsletter
          </h1>
          <p className="mt-2 text-slate-600">
            Consulte les abonnés actifs et envoie-leur une campagne.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Voir le site
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700"
        >
          {error}
        </p>
      )}
      {notice && (
        <p
          role="status"
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
        >
          {notice}
        </p>
      )}

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Abonnés actifs
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {loading
                  ? "Chargement..."
                  : `${subscribers.length} adresse(s) inscrite(s)`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => void loadSubscribers()}
              disabled={loading}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              Actualiser
            </button>
          </div>

          <div className="max-h-[28rem] overflow-auto">
            {subscribers.length === 0 && !loading ? (
              <p className="px-6 py-10 text-center text-slate-600">
                Aucun abonné actif pour le moment.
              </p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {subscribers.map((subscriber) => (
                  <li
                    key={subscriber.id}
                    className="flex flex-wrap items-center justify-between gap-2 px-6 py-4"
                  >
                    <span className="break-all font-medium text-slate-800">
                      {subscriber.email}
                    </span>
                    <time
                      dateTime={subscriber.created_at}
                      className="text-sm text-slate-500"
                    >
                      {new Date(subscriber.created_at).toLocaleDateString("fr-FR")}
                    </time>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Nouvelle campagne
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Chaque abonné reçoit un message individuel avec un lien de désabonnement.
          </p>

          <form onSubmit={handleSend} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="newsletter-subject"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Objet *
              </label>
              <input
                id="newsletter-subject"
                name="subject"
                required
                maxLength={200}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-hohBlue focus:outline-none focus:ring-2 focus:ring-hohBlue/20"
              />
            </div>
            <div>
              <label
                htmlFor="newsletter-message"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Message *
              </label>
              <textarea
                id="newsletter-message"
                name="message"
                required
                maxLength={10000}
                rows={10}
                className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 focus:border-hohBlue focus:outline-none focus:ring-2 focus:ring-hohBlue/20"
              />
            </div>
            <button
              type="submit"
              disabled={sending || loading || subscribers.length === 0}
              className="w-full rounded-lg bg-hohBlue px-4 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? "Envoi en cours..." : "Envoyer à tous les abonnés"}
            </button>
          </form>

          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            L’envoi nécessite une configuration SMTP valide. Utilise uniquement
            cette liste pour les personnes ayant accepté de recevoir la newsletter.
          </p>
        </section>
      </div>
    </section>
  );
}
