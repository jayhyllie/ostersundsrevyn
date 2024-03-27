import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { variants } from "../data";

export const ModalContainer = ({
  children,
  style,
}: {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
}) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      className="modalContainer"
      style={style}
    >
      {children}
    </motion.section>
  );
};
