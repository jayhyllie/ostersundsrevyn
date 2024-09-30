import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
