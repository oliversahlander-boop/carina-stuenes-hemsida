import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import { company, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Om Carina Stuenes",
  description:
    "Lär känna Carina Stuenes – holistisk terapeut med lång erfarenhet av massage, biomagnetism, koppning och yoga i Stockholm och Östersund.",
  path: "/om-oss",
});

const trustItems = [
  "Holistiskt synsätt",
  "Anpassat efter dig",
  "Erfarenhet från olika typer av klienter",
  "Verksam i Stockholm och Östersund",
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.siteUrl}/om-oss#webpage`,
  url: `${siteConfig.siteUrl}/om-oss`,
  name: "Om Carina Stuenes",
  description:
    "Lär känna Carina Stuenes, holistisk terapeut med erfarenhet av massage, koppning, biomagnetism och yoga i Stockholm och Östersund.",
  inLanguage: "sv-SE",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  about: { "@id": `${siteConfig.siteUrl}/#carina` },
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
        name: "Om oss",
        item: `${siteConfig.siteUrl}/om-oss`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="content-shell pb-20 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="space-y-16">
        <section className="floating-section mt-2 px-3 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <h1 className="mt-3 max-w-[22ch] text-3xl font-semibold leading-[1.14] text-stone-900 sm:text-4xl">
              Om Carina – kroppsterapeut i Stockholm &amp; Östersund
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-stone-700">
              Jag arbetar som kroppsterapeut och erbjuder massage, koppning och holistiska behandlingar i Stockholm och Östersund.
            </p>
            <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-stone-700">
              Mitt fokus är att hjälpa dig minska stress, spänningar och smärta genom behandlingar som ser till hela kroppen i Stockholm och Östersund.
            </p>
            <p className="mt-6 inline-flex max-w-fit items-center rounded-full border border-[rgba(198,164,108,0.32)] bg-[rgba(212,163,115,0.12)] px-4 py-2 text-sm font-medium tracking-[0.02em] text-[#d6c2a8] sm:text-base">
              Stockholm &amp; Östersund
            </p>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <div className="w-full max-w-[280px] overflow-hidden rounded-3xl border border-[rgba(198,164,108,0.2)] bg-[rgba(20,15,12,0.45)] sm:max-w-[300px] lg:max-w-[240px]">
              <Image
                src="/carina-1.jpeg"
                alt="Porträtt av Carina Stuenes"
                width={440}
                height={620}
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 62vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          </div>
        </section>

        <section className="floating-section floating-section-soft px-3 py-12 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-600">Min historia</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Min resa började</h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-stone-700">
            <p>
              År 2006 förändrades mitt liv.
            </p>
            <p>
              En olycka gjorde att allt stannade upp. Från att vara i ständig rörelse blev jag plötsligt begränsad – både i kroppen och i livet.
            </p>

            <p className="text-base font-semibold text-stone-900">
              Jag gick från att arbeta 150% till att bli förtidspensionär.
            </p>

            <p>
              Smärtan var konstant och kroppen bar på skador som påverkade ben och nacke. Det kändes som att den kropp jag alltid kunnat lita på inte längre var min.
            </p>

            <p className="text-base font-semibold text-stone-900">
              Jag kunde knappt gå.
            </p>

            <p>
              Men någonstans där började också en ny resa. En resa där jag började lyssna på kroppen – på riktigt. Steg för steg, med tålamod och nyfikenhet, började jag hitta vägar tillbaka. Inte genom snabba lösningar, utan genom att arbeta med kroppen som en helhet.
            </p>

            <p>
              Började studera anatomi, fysiologi, kinesisk medicin, ayurveda, yogalärareutbildning, näringslära, örter, kroppens uppbyggnad och hur allt hänger samman.
            </p>

            <p className="text-base font-semibold text-stone-900">
              Idag lever jag ett aktivt liv.
            </p>

            <p>
              Jag kan sitta i yogapositioner, springa mil och röra mig med en frihet jag en gång trodde var förlorad. Den erfarenheten har format hela mitt arbetssätt.
            </p>

            <p className="italic text-stone-800">
              Jag vet hur det känns när kroppen säger ifrån.
            </p>

            <p className="italic text-stone-800">
              Och jag vet att det går att hitta tillbaka.
            </p>

            <p>
              Det är därför jag gör det jag gör idag — för att hjälpa dig förstå din kropp, hitta balans och skapa verklig förändring i Stockholm och Östersund.
            </p>
          </div>
        </section>

        <div className="flex justify-center">
          <Image
            src="/yoga.jpg"
            alt="Carina i yogaposition"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 50rem, (min-width: 640px) 80vw, 96vw"
            className="w-full max-w-lg rounded-2xl object-contain shadow-md"
          />
        </div>

        <section className="floating-section px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
          <p className="max-w-4xl text-[1.06rem] leading-8 text-stone-800">
            Yoga har följt mig under många år och blivit ett sätt att förstå både kroppen och mig själv.
          </p>
          <p className="mt-4 max-w-4xl text-[1.06rem] leading-8 text-stone-800">
            Genom möten med människor från olika bakgrunder, och resor som gett nya perspektiv – inte minst i Indien – har jag landat i ett lugnare och mer lyhört sätt att arbeta.
          </p>
          <p className="mt-4 max-w-4xl text-[1.06rem] leading-8 text-stone-800 italic">
            Det tar jag med mig in i varje behandling.
          </p>
        </section>

        <section className="floating-section floating-section-alt px-3 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
          <article className="py-4">
            <h2 className="text-2xl font-semibold text-stone-900">Min erfarenhet</h2>
            <ul className="mt-4 space-y-3 text-base text-stone-700">
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Flera års erfarenhet inom branschen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Arbetat på spa och hotell med varierande klientel</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Arbetat med idrottare och företagsledare</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Bred förståelse för kroppen, prestation och stress</span>
              </li>
            </ul>
          </article>

          <article className="py-4">
            <h2 className="text-2xl font-semibold text-stone-900">Mitt arbetssätt</h2>
            <ul className="mt-4 space-y-3 text-base text-stone-700">
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Holistiskt synsätt</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Anpassat efter din dagsform</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-900 font-semibold">•</span>
                <span>Fokus på orsak, inte bara symptom</span>
              </li>
            </ul>
          </article>
          </div>
        </section>

        <section className="floating-section px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
          <p className="text-base leading-relaxed text-stone-700">
            Nyfiken på vilka behandlingar jag erbjuder?{" "}
            <Link href="/tjanster" className="font-semibold text-[#c6a46c] transition-colors hover:text-[#d4a373]">
              Läs mer om mina behandlingar här
            </Link>
            .
          </p>
        </section>

        <section className="floating-section floating-section-soft px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-base text-stone-800">
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-[#C6A46C]" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M4.5 10.5 8 14l7.5-7.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="floating-section floating-section-alt px-3 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-300">Nästa steg</p>
          <h2 className="mx-auto mt-3 max-w-[24ch] text-3xl font-semibold text-[#f5f1eb] leading-tight">
            Redo att lyssna på din kropp?
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-stone-300">
            Ta första steget mot balans med en behandling som utgår från dig och dina behov, oavsett om du bokar i Stockholm eller i Östersund.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={company.bookingUrl}
              className="btn-light inline-flex min-w-[10rem] justify-center sm:w-auto"
            >
              Boka tid
            </a>
            <Link
              href="/tjanster"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(198,164,108,0.3)] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#c6a46c] transition-colors hover:text-[#d4a373]"
            >
              Se behandlingar
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
