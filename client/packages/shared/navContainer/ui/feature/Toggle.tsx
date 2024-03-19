import { SVGMotionProps, Variants, motion } from "framer-motion";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 100%, 100%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

const variantsFirst: Variants = {
  initial: { d: "M 2 2.5 L 20 2.5" },
  animate: { d: "M 3 16.5 L 17 2.5" },
  exit: { d: "M 2 2.5 L 20 2.5" },
};

const variantsSecond: Variants = {
  initial: { d: "M 2 16.346 L 20 16.346" },
  animate: { d: "M 2 2.5 L 17 16.346" },
  exit: { d: "M 2 16.346 L 20 16.346" },
};

type ToggleProps = {
  toggle: (isOpen: boolean) => void;
  isOpen: boolean;
};

export default function MenuToggle({ toggle, isOpen }: ToggleProps) {
  return (
    <button onClick={() => toggle(!isOpen)} className="menu__toggle">
      <svg width="30" height="30" viewBox="0 0 23 23">
        <Path
          variants={variantsFirst}
          initial="initial"
          animate={isOpen ? "animate" : "exit"}
          transition={{ duration: 0.3 }}
        />
        <Path
          d={isOpen ? "" : "M 2 9.423 L 20 9.423"}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={variantsSecond}
          initial="initial"
          animate={isOpen ? "animate" : "exit"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
}
