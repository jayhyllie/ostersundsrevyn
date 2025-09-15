import { Video } from "@revyn/types";
import { useVideoQuery } from "../data";
import { RenderVideo } from "./feature/RenderVideo";
import "./style.scss";
import { Spinner } from "@revyn/spinner";

export const VideoContainer = () => {
  const { videoQuery, videos } = useVideoQuery();
  const playListURL = import.meta.env.VITE_YOUTUBE_PLAYLIST_URL;
  
  // Filter out deleted videos and videos without proper data
  const validVideos = videos?.filter((video: Video) => 
    video?.snippet?.title && 
    video.snippet.title !== "Deleted video" &&
    video?.snippet?.resourceId?.videoId
  ) || [];
  
  return (
    <>
      {videoQuery.isLoading ? (
        <Spinner size={50} />
      ) : videoQuery.isError ? (
        <div>Error</div>
      ) : (
        <>
          <section className="media__videos">
            {validVideos.length > 0 ? (
              validVideos.map((video: Video, i: number) => (
                <RenderVideo key={i} {...video} />
              ))
            ) : (
              <div>No videos available</div>
            )}
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
