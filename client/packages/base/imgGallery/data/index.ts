import { Images } from "@revyn/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api_images = import.meta.env.VITE_API_URL + "images";

export async function getImages(year: string): Promise<Images> {
  const new_api_images = `${api_images}?year=${year}`;
  return await axios
    .get(new_api_images, {
      headers: {
        "Content-Type": "application/xml",
      },
    })
    .then((response) => response.data);
}

export const useGalleryQuery = (year: string) => {
  const galleryQuery = useQuery({
    queryKey: ["images", year],
    queryFn: () => getImages(year),
  });
  const images = galleryQuery?.data?.images ?? [];
  const imageSet = new Set(images?.map((image: string) => image.split("/")[1]));
  const galleryImages = Array.from(imageSet).filter(Boolean);

  return { galleryQuery, galleryImages };
};
