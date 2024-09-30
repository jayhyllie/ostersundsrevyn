import { Button } from "@revyn/button";
import { LogoComponent } from "@revyn/logo";
import { NavbarGlass } from "@revyn/navbarglass";
import { Btn, Style } from "@revyn/types";
import { NavMobile } from "./feature/NavMobile";
import "./style.scss";

export const NavContainer = () => {
  const screenWidth = window.innerWidth;
  const location = window.location.pathname;

  return (
    <>
      {screenWidth < 1100 ? (
        <header className="nav mobile">
          <LogoComponent />
          <a
            href="https://www.nortic.se/ticket/event/61851"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type={Btn.SOLID}
              style={Style.DEFAULT}
              onClick={() => console.log("biljetter")}
            >
              Biljetter
            </Button>
          </a>
          <NavMobile />
        </header>
      ) : (
        location !== "/" && (
          <header className="nav">
            <LogoComponent />
            <NavbarGlass />
            <a
              href="https://www.nortic.se/ticket/event/61851"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type={Btn.SOLID}
                style={Style.DEFAULT}
                onClick={() => console.log("biljetter")}
              >
                Biljetter
              </Button>
            </a>
          </header>
        )
      )}
    </>
  );
};
