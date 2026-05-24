import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-grid mask-[radial-gradient(ellipse_50%_40%_at_50%_20%,black,transparent_70%)]" />
      <div className="h-20" />
      <div className="mx-auto max-w-3xl px-6 pb-24">
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose-custom mt-10 space-y-6 text-sm leading-relaxed text-white/70"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
