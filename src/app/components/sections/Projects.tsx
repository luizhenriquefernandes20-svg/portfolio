import { motion } from "motion/react";
import { Project } from "../../types";
import { FeaturedCard } from "../project/FeaturedCard";
import { ProjectCard } from "../project/ProjectCard";

export function Projects({
  featured,
  others,
  onOpenProject,
}: {
  featured: Project[];
  others: Project[];
  onOpenProject: (project: Project) => void;
}) {
  return (
    <>
      <section id="projetos" className="pb-20 sm:pb-28">
        <motion.div
          className="flex items-baseline justify-between mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-mono text-xs tracking-[0.2em] uppercase text-accent"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Trabalhos em Destaque
          </h2>
          <span className="font-mono text-xs text-muted-foreground">{featured.length} projetos</span>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} onOpen={() => onOpenProject(project)} />
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <motion.div
          className="flex items-baseline justify-between mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-mono text-xs tracking-[0.2em] uppercase text-accent"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Outros Projetos
          </h2>
          <span className="font-mono text-xs text-muted-foreground">{others.length} projetos</span>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={() => onOpenProject(project)} />
          ))}
        </div>
      </section>
    </>
  );
}
