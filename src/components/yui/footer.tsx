import logoAsset from "@/assets/yui-logo.asset.json";

export function Footer() {
  return (
    <footer className="bg-[var(--mocha)] text-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <img
          src={logoAsset.url}
          alt="YUI"
          width={64}
          height={64}
          className="h-16 w-16 object-contain opacity-90 brightness-0 invert"
        />
        <p className="font-script text-3xl">Tied in Bloom</p>
        <div className="h-px w-16 bg-[var(--gold)]/60" />
        <p className="text-xs tracking-[0.35em] uppercase opacity-70">
          Crafting moments · Creating memories
        </p>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} YUI Studio · Ranipet · Vellore
        </p>
      </div>
    </footer>
  );
}