import { Button } from "@revyn/button";
import { NavbarGlass } from "@revyn/navbarglass";
import { Btn, Style } from "@revyn/types";
import { NavMobile } from "./feature/NavMobile";
import "./style.scss";

export const NavContainer = () => {
  const screenWidth = window.innerWidth;

  return (
    <>
      {screenWidth < 1100 ? (
        <header className="nav mobile">
          <a href="/hem" className="nav__logo">
            <img src="./logo.png" alt="logo" />
          </a>
          <Button
            type={Btn.SOLID}
            style={Style.DEFAULT}
            onClick={() => console.log("biljetter")}
          >
            Biljetter
          </Button>
          <NavMobile />
        </header>
      ) : (
        <header className="nav">
          <a href="/hem" className="nav__logo">
            <figure>
              <img src="./logo.png" alt="logo" />
            </figure>
          </a>
          <NavbarGlass />
          <Button
            type={Btn.SOLID}
            style={Style.DEFAULT}
            onClick={() => console.log("biljetter")}
          >
            Biljetter
          </Button>
        </header>
      )}
    </>
  );
};
