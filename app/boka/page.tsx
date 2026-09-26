import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "../components/tracked-link";
import { ContactForm } from "../kontakt/contact-form";
import { createPageMetadata } from "../seo";
import { company, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Boka behandling",
  description:
    "Boka behandling hos Carina Stuenes via BokaDirekt eller skicka en personlig bokningsförfrågan.",
  path: "/boka",
});

const bookingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.siteUrl}/boka#webpage`,
  url: `${siteConfig.siteUrl}/boka`,
  name: "Boka behandling",
  description: "Boka behandling via BokaDirekt eller skicka en personlig förfrågan.",
  inLanguage: "sv-SE",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  about: { "@id": `${siteConfig.siteUrl}/#business` },
};

export default function BookingPage() {
  return (
    <div className="editorial-page content-shell pb-16 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingJsonLd) }}
      />

      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Bokning</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Hur vill du boka?</h1>
        <p className="mt-4 max-w-2xl text-stone-700">
          Välj en ledig tid direkt via BokaDirekt eller skicka en förfrågan om du vill ha hjälp att välja behandling.
        </p>
      </section>

      <section className="mt-8 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <aside className="overflow-hidden rounded-[1.6rem] border border-[rgba(198,164,108,0.3)] bg-[linear-gradient(155deg,rgba(34,26,21,0.98),rgba(20,15,12,0.98))] shadow-[0_22px_40px_-34px_rgba(0,0,0,0.85)]">
          <div className="border-b border-[rgba(198,164,108,0.2)] px-6 py-5 sm:px-7">
            <p className="text-xs uppercase tracking-[0.18em] text-[#c6a46c]">Boka direkt online</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#f5f1eb]">Health Stuenes på BokaDirekt</h2>
          </div>

          <div className="space-y-5 p-6 sm:p-7">
            <p className="leading-relaxed text-[#d8ccbb]">
              Se behandlingar, priser och tillgängliga tider. Du får en bokningsbekräftelse direkt från BokaDirekt.
            </p>

            <ul className="space-y-2 text-sm text-[#c5b9ad]">
              <li className="flex gap-2"><span aria-hidden>✓</span><span>Se lediga tider direkt</span></li>
              <li className="flex gap-2"><span aria-hidden>✓</span><span>Välj behandling och plats</span></li>
              <li className="flex gap-2"><span aria-hidden>✓</span><span>Få bekräftelse på bokningen</span></li>
            </ul>

            <TrackedLink
              href={company.externalBookingUrl}
              eventName="booking_click"
              eventSource="booking_page_bokadirekt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Se lediga tider
            </TrackedLink>

            <p className="text-center text-xs leading-relaxed text-stone-500">
              BokaDirekt öppnas i en ny flik så att den här sidan finns kvar.
            </p>
          </div>

          <div className="border-t border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.06)] px-6 py-4 text-sm text-[#c5b9ad] sm:px-7">
            Osäker på vilken behandling du ska välja? Använd formuläret eller{" "}
            <Link href="/tjanster" className="font-semibold text-[#d4a373] hover:text-[#e3c39c]">
              se alla behandlingar
            </Link>
            .
          </div>
        </aside>
      </section>
    </div>
  );
}
