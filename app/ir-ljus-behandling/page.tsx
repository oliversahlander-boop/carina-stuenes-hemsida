import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import { company, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "IR-ljus behandling i Stockholm och Östersund",
  description:
    "IR-ljus behandling i Stockholm och Östersund som stöd för återhämtning, cirkulation och avslappning i muskler och vävnader.",
  path: "/ir-ljus-behandling",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.siteUrl}/ir-ljus-behandling#service`,
  name: "IR-ljus behandling",
  serviceType: "Infrarött ljus",
  description:
    "Infrarött ljus används som stöd för kroppens återhämtning och för att ge värme djupt in i vävnaderna.",
  url: `${siteConfig.siteUrl}/ir-ljus-behandling`,
  provider: { "@id": `${siteConfig.siteUrl}/#business` },
  areaServed: ["Stockholm", "Östersund"],
};

export default function IrLjusBehandlingPage() {
  return (
    <div className="content-shell pb-24 pt-12 sm:pb-28 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="floating-section px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Behandling</p>
        <h1 className="mt-3 max-w-[22ch] text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
          IR-ljus behandling i Stockholm och Östersund
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-700 sm:text-lg">
          Infrarött ljus används som stöd för kroppens återhämtning och för att ge värme djupt in i vävnaderna i Stockholm och Östersund.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-700">
          IR-ljus används ofta som ett komplement i behandling för att ge kroppen extra stöd.
        </p>
      </section>

      <section className="mt-10 max-w-3xl lg:ml-6">
        <article className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-6 py-8 sm:px-7 sm:py-9">
          <h2 className="text-2xl font-semibold text-stone-900">Det kan bidra till</h2>
          <ul className="mt-6 list-disc space-y-2.5 pl-6 leading-relaxed text-stone-700 marker:text-[rgba(198,164,108,0.95)]">
            <li>Ökad cirkulation</li>
            <li>Avslappning</li>
            <li>Stöd för muskler och vävnader</li>
            <li>Lindring vid stelhet och spänningar</li>
          </ul>
          <p className="mt-6 leading-relaxed text-stone-700">
            Behandlingen erbjuds i Stockholm och Östersund.
          </p>
        </article>
      </section>

      <section className="mt-14 max-w-3xl border-t border-[rgba(198,164,108,0.16)] pt-10 lg:ml-6">
        <h2 className="text-2xl font-semibold text-stone-900">Boka IR-ljus behandling</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
          Hör av dig så hittar vi en tid och ett upplägg som passar dig i Stockholm och Östersund.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href={company.bookingUrl} className="btn-light inline-flex min-w-[10rem] justify-center">
            Boka tid
          </a>
          <Link
            href="/tjanster"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(198,164,108,0.3)] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#c6a46c] transition-colors hover:text-[#d4a373]"
          >
            Tillbaka till tjänster
          </Link>
        </div>
      </section>
    </div>
  );
}
