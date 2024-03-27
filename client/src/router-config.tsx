import {
  ScrollRestoration,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { LandingPage } from "@revyn/landingpage";
import { TeamPage } from "@revyn/teampage";
import { SplashPage } from "@revyn/splash";
import { TeamContainer } from "@revyn/teamcontainer";
import { InfoPage } from "@revyn/infopage";
import { MediaPage } from "@revyn/media";
import { ImageGallery } from "@revyn/imagegallery";
import { ContactPage } from "@revyn/contactpage";
import { ImageContainer } from "@revyn/imagecontainer";
import { VideoContainer } from "@revyn/videocontainer";
import { HistoryPage } from "@revyn/historypage";
import { AnimatedOutletWrapper } from "@revyn/animatedoutlet";
import { NavContainer } from "@revyn/navcontainer";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <NavContainer />
      <AnimatedOutletWrapper>
        <Outlet />
      </AnimatedOutletWrapper>
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

const contactPage = createRoute({
  path: "/kontakt",
  getParentRoute: () => rootRoute,
  component: ContactPage,
});

const historyPage = createRoute({
  path: "/historik",
  getParentRoute: () => rootRoute,
  component: HistoryPage,
});

/* ---- MEDIA ---- */
const mediaContainerRoute = createRoute({
  path: "/media",
  getParentRoute: () => rootRoute,
  component: MediaPage,
});
const videoRoute = createRoute({
  path: "/videos",
  getParentRoute: () => mediaContainerRoute,
  component: () => <VideoContainer />,
});
const galleryRoute = createRoute({
  path: "/images",
  getParentRoute: () => mediaContainerRoute,
  component: () => <ImageContainer />,
});
const imageGalleryRoute = createRoute({
  path: "$year",
  getParentRoute: () => galleryRoute,
  component: () => <ImageGallery />,
});
/* -------- */

const routeTree = rootRoute.addChildren([
  landingRoute,
  homeRoute,
  teamContainerRoute.addChildren([ensembleRoute, bandRoute, productionRoute]),
  infoPage,
  mediaContainerRoute.addChildren([
    galleryRoute.addChildren([imageGalleryRoute]),
    videoRoute,
  ]),
  contactPage,
  historyPage,
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
