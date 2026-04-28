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
  const sourceEntries = Object.entries(stats.sources).sort((a, b) => b[1] - a[1]).slice(0, 12);

  return (
    <div className="content-shell pb-24 pt-12 sm:pb-28 lg:pb-32">
      <section className="floating-section px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Intern statistik</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
          Klick och besök
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
          Här ser du hur många som besöker sidan och hur många som klickar på Boka tid eller Kontakt.
        </p>
        <p className="mt-3 text-sm text-stone-600">
          Senast uppdaterad: {formatDate(stats.updatedAt)}
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {Object.entries(stats.totals).map(([name, total]) => (
          <article
            key={name}
            className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
              {eventLabels[name as AnalyticsEventName]}
            </p>
            <p className="mt-3 text-4xl font-semibold text-stone-900">{total}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-2xl border border-[rgba(198,164,108,0.18)] bg-[rgba(198,164,108,0.035)] px-5 py-6">
          <h2 className="text-2xl font-semibold text-stone-900">Vanligaste klickplatser</h2>
          <div className="mt-5 space-y-3">
            {sourceEntries.length > 0 ? (
              sourceEntries.map(([source, total]) => (
                <div key={source} className="flex items-center justify-between gap-4 border-b border-[rgba(198,164,108,0.12)] pb-3">
                  <span className="break-all text-sm text-stone-700">{source}</span>
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
    </div>
  );
}
