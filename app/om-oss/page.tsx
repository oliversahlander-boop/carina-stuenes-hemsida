import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "../seo";
import { company } from "../site-data";

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

export default function AboutPage() {
  return (
    <div className="content-shell pb-20 pt-12">
      <div className="space-y-16">
        <section className="floating-section mt-2 px-3 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Carina</p>
            <h1 className="mt-3 max-w-[22ch] text-3xl font-semibold leading-[1.14] text-stone-900 sm:text-4xl">
              När kroppen säger ifrån finns det en anledning
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-stone-700">
              Jag vet hur det känns när kroppen säger ifrån – när spänningar, smärta eller stress tar över och ingen riktigt lyssnar på helheten.
            </p>
            <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-stone-700">
              Här får du en stund att landa, bli lyssnad på och mötas där du är.
              Jag arbetar med ett helhetsperspektiv där kropp, tanke och livssituation hänger ihop – och där varje behandling anpassas efter dig.
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
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Min resa började med…</h2>

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
              Det är därför jag gör det jag gör idag — för att hjälpa dig förstå din kropp, hitta balans och skapa verklig förändring.
            </p>
          </div>
        </section>

        <div className="flex justify-center">
          <img
            src="/yoga.jpg"
            alt="Carina i yogaposition"
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
            Ta första steget mot balans med en behandling som utgår från dig och dina behov.
          </p>
          <a
            href={company.bookingUrl}
            className="btn-light mt-8 inline-flex w-full justify-center min-w-[10rem] sm:w-auto"
          >
            Boka tid
          </a>
        </section>
      </div>
    </div>
  );
}
