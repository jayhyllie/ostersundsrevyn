import { Video } from "@revyn/types";
import { useVideoQuery } from "../data";
import { RenderVideo } from "./feature/RenderVideo";
import "./style.scss";
import { Spinner } from "@revyn/spinner";

export const VideoContainer = () => {
  const { videoQuery, videos } = useVideoQuery();
  const playListURL = import.meta.env.VITE_YOUTUBE_PLAYLIST_URL;
  return (
    <>
      {videoQuery.isLoading ? (
        <Spinner size={50} />
      ) : videoQuery.isError ? (
        <div>Error</div>
      ) : (
        <>
          <section className="media__videos">
            {videos.map((video: Video, i: number) => (
              <RenderVideo key={i} {...video} />
            ))}
          </section>
          <a href={playListURL} className="media__link" target="_blank">
            <h2>
              Se fler <strong>här</strong>
            </h2>
          </a>
        </>
      )}
    </>
  );
};
