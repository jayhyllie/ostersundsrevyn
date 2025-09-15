import { Video, Card } from "@revyn/types";
import { CardItem } from "@revyn/card";

export const RenderVideo = (video: Video) => {
  const { id, snippet } = video;
  const { title, thumbnails, resourceId } = snippet;
  
  // Add fallback for different thumbnail sizes
  const thumbnail = thumbnails?.medium || thumbnails?.high || thumbnails?.default;
  
  // Add safety check for resourceId
  if (!resourceId?.videoId) {
    console.warn('Video missing videoId:', video);
    return null;
  }
  
  return (
    <a
      href={`http://www.youtube.com/watch?v=${resourceId.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      key={id}
    >
      <CardItem type={Card.BAND}>
        {thumbnail?.url ? (
          <img src={thumbnail.url} alt={title} />
        ) : (
          <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            No thumbnail available
          </div>
        )}
        <h2>{title.split(" - ")[0]}</h2>
        <p>{title.split(" - ")[1]}</p>
      </CardItem>
    </a>
  );
};
