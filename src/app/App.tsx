import { AnimatePresence } from "motion/react";
import { lazy, Suspense, useState } from "react";
import { BackgroundVideo } from "./components/layout/BackgroundVideo";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Hero } from "./components/sections/Hero";
import { Languages } from "./components/sections/Languages";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { education, projects } from "./data";
import { getFeaturedProjects, getOtherProjects } from "./lib/projects";
import { scrollToId } from "./lib/scroll";
import type { Project } from "./types";

const ProjectModal = lazy(() => import("./components/project/ProjectModal").then((m) => ({ default: m.ProjectModal })));

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featured = getFeaturedProjects(projects);
  const others = getOtherProjects(projects);

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
      <ScrollProgress />

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
        <Hero onScrollTo={scrollToId} />
        <Skills />
        <Projects featured={featured} others={others} onOpenProject={setActiveProject} />
        <Education items={education} />
        <Languages />
        <Contact />
      </main>

      <div className="pointer-events-auto relative z-10">
        <Footer />
      </div>

      <AnimatePresence>
        {activeProject && (
          <Suspense fallback={null}>
            <ProjectModal key={activeProject.id} project={activeProject} onClose={() => setActiveProject(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
