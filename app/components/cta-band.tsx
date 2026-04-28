import { company } from "../site-data";
import { TrackedLink } from "./tracked-link";

type CtaBandProps = {
  title: string;
  text: string;
};

export function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section className="py-8 sm:py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#f5f1eb]">{title}</h2>
          <p className="mt-2 max-w-2xl text-[#d8ccbb]">{text}</p>
        </div>
        <TrackedLink
          href={company.bookingUrl}
          eventName="booking_click"
          eventSource="cta_band_booking"
          className="btn-light"
        >
          Boka tid
        </TrackedLink>
      </div>
    </section>
  );
}
