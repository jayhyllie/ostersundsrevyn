import React from "react";
import "./style.scss";
import { Variants, motion } from "framer-motion";

export const ModalContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const variants: Variants = {
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
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      className="modalContainer"
    >
      {children}
    </motion.section>
  );
};
