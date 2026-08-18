import { motion } from "motion/react";
import { Project } from "../../types";

export function ProjectCard({
  project,
  index = 0,
  onOpen,
}: {
  project: Project;
  index?: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      className="group text-left w-full border border-border rounded-xl bg-card p-5 hover:border-border/50 hover:bg-muted/40 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted mb-4">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-400"
        />
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-mono text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-mono text-sm font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
    </motion.button>
  );
}
