import { motion } from "motion/react";
import { skillGroups } from "../../data";

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="pb-20 sm:pb-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2
        className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-10"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        Skills & Stack
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            className="border border-border rounded-xl bg-card p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-sm font-semibold text-foreground mb-4">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 text-accent border border-accent/30 rounded hover:bg-accent/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
