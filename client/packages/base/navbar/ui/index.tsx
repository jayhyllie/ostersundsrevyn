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
const itemIds = ["Hem", "Revygänget 2025", "Media", "Historik", "Kontakta oss"];

export const Navbar = () => {
  return (
    <motion.ul variants={variants}>
      {itemIds.map((text, i) => (
        <NavItem id={i} text={text} key={i} />
      ))}
    </motion.ul>
  );
};
