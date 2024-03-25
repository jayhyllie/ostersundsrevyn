import { Direction } from "@revyn/types";
import {
  getRouterContext,
  Outlet,
  useMatch,
  useMatches,
} from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  MotionProps,
  useIsPresent,
} from "framer-motion";
import { cloneDeep } from "lodash-es";
import { forwardRef, useContext, useRef } from "react";
import { TransitionProps } from "../data";

type AnimatedOutletProps = MotionProps & {
  direction?: Direction;
};

const AnimatedOutlet = forwardRef<HTMLDivElement, AnimatedOutletProps>(
  ({ direction, ...props }, ref) => {
    const isPresent = useIsPresent();

    const matches = useMatches();
    const prevMatches = useRef(matches);

    const RouterContext = getRouterContext();
    const routerContext = useContext(RouterContext);

    let renderedContext = routerContext;

    if (isPresent) {
      prevMatches.current = cloneDeep(matches);
    } else {
      renderedContext = cloneDeep(routerContext);
      renderedContext.__store.state.matches = [
        ...matches.map((m, i) => ({
          ...(prevMatches.current[i] || m),
          id: m.id,
        })),
        ...prevMatches.current.slice(matches.length),
      ];
    }

    return (
      <motion.div
        ref={ref}
        className="outlet"
        custom={direction}
        {...TransitionProps}
        {...props}
      >
        <RouterContext.Provider value={renderedContext}>
          <Outlet />
        </RouterContext.Provider>
      </motion.div>
    );
  }
);

export const AnimatedOutletWrapper = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];
  return (
    <AnimatePresence mode="popLayout">
      <AnimatedOutlet key={nextMatch.id}>{children}</AnimatedOutlet>
    </AnimatePresence>
  );
};
