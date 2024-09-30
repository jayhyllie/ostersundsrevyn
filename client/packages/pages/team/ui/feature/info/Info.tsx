import { Team } from "@revyn/types";
import "./style.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AnimatePresence, motion, Variants } from "framer-motion";

type InfoProps = {
  closeInfo: () => void;
  prop: Team | null;
};

export const Info = ({ closeInfo, prop }: InfoProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: -100 },
    open: { opacity: 1, y: 0 },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={"personalInfo"}
        variants={variants}
        initial="hidden"
        animate="open"
        exit="hidden"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <section className={`personalInfo__inner ${prop?.id}`}>
          <p>{prop?.bio}</p>
          <CloseOutlinedIcon onClick={closeInfo} id="close" />
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
