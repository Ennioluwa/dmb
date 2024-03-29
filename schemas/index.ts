import * as z from "zod";

export const ContactSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});
