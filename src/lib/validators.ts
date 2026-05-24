import { z } from "zod";

export const professionalSchema = z.object({
  fullName: z.string().min(2),
  gender: z.string().optional(),
  nationality: z.string().optional(),
  residence: z.string().optional(),
  birthDate: z.string().optional(),
  occupation: z.string().optional(),
  organization: z.string().optional(),
  whatsapp: z.string().min(3),
  email: z.string().email(),
  reason: z.string().min(5),
  message: z.string().optional()
});

export const studentSchema = z.object({
  fullName: z.string().min(2),
  department: z.string().optional(),
  field: z.string().optional(),
  gender: z.string().optional(),
  nationality: z.string().optional(),
  residence: z.string().optional(),
  birthDate: z.string().optional(),
  currentOccupation: z.string().optional(),
  institution: z.string().optional(),
  whatsapp: z.string().min(3),
  email: z.string().email(),
  passportNumber: z.string().optional(),
  passportIssueDate: z.string().optional(),
  passportExpiryDate: z.string().optional(),
  documents: z.string().optional()
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(5)
});

export type ProfessionalPayload = z.infer<typeof professionalSchema>;
export type StudentPayload = z.infer<typeof studentSchema>;
export type ContactPayload = z.infer<typeof contactSchema>;

