import axios from "axios";
import { Images } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getGalleryImages(year: string): Promise<Images> {
  const url = `${API_URL}/images?year=${year}`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
  return response.data;
}

