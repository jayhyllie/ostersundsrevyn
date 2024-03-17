import { Button } from "@revyn/button";
import { NavbarGlass } from "@revyn/navbarglass";
import { Btn, Style } from "@revyn/types";
import { useEffect } from "react";
import { NavMobile } from "./feature/NavMobile";
import "./style.scss";

export const NavContainer = () => {
  const screenWidth = window.innerWidth;

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, []);

  return (
    <>
      {screenWidth < 1100 ? (
        <NavMobile />
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
