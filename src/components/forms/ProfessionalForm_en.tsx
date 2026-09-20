"use client";

import { useState } from "react";

export default function ProfessionalForm() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/forms/professionals", {
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
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold mb-2">
        Professionals / Individuals Form
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            name="fullName"
            required
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select name="gender" className="mt-1 w-full border rounded px-3 py-2">
            <option value="">Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Nationality</label>
          <input name="nationality" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Current Residence</label>
          <input name="residence" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="birthDate"
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Occupation (optional)</label>
          <input name="occupation" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Organization Name (optional)
          </label>
          <input name="organization" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">WhatsApp Number</label>
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
        <label className="block text-sm font-medium">Reason for Request</label>
        <textarea
          name="reason"
          required
          rows={3}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Additional Message (optional)
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
        className="bg-hohBlue text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition-colors"
      >
        {status === "loading" ? "Saving..." : "Save Request"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 mt-2">
          Thank you, your request has been successfully sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2">
          An error occurred. Please try again.
        </p>
      )}
    </form>
  );
}
