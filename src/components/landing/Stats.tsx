import { motion } from "framer-motion";

const stats = [
  { value: "12k+", label: "Students across 40+ countries" },
  { value: "$3.4B", label: "Volume traded by graduates" },
  { value: "180+", label: "Mentors from top DeFi desks" },
  { value: "92%", label: "Placed at funds, protocols or DAOs" },
];

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-2xl p-7"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="font-display text-4xl font-semibold text-gradient">{s.value}</div>
            <div className="mt-2 text-sm text-white/55">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
