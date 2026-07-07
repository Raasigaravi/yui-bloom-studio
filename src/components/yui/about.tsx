import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="About YUI" title="A studio of" script="small, beautiful things" />

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-[1.9] text-[var(--mocha)]/80 sm:text-lg">
            YUI began as a quiet love letter to the moments we hold dear — a
            first hello, a heartfelt thank you, a milestone worth celebrating.
            Every bouquet is hand‑tied, every hamper thoughtfully composed, and
            every ribbon knotted with intention. We work in small batches so
            each gift feels considered, personal, and unmistakably yours.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-10 text-center text-2xl leading-relaxed text-[var(--mocha)] sm:text-3xl">
            <span className="font-script italic">
              Crafting moments, creating memories.
            </span>
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-12 flex justify-center">
            <span className="gold-divider" aria-hidden="true">
              <span className="text-[var(--gold)]">✿</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}