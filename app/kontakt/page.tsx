import type { Metadata } from "next";
import { CtaBand } from "../components/cta-band";
import { createPageMetadata } from "../seo";
import { ContactForm } from "./contact-form";
import { company, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt & bokning",
  description:
    "Boka tid eller skicka en fråga till Carina Stuenes. Holistiska behandlingar i Stockholm och Östersund – även mobilt till företag och grupper.",
  path: "/kontakt",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.siteUrl}/kontakt#webpage`,
  url: `${siteConfig.siteUrl}/kontakt`,
  name: "Kontakt & bokning",
  description:
    "Boka behandling eller ställ en fråga till Carina Stuenes i Stockholm och Östersund.",
  inLanguage: "sv-SE",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  about: { "@id": `${siteConfig.siteUrl}/#business` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kontakt",
        item: `${siteConfig.siteUrl}/kontakt`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="content-shell pb-16 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Kontakt</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Boka tid eller skicka en fråga</h1>
        <p className="mt-4 max-w-2xl text-stone-700">
          Du är välkommen att höra av dig om du vill boka en tid eller bara vill stämma av vad som skulle passa dig bäst.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <ContactForm />

        <aside className="rounded-2xl bg-[color:var(--color-surface)]/92 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-stone-900">Kontaktuppgifter</h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            <li>
              Telefon: <a className="font-medium text-stone-900" href={company.smsLink}>{company.phone}</a>
            </li>
            <li>
              E-post: <a className="font-medium text-stone-900" href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              Kontaktperson: <span className="font-medium text-stone-900">{company.contactPerson}</span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl bg-[rgba(20,15,12,0.5)] p-5">
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
          text="Skicka en förfrågan så svarar vi med förslag på tid och upplägg."
        />
      </section>
    </div>
  );
}
