import type { Metadata } from "next";
import { CtaBand } from "../components/cta-band";
import { createPageMetadata } from "../seo";
import { faqs } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Vanliga frågor om bokning, behandlingar, mobila tjänster och hur vi anpassar insatser efter individens behov.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">FAQ</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Vanliga frågor</h1>
      </section>

      <section className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details key={item.question} className="card group">
            <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
              {item.question}
            </summary>
            <p className="mt-3 text-stone-700">{item.answer}</p>
          </details>
        ))}
      </section>

      <section className="mt-10">
        <CtaBand
          title="Har du fler frågor?"
          text="Om du funderar på något är det bara att höra av dig, så svarar vi så gott vi kan."
        />
      </section>
    </div>
  );
}
