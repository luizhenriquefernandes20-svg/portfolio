import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { contactInfo } from "../../data";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders every contact channel with the correct destination", () => {
    render(<Contact />);

    expect(screen.getByRole("link", { name: new RegExp(contactInfo.email) })).toHaveAttribute(
      "href",
      `mailto:${contactInfo.email}`
    );
    expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute("href", contactInfo.whatsapp);
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute("href", contactInfo.linkedin);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute("href", contactInfo.github);
  });

  it("opens every link in a new tab safely", () => {
    render(<Contact />);

    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });
});
