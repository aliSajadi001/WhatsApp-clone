import { z } from "zod";
import { pattern } from "./emailPattern";

export const zodValidation = z.object({
  email: z
    .string()
    .email({ message: "Email is not valid" })
    .min(1)
    .refine((text) => {
      return (
        pattern.email.test(text),
        {
          message: "Email is not valid",
        }
      );
    }),
});
