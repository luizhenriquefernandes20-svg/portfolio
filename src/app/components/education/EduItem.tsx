import { motion } from "motion/react";
import type { EducationItem } from "../../types";

const TYPE_LABEL: Record<EducationItem["type"], string> = {
  degree: "Graduação",
  cert: "Certificação",
  course: "Curso",
};

const TYPE_COLOR: Record<EducationItem["type"], string> = {
  degree: "text-accent border-accent/30",
  cert: "text-yellow-400 border-yellow-400/30",
  course: "text-muted-foreground border-border",
};

export function EduItem({ item, index = 0 }: { item: EducationItem; index?: number }) {
  return (
    <motion.div
      className="group flex gap-5 px-5 py-5 sm:px-6 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="shrink-0 font-mono text-xs text-muted-foreground pt-0.5 w-24 whitespace-nowrap">{item.year}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h4 className="font-mono text-sm font-semibold text-foreground">{item.title}</h4>
          <span className={`shrink-0 font-mono text-xs px-2 py-0.5 border rounded ${TYPE_COLOR[item.type]}`}>
            {TYPE_LABEL[item.type]}
          </span>
        </div>
        <p className={`text-xs text-muted-foreground ${item.detail ? "mb-0.5" : ""}`}>{item.institution}</p>
        {item.detail && <p className="text-xs text-muted-foreground/70">{item.detail}</p>}
      </div>
    </motion.div>
  );
}
