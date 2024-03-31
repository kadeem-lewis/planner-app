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
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { AuthProvider } from "./contexts/AuthContext";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { RouterProvider } from "react-aria-components";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" data-theme={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const ErrorBoundary = () => {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  return <div>Something went wrong</div>;
};

export default function AppWithProviders() {
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