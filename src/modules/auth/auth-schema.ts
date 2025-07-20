import z from "zod";
import type { paths } from "@/types/zenmo-schema";

export type TUserSuccessResponse =
  paths["/api/v1/auth/register"]["post"]["responses"]["201"]["content"]["application/json"]["data"];

export interface IErrorResponse {
  success: boolean;
  message?: string;
}

const commonFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long")
    .max(60, "Password cannot be more than 60 characters long"),
});

export const loginSchema = commonFormSchema;
export type TLogin = z.infer<typeof loginSchema>;

export const registerSchema = commonFormSchema.extend({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters long")
    .max(60, "Full name cannot be more than 60 characters long"),
});
export type TRegister = z.infer<typeof registerSchema>;
