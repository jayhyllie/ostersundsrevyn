import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import React from "react";

interface StyleProps {
  border: string;
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

export default function NavItem({ id, text }: { id: number; text: string }) {
  const style: StyleProps = {
    border: `2px solid #ff6f00`,
    textAlign: "center",
    paddingBlock: "1em",
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.8 }}
      className="menu__list--item"
    >
      <Li>
        <div
          className={`first icon-${id}`}
          style={style as React.CSSProperties}
        ></div>
        <div className="text" style={style as React.CSSProperties}>
          <a
            href={`/${text
              .toLowerCase()
              .replace(/å|ä/, "a")
              .replace("ö", "o")}`}
          >
            {text}
          </a>
        </div>
      </Li>
    </motion.li>
  );
}

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
    background: linear-gradient(225deg, #f22637 0%, #ff6f00 100%);
  }
  &:hover::before {
    width: 100%;
  }
  &:hover {
    font-weight: 700;
  }
`;
