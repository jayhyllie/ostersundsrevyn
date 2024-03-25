import { Button } from "@revyn/button";
import { LogoComponent } from "@revyn/logo";
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
          <LogoComponent />
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
          <LogoComponent />
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
