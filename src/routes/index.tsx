import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Programs } from "@/components/landing/Programs";
import { WhyXenon } from "@/components/landing/WhyXenon";
import { Experience } from "@/components/landing/Experience";
import { Testimonials } from "@/components/landing/Testimonials";
import { Community } from "@/components/landing/Community";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xenon Academy — Elite Crypto & DeFi Education" },
      {
        name: "description",
        content:
          "The elite academy for crypto and DeFi. Learn on-chain trading, smart contracts and protocol design from operators at the frontier of Web3.",
      },
      { property: "og:title", content: "Xenon Academy — Elite Crypto & DeFi Education" },
      {
        property: "og:description",
        content:
          "Master crypto, DeFi and on-chain building with mentors from top protocols, funds and trading desks.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <WhyXenon />
      <Experience />
      <Testimonials />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}
