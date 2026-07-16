import { z } from "zod";

const cleanText = (max: number) =>
  z
    .string()
    .trim()
    .min(1)
    .max(max)
    .transform((value) => value.replace(/[<>]/g, ""));

export const contactSchema = z.object({
  submissionId: z.string().uuid(),
  name: cleanText(100),
  company: z.string().trim().max(120).transform((value) => value.replace(/[<>]/g, "")),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(30).transform((value) => value.replace(/[^\d()+\-\s]/g, "")),
  projectType: z.enum([
    "Site ou landing page",
    "E-commerce",
    "Sistema web",
    "API ou integração",
    "Automação",
    "Infraestrutura ou manutenção",
    "Ainda não sei",
  ]),
  message: cleanText(3000).refine((value) => value.length >= 20, "Conte um pouco mais sobre o projeto."),
  consent: z.literal(true),
  website: z.string().max(0).optional().default(""),
  startedAt: z.coerce.number().int().positive(),
  turnstileToken: z.string().optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
