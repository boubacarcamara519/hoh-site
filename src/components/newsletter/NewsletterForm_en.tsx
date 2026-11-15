"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (response.status === 409) {
        setStatus("duplicate");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <label htmlFor="newsletter-email-en" className="self-start sm:self-center whitespace-nowrap text-sm font-medium">
        Email <span className="text-red-600" aria-hidden="true">*</span>
      </label>
      <input
        id="newsletter-email-en"
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
      />
      <button

        type="submit"
        disabled={status === "loading"}
        className="bg-hohBlue text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-800 transition-colors"
      >
        {status === "loading" ? "Saving..." : "Subscribe"}
      </button>
    </form>
    {status === "success" && (
      <p className="text-sm text-green-600 mt-2">Subscription saved.</p>
    )}
    {status === "duplicate" && (
      <p className="text-sm text-red-600 mt-2">This email address already exists.</p>
    )}
    {status === "error" && (
      <p className="text-sm text-red-600 mt-2">Unable to save this address.</p>
    )}
    </>
  );
}
