import { motion, Variants } from "framer-motion";

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: "unset",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavItem({ id, text }: { id: number; text: string }) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.8 }}
      className="menu__list--item"
    >
      <div className={`first icon-${id}`}></div>
      <div className="text">
        <a
          href={
            text === "Revygänget"
              ? `/${text
                  .toLowerCase()
                  .replace(/å|ä/, "a")
                  .replace("ö", "o")}/ensemble`
              : `/${text.toLowerCase()}`
          }
        >
          {text}
        </a>
      </div>
    </motion.li>
  );
}
