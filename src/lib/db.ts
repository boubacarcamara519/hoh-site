import type {
  ProfessionalPayload,
  StudentPayload,
  ContactPayload
} from "./validators";

export async function saveProfessionalForm(data: ProfessionalPayload) {
  console.log("Professional form received:", data);
}

export async function saveStudentForm(data: StudentPayload) {
  console.log("Student form received:", data);
}

export async function saveContactMessage(data: ContactPayload) {
  console.log("Contact message received:", data);
}

