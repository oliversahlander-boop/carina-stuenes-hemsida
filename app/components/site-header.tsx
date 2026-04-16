"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(198,164,108,0.25)] bg-[color:var(--color-surface)]/96 backdrop-blur">
      <div className="content-shell py-3 sm:py-4">
        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/HEALTH-transparent.png"
              alt="Health Stuenes logga"
              width={220}
              height={220}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(198,164,108,0.3)] text-[#d8ccbb] transition hover:border-[rgba(198,164,108,0.6)] hover:text-[#c6a46c]"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden items-center justify-center gap-6 md:flex lg:gap-8">
          <nav aria-label="Vänster meny" className="flex items-center gap-4 lg:gap-6">
            <Link href="/" className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#d8ccbb] transition hover:text-[#c6a46c]">
              Start
            </Link>
            <Link href="/om-oss" className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#d8ccbb] transition hover:text-[#c6a46c]">
              Om oss
            </Link>
          </nav>

          <Link href="/" className="flex items-center px-2">
            <Image
              src="/HEALTH-transparent.png"
              alt="Health Stuenes logga"
              width={320}
              height={320}
              priority
              className="h-7 w-auto object-contain lg:h-8"
            />
          </Link>

          <nav aria-label="Höger meny" className="flex items-center gap-4 lg:gap-6">
            <Link href="/tjanster" className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#d8ccbb] transition hover:text-[#c6a46c]">
              Tjänster
            </Link>
            <Link href="/faq" className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#d8ccbb] transition hover:text-[#c6a46c]">
              FAQ
            </Link>
            <Link href="/kontakt" className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#d8ccbb] transition hover:text-[#c6a46c]">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          aria-label="Mobilmeny"
          className="border-t border-[rgba(198,164,108,0.18)] bg-[color:var(--color-surface)] md:hidden"
        >
          <ul className="content-shell flex flex-col divide-y divide-[rgba(198,164,108,0.1)] py-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm font-medium uppercase tracking-[0.14em] text-[#d8ccbb] transition hover:text-[#c6a46c]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
