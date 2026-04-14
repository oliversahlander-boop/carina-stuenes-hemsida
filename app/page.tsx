import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createPageMetadata } from "./seo";
import { company, serviceDescriptions, testimonials } from "./site-data";

const featuredCategories = [
  {
    title: "Massage och kropp",
    lead: "För dig som vill släppa på spänningar och ge kroppen ny energi.",
    items: ["Massage", "Koppning", "Stretch och träningsövningar"],
    image: {
      src: "/hero-massage.jpg",
      alt: "Lugn behandlingsmiljö med massage och återhämtning",
      position: "object-[52%_42%]",
    },
  },
  {
    title: "Holistisk återhämtning",
    lead: "När du vill landa, varva ner och hitta bättre balans i vardagen.",
    items: ["Biomagnetism", "Yoga", "Mindfulness"],
    image: null,
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Startsida",
  description:
    "Holistiska behandlingar, yoga och mindfulness för dig som söker balans, återhämtning och långsiktig hälsa.",
  path: "/",
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Startsida",
  description:
    "Health Stuenes erbjuder holistiska behandlingar för kropp, sinne och återhämtning.",
};

export default function Home() {
  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="relative left-1/2 right-1/2 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src="/hero-massage.jpg"
            alt=""
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-[rgba(245,243,239,0.24)]" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(247,241,231,0.28)_0%,rgba(247,241,231,0.16)_42%,rgba(247,241,231,0.06)_72%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-[linear-gradient(to_bottom,transparent,rgba(245,243,239,0.72))]" />

        <div className="relative z-30 mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-6 py-24 lg:py-28">
          <div className="max-w-[44rem] pr-4 lg:pr-14">
            <p className="hero-fade text-xs uppercase tracking-[0.28em] text-stone-700 sm:text-sm">
              Holistisk hälsa & välmående
            </p>
            <h1 className="hero-fade mt-8 max-w-[12ch] text-4xl font-semibold leading-[1.08] text-stone-900 sm:text-5xl lg:text-6xl [animation-delay:120ms]">
              När kroppen säger ifrån finns det en anledning
            </h1>
            <p className="hero-fade mt-10 max-w-[58ch] text-base leading-relaxed text-stone-700 sm:text-lg [animation-delay:240ms]">
              Här får du en stund att landa, bli lyssnad på och få behandling som utgår från dig.
            </p>
            <p className="hero-fade mt-4 max-w-[58ch] text-sm leading-relaxed text-stone-700 [animation-delay:270ms] sm:text-base">
              Jag arbetar som yogalärare och kroppsterapeut med ett holistiskt synsätt, där jag ser hela dig – inte bara det som gör ont.
            </p>
            <p className="hero-fade mt-5 max-w-[52ch] text-[1.08rem] italic font-medium leading-relaxed text-stone-900 [animation-delay:300ms] sm:text-xl">
              Jag möter dig där du är – med lugn, närvaro och omtanke.
            </p>
            <div className="hero-fade mt-12 flex flex-wrap gap-4 [animation-delay:360ms]">
              <a
                href={company.bookingUrl}
                className="btn-primary shadow-sm transition-all duration-300 hover:scale-[1.02]"
              >
                Boka tid
              </a>
              <Link
                href="/tjanster"
                className="btn-secondary transition-all duration-300 hover:scale-[1.02]"
              >
                Se behandlingar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-40 -mt-14 rounded-t-[2.2rem] border-t border-stone-100/50 bg-[#f5f3ef]/95 pt-16 backdrop-blur-md sm:-mt-16 sm:pt-20">
      <section id="start-content" className="mx-auto mt-0 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-stone-900">Varför välja Health Stuenes</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          <article className="space-y-5 md:pr-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-200/80 text-[#111]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 21c4.97-2.76 8-6.32 8-10a4 4 0 0 0-7.3-2.25L12 9.5l-.7-.75A4 4 0 0 0 4 11c0 3.68 3.03 7.24 8 10Z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-stone-900">Holistiskt synsätt</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              Här tittar vi inte bara på var det gör ont, utan på hur du mår som helhet.
            </p>
          </article>

          <article className="space-y-5 md:px-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-800">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M4 20a8 8 0 0 1 16 0" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-stone-900">Personlig vägledning</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              Du blir lyssnad på från start och behandlingen formas efter hur du mår just idag.
            </p>
          </article>

          <article className="space-y-5 md:pl-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-200/80 text-[#111]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M6 4h12" />
                <path d="M9 4v2a3 3 0 0 1-.88 2.12L6 10.24A3 3 0 0 0 5.12 12L5 20h14l-.12-8a3 3 0 0 0-.88-1.76l-2.12-2.12A3 3 0 0 1 15 6V4" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-stone-900">Anpassade behandlingar</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              Ibland är det massage, ibland koppning eller en kombination. Vi hittar det som passar dig.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-28 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-stone-900">Behandlingar</h2>
          <Link
            href="/tjanster"
            className="text-sm font-medium text-[#666] transition-colors duration-300 hover:text-[#111]"
          >
            Se alla behandlingar
          </Link>
        </div>
        <div className="mt-8 space-y-8">
          {featuredCategories.map((category, index) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-3xl bg-[#f8f7f5]/80"
            >
              <div className={`grid gap-0 ${category.image ? "md:grid-cols-2" : ""}`}>
                {category.image && (
                  <div className={`relative min-h-[250px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`object-cover ${category.image.position}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(245,243,239,0.1),rgba(17,17,17,0.12))]" />
                  </div>
                )}

                <div className={`p-8 sm:p-10 ${category.image && index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-3xl font-semibold text-stone-900">{category.title}</h3>
                  <p className="mt-4 text-lg text-stone-700">{category.lead}</p>

                  <ul className="mt-6 space-y-3 border-l border-stone-300 pl-4">
                    {category.items.map((item) => (
                      <li key={item}>
                        <p className="font-medium text-stone-900">{item}</p>
                        <p className="mt-1 text-sm leading-relaxed text-stone-600">{serviceDescriptions[item]}</p>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/tjanster"
                    className="mt-7 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#666] transition-colors hover:text-[#111]"
                  >
                    Se behandlingar
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold leading-snug text-stone-900">En stund bara för dig</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
          Ibland behöver vi bara stanna upp en stund.
          Lyssna på kroppen. Andas. Känna efter.
        </p>
        <p className="mt-5 text-xl italic font-light text-stone-500">Här finns utrymme för det.</p>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1c1815] px-8 py-16 text-center sm:px-14">
          <h2 className="text-3xl font-semibold text-[#f5f2ec]">Ge dig själv en stund av lugn</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-300">
            En behandling är ett tillfälle att andas, landa och komma i kontakt med sig själv.
            Du väljer takt och riktning.
          </p>
          <a href={company.bookingUrl} className="btn-light mt-8 inline-flex transition-all duration-300 hover:-translate-y-0.5">
            Boka tid
          </a>
        </div>
      </section>

      <section className="mx-auto mt-28 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-stone-900">Kunders upplevelser</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <blockquote
              key={item.name}
              className="border-l-2 border-black/40 pl-6"
            >
              <p className="text-stone-700">&quot;{item.quote}&quot;</p>
              <footer className="mt-5 text-sm font-semibold text-stone-900">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
