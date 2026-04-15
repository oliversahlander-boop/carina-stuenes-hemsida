"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          city,
          message,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Kunde inte skicka förfrågan.");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      const fallback = "Något gick fel när förfrågan skulle skickas.";
      setErrorMessage(error instanceof Error ? error.message : fallback);
      setSubmitState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4" aria-label="Kontaktformulär">
      <div>
        <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-stone-700">
          Förnamn *
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] px-4 py-2.5 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] focus:ring"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-stone-700">
          Efternamn *
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] px-4 py-2.5 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] focus:ring"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
          E-post *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] px-4 py-2.5 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] focus:ring"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-stone-700">
          Telefonnummer *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] px-4 py-2.5 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] focus:ring"
        />
      </div>

      <div>
        <label htmlFor="city" className="mb-1 block text-sm font-medium text-stone-700">
          Stad *
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] px-4 py-2.5 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] focus:ring"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-stone-700">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] px-4 py-2.5 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] focus:ring"
          placeholder="Berätta kort vad du behöver hjälp med"
        />
      </div>

      <button type="submit" disabled={submitState === "sending"} className="btn-primary disabled:opacity-70">
        {submitState === "sending" ? "Skickar..." : "Skicka förfrågan"}
      </button>

      {submitState === "success" ? (
        <p className="text-sm text-[#cfc2b1]">
          Tack. Din förfrågan har skickats.
        </p>
      ) : null}

      {submitState === "error" ? (
        <p className="text-sm text-[#e7b39f]">{errorMessage}</p>
      ) : null}
    </form>
  );
}
