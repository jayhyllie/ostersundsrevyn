import axios from "axios";
import { youtubeConfig } from "./client";

export async function getYouTubeVideos() {
  const { apiUrl, apiKey, playlistId } = youtubeConfig;
  const response = await axios.get(
    `${apiUrl}?part=snippet&playlistId=${playlistId}&maxResults=33&key=${apiKey}`
  );
  return response.data;
}

