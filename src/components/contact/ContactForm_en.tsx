"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
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
          <label className="block text-sm font-medium">Subject</label>
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
          className="bg-hohBlue text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition-colors"
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600 mt-2">
            Thank you, your message has been successfully sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 mt-2">
            An error occurred. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
