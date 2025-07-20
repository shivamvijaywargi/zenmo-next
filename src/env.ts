import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    BACKEND_URL: z.url().min(1),
  },
  client: {
    NEXT_PUBLIC_BACKEND_URL: z.url().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env.BACKEND_URL,
  }
})