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
    <div className="home-page">
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

      <section id="start-content" className="home-band home-band-light">
        <div className="content-shell home-listen-grid">
          <h2 className="text-3xl font-semibold">Behandlingen börjar med att jag lyssnar</h2>
          <div className="home-listen-copy">
            <p className="text-base leading-relaxed sm:text-lg">
              Före behandlingen pratar vi kort om hur du mår och om det är något område du vill att jag fokuserar på. Sedan väljer jag arbetssätt utifrån det du berättar och hur kroppen känns den dagen.
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed sm:text-lg">
              Det kan vara massage, koppning eller en kombination av flera metoder.
            </p>
            <div className="mt-8">
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
        </div>
      </section>

      <section className="home-band home-band-dark">
        <div className="content-shell home-carina-grid">
          <div className="home-carina-copy">
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

          <div className="home-carina-image">
            <div className="relative h-full min-h-[28rem]">
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

      <section className="home-band home-band-services">
        <div className="content-shell">
          <div className="home-services-heading">
            <h2 className="text-3xl font-semibold">Tjänster</h2>
            <p className="text-sm leading-relaxed">
              På Health Stuenes erbjuder jag behandlingar och övningar i Stockholm och Östersund.
            </p>
          </div>
          <div className="home-services-grid">
            <div className="home-services-copy">
              <ul className="home-service-list text-base">
                <li><span>Massage &amp; kroppsterapi</span></li>
                <li><span>Koppning &amp; biomagnetism</span></li>
                <li><span>Ansiktsbehandlingar</span></li>
                <li><span>Andning &amp; mindfulness</span></li>
                <li><span>Kostrådgivning</span></li>
            </ul>
              <p className="text-base leading-relaxed">
              Är du osäker på vad du ska boka får du gärna höra av dig först.
            </p>
          </div>

            <div className="home-services-image">
              <div className="relative h-full min-h-[24rem]">
                <Image
                  src="/koppar.jpg"
                  alt="Koppning och behandling"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 92vw"
                  className="home-services-image-desktop object-cover object-center"
                />
                <Image
                  src="/koppar%20bild%20massage.jpg"
                  alt="Koppning med massage"
                  fill
                  sizes="(max-width: 639px) 92vw, 1px"
                  className="home-services-image-mobile object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band home-band-process">
        <div className="content-shell home-process-list">
          <article>
            <h3 className="text-xl font-semibold">Samtal före behandlingen</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Du får berätta hur kroppen känns och om det är något särskilt område jag ska fokusera på.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold">Behandling efter dagsform</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Tryck och arbetssätt anpassas efter hur kroppen känns vid besöket.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold">Flera metoder</h3>
            <p className="text-sm leading-relaxed text-[#a89880]">
              Beroende på bokning kan behandlingen innehålla massage, koppning eller en kombination.
            </p>
          </article>
        </div>
      </section>

      <section className="home-band home-band-cta">
        <div className="content-shell text-center">
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
