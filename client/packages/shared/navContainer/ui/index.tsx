import { useRef, useState } from "react";
import { useDimensions } from "./feature/useDimensions";
import { motion } from "framer-motion";
import { Navbar } from "@revyn/navbar";
import MenuToggle from "./feature/Toggle";
import "./style.scss";

export const NavContainer = () => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={"menu " + isOpen ? "active" : ""}
    >
      <motion.div className="background" variants={sidebar} />
      <Navbar />
      <MenuToggle toggle={setIsOpen} isOpen={isOpen} />
    </motion.nav>
  );
};
