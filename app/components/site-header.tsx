"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useRef, useState } from "react";
import { TrackedLink } from "./tracked-link";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [invalidPin, setInvalidPin] = useState(false);
  const logoClicks = useRef(0);
  const logoClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setOpen(false);

    if (logoClickTimer.current) {
      clearTimeout(logoClickTimer.current);
    }

    logoClicks.current += 1;

    if (logoClicks.current >= 3) {
      logoClicks.current = 0;
      setPin("");
      setInvalidPin(false);
      setPinOpen(true);
      return;
    }

    logoClickTimer.current = setTimeout(() => {
      logoClicks.current = 0;
      router.push("/");
    }, 480);
  }

  async function handlePinSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/api/statistics-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });

    if (!response.ok) {
      setPin("");
      setInvalidPin(true);
      return;
    }

    setPinOpen(false);
    setPin("");
    setInvalidPin(false);
    router.push("/statistik");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(198,164,108,0.25)] bg-[color:var(--color-surface)]/96 backdrop-blur">
      <div className="content-shell py-3 sm:py-4">
        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden">
          <Link
            href="/"
            className="flex items-center"
            onClick={handleLogoClick}
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

          <Link href="/" className="flex items-center px-2" onClick={handleLogoClick}>
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
            <TrackedLink
              href="/kontakt"
              eventName="contact_click"
              eventSource="header_contact"
              className="text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#d8ccbb] transition hover:text-[#c6a46c]"
            >
              Kontakt
            </TrackedLink>
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
                {href === "/kontakt" ? (
                  <TrackedLink
                    href={href}
                    eventName="contact_click"
                    eventSource="mobile_menu_contact"
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm font-medium uppercase tracking-[0.14em] text-[#d8ccbb] transition hover:text-[#c6a46c]"
                  >
                    {label}
                  </TrackedLink>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm font-medium uppercase tracking-[0.14em] text-[#d8ccbb] transition hover:text-[#c6a46c]"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {pinOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/45 px-4 pt-28 backdrop-blur-sm"
          onClick={() => setPinOpen(false)}
        >
          <form
            onSubmit={handlePinSubmit}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-[12rem]"
            aria-label="PIN"
          >
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              autoFocus
              value={pin}
              onChange={(event) => {
                setPin(event.target.value);
                setInvalidPin(false);
              }}
              className={`h-14 w-full rounded-2xl border bg-[rgba(18,14,11,0.94)] px-5 text-center text-2xl tracking-[0.35em] text-[#f5f1eb] outline-none transition focus:ring ${
                invalidPin
                  ? "border-red-400 ring-red-400/30"
                  : "border-[rgba(198,164,108,0.45)] ring-[rgba(198,164,108,0.35)]"
              }`}
              aria-label="PIN"
            />
            <button type="submit" className="sr-only" aria-label="OK" />
          </form>
        </div>
      ) : null}
    </header>
  );
}
