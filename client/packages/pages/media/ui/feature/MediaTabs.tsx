import { Link } from "@tanstack/react-router";

export function MediaTabs() {
  const pathname = window.location.pathname;
  return (
    <nav className="media__tabs">
      <Link
        className={`media__tabs--link ${
          pathname === "/media/images" ? "active" : ""
        }`}
        to="/media/images"
      >
        Bilder
      </Link>
      <Link
        className={`media__tabs--link ${
          pathname === "/media/videos" ? "active" : ""
        }`}
        to="/media/videos"
      >
        Filmer
      </Link>
    </nav>
  );
}
