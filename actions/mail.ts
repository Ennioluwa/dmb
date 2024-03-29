"use server";

import * as z from "zod";
import nodemailer from "nodemailer";
import { ContactSchema } from "@/schemas";

export const sendContactForm = async (
  values: z.infer<typeof ContactSchema>
) => {
  const validatedFields = ContactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, message, name } = validatedFields.data;

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'outlook', 'yahoo', etc.
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: "weblyrics@gmail.com",
      to: "enioluwaarowo@gmail.com", // Recipient email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      status: "success",
      success: "Response received. We will get back to you shortly!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return { status: "error", error: "Failed to send email" };
  }
};
