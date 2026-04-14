import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Om oss",
  description:
    "Lär känna Carina Stuenes och vårt holistiska arbetssätt för behandling, återhämtning och välmående.",
  path: "/om-oss",
});

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Om Carina</p>
          <h1 className="mt-3 max-w-[24ch] text-3xl font-semibold leading-[1.18] text-stone-900 sm:text-4xl">
            När kroppen säger ifrån finns det en anledning
          </h1>
          <div className="mt-6 max-w-[52ch] space-y-4 text-[1.02rem] leading-7 text-stone-700">
            <p>
              Jag har länge varit nyfiken på kroppen – varför vi får ont, varför vi mår som vi gör, och varför vissa besvär aldrig riktigt släpper.
            </p>
            <p>
              För mig började det som frågor jag inte riktigt fick svar på.
            </p>
            <p>
              Och med tiden blev det tydligt att det ofta handlar om mer än bara det vi ser på ytan.
            </p>
            <p>
              Att värk, spänningar och obalanser ibland hänger ihop med stress, upplevelser och känslor som kroppen bär på.
            </p>
            <p>
              Idag arbetar jag som yogalärare och kroppsterapeut med ett holistiskt synsätt.
            </p>
            <p>
              För mig handlar behandling inte om att “fixa” något snabbt.
            </p>
            <p>
              Det handlar om att lyssna på kroppen. Och att hjälpa dig att förstå vad den försöker säga.
            </p>
            <p>
              I mina behandlingar vill jag att du ska få landa en stund. Släppa lite på det du bär på. Och känna efter i din egen takt.
            </p>
            <p>
              Jag utgår alltid från dig – din kropp, din situation och hur du mår just nu.
            </p>
            <p>
              Det här är inte bara ett jobb för mig – det är något jag verkligen brinner för.
            </p>
            <p>
              Och jag tror att när vi börjar förstå orsaken bakom våra besvär, så kan också förändring börja ske.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
