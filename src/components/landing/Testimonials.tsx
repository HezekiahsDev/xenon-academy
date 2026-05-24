import { motion } from "framer-motion";

const items = [
  {
    q: "Xenon turned me from a curious degen into a real on-chain operator. I now run a DeFi strategy book full-time.",
    a: "Daniela R.",
    role: "DeFi Strategist · Independent",
  },
  {
    q: "The depth on AMMs, MEV and risk was unreal. Three weeks after graduating I shipped a live protocol.",
    a: "Kenji T.",
    role: "Smart Contract Engineer · Uniswap",
  },
  {
    q: "Mentors pull you straight into the industry. I had offers from two funds before the final cohort.",
    a: "Priya S.",
    role: "Quant Trader · Jump Crypto",
  },
  {
    q: "It felt less like a course and more like joining an elite on-chain trading desk.",
    a: "Marcus O.",
    role: "Protocol Engineer · Aave",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full glass px-3 py-1 text-xs text-white/70">
            Graduates
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-gradient sm:text-5xl">
            Loved by traders. Trusted by protocols.
          </h2>
        </div>

        <div className="mt-16 -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 snap-x snap-mandatory">
            {items.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="snap-start glass relative w-[340px] shrink-0 rounded-2xl p-7 sm:w-[420px]"
              >
                <div className="absolute -inset-px -z-10 rounded-2xl bg-[var(--gradient-primary)] opacity-20 blur-xl" />
                <blockquote className="font-display text-lg leading-snug text-white">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[var(--gradient-primary)]" />
                  <div>
                    <div className="text-sm font-medium text-white">{t.a}</div>
                    <div className="text-xs text-white/55">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
