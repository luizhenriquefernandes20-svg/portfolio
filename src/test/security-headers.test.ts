import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const REQUIRED_DIRECTIVES = ["default-src 'self'", "frame-ancestors 'none'", "object-src 'none'", "base-uri 'self'"];

const REQUIRED_HEADERS = ["X-Content-Type-Options", "X-Frame-Options", "Strict-Transport-Security"];

describe("security headers config", () => {
  it("vercel.json ships a CSP with the expected hardening directives", () => {
    const config = JSON.parse(readFileSync("vercel.json", "utf8"));
    const headers = config.headers[0].headers;
    const csp = headers.find((h: { key: string }) => h.key === "Content-Security-Policy")?.value;

    expect(csp).toBeDefined();
    for (const directive of REQUIRED_DIRECTIVES) {
      expect(csp).toContain(directive);
    }
    for (const name of REQUIRED_HEADERS) {
      expect(headers.some((h: { key: string }) => h.key === name)).toBe(true);
    }
  });

  it("public/_headers (Netlify) matches the same CSP as vercel.json", () => {
    const vercelConfig = JSON.parse(readFileSync("vercel.json", "utf8"));
    const vercelCsp = vercelConfig.headers[0].headers.find(
      (h: { key: string }) => h.key === "Content-Security-Policy"
    )?.value;

    const netlifyHeaders = readFileSync("public/_headers", "utf8");
    const netlifyCspLine = netlifyHeaders
      .split("\n")
      .find((line) => line.trim().startsWith("Content-Security-Policy:"));

    expect(netlifyCspLine).toBeDefined();
    expect(netlifyCspLine).toContain(vercelCsp);
    for (const name of REQUIRED_HEADERS) {
      expect(netlifyHeaders).toContain(name);
    }
  });
});
