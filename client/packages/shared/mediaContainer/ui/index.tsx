import "./style.scss";
import { Tabs, Tab } from "@mui/material";
import { Link, Outlet } from "@tanstack/react-router";
import { NavContainer } from "@revyn/navcontainer";

function MediaTabs() {
  const currentTab = window.location.pathname;
  return (
    <Tabs value={currentTab}>
      <Tab
        label="Bilder"
        value="/media/images"
        component={Link}
        to="/media/images"
      />
      <Tab
        label="Filmer"
        value="/media/videos"
        component={Link}
        to="/media/videos"
      />
    </Tabs>
  );
}

export const MediaContainer = () => {
  return (
    <>
      <NavContainer />
      <main className="media">
        <section className="media__tabs">
          <MediaTabs />
        </section>
        <Outlet />
      </main>
    </>
  );
};
