export interface BlogPost {
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  image: string;
  pullQuotes?: Record<number, string>;
}

export const posts: BlogPost[] = [
  {
    title: "What Is DeFi? A Beginner's Guide to Decentralised Finance",
    excerpt:
      "DeFi is reshaping how money works. Here's everything you need to know about lending, borrowing, trading and earning without banks.",
    body: [
      "Decentralised Finance, or DeFi, represents a paradigm shift in how financial services are built and accessed. Unlike traditional finance, which relies on intermediaries like banks, brokers, and exchanges, DeFi operates on public blockchains — primarily Ethereum — using smart contracts to automate trust.",
      "At its core, DeFi is about permissionless access. Anyone with an internet connection and a wallet can lend, borrow, trade, or earn yield on their assets without needing to pass a credit check or submit identification. This financial inclusion is one of the most powerful aspects of the movement.",
      "The building blocks of DeFi include decentralised exchanges (DEXs) like Uniswap, lending protocols like Aave, and yield aggregators like Yearn. These protocols are composable — meaning they can be combined like Lego bricks to create complex financial products. This composability is often called 'money lego' and is unique to the crypto ecosystem.",
      "Stablecoins play a critical role in DeFi by providing a stable unit of account. USDC, DAI, and USDT are the most widely used, with DAI being a fully decentralised, collateral-backed stablecoin. These allow users to transact and earn without exposure to crypto's notorious volatility.",
      "Yield farming, or liquidity mining, emerged as one of DeFi's killer use cases. Users provide liquidity to protocols and earn rewards in the form of tokens. While yields have compressed from the triple-digit APYs of 2020-2021, sustainable yields remain available through lending, staking, and strategic liquidity provision.",
      "Risks in DeFi are real and should not be ignored. Smart contract bugs, oracle manipulation, and liquidation risks are part of the landscape. Due diligence — auditing reports, TVL concentration, team background, and tokenomics — is essential before committing capital to any protocol.",
      "As we move through 2026, DeFi continues to mature. Institutional adoption is accelerating, regulatory clarity is improving, and the technology is becoming more user-friendly. Whether you're a trader, builder, or simply curious, understanding DeFi is no longer optional — it's foundational to the future of finance.",
    ],
    author: "Xenon Editorial",
    date: "May 20, 2026",
    readTime: "8 min read",
    tags: ["DeFi", "Beginners"],
    slug: "what-is-defi-beginners-guide",
    featured: true,
    image: "https://picsum.photos/seed/what-is-defi/800/400",
    pullQuotes: {
      2: "These protocols are composable — meaning they can be combined like Lego bricks to create complex financial products.",
      4: "Yield farming, or liquidity mining, emerged as one of DeFi's killer use cases.",
    },
  },
  {
    title: "Understanding AMMs: How Uniswap v4 Hooks Change the Game",
    excerpt:
      "Uniswap v4 introduces hooks — customisable plugins that let developers build dynamic AMMs. We break down the architecture and what it means for liquidity providers.",
    body: [
      "Automated Market Makers (AMMs) revolutionised crypto trading by replacing order books with mathematical formulas. Uniswap, the pioneer of the x*y=k constant product formula, has gone through four major iterations — each bringing significant improvements to capital efficiency and developer flexibility.",
      "Uniswap v4, released in late 2025, represents the most significant architectural shift since v3's concentrated liquidity. The headline feature is hooks — smart contract plugins that execute custom logic at key points during a pool's lifecycle: before and after swaps, before and after liquidity is added or removed, and at initialization.",
      "Hooks unlock an entirely new design space for AMMs. A hook could implement a time-weighted average market maker (TWAMM) that spreads large orders over time, reducing price impact. Another could charge dynamic fees that adjust based on volatility or volume. Yet another could automate yield farming strategies directly within the pool.",
      "The architecture is elegant. Instead of forking the core AMM logic — which creates fragmentation and security risk — developers write single-purpose hook contracts that attach to existing pools. This is similar to how WordPress plugins extend core functionality without modifying the kernel.",
      "The singleton pool architecture is another v4 innovation. All pools live in a single contract, reducing gas costs for cross-pool operations and simplifying routing. The flash accounting system netts balances at the end of each transaction rather than during, further optimising gas usage.",
      "For liquidity providers, v4 offers new revenue opportunities. Custom fee structures, automated rebalancing, and dynamic range orders can improve capital efficiency. However, the complexity also introduces new risks — hook contracts must be audited carefully, and LPs need to understand the hooks active in pools they support.",
      "Uniswap v4 is currently live on Ethereum mainnet, Arbitrum, Optimism, and Base. Early adoption has been strong, with several innovative hooks already deployed. As the ecosystem matures, v4 is likely to become the standard for AMM design across the industry.",
    ],
    author: "Xenon Editorial",
    date: "May 16, 2026",
    readTime: "12 min read",
    tags: ["Protocols", "AMMs"],
    slug: "understanding-amms-uniswap-v4-hooks",
    image: "https://picsum.photos/seed/uniswap-v4/800/400",
    pullQuotes: {
      1: "Hooks unlock an entirely new design space for AMMs — customisable plugins that execute custom logic at key points during a pool's lifecycle.",
      4: "The singleton pool architecture is another v4 innovation, reducing gas costs for cross-pool operations.",
    },
  },
  {
    title: "The State of Liquid Staking in 2026",
    excerpt:
      "Liquid staking derivatives now account for over 40% of all staked ETH. We analyse the top players, yields, and emerging risks in the LSD landscape.",
    body: [
      "Liquid staking has become one of the most powerful primitives in crypto. By allowing users to stake their ETH while retaining liquidity through a tradable derivative token, liquid staking protocols have unlocked capital that would otherwise be locked in validators. As of mid-2026, over 40% of all staked ETH is in liquid staking derivatives (LSDs).",
      "Lido remains the dominant player, commanding roughly 32% of the LSD market with its stETH token. Lido's market position is bolstered by deep liquidity across DeFi protocols — stETH is accepted as collateral on Aave, Maker, and Morpho, making it the most composable LSD in the ecosystem.",
      "Coinbase's cbETH has grown significantly, now holding about 18% market share. Its advantage is seamless integration with the Coinbase exchange and institutional custody offerings. For retail users who already use Coinbase, cbETH offers the path of least resistance.",
      "Rocket Pool has carved out a niche with its fully decentralised node operator network. While its market share is smaller at roughly 12%, it remains the preferred choice for those prioritising decentralisation. The protocol's rETH token has consistently traded at or above its fair value due to its strong brand and loyal community.",
      "Newer entrants like Swell, Ether.fi, and Mantle LSD are competing on yield distribution and governance incentives. Ether.fi's eETH has gained traction by distributing restaking rewards from EigenLayer, offering higher yields than traditional LSDs at the cost of additional risk.",
      "The EigenLayer integration trend is the biggest development in liquid staking this year. Several LSDs now route their underlying ETH through EigenLayer to earn additional restaking rewards. This creates a yield stack: consensus layer rewards + execution layer tips + restaking rewards. However, it also introduces restaking risk — if an AVS is slashed, LSD holders could absorb losses.",
      "Looking ahead, competition is driving fee compression across the board. Lido reduced its fee from 10% to 5% in early 2026, and others have followed suit. The next battleground will be MEV distribution — LSDs that can return more MEV rewards to stakers will have a significant competitive advantage.",
    ],
    author: "Xenon Editorial",
    date: "May 12, 2026",
    readTime: "10 min read",
    tags: ["Staking", "Ethereum"],
    slug: "state-of-liquid-staking-2026",
    image: "https://picsum.photos/seed/liquid-staking/800/400",
    pullQuotes: {
      5: "Several LSDs now route their underlying ETH through EigenLayer to earn additional restaking rewards — creating a yield stack with three layers of rewards.",
      6: "The next battleground will be MEV distribution — LSDs that can return more MEV rewards to stakers will have a significant competitive advantage.",
    },
  },
  {
    title: "MEV 101: How Traders Extract Value On-Chain",
    excerpt:
      "Maximal Extractable Value is one of the most complex and controversial topics in crypto. Learn how searchers, builders and proposers interact in the MEV supply chain.",
    body: [
      "Maximal Extractable Value (MEV) refers to the profit that can be extracted by reordering, including, or excluding transactions within a block. Originally called 'miner extractable value,' the term was updated to reflect that validators in proof-of-stake now capture this value. MEV is both a feature and a bug of blockchain architecture.",
      "The MEV supply chain involves several participants. Searchers run sophisticated algorithms to identify profitable MEV opportunities. They submit their transaction bundles to builders, who construct blocks. Builders send complete blocks to relays, which forward them to proposers (validators). This separation was introduced by PBS (Proposer-Builder Separation) to democratise MEV access.",
      "The most common MEV strategies include arbitrage — exploiting price differences across DEXs; sandwich attacks — placing a buy before and a sell after a user's trade to profit from slippage; and liquidations — triggering undercollateralised positions on lending protocols to earn liquidation bonuses.",
      "Arbitrage is considered the 'good' form of MEV because it helps keep prices consistent across exchanges. Searchers who spot a price discrepancy between Uniswap and Curve can profit while bringing the markets back into alignment. This benefits the entire ecosystem.",
      "Sandwich attacks, on the other hand, are widely viewed as harmful. When a user makes a large swap, a searcher can front-run the transaction, causing the user to receive a worse price, then back-run to capture the profit. Several mitigation strategies exist, including using limit orders, privacy RPCs, and MEV-resistant DEX designs.",
      "MEV-Boost, developed by Flashbots, is the standard infrastructure for MEV extraction in proof-of-stake Ethereum. It creates a competitive market where builders bid for block space, with the proceeds distributed to validators. In 2025 alone, over $400M in MEV was distributed to validators through MEV-Boost.",
      "The future of MEV involves several interesting developments. SUAVE (Single Unified Auction for Value Expression) proposes to decouple MEV from the execution environment entirely. Threshold encryption and commit-reveal schemes aim to make MEV extraction more fair. On L2s, the sequencer's role in MEV is still being defined — a critical design decision for every rollup.",
    ],
    author: "Xenon Editorial",
    date: "May 8, 2026",
    readTime: "15 min read",
    tags: ["MEV", "Trading"],
    slug: "mev-101-extract-value-on-chain",
    image: "https://picsum.photos/seed/mev-extraction/800/400",
    pullQuotes: {
      3: "Arbitrage is considered the 'good' form of MEV because it helps keep prices consistent across exchanges.",
      5: "MEV-Boost, developed by Flashbots, is the standard infrastructure for MEV extraction in proof-of-stake Ethereum.",
    },
  },
  {
    title: "Security First: Common DeFi Exploits and How to Avoid Them",
    excerpt:
      "From flash loan attacks to oracle manipulation — we walk through the most common smart contract vulnerabilities and the patterns used by top auditors to catch them.",
    body: [
      "DeFi security is not optional. With over $50B in total value locked across protocols, the incentive for attackers has never been higher. Understanding common exploit vectors is essential for builders and users alike. This article breaks down the most frequent vulnerabilities and how to defend against them.",
      "Flash loan attacks remain one of the most common exploit vectors. A flash loan allows a borrower to take out an uncollateralised loan, as long as it is repaid within the same transaction. Attackers use this to manipulate oracle prices, drain liquidity pools, or exploit arithmetic errors. The key defense is using TWAP (time-weighted average price) oracles rather than spot price feeds.",
      "Oracle manipulation is closely related. If a protocol relies on a single oracle source — especially a manipulable one like a low-liquidity DEX pool — an attacker can distort the price and exploit the protocol. Using decentralised oracle networks like Chainlink, which aggregate from multiple sources, is the standard mitigation.",
      "Reentrancy attacks, while less common than in 2016, still appear in newer protocols. The attacker calls back into the contract before the first invocation completes, draining funds recursively. The checks-effects-interactions pattern and reentrancy guards (like OpenZeppelin's) are essential countermeasures.",
      "Access control vulnerabilities occur when sensitive functions lack proper permission checks. A recent audit of a prominent lending protocol revealed that its liquidation function had no access control — anyone could liquidate any position at any time. The fix was simple: add a modifier validating the caller's authorisation.",
      "Economic attacks don't exploit code bugs but incentive misalignments. A governance attack, for example, involves acquiring enough voting power to pass malicious proposals. The Curve War illustrated this — competing protocols accumulated CRV to influence gauge weights. Mitigations include timelocks, multi-sig requirements, and progressive voting power.",
      "For builders, the recipe for security is clear: comprehensive audits from multiple firms, a formal verification process for critical invariants, a bug bounty programme with meaningful rewards, and a disciplined incident response plan. For users, the best defense is diversification — don't put all your capital into one protocol — and staying informed about emerging threats.",
    ],
    author: "Xenon Editorial",
    date: "May 4, 2026",
    readTime: "11 min read",
    tags: ["Security", "Auditing"],
    slug: "common-defi-exploits-how-to-avoid",
    image: "https://picsum.photos/seed/defi-security/800/400",
    pullQuotes: {
      1: "The key defense is using TWAP (time-weighted average price) oracles rather than spot price feeds.",
      5: "The Curve War illustrated this — competing protocols accumulated CRV to influence gauge weights.",
    },
  },
  {
    title: "Layer 2 Wars: Arbitrum, Optimism, Base and the Race for Liquidity",
    excerpt:
      "The L2 landscape is more competitive than ever. We compare the majors across TVL, throughput, ecosystem depth and developer experience.",
    body: [
      "The Ethereum Layer 2 landscape has evolved from a handful of optimistic rollups to a diverse ecosystem of optimistic and zero-knowledge (ZK) rollups, each competing for users, liquidity, and developer mindshare. As of May 2026, the L2 ecosystem collectively processes over 15x Ethereum's base layer transaction throughput.",
      "Arbitrum currently leads in total value locked with approximately $18B. Its success is built on first-mover advantage, deep DeFi integrations, and the Arbitrum Foundation's aggressive grant programme. Arbitrum Stylus, launched this year, allows developers to write smart contracts in Rust, C++, and other WASM-compiled languages — a major differentiator.",
      "Optimism holds the second position with about $11B in TVL. Its OP Stack has become the most widely adopted rollup framework, powering not just Optimism itself but also Base, Zora, and several others. The Superchain vision — a network of interoperable OP Stack chains — is gaining traction, with native interoperability between Superchain members.",
      "Base, launched by Coinbase, has grown rapidly to $8B in TVL. Its advantage is Coinbase's massive user base and distribution channel. Base has leaned into consumer applications — social, gaming, and payments — differentiating itself from the DeFi-heavy Arbitrum and Optimism.",
      "ZK rollups are closing the gap. zkSync Era and Scroll have proven that ZK technology is production-ready, with significantly lower latency and better security guarantees than optimistic rollups. StarkNet, using STARK proofs, offers unparalleled scalability for high-throughput applications. The main trade-off is EVM compatibility — ZK rollups have varying levels of compatibility with existing Solidity code.",
      "Liquidity fragmentation remains the biggest challenge. A user on Arbitrum cannot seamlessly use liquidity on Optimism. Cross-chain bridges and messaging protocols like LayerZero and Across help, but they add friction and cost. The Superchain and AggLayer initiatives aim to solve this by creating native interoperability between participating chains.",
      "The next 12 months will likely see consolidation. Projects that can attract and retain liquidity will survive; those that fragment further will struggle. For developers, choosing an L2 is increasingly about ecosystem support, user base, and interoperability — not just technical performance. The winners will be the chains that make it easiest for users and capital to move freely.",
    ],
    author: "Xenon Editorial",
    date: "Apr 30, 2026",
    readTime: "9 min read",
    tags: ["L2s", "Infrastructure"],
    slug: "layer-2-wars-arbitrum-optimism-base",
    image: "https://picsum.photos/seed/layer-2-wars/800/400",
    pullQuotes: {
      1: "Arbitrum currently leads in total value locked with approximately $18B, built on first-mover advantage and deep DeFi integrations.",
      5: "Liquidity fragmentation remains the biggest challenge — a user on Arbitrum cannot seamlessly use liquidity on Optimism.",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
