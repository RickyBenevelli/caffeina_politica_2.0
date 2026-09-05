import { z } from "zod";

export const PROPOSAL_IDS = [1, 2, 3] as const;

export const formPetizioneSchema = z.object({
  name: z.string().trim().min(2).max(50),
  surname: z.string().trim().min(2).max(50),
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .transform((email) => email.toLowerCase()),
  age: z.coerce.number().int().min(16).max(120),
  privacy: z.boolean().refine((val) => val, {
    message: "Devi accettare la privacy policy",
  }),
  signAll: z.boolean(),
});

export type FormPetizioneValues = z.infer<typeof formPetizioneSchema>;
