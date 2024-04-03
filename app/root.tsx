import { captureRemixErrorBoundaryError } from "@sentry/remix";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { RouterProvider } from "react-aria-components";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import { dark } from "@clerk/themes";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// Return the theme from the session storage using the loader
export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(args, async ({ request }) => {
    const { getTheme } = await themeSessionResolver(request);
    return {
      theme: getTheme(),
    };
  });
};

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const ErrorBoundary = ClerkErrorBoundary(() => {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  return <div>Something went wrong</div>;
});

function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <RouterProvider navigate={navigate}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default ClerkApp(AppWithProviders, {
  appearance: {
    baseTheme: dark,
  },
});
