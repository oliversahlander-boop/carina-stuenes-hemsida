import Image from "next/image";
import Link from "next/link";
import { company } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[rgba(198,164,108,0.22)] bg-[color:var(--background)]">
      <div className="mx-auto grid w-full max-w-[88rem] gap-x-8 gap-y-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10 lg:py-12">
        <section className="space-y-3 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xs uppercase tracking-[0.28em] text-[#e3c39c] sm:text-sm">Health Stuenes</h2>
          <Link
            href="/"
            aria-label="Till startsidan"
            className="inline-flex items-center"
          >
            <Image
              src="/HEALTH-transparent.png"
              alt="Health Stuenes logga"
              width={220}
              height={220}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#e3c39c]">Kontakt</h2>
          <ul className="space-y-2.5 text-sm text-[#b9a58d]">
            <li>
              <a className="transition hover:text-[#e3c39c]" href={company.smsLink}>
                {company.phone}
              </a>
            </li>
            <li>
              <a className="transition hover:text-[#e3c39c]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              <a className="font-medium text-[#d4a373] transition hover:text-[#e3c39c]" href={company.bookingUrl}>
                Boka tid →
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#e3c39c]">Följ oss</h2>
          <div className="flex flex-col items-start gap-3">
            <a
              href="https://www.facebook.com/people/Health-Stuenes/100063679415604/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök Health Stuenes på Facebook"
              className="inline-flex w-fit items-center gap-3 text-sm text-[#b9a58d] transition hover:text-[#e3c39c]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] text-[#f5f1eb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.5-.1-1.4-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H7.5V14H10v7h3.5Z" />
                </svg>
              </span>
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/miss_csweet/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök Health Stuenes på Instagram"
              className="inline-flex w-fit items-center gap-3 text-sm text-[#b9a58d] transition hover:text-[#e3c39c]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(198,164,108,0.35)] bg-[rgba(20,15,12,0.5)] text-[#f5f1eb]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#e3c39c]">Platser</h2>
          <ul className="space-y-2.5 text-sm text-[#b9a58d]">
            <li className="leading-relaxed">Olof Dalins väg 6<br />112 52, Stockholm</li>
            <li className="leading-relaxed">Pastorsgatan 3<br />831 35, Östersund</li>
            <li className="pt-1">
              <Link className="font-medium text-[#d4a373] transition hover:text-[#e3c39c]" href="/kontakt">
                Kontakta oss →
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-t border-[rgba(198,164,108,0.18)]">
        <div className="mx-auto w-full max-w-[88rem] px-4 py-3 text-center sm:px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.12em] text-[#7a6a58]">
            Skapad av One Media
          </p>
        </div>
      </div>
    </footer>
  );
}
