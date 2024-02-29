import { Link } from "@tanstack/react-router";
import "./style.scss";
import { NavContainer } from "@revyn/navcontainer";

export const LandingPage = () => {
  return (
    <>
      <NavContainer />
      <Link to="/team">Team</Link>
    </>
  );
};
