import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import { company, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Tjänster",
  description:
    "Här hittar du behandlingar för både kropp och återhämtning, alltid anpassade efter hur du mår just nu och vad din kropp behöver.",
  path: "/tjanster",
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.siteUrl}/tjanster#webpage`,
  url: `${siteConfig.siteUrl}/tjanster`,
  name: "Tjänster | Carina Stuenes",
  description:
    "Behandlingar för kropp och återhämtning: massage, koppning, biomagnetisk behandling, IR-ljus och mixad behandling.",
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
        name: "Tjänster",
        item: `${siteConfig.siteUrl}/tjanster`,
      },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Massage" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Koppning" } },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@type": "Service", name: "Biomagnetisk behandling" },
      },
      { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "IR - Infrarött ljus" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "Mixad behandling" } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="content-shell pb-24 pt-12 sm:pb-28 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <section className="max-w-2xl lg:ml-6">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Tjänster</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">Tjänster</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
          Här hittar du behandlingar för både kropp och återhämtning.
          Alla behandlingar anpassas efter hur du mår just nu och vad din kropp behöver.
        </p>
      </section>

      <section className="mt-14 max-w-4xl lg:ml-4 sm:mt-20">
        <article className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6 sm:px-7 sm:py-7">
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(280px,370px)] lg:gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">Massage</h2>
              <p className="mt-3 text-lg text-stone-700">30 min · 60 min · 90 min</p>
              <p className="mt-6 max-w-xl leading-relaxed text-stone-700">
                Massage för dig som vill släppa på spänningar, öka cirkulationen och ge kroppen ny energi.
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-stone-700">Du kan välja mellan:</p>
              <ul className="mt-4 space-y-4 border-l border-[rgba(198,164,108,0.35)] pl-5">
                <li>
                  <p className="font-medium text-stone-900">Djupgående / behandlande massage</p>
                  <p className="mt-1.5 leading-relaxed text-stone-700">
                    För punktbehandling av ett specifikt område eller som helkroppsbehandling.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-stone-900">Avslappnande massage</p>
                  <p className="mt-1.5 leading-relaxed text-stone-700">
                    För att mjuka upp kroppen, varva ner och öka blodcirkulationen.
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] lg:h-full">
              <div className="relative aspect-[4/5] w-full lg:h-full lg:aspect-auto">
                <Image
                  src="/in-action.jpg"
                  alt="Massagebehandling"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-xl py-24 text-center sm:py-28">
        <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
          Behandlingarna formas med lugn och närvaro, utifrån din dagsform och det kroppen behöver just nu.
        </p>
      </section>

      <section className="max-w-3xl lg:ml-12">
        <article>
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">Koppning</h2>
          <p className="mt-3 text-lg text-stone-700">30 min · 60 min · 90 min</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
            Koppning är en djupgående behandling där bindväven lyfts med hjälp av vakuum från kopparna.
            Det kan bidra till ökad cirkulation, aktivering av lymfsystemet och hjälpa kroppen att släppa
            på stagnationer och spänningar.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">
            Behandlingen passar dig som vill arbeta mer på djupet och ge kroppen stöd i sin återhämtning.
          </p>
        </article>

        <article className="mt-24 sm:mt-28">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">Biomagnetisk behandling</h2>
          <p className="mt-3 text-lg text-stone-700">45-60 min</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
            Biomagnetisk behandling är en metod där magneter placeras på specifika områden på kroppen med
            syftet att stödja kroppens balans.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">
            Behandlingen sker liggande på bänk och används som en lugn, terapeutisk metod för dig som vill
            arbeta mer holistiskt med kroppens inre återhämtning.
          </p>
        </article>
      </section>

      <section className="max-w-lg py-24 text-left sm:py-28 lg:ml-24">
        <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
          En stilla mellanpunkt där behandling och återhämtning möts i ett tempo som får vara ditt.
        </p>
      </section>

      <section className="max-w-3xl lg:ml-6">
        <article>
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">IR - Infrarött ljus</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
            Infrarött ljus används som stöd för kroppens återhämtning och för att ge värme djupt in i vävnaderna.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">Det kan bidra till:</p>
          <ul className="mt-4 list-disc space-y-2.5 pl-6 leading-relaxed text-stone-700 marker:text-[rgba(198,164,108,0.95)]">
            <li>ökad cirkulation</li>
            <li>avslappning</li>
            <li>stöd för muskler och vävnader</li>
            <li>lindring vid stelhet och spänningar</li>
          </ul>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">
            IR-ljus används ofta som ett komplement i behandling för att ge kroppen extra stöd.
          </p>
        </article>

        <article className="mt-20 sm:mt-24">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">Mixad behandling</h2>
          <p className="mt-3 text-lg text-stone-700">60 min · 90 min</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
            En kombinationsbehandling för dig som vill ha ett mer helhetsanpassat upplägg.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">Behandlingen kan innehålla en kombination av:</p>
          <ul className="mt-4 list-disc space-y-2.5 pl-6 leading-relaxed text-stone-700 marker:text-[rgba(198,164,108,0.95)]">
            <li>massage</li>
            <li>koppning</li>
            <li>IR-ljus</li>
            <li>gua sha</li>
          </ul>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">
            Vi väljer det som passar dig bäst utifrån hur du mår just den dagen.
          </p>
        </article>
      </section>

      <section className="mt-24 max-w-2xl rounded-2xl border border-[rgba(198,164,108,0.16)] bg-[rgba(198,164,108,0.035)] px-6 py-8 sm:px-7 sm:py-9 lg:ml-16">
        <h2 className="text-2xl font-semibold text-stone-900">Information</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
          Behandlingar från 395 kr, beroende på upplägg och tid.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-700">Jag innehar F-skattsedel.</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">Du kan också köpa:</p>
        <ul className="mt-4 list-disc space-y-2.5 pl-6 leading-relaxed text-stone-700 marker:text-[rgba(198,164,108,0.95)]">
          <li>behandlingskort 1 timme (5 eller 10 gånger) - ett kort för en behandling i en timme, som kan nyttjas 5 eller 10 gånger</li>
          <li>presentkort eller värdebevis</li>
        </ul>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">För att köpa presentkort, hör av dig till oss.</p>
        <Link
          href="/kontakt"
          className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#c6a46c] transition-colors hover:text-[#d4a373]"
        >
          Kontakta oss för presentkort
        </Link>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">Perfekt både för dig själv eller som gåva.</p>
      </section>

      <section className="mt-24 max-w-4xl border-t border-[rgba(198,164,108,0.16)] pt-12 sm:pt-14 lg:ml-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(210px,280px)] lg:items-start lg:gap-9">
          <article>
            <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">Osäker på vad som passar dig?</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
              Om du har funderingar eller är osäker på vilken behandling som passar bäst, är du alltid välkommen
              att höra av dig så tittar vi på det tillsammans.
            </p>
          </article>

          <article className="rounded-xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.025)] px-4 py-5 sm:px-5 sm:py-6">
            <h2 className="text-2xl font-semibold text-stone-900">Boka tid</h2>
            <p className="mt-3 leading-relaxed text-stone-700">En stund för dig, där kroppen får ta plats.</p>
            <Link
              href={company.bookingUrl}
              className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#c6a46c] transition-colors hover:text-[#d4a373]"
            >
              Boka tid
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
