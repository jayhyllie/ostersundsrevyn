import { Link } from "@tanstack/react-router";

export function TeamTabs() {
  return (
    <nav className="team__tabs">
      <Link className={`team__tabs--link`} to="/revyganget/ensemble">
        Ensemble
      </Link>
      <Link className={`team__tabs--link`} to="/revyganget/band">
        Orkester
      </Link>
      <Link className={`team__tabs--link`} to="/revyganget/production">
        Produktion
      </Link>
    </nav>
  );
}
