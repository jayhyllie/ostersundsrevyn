import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { variants } from "../data";

export const ModalContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
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
