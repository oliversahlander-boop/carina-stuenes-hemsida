import type { Metadata } from "next";
import { CtaBand } from "../components/cta-band";
import { createPageMetadata } from "../seo";
import { ContactForm } from "./contact-form";
import { company } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Kontakta Carina Stuenes för bokning av behandlingar, yoga och mobila hälsotjänster för företag och grupper.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Kontakt</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Boka tid eller skicka en fråga</h1>
        <p className="mt-4 max-w-2xl text-stone-700">
          Du är välkommen att höra av dig om du vill boka en tid eller bara vill stämma av vad som skulle passa dig bäst.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <ContactForm />

        <aside className="rounded-2xl bg-[#f5f2ec] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-stone-900">Kontaktuppgifter</h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            <li>
              Telefon: <a className="font-medium text-stone-900" href={company.phoneLink}>{company.phone}</a>
            </li>
            <li>
              E-post: <a className="font-medium text-stone-900" href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              Kontaktperson: <span className="font-medium text-stone-900">{company.contactPerson}</span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl bg-[#ece8e0] p-5">
            <h3 className="font-semibold text-stone-900">Mobila tjänster</h3>
            <p className="mt-2 text-sm text-stone-700">
              Det går också bra att boka behandlingar för företag och grupper på plats hos er.
            </p>
          </div>
        </aside>
      </section>

      <section className="mt-10">
        <CtaBand
          title="Hjälper gärna till"
          text="Skicka en förfrågan så svarar jag med förslag på tid och uppförhållningssätt."
        />
      </section>
    </div>
  );
}
