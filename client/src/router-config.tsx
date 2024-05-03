import { AnimatedOutletWrapper } from "@revyn/animatedoutlet";
import { ConstructionPage } from "@revyn/construction";
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <AnimatedOutletWrapper>
        <Outlet />
      </AnimatedOutletWrapper>
    </>
  ),
});

const landingRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => <ConstructionPage />,
});
/* -------- */

const routeTree = rootRoute.addChildren([landingRoute]);

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
