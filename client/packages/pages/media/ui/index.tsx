import { NavContainer } from "@revyn/navcontainer";
import { Outlet } from "@tanstack/react-router";
import { MediaTabs } from "./feature/MediaTabs";
import "./style.scss";

export const MediaPage = () => {
  return (
    <>
      <NavContainer />
      <main className="media">
        <MediaTabs />
        <Outlet />
      </main>
    </>
  );
};
