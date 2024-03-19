import { Navbar } from "@revyn/navbar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import MenuToggle from "./Toggle";
import { useDimensions } from "./useDimensions";

export const NavMobile = () => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        duration: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 2,
      },
    },
  };

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
