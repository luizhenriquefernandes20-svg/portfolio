import { afterEach, describe, expect, it, vi } from "vitest";
import { scrollToId } from "./scroll";

function mockMatchMedia(reduceMotion: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("prefers-reduced-motion") && reduceMotion,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
}

describe("scrollToId", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("scrolls smoothly when the user has no reduced-motion preference", () => {
    mockMatchMedia(false);
    const target = document.createElement("div");
    target.id = "hero";
    document.body.appendChild(target);
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;

    scrollToId("hero");

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    target.remove();
  });

  it("jumps instantly when the user prefers reduced motion", () => {
    mockMatchMedia(true);
    const target = document.createElement("div");
    target.id = "hero";
    document.body.appendChild(target);
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;

    scrollToId("hero");

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "auto" });
    target.remove();
  });

  it("does nothing when the target id does not exist", () => {
    mockMatchMedia(false);
    expect(() => scrollToId("does-not-exist")).not.toThrow();
  });
});
