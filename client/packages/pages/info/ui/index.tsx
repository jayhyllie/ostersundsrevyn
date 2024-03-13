import { NavContainer } from "@revyn/navcontainer";
import { YearInfo } from "./feature/YearInfo";
import { TicketPrice } from "./feature/TicketPrice";
import { Variants, motion } from "framer-motion";
import "./style.scss";

export const InfoPage = () => {
  const images = ["./Allakvinnor.jpg", "./Pojkarna.jpg"];
  const imageVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };
  return (
    <>
      <NavContainer />
      <div className="wrapper">
        <main className="info container">
          <YearInfo />
          <hr />
          <TicketPrice />
        </main>
        {images.map((image, index) => (
          <motion.figure
            variants={imageVariants}
            initial={"initial" + { rotate: 0 }}
            animate={"animate" + { rotate: index * 10 }}
            exit={"exit" + { rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 2.2 }}
            className={`wrapper__image ${index + 1}`}
            key={index}
          >
            <img src={image} alt={image} />
          </motion.figure>
        ))}
      </div>
    </>
  );
};
