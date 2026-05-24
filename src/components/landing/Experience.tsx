import { motion } from "framer-motion";

const cells = [
  {
    title: "On-chain sandbox",
    body: "Forked mainnet environments to test strategies, deploy contracts and simulate exploits — risk-free, real data.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Live trading rooms",
    body: "Daily sessions with mentor desks across spot, perps and DeFi.",
  },
  { title: "Protocol breakdowns", body: "Weekly deep-dives on Uniswap, Aave, Pendle and more." },
  { title: "Career placement", body: "Intros to funds, protocols and DAOs hiring our graduates." },
  {
    title: "Global builder network",
    body: "Builders, traders and researchers across 40+ countries.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full glass px-3 py-1 text-xs text-white/70">
            The experience
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-gradient sm:text-5xl">
            An academy wired into the chain.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px]">
          {cells.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
              className={`relative overflow-hidden rounded-2xl glass p-6 ${c.span ?? ""}`}
            >
              <div className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-primary/25 blur-3xl" />
              <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                {c.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-white/60">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
