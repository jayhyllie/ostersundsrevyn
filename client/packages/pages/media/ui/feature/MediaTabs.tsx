import { Link } from "@tanstack/react-router";

export function MediaTabs() {
  return (
    <nav className="media__tabs">
      <Link className={`media__tabs--link`} to="/media/images">
        Bilder
      </Link>
      <Link className={`media__tabs--link`} to="/media/videos">
        Filmer
      </Link>
    </nav>
  );
}
