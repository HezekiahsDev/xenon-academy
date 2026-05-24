import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-40">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <h2
          className="text-gradient font-display font-semibold leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Own the next cycle.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
          Applications for the next crypto & DeFi cohort are open. Limited seats, full mentor
          access, lifetime alpha network.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-glow"
          >
            <span className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#0201F3,#4E4BFF,#7C7AFF,#0201F3)]" />
            <span className="relative">Apply to Xenon</span>
            <span className="relative transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#"
            className="rounded-full glass px-7 py-3.5 text-sm text-white/90 hover:bg-white/[0.06]"
          >
            Talk to admissions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
