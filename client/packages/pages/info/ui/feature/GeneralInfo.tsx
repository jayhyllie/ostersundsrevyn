import { useRef } from "react";
import { generalInfo } from "../../data";
import { GeneralInfo } from "@revyn/generalinfo";
import { useScroll, motion, useTransform } from "framer-motion";
import { GeneralInfoType } from "@revyn/generalinfo";

const AnimatedGeneralInfo = (info: GeneralInfoType) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div className="animation" style={{ scale, opacity }} ref={ref}>
      <GeneralInfo {...info} />
    </motion.div>
  );
};

export const GeneralInfoWrapper = () => {
  return (
    <section className="info__general general">
      {generalInfo.map((info, i) => (
        <AnimatedGeneralInfo key={i} {...info} />
      ))}
    </section>
  );
};
