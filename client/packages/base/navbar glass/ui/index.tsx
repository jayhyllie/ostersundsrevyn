import "./style.scss";

export const NavbarGlass = () => {
  const location = window.location.pathname.split("/")[1];
  const absoluteLocation = "historik" || "hem";
  const navItems = ["Revygänget", "Media", "Historik", "Kontakt"];
  return (
    <ul
      className={
        "nav__list " + (location === absoluteLocation ? "absolute" : "")
      }
    >
      {navItems.map((text, i) => (
        <li
          key={i}
          className={`nav__list--item ${
            location ===
            text.toLowerCase().replace(/å|ä/, "a").replace("ö", "o")
              ? "active"
              : ""
          }`}
        >
          <a
            href={
              text === "Revygänget"
                ? `/${text
                    .toLowerCase()
                    .replace(/å|ä/, "a")
                    .replace("ö", "o")}/ensemble`
                : text === "Media"
                ? `/${text.toLowerCase()}/images/2025`
                : `/${text.toLowerCase()}`
            }
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
