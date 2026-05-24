import { motion } from "framer-motion";

export function Community() {
  return (
    <section id="community" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16"
        >
          <div className="absolute inset-0 -z-10 bg-mesh opacity-70" />
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full glass px-3 py-1 text-xs text-white/70">
                Community
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Join 12,000 operators in the on-chain economy.
              </h2>
              <p className="mt-4 max-w-md text-white/65">
                Trading rooms, alpha groups, hackathons and a Telegram that never sleeps. Your
                network is half the edge.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://t.me/AlphasbyXenontheking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                >
                  Join the Telegram
                </a>
                <a
                  href="#cta"
                  className="rounded-full glass px-5 py-2.5 text-sm text-white/90 hover:bg-white/[0.06]"
                >
                  Upcoming events
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "12k", v: "Members" },
                { k: "60+", v: "Hackathons / yr" },
                { k: "40", v: "Countries" },
                { k: "24/7", v: "Live trading rooms" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl glass p-5">
                  <div className="font-display text-3xl font-semibold text-gradient">{s.k}</div>
                  <div className="mt-1 text-xs text-white/55">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
