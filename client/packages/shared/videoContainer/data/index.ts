import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const youtubeAPI = import.meta.env.VITE_YOUTUBE_API_URL;
const youtubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;
const youtubePlaylistId = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

async function getVideos() {
  return await axios
    .get(
      `${youtubeAPI}?part=snippet&playlistId=${youtubePlaylistId}&maxResults=50&key=${youtubeKey}`
    )
    .then((res) => res.data);
}

export function useVideoQuery() {
  const videoQuery = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });
  const videos = videoQuery?.data?.items;

  return { videoQuery, videos };
}
