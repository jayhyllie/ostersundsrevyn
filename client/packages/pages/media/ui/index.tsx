import { Tab, Tabs } from "@mui/material";
import { NavContainer } from "@revyn/navcontainer";
import { Link, Outlet } from "@tanstack/react-router";
import "./style.scss";

function MediaTabs() {
  const currentTab = window.location.pathname;
  return (
    <Tabs value={currentTab}>
      <Tab
        label="Bilder"
        component={Link}
        to="/media/images"
        value="/media/images"
      />
      <Tab
        label="Filmer"
        component={Link}
        to="/media/videos"
        value="/media/videos"
      />
    </Tabs>
  );
}

export const MediaPage = () => {
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
