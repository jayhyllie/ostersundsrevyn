import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { LandingPage } from "@revyn/landingpage";
import { TeamPage } from "@revyn/teampage";
import { SplashPage } from "@revyn/splash";

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
  component: () => <SplashPage />,
});

const homeRoute = createRoute({
  path: "/home",
  getParentRoute: () => rootRoute,
  component: () => <LandingPage />,
});

const teamRoute = createRoute({
  path: "/team",
  getParentRoute: () => rootRoute,
  component: TeamPage,
});

const routeTree = rootRoute.addChildren([landingRoute, homeRoute, teamRoute]);

export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: ({ error }) => <div>Error: {error.message}</div>,
  defaultPreload: "intent",
});
