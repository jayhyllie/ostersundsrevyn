import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { LandingPage } from "@revyn/landingpage";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const landingRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => <LandingPage />,
});

const routeTree = rootRoute.addChildren([landingRoute]);

export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: ({ error }) => <div>Error: {error.message}</div>,
  defaultPreload: "intent",
});
