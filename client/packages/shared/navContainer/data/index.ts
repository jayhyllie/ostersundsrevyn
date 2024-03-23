import { Variants } from "framer-motion";

export const sidebar = {
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
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 2,
    },
  },
};

export const variantsFirst: Variants = {
  initial: { d: "M 2 2.5 L 20 2.5" },
  animate: { d: "M 3 16.5 L 17 2.5" },
  exit: { d: "M 2 2.5 L 20 2.5" },
};

export const variantsSecond: Variants = {
  initial: { d: "M 2 16.346 L 20 16.346" },
  animate: { d: "M 2 2.5 L 17 16.346" },
  exit: { d: "M 2 16.346 L 20 16.346" },
};
