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
import { MediaContainer } from "@revyn/mediacontainer";
import { GalleryPage } from "@revyn/media";
import { ImageGallery } from "@revyn/imagegallery";
import { ContactPage } from "@revyn/contactpage";

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

/* ---- TEAM ----- */
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
/* -------- */

const infoPage = createRoute({
  path: "/information",
  getParentRoute: () => rootRoute,
  component: InfoPage,
});

/* ---- MEDIA ---- */
const mediaContainerRoute = createRoute({
  path: "/media",
  getParentRoute: () => rootRoute,
  component: () => <MediaContainer />,
});
const galleryRoute = createRoute({
  path: "/images",
  getParentRoute: () => mediaContainerRoute,
  component: GalleryPage,
});
const imageGalleryRoute = createRoute({
  path: "$year",
  getParentRoute: () => galleryRoute,
  component: () => <ImageGallery />,
});
/* -------- */

const contactPage = createRoute({
  path: "/kontakt",
  getParentRoute: () => rootRoute,
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  landingRoute,
  homeRoute,
  teamContainerRoute.addChildren([ensembleRoute, bandRoute, productionRoute]),
  infoPage,
  mediaContainerRoute.addChildren([
    galleryRoute.addChildren([imageGalleryRoute]),
  ]),
  contactPage,
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
