import { ErrorBoundary } from "@sentry/react";
import { MotionConfig } from "motion/react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { initSentry } from "./app/lib/sentry.ts";
import "./styles/index.css";

initSentry();

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
        <p className="font-mono text-sm text-muted-foreground text-center">
          Algo deu errado ao carregar a página. Tente recarregar.
        </p>
      </div>
    }
  >
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </ErrorBoundary>
);
