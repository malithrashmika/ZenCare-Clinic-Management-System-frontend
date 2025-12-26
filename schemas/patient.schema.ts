import { z } from "zod";

export const createPatientSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional(),
});

export type CreatePatientInput = z.infer<typeof createPatientSchema>;
