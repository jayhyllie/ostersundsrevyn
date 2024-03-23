import { Link } from "@tanstack/react-router";

export function TeamTabs() {
  const pathname = window.location.pathname;
  return (
    <nav className="team__tabs">
      <Link
        className={`team__tabs--link ${
          pathname === "/revyganget/ensemble" ? "active" : ""
        }`}
        to="/revyganget/ensemble"
      >
        Ensemble
      </Link>
      <Link
        className={`team__tabs--link ${
          pathname === "/revyganget/band" ? "active" : ""
        }`}
        to="/revyganget/band"
      >
        Orkester
      </Link>
      <Link
        className={`team__tabs--link ${
          pathname === "/revyganget/production" ? "active" : ""
        }`}
        to="/revyganget/production"
      >
        Produktion
      </Link>
    </nav>
  );
}
