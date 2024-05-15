import { YearInfo } from "./feature/YearInfo";
import { TicketPrice } from "./feature/TicketPrice";
import { GeneralInfoWrapper } from "./feature/GeneralInfo";
import { Variants, motion } from "framer-motion";
import "./style.scss";
import { useInfoData } from "../data";
import { Info } from "@revyn/types";

export const InfoPage = () => {
  const { infoData } = useInfoData();
  const screenWidth = window.innerWidth;
  const images = ["./Allakvinnor.jpg", "./Pojkarna.jpg"];
  const imageVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const ticketData = infoData?.filter((info) => info.area === "middle") ?? [];
  const topData = infoData?.[1];
  const generalInfo = infoData?.filter((info) => info.area === "bottom") ?? [];
  return (
    <>
      <div className="wrapper">
        <main className="info container">
          {topData && <YearInfo topData={topData as unknown as Info} />}
          <hr />
          <TicketPrice tickets={ticketData as unknown as Info[]} />
          <hr />
          {generalInfo && (
            <GeneralInfoWrapper
              generalInfo={generalInfo as unknown as Info[]}
            />
          )}
        </main>
        {screenWidth > 768 &&
          images.map((image, index) => (
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
