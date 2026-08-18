import * as Sentry from "@sentry/react";

/**
 * Error tracking, opt-in via env var. No DSN configured means Sentry never
 * initializes — nothing is sent anywhere, no account required to run the site.
 *
 * Datadog/New Relic/OpenTelemetry are deliberately NOT wired here: this is a
 * static frontend with no backend and no live deploy yet (every `demo` in
 * data.ts is still null), so there's no infrastructure or real traffic for an
 * APM product to observe, and standing one up would mean creating another
 * paid/account-gated service for data that doesn't exist yet. Sentry's free
 * tier gives frontend error tracking, which is the one observability need a
 * static portfolio actually has right now.
 */
export function initSentry() {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!dsn) return;

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 0.2,
  });
}
