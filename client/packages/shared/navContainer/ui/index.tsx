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
          <section className="mobile__buttons">
            <a
              href="https://www.nortic.se/voucher/1893"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type={Btn.SOLID}
                style={Style.DEFAULT}
                onClick={() => console.log("presentkort")}
              >
                Presentkort
              </Button>
            </a>
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
          </section>
          <NavMobile />
        </header>
      ) : (
        location !== "/" && (
          <header className="nav">
            <section className="nav__left">
              <LogoComponent />
              <a
                href="https://www.nortic.se/voucher/1893"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type={Btn.SOLID}
                  style={Style.DEFAULT}
                  onClick={() => console.log("presentkort")}
                >
                  Presentkort
                </Button>
              </a>
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
            </section>
            <NavbarGlass />
          </header>
        )
      )}
    </>
  );
};
