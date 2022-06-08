import type { FC } from "react";
import type { LinksFunction, MetaFunction } from 'remix';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

export const links: LinksFunction = () => [{
  rel: "stylesheet",
  href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css",
}];

export const meta: MetaFunction = () => ({ title: "Productivity Tips" });

const App: FC = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      <nav style={{marginLeft: 10}}>
        <h1>
          <Link to="/" style={{color: "var(--h1-color)"}}>
            Productivity Tips
          </Link>
        </h1>
      </nav>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default App;
