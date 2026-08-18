import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { BackgroundVideo } from "./components/layout/BackgroundVideo";
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
      className="min-h-screen text-foreground pointer-events-none"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/*
        Este wrapper raiz fica com pointer-events:none para que o fundo fixo
        (vídeo/gradiente arrastável) consiga receber cliques nas áreas vazias
        da página — uma div comum, mesmo sem nada visível nela, ocupa toda a
        sua caixa para fins de hit-test e bloquearia o fundo por trás dela.
        Cada bloco de conteúdo real reativa pointer-events explicitamente.
      */}
      <BackgroundVideo />

      <a
        href="#main-content"
        className="pointer-events-auto sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:font-mono focus:text-sm focus:rounded-lg"
      >
        Pular para o conteúdo
      </a>

      <div className="pointer-events-auto relative z-10">
        <Header />
      </div>

      <main id="main-content" className="pointer-events-auto relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <Hero onScrollTo={scrollTo} />
        <Skills />
        <Projects featured={featured} others={others} onOpenProject={setActiveProject} />
        <Education items={education} />
        <Contact />
      </main>

      <div className="pointer-events-auto relative z-10">
        <Footer />
      </div>

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
