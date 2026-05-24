import { motion } from "framer-motion";
import { PriceTicker } from "@/components/landing/PriceTicker";
import { TypewriterText } from "@/components/landing/TypewriterText";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute inset-0 -z-10 bg-grid mask-[radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />

      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{ left: `${(i * 73) % 100}%`, top: `${(i * 53) % 90}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/80"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          New cohort · Spring 2026 · Crypto & DeFi mastery
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-display font-semibold leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 7.5vw, 6rem)" }}
        >
          Master <TypewriterText />. <br className="hidden sm:block" />
          Build on-chain.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Xenon Academy is the elite school for crypto and DeFi. Learn trading, on-chain strategy,
          smart contracts and protocol design from operators shipping at the frontier of Web3.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white shadow-glow"
          >
            <span className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#0201F3,#4E4BFF,#7C7AFF,#0201F3)]" />
            <span className="relative">Start your journey</span>
            <span className="relative transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/6"
          >
            Explore programs
          </a>
        </motion.div>

        <PriceTicker />

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/35"
        >
          <span>Graduates at</span>
          {["Coinbase", "Uniswap", "Aave", "Chainlink", "Optimism"].map((n) => (
            <span key={n} className="font-display text-sm tracking-tight text-white/55">
              {n}
            </span>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">Follow us</span>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/Xenon___academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556103032547"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://t.me/AlphasbyXenontheking"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="Telegram"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.127.087.669.087.669l-1.389 6.54s-.105.416-.525.43a.667.667 0 0 1-.39-.127l-3.218-2.388a.111.111 0 0 1-.012-.012l-.006-.006-1.385-1.002-3.256-2.132s-.4-.228-.269-.484c.046-.095.142-.168.308-.228 1.18-.525 6.111-2.528 7.97-3.29.275-.113.416-.06.454.034a.171.171 0 0 1 .017.066c-.008.246-.283 2.355-.586 4.353l-.282 1.852-.096.613-2.798 2.572s-.206.171-.436.064c-.413-.19-1.36-2.73-1.82-3.873-.047-.117-.033-.2.07-.248.022-.01.045-.023.068-.036.447-.255 4.674-3.02 5.406-3.497.15-.098.218-.076.236.016z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
