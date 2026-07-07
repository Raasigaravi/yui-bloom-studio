import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  script,
}: {
  eyebrow?: string;
  title: string;
  script?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <div className="gold-divider text-[0.65rem] tracking-[0.4em] uppercase">
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={120}>
        <h2 className="mt-4 text-4xl leading-tight text-[var(--mocha)] sm:text-5xl">
          {title}
          {script && (
            <>
              {" "}
              <span className="font-script italic text-[var(--mocha)]/85">
                {script}
              </span>
            </>
          )}
        </h2>
      </Reveal>
    </div>
  );
}