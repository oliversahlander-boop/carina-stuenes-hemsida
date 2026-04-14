import Link from "next/link";
import { company } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-stone-200/60 bg-[#f0ede6]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <section>
          <h2 className="text-base font-semibold text-stone-900">Health Stuenes</h2>
          <p className="mt-2 text-sm text-stone-600">
            En lugn plats för behandling, återhämtning och bättre kontakt med kroppen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-900">Kontakt</h2>
          <ul className="mt-2 space-y-2 text-sm text-stone-700">
            <li>
              <a className="hover:text-stone-900" href={company.phoneLink}>
                {company.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-stone-900" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              <a className="hover:text-stone-900" href={company.bookingUrl}>
                Boka tid
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-900">Följ oss</h2>
          <div className="mt-2">
            <a
              href="https://www.facebook.com/people/Health-Stuenes/100063679415604/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besök Health Stuenes på Facebook"
              className="inline-flex items-center gap-3 text-sm text-stone-700 transition-colors duration-300 hover:text-stone-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-[#f8f7f5] text-stone-700">
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
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-900">Platser</h2>
          <ul className="mt-2 space-y-2 text-sm text-stone-700">
            <li>Stockholm</li>
            <li>Östersund</li>
            <li>
              <Link className="hover:text-stone-900" href="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
