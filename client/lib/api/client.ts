import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const YOUTUBE_API_URL = process.env.NEXT_PUBLIC_YOUTUBE_API_URL || "";
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const YOUTUBE_PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID || "";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const youtubeConfig = {
  apiUrl: YOUTUBE_API_URL,
  apiKey: YOUTUBE_API_KEY,
  playlistId: YOUTUBE_PLAYLIST_ID,
};

