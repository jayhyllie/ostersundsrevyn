import { useEffect, useRef } from "react";

export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const dimensions = useRef({ height: 0, width: 0 });
  useEffect(() => {
    dimensions.current.height = ref.current?.clientHeight ?? 0;
    dimensions.current.width = ref.current?.clientWidth ?? 0;
  }, [ref]);
  return dimensions.current;
};
