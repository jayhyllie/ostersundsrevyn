import { apiClient } from "./client";

export async function getHistory() {
  const response = await apiClient.get("/history");
  return response.data;
}

export async function getImages() {
  const response = await apiClient.get("/images");
  return response.data;
}

export async function getPosters() {
  const response = await apiClient.get("/posters");
  return response.data;
}

