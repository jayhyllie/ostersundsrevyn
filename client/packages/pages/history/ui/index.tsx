import { NavContainer } from "@revyn/navcontainer";
import "./style.scss";
import { useHistoryData } from "../data";
import { History } from "@revyn/types";
import { PosterSlider } from "./feature/PosterSlider";

export const HistoryPage = () => {
  const imgUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;
  const screenWidth = window.innerWidth;
  const { historyQuery, data, sortedImages, imageQuery } = useHistoryData();
  return (
    <>
      <NavContainer />
      {screenWidth > 768 ? <PosterSlider /> : null}
      <main className="history">
        <section className="history__info">
          {historyQuery.isLoading && imageQuery.isLoading ? (
            <p>Loading...</p>
          ) : historyQuery.isError && imageQuery.isError ? (
            <p>Något gick fel...</p>
          ) : (
            data.map((item: History, i: number) => (
              <section key={i} className="history__info--item">
                {sortedImages && (
                  <img
                    src={`${imgUrl}${sortedImages[i + 1]}`}
                    alt={`Image ${i}`}
                    className="history__info--item-image"
                  />
                )}
                {i === data.length - 1 ? (
                  <section>
                    {item.content.split("/").map((content, index) => (
                      <p
                        key={index}
                        className="history__info--item-content highlight"
                      >
                        {content.trim()}
                      </p>
                    ))}
                  </section>
                ) : (
                  <p className="history__info--item-content">{item.content}</p>
                )}
              </section>
            ))
          )}
        </section>
      </main>
    </>
  );
};
