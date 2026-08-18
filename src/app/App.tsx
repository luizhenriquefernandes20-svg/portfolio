import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { ProjectModal } from "./components/project/ProjectModal";
import { projects, education } from "./data";
import { Project } from "./types";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:font-mono focus:text-sm focus:rounded-lg"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="main-content" className="max-w-5xl mx-auto px-5 sm:px-8">
        <Hero onScrollTo={scrollTo} />
        <Skills />
        <Projects featured={featured} others={others} onOpenProject={setActiveProject} />
        <Education items={education} />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key={activeProject.id}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
