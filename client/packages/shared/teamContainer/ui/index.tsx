import { Link, Outlet } from "@tanstack/react-router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.scss";
import { NavContainer } from "@revyn/navcontainer";

function TeamTabs() {
  const currentTab = window.location.pathname;
  return (
    <Tabs value={currentTab}>
      <Tab
        label="Ensemble"
        value="/revyganget/ensemble"
        component={Link}
        to="/revyganget/ensemble"
      />
      <Tab
        label="Orkester"
        value="/revyganget/band"
        component={Link}
        to="/revyganget/band"
      />
      <Tab
        label="Produktion"
        value="/revyganget/production"
        component={Link}
        to="/revyganget/production"
      />
    </Tabs>
  );
}

export const TeamContainer = () => {
  return (
    <>
      <NavContainer />
      <main className="team">
        <section className="team__tabs">
          <TeamTabs />
        </section>
        <Outlet />
      </main>
    </>
  );
};
