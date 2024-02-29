import { useEffect, useRef } from "react";

export const useDimensions = (ref) => {
  const dimensions = useRef({ height: 0, width: 0 });
  useEffect(() => {
    dimensions.current.height = ref.current.clientHeight;
    dimensions.current.width = ref.current.clientWidth;
  }, [ref]);
  return dimensions.current;
};
