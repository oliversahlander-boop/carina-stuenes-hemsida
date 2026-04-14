import Link from "next/link";
import { company } from "../site-data";

const navItems = [
  { href: "/", label: "Startsida" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/recensioner", label: "Recensioner" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/50 bg-[color:var(--color-surface)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-stone-900">
          {company.name}
        </Link>

        <nav aria-label="Huvudmeny" className="flex flex-wrap items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={company.bookingUrl} className="btn-primary text-sm">
          Boka tid
        </a>
      </div>
    </header>
  );
}
