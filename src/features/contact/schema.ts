import { z } from "zod";

import { contactLimits } from "@/features/contact/limits";

const { name, email, message } = contactLimits;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(name.max, `Name must be ${name.max} characters or fewer.`),
  email: z
    .email("Please enter a valid email address.")
    .max(email.max, `Email must be ${email.max} characters or fewer.`),
  message: z
    .string()
    .trim()
    .min(message.min, `Message must be at least ${message.min} characters.`)
    .max(
      message.max,
      `Message must be ${message.max.toLocaleString("en-US")} characters or fewer.`,
    ),
});

export type ContactInput = z.infer<typeof contactSchema>;
