import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      className="border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
          luiz.dev
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Feito com foco no que importa
        </span>
      </div>
    </motion.footer>
  );
}
