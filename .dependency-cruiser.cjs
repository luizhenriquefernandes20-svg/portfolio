/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  extends: "dependency-cruiser/configs/recommended",
  forbidden: [
    {
      name: "no-orphans",
      comment: "Vitest loads src/test/setup.ts by path from vite.config.ts, not via an import statement.",
      severity: "ignore",
      from: { orphan: true, path: "^src/test/setup\\.ts$" },
      to: {},
    },
    {
      name: "layout-no-feature-content",
      comment:
        "components/layout is generic page chrome (header, footer, background). It must not depend on " +
        "feature content (project/education sections or app data) — that dependency should only flow " +
        "the other way, otherwise the shell stops being reusable.",
      severity: "error",
      from: { path: "^src/app/components/layout" },
      to: {
        path: "^src/app/(components/(sections|project|education)|data\\.ts)",
      },
    },
    {
      name: "no-data-import-outside-app",
      comment: "src/app/data.ts is portfolio content, not a generic utility — only app-level code should read it.",
      severity: "error",
      from: { pathNot: "^src/app/(App\\.tsx|components/sections|components/project|components/education)" },
      to: { path: "^src/app/data\\.ts$" },
    },
  ],
  options: {
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    doNotFollow: { path: "node_modules" },
    exclude: { path: "^(dist|node_modules)" },
  },
};
