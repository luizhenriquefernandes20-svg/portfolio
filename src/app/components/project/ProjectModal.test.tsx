import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { Project } from "../../types";
import { ProjectModal } from "./ProjectModal";

const project: Project = {
  id: 1,
  title: "Projeto de Teste",
  description: "Descrição do projeto",
  tags: ["React", "TypeScript"],
  image: "/projects/test.png",
  problem: "Problema de teste",
  architecture: "Arquitetura de teste",
  challenges: "Desafios de teste",
  impact: "Impacto de teste",
  github: "https://github.com/example/test",
  demo: null,
};

describe("ProjectModal", () => {
  it("renders the project's title, description and story sections", () => {
    render(<ProjectModal project={project} onClose={vi.fn()} />);

    expect(screen.getByRole("heading", { name: "Projeto de Teste" })).toBeInTheDocument();
    expect(screen.getByText("Descrição do projeto")).toBeInTheDocument();
    expect(screen.getByText("Problema de teste")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /repositório/i })).toHaveAttribute(
      "href",
      "https://github.com/example/test"
    );
    expect(screen.queryByRole("link", { name: /ver demo/i })).not.toBeInTheDocument();
  });

  it("calls onClose when the Escape key is pressed", async () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);

    await userEvent.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);

    await userEvent.click(screen.getByRole("button", { name: /fechar/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("locks and restores body scroll on mount/unmount", () => {
    const { unmount } = render(<ProjectModal project={project} onClose={vi.fn()} />);
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("");
  });

  it("does not close when clicking inside the card content", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);

    fireEvent.click(screen.getByRole("heading", { name: "Projeto de Teste" }));

    expect(onClose).not.toHaveBeenCalled();
  });
});
