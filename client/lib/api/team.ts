import { apiClient } from "./client";
import { Team } from "@/types";

export interface TeamMembers {
  team: Team[];
}

export async function getTeam(): Promise<TeamMembers> {
  const response = await apiClient.get("/team");
  return response.data;
}

export async function getAllImages() {
  const response = await apiClient.get("/images", {
    timeout: 30000, // 30 second timeout
    params: {
      limit: 2000, // Increase limit to get all folders
    }
  });
  return response.data;
}

// Alternative: Get images for specific folder
export async function getImagesByFolder(folder: string) {
  const response = await apiClient.get(`/images?folder=${folder}`, {
    timeout: 30000,
  });
  return response.data;
}

