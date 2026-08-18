import { ExternalLink, Github, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import type { Project } from "../../types";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const hasLinks = project.github || project.demo;

  return (
    <div className="pointer-events-auto fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-card border border-border rounded-t-2xl sm:rounded-xl"
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-card border-b border-border">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Detalhes do Projeto</span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h2 className="text-xl font-mono font-semibold text-foreground mb-2">{project.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              { label: "01 — O Problema", text: project.problem },
              { label: "02 — Arquitetura & Decisões Técnicas", text: project.architecture },
              { label: "03 — Desafios Enfrentados", text: project.challenges },
              { label: "04 — Impacto & Resultado", text: project.impact },
            ].map(({ label, text }) => (
              <div key={label}>
                <p className="font-mono text-xs text-accent mb-2 tracking-widest uppercase">{label}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {hasLinks && (
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg text-sm font-mono text-foreground hover:border-foreground/30 hover:bg-muted transition-all"
                >
                  <Github size={15} />
                  Repositório
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent rounded-lg text-sm font-mono font-semibold text-accent-foreground hover:bg-accent/90 transition-all"
                >
                  <ExternalLink size={15} />
                  Ver Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
