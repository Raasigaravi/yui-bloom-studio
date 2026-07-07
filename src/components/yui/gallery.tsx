import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const IMGS = [
  { src: g1, alt: "Hand‑tied bouquet of blush roses and lilies in cream kraft wrap" },
  { src: g2, alt: "Luxury hamper with chocolates, lavender and cream ribbon" },
  { src: g3, alt: "Floral and fruit gift basket with roses and gypsophila" },
  { src: g5, alt: "Bridal bouquet of magnolias and blush roses with satin ribbon" },
  { src: g4, alt: "Pastel return gift boxes with satin ribbons and dried florals" },
  { src: g6, alt: "Corporate gift box with dried florals and mocha ribbon" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-[color-mix(in_oklab,var(--mocha)_4%,var(--cream))] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Gallery" title="A few of our" script="favourite blooms" />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {IMGS.map((img, i) => (
            <Reveal key={i} delay={i * 60}>
              <figure className="group relative overflow-hidden rounded-sm bg-[var(--cream)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--mocha)]/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 text-center text-sm tracking-widest text-[var(--mocha)]/60 uppercase">
            Follow{" "}
            <a
              href="https://instagram.com/yuistudio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[var(--mocha)]"
            >
              @yuistudio.in
            </a>{" "}
            for our latest creations
          </p>
        </Reveal>
      </div>
    </section>
  );
}