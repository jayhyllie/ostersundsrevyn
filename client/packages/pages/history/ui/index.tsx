import { History } from "@revyn/types";
import { useHistoryData } from "../data";
import { PosterSlider } from "./feature/PosterSlider";
import "./style.scss";
import { Spinner } from "@revyn/spinner";

export const HistoryPage = () => {
  const imgUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;
  const screenWidth = window.innerWidth;
  const { historyQuery, sortedHistoryData, sortedImages, imageQuery } =
    useHistoryData();
  return (
    <>
      {screenWidth > 768 ? <PosterSlider /> : null}
      <main className="history">
        <section className="history__info">
          {historyQuery.isLoading && imageQuery.isLoading ? (
            <Spinner size={50} />
          ) : historyQuery.isError && imageQuery.isError ? (
            <p>Något gick fel...</p>
          ) : (
            sortedHistoryData.map((item: History, i: number) => (
              <section key={i} className="history__info--item">
                {sortedImages && (
                  <img
                    src={`${imgUrl}${sortedImages[i + 1]}`}
                    alt={`Image ${i}`}
                    className="history__info--item-image"
                  />
                )}
                {i === sortedHistoryData.length - 1 ? (
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
                  <section className="history__info--item-content">
                    <h2
                      className="history__info--item-content_title"
                      data-attribute={item.id}
                    >
                      {item.title.split("_").join(" ")}
                    </h2>
                    <p className="history__info--item-content_text">
                      {item.content}
                    </p>
                  </section>
                )}
              </section>
            ))
          )}
        </section>
      </main>
    </>
  );
};
