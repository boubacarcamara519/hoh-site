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
      setFileError("Vous pouvez joindre un seul fichier.");
    } else if (
      files.reduce((total, file) => total + file.size, 0) >
      maxTotalDocumentSize
    ) {
      setFileError("La taille totale des fichiers ne doit pas dépasser 4 Mo.");
    } else if (files.some((file) => !allowedDocumentExtension.test(file.name))) {
      setFileError("Seuls les fichiers PDF, JPG, JPEG et PNG sont acceptés.");
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
          TOO_MANY_FILES: "Vous pouvez joindre un seul fichier.",
          FILES_TOO_LARGE: "La taille totale des fichiers ne doit pas dépasser 4 Mo.",
          UNSUPPORTED_FILE_TYPE: "Seuls les fichiers PDF, JPG, JPEG et PNG sont acceptés.",
          INVALID_FILE_NAME: "Un nom de fichier est invalide."
        };
        setErrorMessage(
          messages[result.code] ?? "Une erreur est survenue. Merci de réessayer."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      setSelectedFiles([]);
      setFileError("");
      form.reset();
    } catch {
      setErrorMessage("Impossible d’envoyer la demande. Merci de réessayer.");
      setStatus("error");
    }
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
            <label className="block text-sm font-medium">
              Nom et prénom <span className="text-red-600" aria-hidden="true">*</span>
            </label>
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
            <label className="block text-sm font-medium">
              Numéro WhatsApp <span className="text-red-600" aria-hidden="true">*</span>
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

      {/* Pièces à fournir */}
      <div>
        <h3 className="font-semibold mb-2">Pièces à fournir</h3>
        <p className="text-sm text-slate-700 mb-3">
          Sélectionnez un fichier (passeport, diplôme ou carte scolaire) en PDF
          ou image (JPG, PNG), pour un total maximal de 4 Mo.
        </p>
        <label htmlFor="student-documents" className="sr-only">
          Sélectionner des pièces à fournir
        </label>
        <input
          ref={fileInputRef}
          id="student-documents"
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
                    ({(file.size / 1024).toFixed(0)} Ko)
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => removeSelectedFile(index)}
                  aria-label={`Retirer ${file.name}`}
                  className="shrink-0 rounded px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Retirer
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
        {status === "loading" ? "Enregistrement..." : "Enregistrer la demande"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 mt-2">
          Merci, votre demande a bien été envoyée.
        </p>
      )}
      {status === "duplicate" && (
        <p className="text-sm text-red-600 mt-2">
          Cette adresse e-mail existe déjà.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2">
          {errorMessage || "Une erreur est survenue. Merci de réessayer."}
        </p>
      )}
    </form>
  );
}
