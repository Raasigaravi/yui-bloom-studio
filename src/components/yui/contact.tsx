import { Phone, MapPin, Instagram, User } from "lucide-react";
import waAsset from "@/assets/yui-wa.asset.json";
import igAsset from "@/assets/yui-ig.asset.json";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsappIcon } from "./header";

const WHATSAPP_URL = "https://wa.me/919600599984";
const INSTAGRAM_URL = "https://instagram.com/yuistudio.in";

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Say Hello" title="Let's create" script="something lovely" />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <ContactRow icon={User} label="Yugithanraj C" />
              <ContactRow icon={Phone} label="+91 96005 99984" href="tel:+919600599984" />
              <ContactRow icon={Instagram} label="@yuistudio.in" href={INSTAGRAM_URL} external />
              <ContactRow icon={MapPin} label="Ranipet · Vellore, Tamil Nadu" />

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--mocha)] px-6 py-3 text-xs tracking-[0.25em] text-[var(--cream)] uppercase transition hover:opacity-90"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--mocha)] px-6 py-3 text-xs tracking-[0.25em] text-[var(--mocha)] uppercase transition hover:bg-[var(--mocha)] hover:text-[var(--cream)]"
                >
                  <Instagram className="h-4 w-4" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-5">
              <QrCard label="Chat with us" url={waAsset.url} tag="WhatsApp" />
              <QrCard label="Follow us" url={igAsset.url} tag="@yuistudio.in" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <div className="flex items-center gap-4 border-b border-[var(--mocha)]/10 pb-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--mocha)]/8 text-[var(--mocha)]">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <span className="min-w-0 truncate text-base text-[var(--mocha)]">{label}</span>
    </div>
  );
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block transition hover:opacity-80"
    >
      {body}
    </a>
  ) : (
    body
  );
}

function QrCard({ label, url, tag }: { label: string; url: string; tag: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-sm border border-[var(--mocha)]/15 bg-[var(--cream)] p-5">
      <p className="text-[0.6rem] tracking-[0.35em] text-[var(--mocha)]/60 uppercase">
        {label}
      </p>
      <img src={url} alt={`${label} QR code`} className="h-full w-full object-contain" loading="lazy" />
      <p className="text-xs tracking-widest text-[var(--mocha)]/80">{tag}</p>
    </div>
  );
}