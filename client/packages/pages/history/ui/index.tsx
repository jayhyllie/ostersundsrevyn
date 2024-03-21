import { NavContainer } from "@revyn/navcontainer";
import "./style.scss";
import { useHistoryData } from "../data";
import { History } from "@revyn/types";

export const HistoryPage = () => {
  const { historyQuery, data, historyImages, imageQuery } = useHistoryData();
  const sortedImages = historyImages
    ? historyImages.sort((a, b) => {
        const matchA = a.match(/\d+/);
        const matchB = b.match(/\d+/);
        const numA = matchA ? parseInt(matchA[0]) : 0; // Extract numeric part
        const numB = matchB ? parseInt(matchB[0]) : 0; // Extract numeric part
        return numA - numB;
      })
    : [];
  return (
    <>
      <NavContainer />
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
                    src={`https://ostersundsrevyn-images.s3.eu-north-1.amazonaws.com/${
                      sortedImages[i + 1]
                    }`}
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
