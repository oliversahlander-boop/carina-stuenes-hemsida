import { company } from "../site-data";

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
        <a href={company.bookingUrl} className="btn-light">
          Boka tid
        </a>
      </div>
    </section>
  );
}
