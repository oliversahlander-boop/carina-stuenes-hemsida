import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { readAnalyticsStats, type AnalyticsEventName } from "../lib/analytics-store";
import { hasStatisticsAccess } from "../lib/statistics-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Statistik",
  robots: {
    index: false,
    follow: false,
  },
};

const eventLabels: Record<AnalyticsEventName, string> = {
  booking_click: "Boka tid-klick",
  contact_click: "Kontakt-klick",
  page_view: "Sidvisningar",
};

function formatDate(value: string | null) {
  if (!value) {
    return "Ingen data ännu";
  }

  return new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Stockholm",
  }).format(new Date(value));
}

export default async function StatisticsPage() {
  if (!(await hasStatisticsAccess())) {
    redirect("/");
  }

  const stats = await readAnalyticsStats();
  const recentEvents = [...stats.events].reverse().slice(0, 20);
  const pageEntries = Object.entries(stats.pages).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const referrerEntries = Object.entries(stats.referrers).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const deviceEntries = Object.entries(stats.devices).sort((a, b) => b[1] - a[1]);
  const dailyEntries = Object.entries(stats.dailyVisitors).sort(([a], [b]) => a.localeCompare(b)).slice(-14);
  const dailyMaximum = Math.max(1, ...dailyEntries.map(([, total]) => total));
  const bookingConversion = stats.uniqueVisitors
    ? Math.round((stats.uniqueBookingVisitors / stats.uniqueVisitors) * 100)
    : 0;
  const summaryCards = [
    ["Unika besökare", stats.uniqueVisitors],
    ["Besök", stats.sessions],
    ["Sidvisningar", stats.totals.page_view],
    ["Boka tid-klick", stats.totals.booking_click],
    ["Unika bokningsklickare", stats.uniqueBookingVisitors],
    ["Bokningsgrad", `${bookingConversion} %`],
    ["Kontakt-klick", stats.totals.contact_click],
    ["Unika kontaktklickare", stats.uniqueContactVisitors],
  ] as const;

  return (
    <div className="content-shell pb-24 pt-12 sm:pb-28 lg:pb-32">
      <section className="floating-section px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Intern statistik</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
          Klick och besök
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
          Unika besökare räknas per anonym webbläsare. Sidvisningar visar hur besökarna rör sig,
          medan boknings- och kontaktklick mäts separat.
        </p>
        <p className="mt-3 text-sm text-stone-600">
          Senast uppdaterad: {formatDate(stats.updatedAt)}
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map(([label, total]) => (
          <article
            key={label}
            className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
              {label}
            </p>
            <p className="mt-3 text-4xl font-semibold text-stone-900">{total}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6">
          <h2 className="text-2xl font-semibold text-stone-900">Populäraste sidor</h2>
          <div className="mt-5 space-y-3">
            {pageEntries.length > 0 ? (
              pageEntries.map(([page, total]) => (
                <div key={page} className="flex items-center justify-between gap-4 border-b border-[rgba(198,164,108,0.12)] pb-3">
                  <span className="break-all text-sm text-stone-700">{page}</span>
                  <span className="font-semibold text-stone-900">{total}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-stone-600">Ingen statistik ännu.</p>
            )}
          </div>
        </article>

        <article className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6">
          <h2 className="text-2xl font-semibold text-stone-900">Senaste händelser</h2>
          <div className="mt-5 space-y-3">
            {recentEvents.length > 0 ? (
              recentEvents.map((event) => (
                <div
                  key={`${event.createdAt}-${event.name}-${event.source}`}
                  className="grid gap-1 border-b border-[rgba(198,164,108,0.12)] pb-3 text-sm sm:grid-cols-[10rem_1fr]"
                >
                  <span className="text-stone-500">{formatDate(event.createdAt)}</span>
                  <span className="text-stone-800">
                    {eventLabels[event.name]} från {event.path}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-stone-600">Inga händelser ännu.</p>
            )}
          </div>
        </article>
      </section>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        {[{ title: "Trafikkällor", entries: referrerEntries }, { title: "Enheter", entries: deviceEntries }].map(({ title, entries }) => (
          <article key={title} className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6">
            <h2 className="text-2xl font-semibold text-stone-900">{title}</h2>
            <div className="mt-5 space-y-3">
              {entries.length ? entries.map(([label, total]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-[rgba(198,164,108,0.12)] pb-3 text-sm">
                  <span className="break-all text-stone-700">{label}</span>
                  <span className="font-semibold text-stone-900">{total}</span>
                </div>
              )) : <p className="text-sm text-stone-600">Ingen statistik ännu.</p>}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6">
        <h2 className="text-2xl font-semibold text-stone-900">Unika besökare per dag</h2>
        <div className="mt-6 space-y-3">
          {dailyEntries.length ? dailyEntries.map(([day, total]) => (
            <div key={day} className="grid grid-cols-[6rem_1fr_2rem] items-center gap-3 text-sm">
              <span className="text-stone-600">{day}</span>
              <div className="h-3 overflow-hidden rounded-full bg-stone-200">
                <div className="h-full rounded-full bg-[#9c7445]" style={{ width: `${Math.max(4, (total / dailyMaximum) * 100)}%` }} />
              </div>
              <span className="text-right font-semibold text-stone-900">{total}</span>
            </div>
          )) : <p className="text-sm text-stone-600">Ingen statistik ännu.</p>}
        </div>
      </section>
    </div>
  );
}
