import { Video } from "@revyn/types";
import { useVideoQuery } from "../data";
import { RenderVideo } from "./feature/RenderVideo";
import "./style.scss";

export const VideoContainer = () => {
  const { videoQuery, videos } = useVideoQuery();
  return (
    <>
      {videoQuery.isLoading ? (
        <div>Loading...</div>
      ) : videoQuery.isError ? (
        <div>Error</div>
      ) : (
        <>
          <section className="media__videos">
            {videos.map((video: Video) => (
              <RenderVideo {...video} />
            ))}
          </section>
          <a
            href="https://www.youtube.com/playlist?list=PLHuo-BrUBEFoDF-wxcN0NFlztfWJJiK0N"
            className="media__link"
            target="_blank"
          >
            <h2>
              Se fler <strong>här</strong>
            </h2>
          </a>
        </>
      )}
    </>
  );
};
