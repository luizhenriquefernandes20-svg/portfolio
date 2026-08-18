import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NAV_ITEMS = [
  { label: "Skills", id: "skills" },
  { label: "Projetos", id: "projetos" },
  { label: "Formação", id: "formacao" },
  { label: "Contato", id: "contato" },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <span
          className="font-mono text-sm font-semibold text-foreground cursor-pointer hover:text-accent transition-colors"
          onClick={() => scrollTo("hero")}
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          luiz.dev
        </span>
        <nav className="hidden sm:flex items-center gap-7">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="group relative font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide transition-colors py-1"
            >
              {label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
        <button
          className="sm:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label={mobileNavOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileNavOpen}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-current transition-all ${mobileNavOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all ${mobileNavOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all ${mobileNavOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden border-t border-border bg-background px-5 overflow-hidden"
          >
            <div className="py-4 space-y-1">
              {NAV_ITEMS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full text-left font-mono text-sm text-muted-foreground hover:text-foreground py-2.5 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
