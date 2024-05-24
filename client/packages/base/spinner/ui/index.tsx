import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

export const Spinner = ({ size }: { size: number }) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="spinner"
    >
      <motion.circle
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          ease: "linear",
        }}
        cx="50%"
        cy="50%"
        r="40"
        fill="none"
        stroke={"#36D9B0"}
        strokeWidth="4"
        strokeDasharray="100 100"
        strokeDashoffset="-180"
      />
    </svg>
  );
};
