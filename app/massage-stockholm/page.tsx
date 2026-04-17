import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import { company, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Massage i Stockholm och Östersund",
  description:
    "Massagebehandlingar i Stockholm och Östersund. Välj 30, 60 eller 90 minuter för avslappning, cirkulation och minskade spänningar.",
  path: "/massage-stockholm",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.siteUrl}/massage-stockholm#service`,
  name: "Massage",
  serviceType: "Massagebehandling",
  description:
    "Massage för dig som vill släppa på spänningar, öka cirkulationen och ge kroppen ny energi.",
  url: `${siteConfig.siteUrl}/massage-stockholm`,
  provider: { "@id": `${siteConfig.siteUrl}/#business` },
  areaServed: ["Stockholm", "Östersund"],
};

export default function MassageStockholmPage() {
  return (
    <div className="content-shell pb-24 pt-12 sm:pb-28 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="floating-section px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Behandling</p>
        <h1 className="mt-3 max-w-[22ch] text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
          Massage i Stockholm och Östersund
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-700 sm:text-lg">
          Massage för dig som vill släppa på spänningar, öka cirkulationen och ge kroppen ny energi i Stockholm och Östersund.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-700">
          Du kan välja mellan djupgående behandlande massage och avslappnande massage,
          beroende på hur kroppen känns just nu.
        </p>
      </section>

      <section className="mt-10 max-w-5xl lg:ml-6">
        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-[1.4rem] border border-[rgba(198,164,108,0.18)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/in-action.jpg"
                alt="Massagebehandling"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 60vw, 100vw"
                priority
              />
            </div>
          </div>

          <article className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-6 py-8 sm:px-7 sm:py-9">
            <h2 className="text-2xl font-semibold text-stone-900">Upplägg</h2>
            <p className="mt-3 text-lg text-stone-700">30 min · 60 min · 90 min</p>
            <ul className="mt-6 list-disc space-y-2.5 pl-6 leading-relaxed text-stone-700 marker:text-[rgba(198,164,108,0.95)]">
              <li>Djupgående behandling av specifika områden</li>
              <li>Helkroppsbehandling med fokus på återhämtning</li>
              <li>Anpassning efter dagsform, spänning och behov</li>
            </ul>
            <p className="mt-6 leading-relaxed text-stone-700">
              Behandlingen erbjuds i Stockholm och Östersund.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 max-w-3xl border-t border-[rgba(198,164,108,0.16)] pt-10 lg:ml-6">
        <h2 className="text-2xl font-semibold text-stone-900">Boka massage</h2>
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
