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
import { TeamContainer } from "@revyn/teamcontainer";
import { InfoPage } from "@revyn/infopage";

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
  path: "/hem",
  getParentRoute: () => rootRoute,
  component: () => <LandingPage />,
});

const teamContainerRoute = createRoute({
  path: "/revyganget",
  getParentRoute: () => rootRoute,
  component: () => <TeamContainer />,
});
const ensembleRoute = createRoute({
  path: "/ensemble",
  getParentRoute: () => teamContainerRoute,
  component: TeamPage,
});

const bandRoute = createRoute({
  path: "/band",
  getParentRoute: () => teamContainerRoute,
  component: TeamPage,
});

const productionRoute = createRoute({
  path: "/production",
  getParentRoute: () => teamContainerRoute,
  component: TeamPage,
});

const infoPage = createRoute({
  path: "/information",
  getParentRoute: () => rootRoute,
  component: InfoPage,
});

const routeTree = rootRoute.addChildren([
  landingRoute,
  homeRoute,
  teamContainerRoute.addChildren([ensembleRoute, bandRoute, productionRoute]),
  infoPage,
]);

export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: ({ error }) => <div>Error: {error.message}</div>,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
