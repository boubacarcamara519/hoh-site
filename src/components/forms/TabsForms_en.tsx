"use client";

import { useState } from "react";
import ProfessionalForm from "./ProfessionalForm_en";
import StudentForm from "./StudentForm_en";

export default function TabsForms() {
  const [tab, setTab] = useState<"pro" | "student">("pro");

  return (
    <div>
      <div className="flex border-b mb-4">
        <button
          onClick={() => setTab("pro")}
          className={`px-4 py-2 text-sm font-semibold ${
            tab === "pro"
              ? "border-b-2 border-hohBlue text-hohBlue"
              : "text-slate-500"
          }`}
        >
          Professionals / Individuals
        </button>

        <button
          onClick={() => setTab("student")}
          className={`px-4 py-2 text-sm font-semibold ${
            tab === "student"
              ? "border-b-2 border-hohBlue text-hohBlue"
              : "text-slate-500"
          }`}
        >
          Students
        </button>
      </div>

      {tab === "pro" ? <ProfessionalForm /> : <StudentForm />}
    </div>
  );
}

