import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { contactInfo } from "../../data";

export function Contact() {
  const links = [
    { icon: Mail, label: contactInfo.email, href: `mailto:${contactInfo.email}`, primary: true },
    { icon: MessageCircle, label: "WhatsApp", href: contactInfo.whatsapp, primary: true },
    { icon: Linkedin, label: "LinkedIn", href: contactInfo.linkedin, primary: false },
    { icon: Github, label: "GitHub", href: contactInfo.github, primary: false },
  ];

  return (
    <section id="contato" className="pb-24 sm:pb-32">
      <motion.div
        className="border border-border rounded-xl bg-card p-8 sm:p-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="font-mono text-2xl sm:text-3xl font-semibold text-foreground mb-3"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Vamos conversar?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-10 max-w-md">
          Estou aberto a projetos freelance, oportunidades de trabalho e colaborações. Respondo em até 24h.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map(({ icon: Icon, label, href, primary }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className={`flex items-center gap-3 px-5 py-4 rounded-lg font-mono text-sm transition-colors ${
                primary
                  ? "bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
                  : "border border-border text-foreground hover:border-foreground/30 hover:bg-muted"
              }`}
            >
              <Icon size={16} />
              {label}
              <ArrowUpRight size={14} className="ml-auto opacity-60" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
