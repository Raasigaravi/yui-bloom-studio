import { Flower2, ShoppingBasket, Gift, Sparkles, PackageOpen, Briefcase } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  { icon: Flower2, title: "Premium Bouquets", desc: "Seasonal blooms hand‑tied in signature YUI wraps." },
  { icon: ShoppingBasket, title: "Floral & Fruit Baskets", desc: "Fresh fruit paired with soft florals — a wholesome gesture." },
  { icon: Gift, title: "Luxury Hampers", desc: "Curated boxes of chocolates, treats and thoughtful extras." },
  { icon: Sparkles, title: "Custom Creations", desc: "Bespoke arrangements built around your story and palette." },
  { icon: PackageOpen, title: "Return Gifts", desc: "Elegant favours for weddings, showers and celebrations." },
  { icon: Briefcase, title: "Corporate Gifting", desc: "Polished, on‑brand gifts for clients and teams." },
];

export function Offerings() {
  return (
    <section id="offerings" className="relative bg-[color-mix(in_oklab,var(--mocha)_4%,var(--cream))] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="YUI Offers" title="What we" script="lovingly craft" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="group relative flex h-full flex-col items-start gap-5 rounded-[2px] border border-[var(--mocha)]/12 bg-[var(--cream)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--mocha)]/30 hover:shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--mocha)_35%,transparent)]">
                <span className="absolute top-0 left-8 h-px w-12 bg-[var(--gold)]/60" />
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--mocha)]/20 text-[var(--mocha)] transition group-hover:bg-[var(--mocha)] group-hover:text-[var(--cream)]">
                  <item.icon className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <h3 className="text-2xl text-[var(--mocha)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--mocha)]/70">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}