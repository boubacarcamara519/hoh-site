"use client";

import { useRef, useState } from "react";

const maxDocumentCount = 1;
const maxTotalDocumentSize = 4 * 1024 * 1024;
const allowedDocumentExtension = /\.(pdf|jpe?g|png)$/i;

export default function StudentForm() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function updateSelectedFiles(files: File[]) {
    setSelectedFiles(files);
    setFileError("");
    setErrorMessage("");

    if (files.length > maxDocumentCount) {
      setFileError("You can attach only one file.");
    } else if (
      files.reduce((total, file) => total + file.size, 0) >
      maxTotalDocumentSize
    ) {
      setFileError("The total file size must not exceed 4 MB.");
    } else if (files.some((file) => !allowedDocumentExtension.test(file.name))) {
      setFileError("Only PDF, JPG, JPEG, and PNG files are accepted.");
    }
  }

  function removeSelectedFile(indexToRemove: number) {
    const remainingFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    const transfer = new DataTransfer();
    remainingFiles.forEach((file) => transfer.items.add(file));
    if (fileInputRef.current) {
      fileInputRef.current.files = transfer.files;
    }
    updateSelectedFiles(remainingFiles);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fileError) return;
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/forms/students", {
        method: "POST",
        body: formData
      });
      if (res.status === 409) {
        setStatus("duplicate");
        return;
      }
      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        const messages: Record<string, string> = {
          TOO_MANY_FILES: "You can attach only one file.",
          FILES_TOO_LARGE: "The total file size must not exceed 4 MB.",
          UNSUPPORTED_FILE_TYPE: "Only PDF, JPG, JPEG, and PNG files are accepted.",
          INVALID_FILE_NAME: "A file name is invalid."
        };
        setErrorMessage(
          messages[result.code] ?? "An error occurred. Please try again."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      setSelectedFiles([]);
      setFileError("");
      form.reset();
    } catch {
      setErrorMessage("Unable to submit the request. Please try again.");
      setStatus("error");
    }
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
            <label className="block text-sm font-medium">
              Full Name <span className="text-red-600" aria-hidden="true">*</span>
            </label>
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
            <label className="block text-sm font-medium">
              WhatsApp Number <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              inputMode="tel"
              pattern="\+?[0-9]{3,}"
              placeholder="+224 613 615 086"
              onChange={(event) => {
                const value = event.currentTarget.value;
                const digits = value.replace(/\D/g, "");
                event.currentTarget.value = value.trim().startsWith("+")
                  ? `+${digits}`
                  : digits;
              }}
              required
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Email <span className="text-red-600" aria-hidden="true">*</span>
            </label>
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
        <h3 className="font-semibold mb-2">Required Documents</h3>
        <p className="text-sm text-slate-700 mb-3">
          Select one file (passport, diploma, or student card) as a PDF or image
          (JPG, PNG), up to 4 MB.
        </p>
        <label htmlFor="student-documents-en" className="sr-only">
          Select documents to provide
        </label>
        <input
          ref={fileInputRef}
          id="student-documents-en"
          type="file"
          name="documents"
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
          onChange={(event) => {
            updateSelectedFiles(Array.from(event.currentTarget.files ?? []));
          }}
          className="block w-full cursor-pointer rounded-lg border border-slate-300 bg-slate-50 text-sm text-slate-700 file:mr-4 file:cursor-pointer file:border-0 file:bg-hohBlue file:px-4 file:py-3 file:font-semibold file:text-white hover:file:bg-blue-800"
        />
        {selectedFiles.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {selectedFiles.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between gap-3"
              >
                <span className="break-all">
                  {file.name}{" "}
                  <span className="text-slate-400">
                    ({(file.size / 1024).toFixed(0)} KB)
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => removeSelectedFile(index)}
                  aria-label={`Remove ${file.name}`}
                  className="shrink-0 rounded px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {fileError && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {fileError}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || Boolean(fileError)}
        className="bg-hohBlue text-white px-5 py-2 rounded font-semibold shadow hover:bg-blue-800 transition-colors"
      >
        {status === "loading" ? "Saving..." : "Save Request"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 mt-2">
          Thank you, your request has been successfully sent.
        </p>
      )}
      {status === "duplicate" && (
        <p className="text-sm text-red-600 mt-2">
          This email address already exists.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2">
          {errorMessage || "An error occurred. Please try again."}
        </p>
      )}
    </form>
  );
}
