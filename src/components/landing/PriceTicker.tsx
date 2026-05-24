import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  usd: number;
  usd_24h_change: number;
}

const COINS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "avalanche-2", symbol: "AVAX", name: "Avalanche" },
  { id: "chainlink", symbol: "LINK", name: "Chainlink" },
  { id: "uniswap", symbol: "UNI", name: "Uniswap" },
  { id: "aave", symbol: "AAVE", name: "Aave" },
  { id: "optimism", symbol: "OP", name: "Optimism" },
];

const COIN_IDS = COINS.map((c) => c.id).join(",");

async function fetchPrices(): Promise<CoinData[]> {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`,
    { headers: { Accept: "application/json" } },
  );
  if (!res.ok) throw new Error("Failed to fetch prices");
  const json = await res.json();
  return COINS.map((coin) => {
    const match = json.find((c: Record<string, unknown>) => c.id === coin.id);
    return {
      ...coin,
      image: (match?.image as string) ?? "",
      usd: (match?.current_price as number) ?? 0,
      usd_24h_change: (match?.price_change_percentage_24h as number) ?? 0,
    };
  });
}

function formatPrice(price: number): string {
  if (price >= 1)
    return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 0.01)
    return price.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  return price.toLocaleString("en-US", { minimumFractionDigits: 6, maximumFractionDigits: 8 });
}

const VISIBLE_COUNT = 3;

export function PriceTicker() {
  const [showAll, setShowAll] = useState(false);
  const { data, isPending } = useQuery({
    queryKey: ["crypto-prices"],
    queryFn: fetchPrices,
    refetchInterval: 60_000,
    staleTime: 30_000,
  });

  const coins = data ?? [...COINS.map((c) => ({ ...c, image: "", usd: 0, usd_24h_change: 0 }))];
  const displayed = showAll ? coins : coins.slice(0, VISIBLE_COUNT);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-20 max-w-4xl"
    >
      <div className="absolute -inset-6 -z-10 rounded-4xl bg-primary/20 blur-3xl" />
      <div className="glass-strong relative animate-float overflow-hidden rounded-2xl p-1.5 shadow-elevated">
        <div className="rounded-[14px] bg-linear-to-b from-[#0a0a14] to-black p-5 text-left">
          {/* Title bar */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-white/60">Live Market</span>
            </div>
            <span className="text-[11px] text-white/35">
              {isPending ? "Loading..." : "Auto-refresh · 60s"}
            </span>
          </div>

          {/* Column headers */}
          <div className="mb-2 hidden grid-cols-[40px_1fr_100px_85px] gap-2 px-2 text-[11px] font-medium uppercase tracking-[0.1em] text-white/35 sm:grid sm:grid-cols-[40px_1fr_120px_100px]">
            <span />
            <span>Asset</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h</span>
          </div>

          {/* Rows */}
          <div className="space-y-0.5">
            <AnimatePresence>
              {displayed.map((coin, i) => (
                <motion.div
                  key={coin.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  className="grid grid-cols-[40px_1fr_100px_85px] items-center gap-2 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.04] sm:grid-cols-[40px_1fr_120px_100px]"
                >
                  <div className="flex h-7 w-7 items-center justify-center">
                    {coin.image ? (
                      <img
                        src={coin.image}
                        alt={coin.symbol}
                        className="h-6 w-6 rounded-full"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-[11px] font-bold text-white/70 ring-1 ring-white/10">
                        {coin.symbol.slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/90">{coin.symbol}</div>
                    <div className="hidden text-[11px] text-white/40 sm:block">{coin.name}</div>
                  </div>
                  <div className="text-right text-sm font-medium tabular-nums text-white/90">
                    {isPending ? "—" : `$${formatPrice(coin.usd)}`}
                  </div>
                  <div
                    className={`text-right text-sm tabular-nums ${
                      coin.usd_24h_change > 0
                        ? "text-emerald-400"
                        : coin.usd_24h_change < 0
                          ? "text-red-400"
                          : "text-white/50"
                    }`}
                  >
                    {isPending
                      ? "—"
                      : `${coin.usd_24h_change >= 0 ? "+" : ""}${coin.usd_24h_change.toFixed(2)}%`}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show more / Show less */}
          {coins.length > VISIBLE_COUNT && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white/80"
            >
              {showAll ? <>Show less ↑</> : <>Show all ({coins.length - VISIBLE_COUNT} more) ↓</>}
            </button>
          )}

          {/* Footer */}
          <div className="border-t border-white/[0.06] pt-3 text-[11px] text-white/30">
            Data from CoinGecko · Prices update every 60 seconds
          </div>
        </div>
      </div>
    </motion.div>
  );
}
