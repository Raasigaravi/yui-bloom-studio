import { Gem, Leaf, Palette, HandCoins, Clock, Truck } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  { icon: Gem, title: "Premium Quality", desc: "Sourced with care, finished by hand." },
  { icon: Leaf, title: "Fresh & Elegant", desc: "Just‑picked blooms, timeless styling." },
  { icon: Palette, title: "Custom Designs", desc: "Made to your palette and moment." },
  { icon: HandCoins, title: "Affordable Luxury", desc: "Boutique quality at kind prices." },
  { icon: Clock, title: "On‑Time Delivery", desc: "Because moments can't wait." },
  { icon: Truck, title: "Doorstep Delivery", desc: "Across Ranipet and Vellore." },
];

export function Why() {
  return (
    <section id="why" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Why Choose YUI" title="Small studio," script="big heart" />

        <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex items-start gap-5 border-b border-[var(--mocha)]/10 pb-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--mocha)]/8 text-[var(--mocha)]">
                  <item.icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl text-[var(--mocha)]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--mocha)]/70">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}