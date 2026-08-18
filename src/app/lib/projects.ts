import type { Project } from "../types";

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((p) => p.featured);
}

export function getOtherProjects(projects: Project[]): Project[] {
  return projects.filter((p) => !p.featured);
}
