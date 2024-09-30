import { Video, Card } from "@revyn/types";
import { CardItem } from "@revyn/card";

export const RenderVideo = (video: Video) => {
  const { id, snippet } = video;
  const { title, thumbnails, resourceId } = snippet;
  const { medium } = thumbnails;
  return (
    <a
      href={`http://www.youtube.com/watch?v=${resourceId.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      key={id}
    >
      <CardItem type={Card.BAND}>
        <img src={medium.url} alt={title} />
        <h2>{title.split(" - ")[0]}</h2>
        <p>{title.split(" - ")[1]}</p>
      </CardItem>
    </a>
  );
};
