import { motion } from "motion/react";
import { languages } from "../../data";

const DOT_KEYS = ["dot-1", "dot-2", "dot-3", "dot-4"];

export function Languages() {
  return (
    <motion.section
      id="idiomas"
      className="pb-20 sm:pb-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="text-xs tracking-[0.2em] uppercase text-accent mb-10">Idiomas</h2>
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 border-b border-border last:border-0"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="font-mono text-sm font-semibold text-foreground">{lang.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{lang.level}</p>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              {DOT_KEYS.map((key, dotIndex) => (
                <span
                  key={key}
                  className={`h-1.5 w-5 rounded-full ${dotIndex < lang.levelIndex ? "bg-accent" : "bg-muted"}`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
