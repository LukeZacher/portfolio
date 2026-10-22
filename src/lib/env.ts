import "server-only";

import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().startsWith("re_"),
  CONTACT_TO_EMAIL: z.email(),
  CONTACT_FROM_EMAIL: z.string().min(1),
  UPSTASH_REDIS_REST_URL: z.url(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
});

export const env = envSchema.parse(process.env);
