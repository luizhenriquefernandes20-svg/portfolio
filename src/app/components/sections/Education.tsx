import { motion } from "motion/react";
import { EducationItem } from "../../types";
import { EduItem } from "../education/EduItem";

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <section id="formacao" className="pb-20 sm:pb-28">
      <motion.h2
        className="text-xs tracking-[0.2em] uppercase text-accent mb-10"
        style={{ fontFamily: "'Minecraft', monospace" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        Formação & Certificações
      </motion.h2>
      <div className="border border-border rounded-xl bg-card overflow-hidden divide-y-0">
        {items.map((item, i) => (
          <EduItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
