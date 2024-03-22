import { Direction } from "@revyn/types";
import { Variants } from "framer-motion";

const OFFSET: Record<Direction, 1 | -1> = {
  left: 1,
  right: -1,
  up: 1,
  down: -1,
};

const AXIS: Record<Direction, "x" | "y"> = {
  left: "x",
  right: "x",
  up: "y",
  down: "y",
};

export const RouteTransitionVariants: Variants = {
  initial: (direction: Direction = "up") => ({
    [AXIS[direction]]: `${OFFSET[direction] * 100}vh`,
    opacity: 0,
  }),
  animate: (direction: Direction = "down") => ({
    [AXIS[direction]]: 0,
    opacity: 1,
  }),
  exit: (direction: Direction = "up") => ({
    [AXIS[direction]]: `${OFFSET[direction] * -100}vh`,
    opacity: 0,
  }),
};
