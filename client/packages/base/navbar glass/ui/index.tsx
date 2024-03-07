import "./style.scss";

export const NavbarGlass = () => {
  const navItems = [
    "Revygänget",
    "Information",
    "Media",
    "Historik",
    "Kontakt",
  ];
  return (
    <ul className="nav__list">
      {navItems.map((text, i) => (
        <li key={i} className="nav__list--item">
          <a
            href={
              text === "Revygänget"
                ? `/${text
                    .toLowerCase()
                    .replace(/å|ä/, "a")
                    .replace("ö", "o")}/ensemble`
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
