import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { TrackedLink } from "./components/tracked-link";
import { company, seoKeywords, siteConfig } from "./site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Carina Stuenes – Massage & holistisk behandling i Stockholm",
  },
  description:
    "Holistiska behandlingar i Stockholm och Östersund. Massage, koppning, biomagnetism, yoga och mindfulness – anpassat efter dig. Boka din tid hos Carina Stuenes.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Carina Stuenes – Massage & holistisk behandling i Stockholm",
    description:
      "Holistiska behandlingar i Stockholm och Östersund. Massage, koppning, biomagnetism, yoga och mindfulness – anpassat efter dig.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    type: "website",
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Carina Stuenes – Holistisk hälsa och välmående",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carina Stuenes – Massage & holistisk behandling i Stockholm",
    description:
      "Holistiska behandlingar i Stockholm och Östersund. Massage, koppning, biomagnetism, yoga och mindfulness – anpassat efter dig.",
    images: [siteConfig.defaultOgImage],
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
    <div className="home-page pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/spa-massage-bakgrund.jpg')", backgroundPosition: "60% center" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(26,18,13,0.84)_18%,rgba(26,18,13,0.62)_48%,rgba(26,18,13,0.78)_100%)]"
          aria-hidden
        />
        <div className="content-shell relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-[44rem] pr-4 lg:pr-14">
            <p className="hero-fade text-xs uppercase tracking-[0.28em] text-[#d1baa0] sm:text-sm">
              MASSAGE &amp; KROPPSBEHANDLINGAR
            </p>
            <h1 className="hero-fade mt-8 max-w-[18ch] text-3xl font-semibold leading-[1.08] text-[#f5f1eb] [animation-delay:120ms] sm:text-4xl lg:text-6xl">
              Behandling utifrån hur kroppen känns idag
            </h1>
            <p className="hero-fade mt-10 max-w-[62ch] text-base leading-relaxed text-[#d9c9b5] [animation-delay:240ms] sm:text-lg">
              Jag erbjuder massage, koppning och andra kroppsbehandlingar i Stockholm och Östersund.
            </p>
            <p className="hero-fade mt-4 max-w-[52ch] text-[1.08rem] italic font-medium leading-relaxed text-[#f5f1eb] [animation-delay:300ms] sm:text-xl">
              Vi börjar med ett kort samtal före behandlingen.
            </p>
            <div className="hero-fade mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:flex-wrap sm:gap-4">
              <TrackedLink
                href={company.bookingUrl}
                eventName="booking_click"
                eventSource="home_hero_booking"
                className="btn-primary w-full justify-center shadow-sm transition-all duration-300 hover:scale-[1.02] sm:w-auto"
              >
                Boka tid
              </TrackedLink>
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
        <h2 className="max-w-[18ch] text-3xl font-semibold !text-[#4b3421]">Behandlingen börjar med att jag lyssnar</h2>
        <p className="mt-6 max-w-[70ch] text-base leading-relaxed text-[#5c4632] sm:text-lg">
          Före behandlingen pratar vi kort om hur du mår och om det är något område du vill att jag fokuserar på. Sedan väljer jag arbetssätt utifrån det du berättar och hur kroppen känns den dagen.
        </p>
        <p className="mt-4 max-w-[52ch] text-[1.02rem] leading-relaxed text-[#6a513a] sm:text-lg">
          Det kan vara massage, koppning eller en kombination av flera metoder.
        </p>
        <div className="mt-12">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-center rounded-3xl border border-[rgba(159,125,84,0.28)] bg-[linear-gradient(180deg,rgba(245,235,223,0.82),rgba(231,218,199,0.82))] px-5 py-5 sm:px-7">
            <TrackedLink
              href="/kontakt"
              eventName="contact_click"
              eventSource="home_intro_contact"
              className="btn-primary w-full justify-center text-sm uppercase tracking-[0.16em] transition-all duration-300 hover:scale-[1.02] sm:w-auto"
            >
              KONTAKTA MIG
            </TrackedLink>
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
            <div className="mt-8 border-l border-[rgba(198,164,108,0.38)] pl-5">
              <h3 className="text-xl font-semibold text-[#f5f1eb]">
                Massage och kroppsterapi
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#d9c9b5] sm:text-lg">
                Jag erbjuder massage och kroppsterapi i Stockholm och Östersund. En behandling kan innehålla klassisk massage, djupgående massage, koppning, biomagnetism, andning eller mindfulness.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#a89880] sm:text-lg">
                Vilka metoder jag använder beror på vad du bokar och vad vi kommer fram till före behandlingen.
              </p>
            </div>
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
            På Health Stuenes erbjuder jag behandlingar och övningar i Stockholm och Östersund.
          </p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-3xl space-y-6">
            <ul className="space-y-3 border-l border-[rgba(159,125,84,0.45)] pl-4 text-base text-[#4b3421]">
              <li><span aria-hidden>•</span><span>Massage & kroppsterapi</span></li>
              <li><span aria-hidden>•</span><span>Koppning & biomagnetism</span></li>
              <li><span aria-hidden>•</span><span>Ansiktsbehandlingar</span></li>
              <li><span aria-hidden>•</span><span>Andning & mindfulness</span></li>
              <li><span aria-hidden>•</span><span>Kostrådgivning</span></li>
            </ul>
            <p className="text-base leading-relaxed text-[#5f4933]">
              Är du osäker på vad du ska boka får du gärna höra av dig först.
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
            <h3 className="text-xl font-semibold">Samtal före behandlingen</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Du får berätta hur kroppen känns och om det är något särskilt område jag ska fokusera på.
            </p>
          </article>

          <article className="space-y-5 md:px-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(198,164,108,0.22)] text-[#f5f1eb]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M4 20a8 8 0 0 1 16 0" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold">Behandling efter dagsform</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Tryck och arbetssätt anpassas efter hur kroppen känns vid besöket.
            </p>
          </article>

          <article className="space-y-5 md:pl-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(198,164,108,0.22)] text-[#f5f1eb]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M6 4h12" />
                <path d="M9 4v2a3 3 0 0 1-.88 2.12L6 10.24A3 3 0 0 0 5.12 12L5 20h14l-.12-8a3 3 0 0 0-.88-1.76l-2.12-2.12A3 3 0 0 1 15 6V4" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold">Flera metoder</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Beroende på bokning kan behandlingen innehålla massage, koppning eller en kombination.
            </p>
          </article>
        </div>
      </section>

      <section className="content-shell floating-section floating-section-alt mt-10 px-4 py-10 sm:mt-16 sm:px-6 sm:py-14 lg:px-8">
        <div className="py-8 text-center sm:py-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Vill du boka en behandling?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#a89880]">
            Skicka ett sms via knappen nedan, så återkommer jag med lediga tider.
          </p>
          <TrackedLink
            href={company.bookingUrl}
            eventName="booking_click"
            eventSource="home_bottom_booking"
            className="btn-light mt-8 inline-flex w-full justify-center transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            Boka tid
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
