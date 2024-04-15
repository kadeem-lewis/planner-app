/* eslint-disable import/no-named-as-default */
import * as Sentry from "@sentry/remix";
/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";
import posthog from "posthog-js";

Sentry.init({
  dsn: "https://cd25ba1dfe7f3f9915df0b9405b3ce2f@o4506349855244288.ingest.us.sentry.io/4507005005266944",
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,

  integrations: [
    Sentry.browserTracingIntegration({
      useEffect,
      useLocation,
      useMatches,
    }),
    Sentry.replayIntegration(),
  ],
  enabled: process.env.NODE_ENV !== "development",
});

function PosthogInit() {
  useEffect(() => {
    posthog.init("phc_KqZ8YCVUtejfkJtlFfByd2BhomsgwbXsXUJ7UAVSgKU", {
      api_host: "https://app.posthog.com",
    });
  }, []);

  return null;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
      <PosthogInit />
    </StrictMode>,
  );
});
