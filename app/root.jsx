import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

// Tailwind Styles
import tailwindStyles from "./tailwind.css"

// Render links in the document
export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles}
  ]
}

// Render meta tags in the document
export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
