"use client";

import { FormEvent, useState } from "react";
import { company } from "../site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent("Kontaktförfrågan från hemsidan");
    const body = encodeURIComponent(
      `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`,
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4" aria-label="Kontaktformulär">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-700">
          Namn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-stone-300 bg-[#f8f7f5] px-4 py-2.5 text-stone-900 outline-none ring-black/20 focus:ring"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-stone-300 bg-[#f8f7f5] px-4 py-2.5 text-stone-900 outline-none ring-black/20 focus:ring"
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
          required
          className="w-full rounded-xl border border-stone-300 bg-[#f8f7f5] px-4 py-2.5 text-stone-900 outline-none ring-black/20 focus:ring"
          placeholder="Berätta kort vad du behöver hjälp med"
        />
      </div>

      <button type="submit" className="btn-primary">
        Skicka förfrågan
      </button>

      {sent ? (
        <p className="text-sm text-[#666]">
          Tack. Ditt e-postprogram öppnas nu med meddelandet ifyllt.
        </p>
      ) : null}
    </form>
  );
}
