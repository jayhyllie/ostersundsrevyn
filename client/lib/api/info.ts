import { apiClient } from "./client";
import { Info } from "@/types";

export interface InfoResponse {
  success: boolean;
  info?: Info[];
}

export async function getInfo(): Promise<InfoResponse> {
  const response = await apiClient.get("/info");
  return response.data;
}

