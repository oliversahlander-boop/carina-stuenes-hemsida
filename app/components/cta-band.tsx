import { company } from "../site-data";

type CtaBandProps = {
  title: string;
  text: string;
};

export function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section className="rounded-3xl bg-[#1c1815] p-8 sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#f8f7f5]">{title}</h2>
          <p className="mt-2 max-w-2xl text-stone-200">{text}</p>
        </div>
        <a href={company.bookingUrl} className="btn-light">
          Boka tid
        </a>
      </div>
    </section>
  );
}
