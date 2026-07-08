import b1 from "@/assets/bloom-1.png.asset.json";
import b2 from "@/assets/bloom-2.png.asset.json";
import b3 from "@/assets/bloom-3.png.asset.json";
import b4 from "@/assets/bloom-4.png.asset.json";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const IMGS = [
  { src: b1.url, alt: "Happy Birthday pink rose bouquet with gypsophila and gold heart topper" },
  { src: b2.url, alt: "Chocolate and rose bouquet with KitKat, Dairy Milk and Ferrero Rocher" },
  { src: b3.url, alt: "Vibrant red and yellow rose bouquet in polka dot wrap" },
  { src: b4.url, alt: "Classic red rose bouquet wrapped in newspaper with red ribbon" },
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