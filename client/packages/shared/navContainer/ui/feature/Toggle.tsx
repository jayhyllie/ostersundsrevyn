import { SVGMotionProps, motion } from "framer-motion";
import { RefAttributes } from "react";
import { JSX } from "react/jsx-runtime";
import { variantsFirst, variantsSecond } from "../../data";

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
