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
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[1.6rem] border border-[rgba(198,164,108,0.24)] bg-[linear-gradient(180deg,rgba(29,22,18,0.9),rgba(22,17,14,0.9))] p-5 shadow-[0_22px_40px_-34px_rgba(0,0,0,0.85)] sm:p-7"
      aria-label="Kontaktformulär"
    >
      <div className="space-y-2 border-b border-[rgba(198,164,108,0.2)] pb-5">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Skicka förfrågan</p>
        <p className="max-w-[42ch] text-sm leading-relaxed text-stone-600 sm:text-base">
          Fyll i uppgifterna nedan så återkommer jag med förslag på tider som passar dig.
        </p>
        <p className="text-xs text-stone-500">Fält markerade med * är obligatoriska.</p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-stone-700">
            Förnamn *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(18,14,11,0.6)] px-4 py-3 text-[#f5f1eb] outline-none placeholder:text-stone-500 ring-[rgba(198,164,108,0.35)] transition focus:border-[rgba(198,164,108,0.55)] focus:ring"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-stone-700">
            Efternamn *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(18,14,11,0.6)] px-4 py-3 text-[#f5f1eb] outline-none placeholder:text-stone-500 ring-[rgba(198,164,108,0.35)] transition focus:border-[rgba(198,164,108,0.55)] focus:ring"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
            E-post *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(18,14,11,0.6)] px-4 py-3 text-[#f5f1eb] outline-none placeholder:text-stone-500 ring-[rgba(198,164,108,0.35)] transition focus:border-[rgba(198,164,108,0.55)] focus:ring"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-stone-700">
            Telefonnummer *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(18,14,11,0.6)] px-4 py-3 text-[#f5f1eb] outline-none placeholder:text-stone-500 ring-[rgba(198,164,108,0.35)] transition focus:border-[rgba(198,164,108,0.55)] focus:ring"
          />
        </div>
      </div>

      <div className="mt-4 max-w-sm">
        <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-stone-700">
          Stad *
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          autoComplete="address-level2"
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(18,14,11,0.6)] px-4 py-3 text-[#f5f1eb] outline-none placeholder:text-stone-500 ring-[rgba(198,164,108,0.35)] transition focus:border-[rgba(198,164,108,0.55)] focus:ring"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border border-[rgba(198,164,108,0.35)] bg-[rgba(18,14,11,0.6)] px-4 py-3 text-[#f5f1eb] outline-none ring-[rgba(198,164,108,0.35)] transition placeholder:text-stone-500 focus:border-[rgba(198,164,108,0.55)] focus:ring"
          placeholder="Beskriv gärna kort vad du vill ha hjälp med eller vilken behandling du är nyfiken på."
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-stone-500">
          Genom att skicka formuläret godkänner du att vi kontaktar dig för bokning.
        </p>
        <button type="submit" disabled={submitState === "sending"} className="btn-primary w-full justify-center disabled:opacity-70 sm:w-auto">
          {submitState === "sending" ? "Skickar..." : "Skicka förfrågan"}
        </button>
      </div>

      <div className="mt-4" aria-live="polite">
        {submitState === "success" ? (
          <p className="rounded-xl border border-[rgba(124,171,122,0.35)] bg-[rgba(46,80,44,0.22)] px-4 py-2.5 text-sm text-[#d7ead3]">
            Tack. Din förfrågan har skickats.
          </p>
        ) : null}

        {submitState === "error" ? (
          <p className="rounded-xl border border-[rgba(231,179,159,0.4)] bg-[rgba(108,51,40,0.25)] px-4 py-2.5 text-sm text-[#f0c8b7]">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
