"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import {
  FieldError,
  Input,
  Label,
  Textarea,
} from "@/components/ui/form-controls";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/features/contact/actions";
import { contactLimits } from "@/features/contact/limits";

const { name, email, message } = contactLimits;
const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-line bg-surface p-6"
      >
        <p className="flex items-center gap-2.5 font-semibold">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--color-signal)]"
          />
          Message sent
        </p>
        <p className="mt-2 leading-relaxed text-fg-soft">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  const values = state.status === "error" ? state.values : undefined;
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div aria-hidden="true" className="hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={name.max}
            defaultValue={values?.name}
            aria-invalid={fieldErrors?.name ? true : undefined}
            aria-describedby={
              fieldErrors?.name ? "contact-name-error" : undefined
            }
          />
          <FieldError id="contact-name-error" errors={fieldErrors?.name} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={email.max}
            defaultValue={values?.email}
            aria-invalid={fieldErrors?.email ? true : undefined}
            aria-describedby={
              fieldErrors?.email ? "contact-email-error" : undefined
            }
          />
          <FieldError id="contact-email-error" errors={fieldErrors?.email} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          minLength={message.min}
          maxLength={message.max}
          defaultValue={values?.message}
          aria-invalid={fieldErrors?.message ? true : undefined}
          aria-describedby={
            fieldErrors?.message ? "contact-message-error" : undefined
          }
        />
        <FieldError id="contact-message-error" errors={fieldErrors?.message} />
      </div>

      {state.status === "error" ? (
        <p role="alert" className="text-sm text-accent">
          {state.message}
        </p>
      ) : null}

      <div>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
