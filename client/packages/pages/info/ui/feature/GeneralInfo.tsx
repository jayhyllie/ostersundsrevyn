import { GeneralInfo } from "@revyn/generalinfo";
import { Info } from "@revyn/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedGeneralInfo = ({ info }: { info: Info }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div className="animation" style={{ scale, opacity }} ref={ref}>
      <GeneralInfo info={info} />
    </motion.div>
  );
};

export const GeneralInfoWrapper = ({
  generalInfo,
}: {
  generalInfo: Info[];
}) => {
  // Sort the generalInfo array by sortingPosition
  const sortedGeneralInfo = [...generalInfo].sort((a, b) => {
    if (a.sortingPosition === undefined) return 1;
    if (b.sortingPosition === undefined) return -1;
    return a.sortingPosition - b.sortingPosition;
  });

  return (
    <section className="info__general general">
      {sortedGeneralInfo.map((info) => (
        <AnimatedGeneralInfo key={info.id} info={info} />
      ))}
    </section>
  );
};
