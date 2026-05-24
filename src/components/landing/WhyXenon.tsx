import { motion } from "framer-motion";

const features = [
  {
    title: "Trade and ship on real chains.",
    body: "Every track ends on mainnet — real capital, real contracts, real strategies. No paper trading, no toy projects.",
    visual: "code",
  },
  {
    title: "Mentors from the desks that matter.",
    body: "1:1 weekly sessions with traders, founders and auditors from leading DeFi protocols and funds.",
    visual: "mentor",
  },
  {
    title: "Curriculum that moves at chain speed.",
    body: "Rewritten every cohort to reflect new protocols, exploits and meta — not last cycle's playbook.",
    visual: "curriculum",
  },
];

export function WhyXenon() {
  return (
    <section id="why-xenon" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full glass px-3 py-1 text-xs text-white/70">
            Why Xenon
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-gradient sm:text-5xl">
            Built for operators who refuse to get rekt.
          </h2>
        </div>

        <div className="mt-24 space-y-32">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md text-white/60">{f.body}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
                <div className="glass-strong rounded-2xl p-6 shadow-elevated">
                  <FeatureVisual kind={f.visual} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === "code") {
    return (
      <div className="space-y-2 font-mono text-xs text-white/80">
        <div className="rounded-lg bg-black/50 p-3 ring-1 ring-white/5">
          <div className="text-white/40">// Vault.sol · mainnet</div>
          <div>
            <span className="text-primary-glow">forge</span> deploy --network mainnet
          </div>
          <div className="text-emerald-400">✓ 0x9c…f3a · verified</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Audit", "Simulate", "Ship"].map((t) => (
            <div key={t} className="rounded-lg glass p-3 text-center text-xs text-white/80">
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "mentor") {
    return (
      <div className="space-y-3">
        {[
          { n: "Aisha K.", r: "Core dev @ Uniswap", o: true },
          { n: "Marco V.", r: "Trader @ Jump Crypto", o: true },
          { n: "Lina P.", r: "Auditor @ Spearbit", o: false },
        ].map((m) => (
          <div key={m.n} className="flex items-center gap-3 rounded-xl glass p-3">
            <div className="h-9 w-9 rounded-full bg-[var(--gradient-primary)]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{m.n}</div>
              <div className="text-xs text-white/55">{m.r}</div>
            </div>
            <span className={`h-2 w-2 rounded-full ${m.o ? "bg-emerald-400" : "bg-white/20"}`} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2">
      {["Solidity", "AMMs", "Lending", "MEV", "Auditing", "Tokenomics"].map((t, i) => (
        <div key={t} className="rounded-lg glass p-3 text-sm text-white/85">
          <div className="text-[10px] text-white/40">Module 0{i + 1}</div>
          {t}
        </div>
      ))}
    </div>
  );
}
