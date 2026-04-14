import type { Metadata } from "next";
import { CtaBand } from "../components/cta-band";
import { createPageMetadata } from "../seo";
import { testimonials } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Recensioner",
  description:
    "Läs vad kunder säger om våra holistiska behandlingar, yoga och återhämtningsinsatser.",
  path: "/recensioner",
});

export default function TestimonialsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Recensioner</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Det här säger våra kunder</h1>
        <p className="mt-4 max-w-3xl text-stone-700">
          Några ord från personer som har varit här för behandling, återhämtning och stöd.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="card">
            <p className="text-stone-700">&quot;{item.quote}&quot;</p>
            <footer className="mt-4 text-sm font-semibold text-stone-900">{item.name}</footer>
          </blockquote>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-stone-200 bg-stone-50 p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Vill du dela din upplevelse?</h2>
        <p className="mt-3 text-stone-700">
          Om du har varit här och vill dela med dig av din upplevelse får du gärna höra av dig.
        </p>
      </section>

      <section className="mt-10">
        <CtaBand
          title="Bli nästa nöjda kund"
          text="Du är varmt välkommen att boka en tid om du vill känna efter vad behandlingen kan göra för dig."
        />
      </section>
    </div>
  );
}
