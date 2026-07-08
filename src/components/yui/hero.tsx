import logoAsset from "@/assets/yui-logo.asset.json";
import heroFloral from "@/assets/hero-floral.jpg";
import { Reveal } from "./reveal";


export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      {/* Soft floral backdrop */}
      <img
        src={heroFloral}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[var(--cream)]/30 via-[var(--cream)]/60 to-[var(--cream)]" />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <img
            src={logoAsset.url}
            alt="YUI — Tied In Bloom logo"
            width={220}
            height={220}
            className="mx-auto h-40 w-40 object-contain sm:h-52 sm:w-52"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-[0.7rem] tracking-[0.5em] text-[var(--mocha)]/70 uppercase sm:text-xs">
            Bouquets &nbsp;·&nbsp; Hampers &nbsp;·&nbsp; Return Gifts
          </p>
        </Reveal>

        <Reveal delay={300}>
          <h1 className="mt-6 text-6xl leading-none text-[var(--mocha)] sm:text-7xl md:text-8xl">
            <span className="font-script italic">Tied in Bloom</span>
          </h1>
        </Reveal>

        <Reveal delay={450}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--mocha)]/75 sm:text-lg">
            A boutique gifting studio in Ranipet · Vellore, hand‑tying bouquets,
            hampers and keepsakes for the moments that matter most.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--mocha)] px-8 py-4 text-xs font-medium tracking-[0.25em] text-[var(--cream)] uppercase shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--mocha)_60%,transparent)] transition hover:translate-y-[-2px] hover:shadow-[0_16px_40px_-14px_color-mix(in_oklab,var(--mocha)_70%,transparent)]"
            >
              <WhatsappIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <a
              href="#offerings"
              className="text-xs tracking-[0.3em] text-[var(--mocha)]/70 uppercase underline-offset-8 hover:underline"
            >
              Explore our craft
            </a>
          </div>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-16 gold-divider text-[0.65rem] tracking-[0.4em] uppercase">
            Ranipet · Vellore
          </div>
        </Reveal>
      </div>
    </section>
  );
}