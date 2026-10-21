"use server";

import { Resend } from "resend";
import { z } from "zod";

import { contactSchema, type ContactInput } from "@/features/contact/schema";
import { env } from "@/lib/env";

type ContactValues = Record<keyof ContactInput, string>;

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      values: ContactValues;
      fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
    };

const resend = new Resend(env.RESEND_API_KEY);

function getSubmittedValues(formData: FormData): ContactValues {
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Hidden honeypot field bots fill in, pretend it worked.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const values = getSubmittedValues(formData);
  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      values,
      fieldErrors: z.flattenError(result.error).fieldErrors,
    };
  }

  const { name, email, message } = result.data;

  const sendFailed: ContactFormState = {
    status: "error",
    message:
      "Something went wrong sending your message. Please try again later.",
    values,
  };

  try {
    const { error } = await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    });

    if (error) {
      console.error("Resend rejected the contact email:", error);
      return sendFailed;
    }
  } catch (error) {
    console.error("Could not reach Resend:", error);
    return sendFailed;
  }

  return { status: "success" };
}
