import { Link, Outlet } from "@tanstack/react-router";
import "./style.scss";

export const TeamContainer = () => {
  return (
    <main className="team">
      <section className="team__tabs">
        {(
          [
            ["/revyganget", "Ensemble", true],
            ["/band", "Orkester"],
            ["/production", "Produktion"],
          ] as const
        ).map(([to, label, exact]) => {
          return (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact }}
              className={`team__tabs--tab ${exact ? "active" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </section>
      <hr />
      <Outlet />
    </main>
  );
};
