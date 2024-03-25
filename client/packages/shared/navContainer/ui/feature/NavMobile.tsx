import { Navbar } from "@revyn/navbar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import MenuToggle from "./Toggle";
import { useDimensions } from "./useDimensions";
import { sidebar } from "../../data";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <>
      <MenuToggle toggle={setIsOpen} isOpen={isOpen} />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={"menu " + (isOpen ? "active" : "")}
      >
        <motion.div className="menu__background" variants={sidebar} />
        <Navbar />
      </motion.nav>
    </>
  );
};
