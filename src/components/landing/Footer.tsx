import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Programs",
    links: [
      "Crypto Fundamentals",
      "DeFi Mastery",
      "On-Chain Trading",
      "Smart Contracts",
      "Protocol Design",
      "Web3 Security",
    ],
  },
  { title: "Academy", links: ["About", "Mentors", "Outcomes", "Press"] },
  { title: "Community", links: ["Telegram", "Events", "Hackathons", "Blog"] },
  { title: "Support", links: ["Admissions", "Financing", "FAQ", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-xenon.png" alt="Xenon Academy" className="h-auto w-40" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              The elite academy for crypto, DeFi and on-chain builders.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://x.com/Xenon___academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/[0.12] hover:text-white"
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
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/[0.12] hover:text-white"
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
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/[0.12] hover:text-white"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.127.087.669.087.669l-1.389 6.54s-.105.416-.525.43a.667.667 0 0 1-.39-.127l-3.218-2.388a.111.111 0 0 1-.012-.012l-.006-.006-1.385-1.002-3.256-2.132s-.4-.228-.269-.484c.046-.095.142-.168.308-.228 1.18-.525 6.111-2.528 7.97-3.29.275-.113.416-.06.454.034a.171.171 0 0 1 .017.066c-.008.246-.283 2.355-.586 4.353l-.282 1.852-.096.613-2.798 2.572s-.206.171-.436.064c-.413-.19-1.36-2.73-1.82-3.873-.047-.117-.033-.2.07-.248.022-.01.045-.023.068-.036.447-.255 4.674-3.02 5.406-3.497.15-.098.218-.076.236.016z" />
                </svg>
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link
                      to={`/${l.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Xenon Academy. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/security" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
