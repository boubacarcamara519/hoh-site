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
      <h2 className="text-xl font-semibold mb-2">Student Form</h2>

      {/* Personal Information */}
      <div>
        <h3 className="font-semibold mb-2">Personal Information</h3>
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
            <label className="block text-sm font-medium">Department</label>
            <input name="department" className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Field of Study</label>
            <input name="field" className="mt-1 w-full border rounded px-3 py-2" />
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
            <label className="block text-sm font-medium">Current Occupation</label>
            <input
              name="currentOccupation"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Organization / University Name
            </label>
            <input
              name="institution"
              className="mt-1 w-full border rounded px-3 py-2"
            />
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
      </div>

      {/* Passport Information */}
      <div>
        <h3 className="font-semibold mb-2">Passport Information</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Passport Number</label>
            <input
              name="passportNumber"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Issue Date</label>
            <input
              type="date"
              name="passportIssueDate"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Expiry Date</label>
            <input
              type="date"
              name="passportExpiryDate"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Documents */}
      <div>
        <h3 className="font-semibold mb-2">Required Documents (structure)</h3>
        <p className="text-sm text-slate-700 mb-2">
          You will be able to upload your documents in a future version.  
          For now, please indicate the documents you have available.
        </p>
        <textarea
          name="documents"
          rows={3}
          className="mt-1 w-full border rounded px-3 py-2"
          placeholder="E.g.: Passport, diplomas, transcripts, motivation letter..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-hohBlue text-white px-5 py-2 rounded font-semibold"
      >
        {status === "loading" ? "Sending..." : "Submit Request"}
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

