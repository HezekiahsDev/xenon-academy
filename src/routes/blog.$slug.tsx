import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, posts } from "@/lib/blog-data";

function excerptToToc(text: string, index: number) {
  const cleaned = text.replace(/[''""]/g, "").replace(/[""""]/g, "");
  const words = cleaned.split(" ");
  const label = words.slice(0, 7).join(" ") + (words.length > 7 ? "…" : "");
  return { id: `p-${index}`, label };
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const post = loaderData ?? getPostBySlug(params.slug);
    const title = post?.title ?? "Article";
    const excerpt = post?.excerpt ?? "";
    const slug = post?.slug ?? params.slug;
    const image = post?.image ?? "";
    return {
      meta: [
        { title: `${title} — Xenon Academy` },
        { name: "description", content: excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${slug}` },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${slug}` }],
    };
  },
  component: BlogArticlePage,
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-center">
      <p className="text-4xl font-semibold text-white/60">404</p>
      <h1 className="text-2xl font-semibold text-white">Article not found</h1>
      <Link
        to="/blog"
        className="text-sm text-primary-glow underline underline-offset-4 transition-colors hover:text-white"
      >
        ← Back to blog
      </Link>
    </main>
  ),
});

function BlogArticlePage() {
  const post = Route.useLoaderData();
  const related = posts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  const articleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: articleRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [showBackTop, setShowBackTop] = useState(false);
  const [activeToc, setActiveToc] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBackTop(v > 0.1);
  });

  const tocItems = post.body.map((p, i) => excerptToToc(p, i));

  const handleShareX = () => {
    const url = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`, "_blank");
  };

  const handleShareTelegram = () => {
    const url = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`, "_blank");
  };

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 z-50 h-[3px] bg-[var(--gradient-primary)]"
      />

      <div ref={articleRef}>
        <div className="h-20" />

        <div className="mx-auto flex max-w-6xl gap-10 px-6 pb-24">
          {/* Share buttons — desktop */}
          <div className="sticky top-24 hidden h-fit lg:flex lg:flex-col lg:items-center lg:gap-4 lg:pt-8">
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/30 [writing-mode:vertical-lr]">
              Share
            </span>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleShareX}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="Share on X"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={handleShareTelegram}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="Share on Telegram"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </button>
              <button
                onClick={handleCopyLink}
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="Copy link"
              >
                {copied ? (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Article column */}
          <article className="min-w-0 flex-1">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
              >
                ← Back to blog
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/20 text-[11px] text-primary-glow"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/40">
                <span>{post.author}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>{post.readTime}</span>
              </div>
            </motion.header>

            {/* Featured image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 overflow-hidden rounded-2xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </motion.div>

            {/* Body with pull quotes */}
            <div className="mt-10 space-y-6 text-[16px] leading-[1.75] text-white/80 sm:text-[17px] sm:leading-8">
              {post.body.map((paragraph, i) => {
                const isFirst = i === 0;
                return (
                  <motion.div
                    key={i}
                    id={`p-${i}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onViewportEnter={() => setActiveToc(`p-${i}`)}
                    onViewportLeave={() =>
                      setActiveToc((prev) => (prev === `p-${i}` ? null : prev))
                    }
                  >
                    <p className={isFirst ? "first-drop-cap" : ""}>{paragraph}</p>

                    {/* Pull quote after this paragraph */}
                    {post.pullQuotes?.[i] && (
                      <blockquote className="relative my-8 border-l-2 border-accent/60 pl-5 italic text-white/70 sm:my-10 sm:pl-6 sm:text-lg">
                        <span className="absolute -top-3 left-3 text-5xl leading-none text-accent/30 sm:-top-4 sm:left-4 sm:text-6xl">
                          &ldquo;
                        </span>
                        {post.pullQuotes[i]}
                        <span className="absolute -bottom-6 right-3 text-5xl leading-none text-accent/30 sm:-bottom-7 sm:right-4 sm:text-6xl">
                          &rdquo;
                        </span>
                      </blockquote>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Author card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="mt-14 flex items-start gap-4 rounded-2xl border border-white/[0.06] p-5 sm:gap-5 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-sm font-semibold text-white sm:h-14 sm:w-14 sm:text-base">
                XE
              </div>
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-white">
                  Xenon Editorial
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/50">
                  The Xenon Academy editorial team publishes in-depth research and analysis on
                  DeFi, crypto trading, smart contracts, and the evolving on-chain economy.
                  Follow us on X for the latest insights.
                </p>
              </div>
            </motion.div>

            {/* Share — mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-3 lg:hidden"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-white/30">
                Share
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareX}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/50 transition-colors hover:border-white/20 hover:text-white"
                  aria-label="Share on X"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  onClick={handleShareTelegram}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/50 transition-colors hover:border-white/20 hover:text-white"
                  aria-label="Share on Telegram"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/50 transition-colors hover:border-white/20 hover:text-white"
                  aria-label="Copy link"
                >
                  {copied ? (
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Related articles */}
            {related.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="mt-14 border-t border-white/[0.06] pt-10 sm:mt-16"
              >
                <h2 className="font-display text-xl font-semibold text-white">Continue reading</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to="/blog/$slug"
                      params={{ slug: r.slug }}
                      className="group rounded-xl border border-white/[0.06] p-5 transition-colors hover:border-white/[0.15]"
                    >
                      <h3 className="font-display text-base font-semibold text-white transition-colors group-hover:text-primary-glow">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/50">{r.excerpt}</p>
                      <span className="mt-3 inline-block text-xs text-white/30">{r.readTime}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </article>

          {/* Table of contents — desktop */}
          <div className="sticky top-24 hidden h-fit w-56 shrink-0 lg:block">
            <nav className="pt-8">
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                On this page
              </span>
              <ul className="mt-4 space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`block w-full text-left text-xs leading-relaxed transition-colors ${
                        activeToc === item.id
                          ? "text-primary-glow"
                          : "text-white/40 hover:text-white/70"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showBackTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#0a0a14]/90 text-white/60 shadow-lg backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </motion.button>
    </>
  );
}
