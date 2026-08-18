import { describe, expect, it } from "vitest";
import type { Project } from "../types";
import { getFeaturedProjects, getOtherProjects } from "./projects";

function makeProject(overrides: Partial<Project>): Project {
  return {
    id: 1,
    title: "Test",
    description: "",
    tags: [],
    image: "",
    problem: "",
    architecture: "",
    challenges: "",
    impact: "",
    github: null,
    demo: null,
    ...overrides,
  };
}

describe("getFeaturedProjects", () => {
  it("returns only projects with featured: true", () => {
    const projects = [
      makeProject({ id: 1, featured: true }),
      makeProject({ id: 2, featured: false }),
      makeProject({ id: 3 }),
    ];

    expect(getFeaturedProjects(projects).map((p) => p.id)).toEqual([1]);
  });

  it("returns an empty array when nothing is featured", () => {
    const projects = [makeProject({ id: 1 }), makeProject({ id: 2 })];
    expect(getFeaturedProjects(projects)).toEqual([]);
  });
});

describe("getOtherProjects", () => {
  it("returns projects that are not featured, preserving order", () => {
    const projects = [
      makeProject({ id: 1, featured: true }),
      makeProject({ id: 2 }),
      makeProject({ id: 3, featured: true }),
      makeProject({ id: 4 }),
    ];

    expect(getOtherProjects(projects).map((p) => p.id)).toEqual([2, 4]);
  });
});
