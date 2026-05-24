import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/lib/blog-data";

const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Xenon Academy" },
      {
        name: "description",
        content:
          "In-depth articles on DeFi, crypto trading, smart contracts, and the future of on-chain finance from the Xenon Academy team.",
      },
      { property: "og:title", content: "Blog — Xenon Academy" },
      {
        property: "og:description",
        content: "Deep dives into DeFi, trading, and on-chain building.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const filtered = activeTag ? rest.filter((p) => p.tags.includes(activeTag)) : rest;

  return (
    <>
      <div className="h-20" />

      <div className="mx-auto max-w-4xl px-6 pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
          >
            ← Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Xenon Blog
          </span>
          <h1 className="mt-4 text-gradient font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Insights from the frontier.
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Deep dives, explainers and analysis on DeFi, trading, smart contracts and the on-chain
            economy — written by the Xenon team.
          </p>
        </motion.div>

        {/* Featured article */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <a href={`/blog/${featured.slug}`} className="group block">
              <div className="relative rounded-2xl bg-[var(--gradient-primary)] p-[1.5px] shadow-elevated transition-shadow duration-300 hover:shadow-glow">
                <div className="relative rounded-[calc(1rem-1.5px)] overflow-hidden bg-linear-to-b from-[#0a0a14] to-black">
                  <img
                    src={featured.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-20"
                    loading="lazy"
                  />
                  <div className="relative p-6 sm:p-8">
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-primary/20 text-[11px] text-primary-glow"
                    >
                      Featured
                    </Badge>
                    <h2 className="font-display text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-primary-glow sm:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                      {featured.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-xs text-white/40">
                      <span>{featured.author}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{featured.date}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{featured.readTime}</span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow transition-transform group-hover:translate-x-1">
                      Read article →
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-3.5 py-1.5 text-xs transition-colors ${
              activeTag === null
                ? "bg-primary/20 text-primary-glow"
                : "glass text-white/70 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`rounded-full px-3.5 py-1.5 text-xs transition-colors ${
                activeTag === tag
                  ? "bg-primary/20 text-primary-glow"
                  : "glass text-white/70 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Article list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag ?? "all"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-6 space-y-5"
          >
            {filtered.length === 0 ? (
              <p className="py-12 text-center text-sm text-white/40">
                No articles found for this category.
              </p>
            ) : (
              filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a href={`/blog/${post.slug}`} className="group block">
                    <Card className="relative overflow-hidden border-white/[0.06] bg-transparent transition-all duration-300 hover:border-white/[0.15] hover:shadow-elevated">
                      <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--gradient-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <CardContent className="flex flex-col gap-4 p-0 sm:flex-row">
                        <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-32 lg:w-40">
                          <img
                            src={post.image}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0a0a14] sm:bg-linear-to-l" />
                        </div>
                        <div className="flex-1 p-6 pt-0 sm:pt-6">
                          <div className="flex items-center gap-2">
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
                          <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-primary-glow">
                            {post.title}
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-white/60">{post.excerpt}</p>
                          <div className="mt-4 flex items-center gap-3 text-xs text-white/40">
                            <span>{post.author}</span>
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            <span>{post.date}</span>
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative mt-16 overflow-hidden rounded-2xl glass-strong p-8 sm:p-10"
        >
          <div className="absolute -inset-8 -z-10 bg-primary/10 blur-3xl" />
          <div className="relative z-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Stay ahead of the curve.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
              Get the latest articles, protocol deep-dives and cohort updates delivered to your
              inbox every week.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-6 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-full bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none ring-1 ring-white/10 transition-colors focus:ring-primary-glow"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-[11px] text-white/30">No spam. Unsubscribe anytime.</p>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center text-xs text-white/30"
        >
          New articles published weekly. Follow us on X for the latest.
        </motion.p>
      </div>
    </>
  );
}
