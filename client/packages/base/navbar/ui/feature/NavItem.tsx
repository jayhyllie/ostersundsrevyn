import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import React from "react";

interface StyleProps {
  border: string;
  color: string;
  textAlign: string;
  paddingBlock: string;
}

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
const colors = ["#4400FF", "#7700FF", "#9C1AFF", "#D309E1", "#FF008C"];

export default function NavItem({ id, text }: { id: number; text: string }) {
  const style: StyleProps = {
    border: `2px solid ${colors[id]}`,
    color: "black",
    textAlign: "center",
    paddingBlock: "1em",
  };
  const Li = styled.div`
    position: relative;
    display: flex;
    &::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.5s;
      background-color: ${colors[id]};
    }
    &:hover::before {
      width: 100%;
    }
    &:hover {
      font-weight: 700;
    }
  `;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.8 }}
    >
      <Li>
        <div
          className={`first icon-${id}`}
          style={style as React.CSSProperties}
        ></div>
        <div className="text" style={style as React.CSSProperties}>
          <a href={`/${text}`}>{text}</a>
        </div>
      </Li>
    </motion.li>
  );
}
