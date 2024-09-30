import { AnimatedOutletWrapper } from "@revyn/animatedoutlet";
import { Outlet } from "@tanstack/react-router";
import { TeamTabs } from "./feature/TeamTabs";
import "./style.scss";

export const TeamContainer = () => {
  return (
    <>
      <main className="team">
        <TeamTabs />
        <AnimatedOutletWrapper>
          <Outlet />
        </AnimatedOutletWrapper>
      </main>
    </>
  );
};
