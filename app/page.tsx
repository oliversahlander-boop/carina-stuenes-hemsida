import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createPageMetadata } from "./seo";
import { company } from "./site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Carina Stuenes – Massage & holistisk behandling i Stockholm",
  },
  description:
    "Holistiska behandlingar i Stockholm och Östersund. Massage, koppning, biomagnetism, yoga och mindfulness – anpassat efter dig. Boka din tid hos Carina Stuenes.",
  alternates: {
    canonical: "/",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://carinastuenes.se/#webpage",
  url: "https://carinastuenes.se/",
  name: "Carina Stuenes – Massage & holistisk behandling i Stockholm",
  description:
    "Holistiska behandlingar i Stockholm och Östersund. Massage, koppning, biomagnetism, yoga och mindfulness – anpassat efter dig.",
  isPartOf: { "@id": "https://carinastuenes.se/#website" },
  about: { "@id": "https://carinastuenes.se/#business" },
  inLanguage: "sv-SE",
};

export default function Home() {
  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/massage-1.jpg')", backgroundPosition: "60% center" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(26,18,13,0.84)_18%,rgba(26,18,13,0.62)_48%,rgba(26,18,13,0.78)_100%)]"
          aria-hidden
        />
        <div className="content-shell relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-[44rem] pr-4 lg:pr-14">
            <p className="hero-fade text-xs uppercase tracking-[0.28em] text-[#d1baa0] sm:text-sm">
              HOLISTISK HÄLSA & VÄLMÅENDE
            </p>
            <h1 className="hero-fade mt-8 max-w-[18ch] text-3xl font-semibold leading-[1.08] text-[#f5f1eb] [animation-delay:120ms] sm:text-4xl lg:text-6xl">
              Behandlingar som ser hela dig — inte bara symtomen
            </h1>
            <p className="hero-fade mt-10 max-w-[62ch] text-base leading-relaxed text-[#d9c9b5] [animation-delay:240ms] sm:text-lg">
              Här får du landa, bli lyssnad på och börja förstå din kropp.
            </p>
            <p className="hero-fade mt-4 max-w-[52ch] text-[1.08rem] italic font-medium leading-relaxed text-[#f5f1eb] [animation-delay:300ms] sm:text-xl">
              Jag möter dig där du är — med lugn, närvaro och omtanke.
            </p>
            <div className="hero-fade mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={company.bookingUrl}
                className="btn-primary w-full justify-center shadow-sm transition-all duration-300 hover:scale-[1.02] sm:w-auto"
              >
                Boka tid
              </a>
              <Link
                href="/tjanster"
                className="btn-secondary w-full justify-center transition-all duration-300 hover:scale-[1.02] sm:w-auto"
              >
                Se tjänster
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="start-content" className="content-shell floating-section floating-section-warm mt-10 px-4 py-10 sm:mt-14 sm:px-6 sm:py-14 lg:px-8">
        <h2 className="max-w-[18ch] text-3xl font-semibold !text-[#4b3421]">Här ser jag hela dig — inte bara det som gör ont.</h2>
        <p className="mt-6 max-w-[70ch] text-base leading-relaxed text-[#5c4632] sm:text-lg">
          Jag arbetar utifrån ett holistiskt perspektiv där kropp, tanke och livssituation hänger ihop. Med bred erfarenhet och genuint engagemang anpassar jag varje behandling efter din dagsform och dina behov.
        </p>
        <p className="mt-4 max-w-[52ch] text-[1.02rem] leading-relaxed text-[#6a513a] sm:text-lg">
          Ingen behandling är den andra lik — för ingen människa är det.
        </p>
        <div className="mt-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-3xl border border-[rgba(159,125,84,0.28)] bg-[linear-gradient(180deg,rgba(245,235,223,0.82),rgba(231,218,199,0.82))] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="text-sm leading-relaxed text-[#5c4632] sm:text-base">
              Vill du känna efter vad just din kropp behöver?
            </p>
            <a
              href={company.bookingUrl}
              className="btn-primary w-full justify-center text-sm uppercase tracking-[0.16em] transition-all duration-300 hover:scale-[1.02] sm:w-auto"
            >
              BOKA NU
            </a>
          </div>
        </div>
      </section>

      <section className="content-shell floating-section floating-section-alt mt-10 px-4 py-10 sm:mt-16 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Möt Carina</h2>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#a89880] sm:text-lg">
              Jag har jobbat med kroppen i många år, i olika miljöer och med många olika människor. Från spa och hotell till fotbollsklubbar och personer med mycket ansvar i vardagen.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#d9c9b5] sm:text-lg">
              Det jag har lärt mig är att kroppen reagerar oavsett vem du är – på stress, tempo och livet runt omkring.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#d9c9b5] sm:text-lg">
              Därför jobbar jag inte efter en mall. Jag utgår från hur du mår just idag och försöker förstå vad din kropp faktiskt behöver.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[rgba(198,164,108,0.2)] bg-[rgba(20,15,12,0.45)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/Mamma.jpeg"
                alt="Carina i behandling"
                fill
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 70vw, 92vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-shell floating-section floating-section-warm mt-10 px-4 py-10 sm:mt-16 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <h2 className="text-3xl font-semibold !text-[#5f4933]">Tjänster</h2>
          <p className="max-w-[34ch] text-sm leading-relaxed text-[#5f4933] sm:text-right">
            Jag erbjuder olika tjänster för både kropp och välmående — alltid anpassat efter hur du mår just idag.
          </p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-3xl space-y-6">
            <ul className="space-y-3 border-l border-[rgba(159,125,84,0.45)] pl-4 text-base text-[#4b3421]">
              <li>• Massage & kroppsterapi</li>
              <li>• Koppning & biomagnetism</li>
              <li>• Ansiktsbehandlingar</li>
              <li>• Andning & mindfulness</li>
              <li>• Kostrådgivning</li>
            </ul>
            <p className="text-base leading-relaxed text-[#5f4933]">
              Är du osäker på vad som passar dig, är du alltid välkommen att höra av dig så tittar vi på det tillsammans.
            </p>
          </div>

          <div className="grid w-full max-w-[24rem] grid-cols-2 gap-3 justify-self-center sm:gap-4 lg:max-w-[26rem] lg:justify-self-end">
            <div className="overflow-hidden rounded-3xl border border-[rgba(198,164,108,0.2)] bg-[rgba(20,15,12,0.45)]">
              <div className="relative aspect-square">
                <Image
                  src="/koppar.jpg"
                  alt="Koppning och behandling"
                  fill
                  sizes="(min-width: 1024px) 13rem, (min-width: 640px) 30vw, 44vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[rgba(198,164,108,0.2)] bg-[rgba(20,15,12,0.45)]">
              <div className="relative aspect-square">
                <Image
                  src="/koppar%20bild%20massage.jpg"
                  alt="Koppning med massage"
                  fill
                  sizes="(min-width: 1024px) 13rem, (min-width: 640px) 30vw, 44vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-shell floating-section floating-section-soft mt-10 px-4 py-10 sm:mt-16 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <article className="space-y-5 md:pr-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(198,164,108,0.22)] text-[#f5f1eb]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 21c4.97-2.76 8-6.32 8-10a4 4 0 0 0-7.3-2.25L12 9.5l-.7-.75A4 4 0 0 0 4 11c0 3.68 3.03 7.24 8 10Z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold">Holistiskt synsätt</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Här tittar vi inte bara på var det gör ont, utan på hur du mår som helhet.
            </p>
          </article>

          <article className="space-y-5 md:px-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(198,164,108,0.22)] text-[#f5f1eb]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M4 20a8 8 0 0 1 16 0" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold">Personlig vägledning</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Du blir lyssnad på från start och behandlingen formas efter hur du mår just idag.
            </p>
          </article>

          <article className="space-y-5 md:pl-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(198,164,108,0.22)] text-[#f5f1eb]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M6 4h12" />
                <path d="M9 4v2a3 3 0 0 1-.88 2.12L6 10.24A3 3 0 0 0 5.12 12L5 20h14l-.12-8a3 3 0 0 0-.88-1.76l-2.12-2.12A3 3 0 0 1 15 6V4" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold">Anpassade behandlingar</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Ibland är det massage, ibland koppning eller en kombination. Vi hittar det som passar dig.
            </p>
          </article>
        </div>
      </section>

      <section className="content-shell floating-section floating-section-alt mt-10 px-4 py-10 sm:mt-16 sm:px-6 sm:py-14 lg:px-8">
        <div className="py-8 text-center sm:py-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ge dig själv en stund av lugn</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#a89880]">
            En behandling är ett tillfälle att andas, landa och komma i kontakt med sig själv.
            Du väljer takt och riktning.
          </p>
          <a href={company.bookingUrl} className="btn-light mt-8 inline-flex w-full justify-center transition-all duration-300 hover:-translate-y-0.5 sm:w-auto">
            Boka tid
          </a>
        </div>
      </section>
    </div>
  );
}
