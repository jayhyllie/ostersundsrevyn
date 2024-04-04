import { motion } from "framer-motion";
import NavItem from "./feature/NavItem";
import "./style.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [
  "Hem",
  "Revygänget",
  "Information",
  "Media",
  "Historik",
  "Kontakt",
];

export const Navbar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.ul
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="menu__list"
    >
      {isOpen ? (
        <>
          {itemIds.map((text, i) => (
            <NavItem id={i} text={text} key={i} />
          ))}
        </>
      ) : null}
    </motion.ul>
  );
};
