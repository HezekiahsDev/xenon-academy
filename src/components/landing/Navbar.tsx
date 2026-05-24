import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Programs", "Why Xenon", "Experience", "News", "Blog", "Community"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elevated" : "glass"
          }`}
        >
          <a href="#" className="flex items-center pl-2">
            <img src="/logo-xenon.png" alt="Xenon Academy" className="h-8 w-auto scale-[1.5]" />
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l}>
                {l === "News" || l === "Blog" ? (
                  <Link
                    to={`/${l.toLowerCase()}`}
                    className="rounded-full px-4 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                    activeProps={{
                      className: "rounded-full px-4 py-1.5 text-sm bg-white/[0.06] text-white",
                    }}
                  >
                    {l}
                  </Link>
                ) : (
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="rounded-full px-4 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {l}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden sm:inline-flex group relative items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Apply now
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex md:hidden items-center justify-center rounded-full p-2 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-xl pt-24 md:hidden"
          >
            <nav className="flex flex-col items-center gap-2 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="w-full"
                >
                  {l === "News" || l === "Blog" ? (
                    <Link
                      to={`/${l.toLowerCase()}`}
                      onClick={closeMenu}
                      className="flex w-full items-center justify-center rounded-2xl px-4 py-4 text-lg font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      {l}
                    </Link>
                  ) : (
                    <a
                      href={`#${l.toLowerCase().replace(" ", "-")}`}
                      onClick={closeMenu}
                      className="flex w-full items-center justify-center rounded-2xl px-4 py-4 text-lg font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      {l}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: links.length * 0.06 }}
                className="mt-6 w-full px-6"
              >
                <a
                  href="#cta"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-black transition-transform hover:scale-[1.02]"
                >
                  Apply now →
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
