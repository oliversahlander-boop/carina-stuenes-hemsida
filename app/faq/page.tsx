import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "../components/cta-band";
import { createPageMetadata } from "../seo";
import { faqs, siteConfig } from "../site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Vanliga frågor",
  description:
    "Svar på vanliga frågor om bokning, behandlingar, priser och mobila tjänster hos Carina Stuenes i Stockholm och Östersund.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.siteUrl}/faq#webpage`,
  url: `${siteConfig.siteUrl}/faq`,
  inLanguage: "sv-SE",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
        name: "FAQ",
        item: `${siteConfig.siteUrl}/faq`,
      },
    ],
  },
};

export default function FaqPage() {
  return (
    <div className="content-shell pb-16 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">FAQ</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Vanliga frågor</h1>
        <p className="mt-4 max-w-2xl text-stone-700">
          Här hittar du svar på vanliga frågor om behandlingar och bokning i Stockholm och Östersund.{" "}
          Vill du veta mer om{" "}
          <Link href="/tjanster" className="font-semibold text-[#c6a46c] transition-colors hover:text-[#d4a373]">våra behandlingar</Link>
          {" "}eller{" "}
          <Link href="/om-oss" className="font-semibold text-[#c6a46c] transition-colors hover:text-[#d4a373]">vem jag är</Link>
          {" "}hittar du det i menyn.
        </p>
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
          text="Om du funderar på något är det bara att höra av dig, så svarar vi så gott vi kan för bokning i Stockholm och Östersund."
        />
      </section>
    </div>
  );
}
