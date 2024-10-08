import { YearInfo } from "./feature/YearInfo";
import { TicketPrice } from "./feature/TicketPrice";
import { GeneralInfoWrapper } from "./feature/GeneralInfo";
import { motion } from "framer-motion";
import "./style.scss";
import { imageVariants, useInfoData } from "../data";
import { Info } from "@revyn/types";
import { Spinner } from "@revyn/spinner";

const imageUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;

export const InfoPage = () => {
  const { infoQuery, topData, ticketData, generalInfo, gallery } =
    useInfoData();
  const screenWidth = window.innerWidth;
  const image1 = gallery.find((image) => image === "Logos/kvinnorna.jpg");
  const image2 = gallery.find((image) => image === "Logos/pojkarna.jpg");

  const images = [image1, image2].map((image) => `${imageUrl}${image}`);

  return (
    <>
      <div className="wrapper">
        <main className="info container">
          {infoQuery.isLoading ? (
            <Spinner size={50} />
          ) : infoQuery.isError ? (
            <div>Error</div>
          ) : (
            <>
              {" "}
              {topData.length > 0 && <YearInfo {...topData[0]} />}
              <hr />
              {ticketData && (
                <TicketPrice tickets={ticketData as unknown as Info[]} />
              )}
              <hr />
              {generalInfo && (
                <GeneralInfoWrapper
                  generalInfo={generalInfo as unknown as Info[]}
                />
              )}
            </>
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
              <img src={image} alt={image} loading="lazy" />
            </motion.figure>
          ))}
      </div>
    </>
  );
};
