import { Outlet } from "@tanstack/react-router";
import { MediaTabs } from "./feature/MediaTabs";
import "./style.scss";
import { AnimatedOutletWrapper } from "@revyn/animatedoutlet";

export const MediaPage = () => {
  return (
    <>
      <main className="media">
        <MediaTabs />
        <AnimatedOutletWrapper>
          <Outlet />
        </AnimatedOutletWrapper>
      </main>
    </>
  );
};
