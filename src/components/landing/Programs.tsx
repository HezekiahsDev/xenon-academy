import { motion } from "framer-motion";

const programs = [
  {
    name: "Crypto Fundamentals",
    desc: "Markets, wallets, custody and on-chain mechanics — the foundation every operator needs.",
    tag: "8 weeks",
  },
  {
    name: "DeFi Mastery",
    desc: "Lending, AMMs, perps, yield strategies and risk management across leading protocols.",
    tag: "12 weeks",
  },
  {
    name: "On-Chain Trading",
    desc: "MEV, liquidity, derivatives and execution. Trade with the edge of a pro desk.",
    tag: "10 weeks",
  },
  {
    name: "Smart Contract Dev",
    desc: "Solidity, security patterns and auditing. Ship contracts that hold real value.",
    tag: "16 weeks",
  },
  {
    name: "Protocol Design",
    desc: "Tokenomics, governance and mechanism design for builders launching the next L1/L2.",
    tag: "12 weeks",
  },
  {
    name: "Web3 Security",
    desc: "Threat modeling, exploit analysis and audit workflows for DeFi protocols.",
    tag: "14 weeks",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full glass px-3 py-1 text-xs text-white/70"
          >
            Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 text-4xl font-semibold leading-tight text-gradient sm:text-5xl"
          >
            Six tracks across crypto & DeFi.
          </motion.h2>
          <p className="mt-4 text-white/55">
            Every program is co-built with active traders, founders and auditors — and rewritten
            each cohort to match the chain.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.a
              key={p.name}
              href="#cta"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-shadow hover:shadow-glow"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#0201F3_0%,#7C7AFF_25%,transparent_50%,#4E4BFF_75%,#0201F3_100%)] opacity-40 blur-md" />
              </div>
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-[var(--gradient-primary)] shadow-glow" />
                <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/55 ring-1 ring-white/10">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/80">
                Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
