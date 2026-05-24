import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NewsArticle } from "@/components/landing/NewsArticle";

const articles = [
  {
    title: "Uniswap v4 Hooks Unlock Programmable Liquidity Pools",
    summary:
      "The latest iteration of the leading DEX introduces hooks — custom logic at key points in a pool's lifecycle, enabling dynamic fees, TWAMM orders, and more.",
    source: "Uniswap Blog",
    category: "Protocols",
    date: "May 18, 2026",
    url: "#",
  },
  {
    title: "EigenLayer TVL Surpasses $18B as Restaking Goes Mainstream",
    summary:
      "EigenLayer's restaking protocol continues to dominate, with new AVS integrations and a growing ecosystem of actively validated services.",
    source: "The Block",
    category: "Infrastructure",
    date: "May 16, 2026",
    url: "#",
  },
  {
    title: "Arbitrum Stylus Goes Live: Smart Contracts in Rust & C++",
    summary:
      "Arbitrum's Stylus upgrade allows developers to write high-performance smart contracts using WASM-compiled languages, opening the door to gas reductions of up to 10x.",
    source: "Arbitrum Blog",
    category: "L2s",
    date: "May 14, 2026",
    url: "#",
  },
  {
    title: "MakerDAO's Endgame Launches: SubDAOs and New Stablecoin",
    summary:
      "The long-awaited Endgame plan kicks off with the first Spark SubDAO and a rebranded stablecoin ecosystem aimed at scaling decentralized credit.",
    source: "CoinDesk",
    category: "DeFi",
    date: "May 12, 2026",
    url: "#",
  },
  {
    title: "Ethena's USDe Passes $6B Supply, Reshaping Synthetic Dollar Market",
    summary:
      "The delta-neutral synthetic dollar protocol now backs over $6B in circulating supply, fueled by rising demand for yield-bearing stable assets.",
    source: "Messari",
    category: "Stablecoins",
    date: "May 10, 2026",
    url: "#",
  },
  {
    title: "Solana DeFi Breaks $12B in Total Value Locked",
    summary:
      "Solana's DeFi ecosystem reaches a new all-time high in TVL, driven by liquid staking protocols and a resurgence in spot DEX volumes.",
    source: "DefiLlama",
    category: "Ecosystem",
    date: "May 8, 2026",
    url: "#",
  },
  {
    title: "EIP-7702 Approved: Account Abstraction Comes to Ethereum L1",
    summary:
      "The Ethereum upgrade introduces native account abstraction, allowing EOAs to temporarily act as smart contract wallets during transactions.",
    source: "Ethereum Magicians",
    category: "Ethereum",
    date: "May 6, 2026",
    url: "#",
  },
  {
    title: "Morpho Blue Hits $3B in Loans with Permissionless Markets",
    summary:
      "The efficient lending protocol's permissionless market model continues to attract capital, now processing over $3B in outstanding loans.",
    source: "The Defiant",
    category: "Lending",
    date: "May 4, 2026",
    url: "#",
  },
];

const categories = [
  "All",
  "DeFi",
  "Protocols",
  "L2s",
  "Ethereum",
  "Infrastructure",
  "Stablecoins",
  "Lending",
  "Ecosystem",
];

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "DeFi News — Xenon Academy" },
      {
        name: "description",
        content:
          "The latest DeFi news, protocol updates, and ecosystem developments curated by the Xenon team.",
      },
      { property: "og:title", content: "DeFi News — Xenon Academy" },
      {
        property: "og:description",
        content: "Stay ahead with curated DeFi news from across the ecosystem.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_50%_40%_at_50%_20%,black,transparent_70%)]" />

      {/* Navbar spacer */}
      <div className="h-20" />

      <div className="mx-auto max-w-4xl px-6 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
          >
            ← Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Always fresh
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-center"
        >
          DeFi News
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-3 max-w-xl text-center text-sm text-white/60"
        >
          Curated updates from across the decentralised finance ecosystem — protocols, L2s,
          stablecoins, and the people building them.
        </motion.p>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className="rounded-full glass px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white data-[active=true]:bg-primary/20 data-[active=true]:text-primary-glow"
              data-active={cat === "All" || undefined}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Articles */}
        <div className="mt-8 space-y-4">
          {articles.map((article, i) => (
            <NewsArticle key={i} {...article} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-xs text-white/30"
        >
          News aggregated from public sources for educational purposes. DYOR.
        </motion.p>
      </div>
    </main>
  );
}
