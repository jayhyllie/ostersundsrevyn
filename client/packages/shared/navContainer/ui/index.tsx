/* import { Navbar } from "@revyn/navbar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import MenuToggle from "./feature/Toggle";
import { useDimensions } from "./feature/useDimensions"; */
import "./style.scss";
import { NavbarGlass } from "@revyn/navbarglass";
import { NavMobile } from "./feature/NavMobile";
import { useEffect } from "react";
import { Button } from "@revyn/button";
import { Btn, Style } from "@revyn/types";

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
          <figure className="nav__logo">
            <img src="./logo.png" alt="Revyn Logo" />
          </figure>
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
