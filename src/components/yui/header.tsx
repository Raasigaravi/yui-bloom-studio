import { useEffect, useState } from "react";
import logoAsset from "@/assets/yui-logo.asset.json";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Offerings", href: "#offerings" },
  { label: "Why YUI", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color-mix(in_oklab,var(--cream)_92%,transparent)] backdrop-blur-md shadow-[0_1px_0_0_color-mix(in_oklab,var(--mocha)_10%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="YUI home">
          <img
            src={logoAsset.url}
            alt="YUI logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />
          <span className="hidden text-[0.7rem] tracking-[0.35em] text-[var(--mocha)] sm:block">
            YUI · TIED IN BLOOM
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm tracking-wide text-[var(--mocha)]/80 transition hover:text-[var(--mocha)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--mocha)] px-4 py-2 text-xs font-medium tracking-widest text-[var(--cream)] uppercase transition hover:opacity-90 sm:px-5 sm:text-[0.7rem]"
          >
            <WhatsappIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">Order</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--mocha)]/20 text-[var(--mocha)] lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute inset-x-0 top-0 h-px bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 top-[6px] h-px bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 top-[12px] h-px bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--mocha)]/10 bg-[var(--cream)] lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-500`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--mocha)]/10 py-3 text-sm tracking-widest text-[var(--mocha)] uppercase last:border-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01a1.1 1.1 0 0 0-.795.372c-.273.297-1.041 1.017-1.041 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.03-1.378l-.36-.214-3.74.98.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.892 6.994c-.003 5.45-4.437 9.886-9.888 9.886zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.453 3.488z" />
    </svg>
  );
}