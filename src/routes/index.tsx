import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/yui/header";
import { Hero } from "@/components/yui/hero";
import { About } from "@/components/yui/about";
import { Offerings } from "@/components/yui/offerings";
import { Why } from "@/components/yui/why";
import { Gallery } from "@/components/yui/gallery";
import { Contact } from "@/components/yui/contact";
import { Footer } from "@/components/yui/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="scroll-smooth bg-[var(--cream)] text-[var(--mocha)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Why />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
