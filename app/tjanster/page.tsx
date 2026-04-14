import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "../components/cta-band";
import { createPageMetadata } from "../seo";
import { company, serviceDescriptions } from "../site-data";

const treatmentSections = [
  {
    title: "Massage och kropp",
    lead: "Djup avslappning, bättre cirkulation och mer rörlighet för kroppen i vardagen.",
    description:
      "För dig som vill släppa spänningar, minska stress och ge kroppen en trygg återhämtningspaus.",
    items: ["Massage", "Koppning", "Stretch och träningsövningar"],
    image: {
      src: "/hero-massage.jpg",
      alt: "Lugn behandlingsmiljö med fokus på massage",
      position: "object-[52%_42%]",
    },
  },
  {
    title: "Holistisk balans",
    lead: "Behandlingar som möter både kropp, nervsystem och inre återhämtning.",
    description:
      "När du behöver en stund där flera metoder får samverka, helt utifrån hur du mår just nu.",
    items: ["Biomagnetism", "Individuellt anpassade behandlingar", "Andningsövningar"],
    image: {
      src: "/hero-massage.jpg",
      alt: "Lugn atmosfär för holistisk behandling",
      position: "object-[78%_58%]",
    },
  },
  {
    title: "Närvaro och stillhet",
    lead: "Mjuk guidning för dig som vill komma ner i tempo och hitta ny energi.",
    description:
      "Vi arbetar med lugna verktyg för fokus, andning och återhämtning som du kan ta med dig i vardagen.",
    items: ["Yoga", "Meditation", "Mindfulness"],
    image: {
      src: "/hero-massage.jpg",
      alt: "Mjuk wellness-känsla i naturliga toner",
      position: "object-[26%_54%]",
    },
  },
  {
    title: "Hud och helhetsvård",
    lead: "Skonsam behandling med fokus på både lyster, lugn och välmående.",
    description:
      "För dig som vill kombinera yttre omsorg med inre återhämtning och mer hållbar vardagsbalans.",
    items: ["Ansiktsbehandlingar", "Kostrådgivning"],
    image: {
      src: "/hero-massage.jpg",
      alt: "Avslappnande spa-liknande känsla i varma neutrala toner",
      position: "object-[74%_44%]",
    },
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Tjänster",
  description:
    "Utforska massage, biomagnetism, koppning, yoga, mindfulness och fler holistiska tjänster för kropp och sinne.",
  path: "/tjanster",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Tjänster</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Behandlingar för balans, styrka och återhämtning</h1>
        <p className="mt-4 max-w-3xl text-stone-700">
          Här hittar du behandlingar för både kropp och sinne. Vi börjar alltid i hur du mår just nu, och väljer ett upplägg som känns tryggt, lugnt och relevant för dig.
        </p>
      </section>

      <section className="mt-10 space-y-12">
        {treatmentSections.map((section, index) => (
          <article
            key={section.title}
            className="overflow-hidden rounded-3xl bg-[#f8f7f5]/80"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className={`relative min-h-[260px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${section.image.position}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(245,243,239,0.1),rgba(17,17,17,0.12))]" />
              </div>

              <div className={`p-8 sm:p-10 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Kategori {index + 1}</p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-900">{section.title}</h2>
                <p className="mt-4 text-lg text-stone-700">{section.lead}</p>
                <p className="mt-3 text-base leading-relaxed text-stone-600">{section.description}</p>

                <ul className="mt-6 space-y-3 border-l border-stone-300 pl-4">
                  {section.items.map((item) => (
                    <li key={item}>
                      <p className="font-medium text-stone-900">{item}</p>
                      <p className="mt-1 text-sm leading-relaxed text-stone-600">{serviceDescriptions[item]}</p>
                    </li>
                  ))}
                </ul>

                <Link
                  href={company.bookingUrl}
                  className="mt-7 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#666] transition-colors hover:text-[#111]"
                >
                  Se behandlingar
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-3xl bg-[#f5f2ec] px-8 py-10">
        <h2 className="text-2xl font-semibold text-stone-900">Mobila tjänster</h2>
        <p className="mt-3 max-w-2xl text-stone-700">
          Det går också att boka mobila upplägg. Carina kan komma ut till företag och grupper när ni vill skapa utrymme för återhämtning direkt på plats.
        </p>
      </section>

      <section className="mt-10">
        <CtaBand
          title="Hitta rätt behandling för dig"
          text="Om du är osäker på vad som passar bäst börjar vi med att prata om hur du mår och vad du behöver."
        />
      </section>
    </div>
  );
}
