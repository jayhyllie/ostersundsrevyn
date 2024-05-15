import { Button } from "@revyn/button";
import { Btn, Info, Style } from "@revyn/types";
import { Variants, motion } from "framer-motion";
import DOMPurify from "dompurify";

export const YearInfo = ({ topData }: { topData: Info }) => {
  const variants: Variants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  const topInfo = topData ? topData : null;
  const sanitizedContent = DOMPurify.sanitize(topInfo?.content as string);
  const sanitizedText = DOMPurify.sanitize(topInfo?.text as string);
  return (
    <>
      <section className="info__top">
        <section className="info__first">
          <motion.h1
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="info__first--highlight">
              {topInfo?.title.split(" ")[0]}
            </span>{" "}
            {topInfo?.title.split(" ")[1] + " " + topInfo?.title.split(" ")[2]}
          </motion.h1>
          <motion.h2
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 1.5 }}
          >
            {topInfo?.subtitle}
          </motion.h2>
        </section>
        <section className="info__second">
          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 2 }}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></motion.p>
        </section>
      </section>
      <motion.section
        className="info__bottom"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, delay: 2.5 }}
      >
        <a href={topInfo?.buttonLink}>
          <Button
            type={Btn.SOLID}
            style={Style.DEFAULT}
            onClick={() => console.log("clicked")}
          >
            {topInfo?.buttonText}
          </Button>
        </a>
        <p dangerouslySetInnerHTML={{ __html: sanitizedText }}></p>
      </motion.section>
    </>
  );
};
