import { AnimatedOutletWrapper } from "@revyn/animatedoutlet";
import { NavContainer } from "@revyn/navcontainer";
import { Outlet } from "@tanstack/react-router";
import { TeamTabs } from "./feature/TeamTabs";
import "./style.scss";

export const TeamContainer = () => {
  return (
    <>
      <NavContainer />
      <main className="team">
        <TeamTabs />
        <AnimatedOutletWrapper>
          <Outlet />
        </AnimatedOutletWrapper>
      </main>
    </>
  );
};
