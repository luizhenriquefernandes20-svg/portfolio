import { motion } from "motion/react";
import { Download } from "lucide-react";
import { contactInfo } from "../../data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.section
      id="hero"
      className="pt-24 pb-28 sm:pt-32 sm:pb-36"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={item}
        className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-8 flex items-center gap-2"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        Disponível para projetos
      </motion.p>
      <motion.h1
        variants={item}
        className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] tracking-tight mb-6"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        Luiz Henrique
        <br />
        <span className="text-muted-foreground font-light">Full Stack Dev</span>
      </motion.h1>
      <motion.p
        variants={item}
        className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
      >
        Apaixonado por tecnologia, automação e desenvolvimento de soluções modernas. Atualmente
        estudo Desenvolvimento de Software e busco minha primeira oportunidade profissional,
        sempre focando em escrever código limpo, escalável e seguindo boas práticas.
      </motion.p>
      <motion.div variants={item} className="flex flex-wrap gap-3">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onScrollTo("projetos")}
          className="px-6 py-3 bg-accent text-accent-foreground font-mono text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors"
        >
          Ver Projetos
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onScrollTo("contato")}
          className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:border-foreground/30 hover:bg-muted transition-colors"
        >
          Entre em Contato
        </motion.button>
        {contactInfo.resume && (
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={contactInfo.resume}
            download
            className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:border-foreground/30 hover:bg-muted transition-colors flex items-center gap-2"
          >
            <Download size={14} />
            Baixar Currículo
          </motion.a>
        )}
      </motion.div>
    </motion.section>
  );
}
