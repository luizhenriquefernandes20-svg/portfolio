import { motion } from "motion/react";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { Project } from "../../types";

export function FeaturedCard({
  project,
  index = 0,
  onOpen,
}: {
  project: Project;
  index?: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden border border-border rounded-xl bg-card hover:border-border/60 transition-colors duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="aspect-[16/8] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-0.5 text-accent border border-accent/30 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-mono text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpen}
            className="flex items-center gap-1.5 text-sm font-mono text-foreground hover:text-accent transition-colors group/btn"
          >
            Ver detalhes
            <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
