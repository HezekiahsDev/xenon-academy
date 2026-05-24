import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/$page")({
  head: ({ params }) => ({
    meta: [
      { title: `${formatPageName(params.page)} — Xenon Academy` },
      { name: "description", content: `${formatPageName(params.page)} page at Xenon Academy.` },
    ],
    links: [{ rel: "canonical", href: `/${params.page}` }],
  }),
  component: ComingSoonPage,
});

function formatPageName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function ComingSoonPage() {
  const { page } = Route.useParams();
  const name = formatPageName(page);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-grid mask-[radial-gradient(ellipse_50%_40%_at_50%_20%,black,transparent_70%)]" />
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/30">
            <span className="text-2xl font-bold text-primary-glow">X</span>
          </div>
          <h1 className="text-gradient font-display text-4xl font-semibold leading-tight tracking-tight">
            {name}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We're putting the finishing touches on this page. It will be available soon.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Coming soon
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              ← Back home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
