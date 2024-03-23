import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url_images = import.meta.env.VITE_API_URL + "/images";

async function getHistoryData() {
  return await axios.get("./data.json").then((res) => res.data);
}

async function getImages() {
  return await axios.get(url_images).then((res) => res.data);
}

export const useHistoryData = () => {
  const historyQuery = useQuery({
    queryKey: ["history"],
    queryFn: getHistoryData,
  });

  const imageQuery = useQuery({
    queryKey: ["historyImages"],
    queryFn: getImages,
  });

  const data = historyQuery.data;
  const historyImages: string[] = imageQuery.data?.images?.filter(
    (image: string) => image.includes("History")
  );
  const sortedImages = historyImages
    ? historyImages.sort((a, b) => {
        const matchA = a.match(/\d+/);
        const matchB = b.match(/\d+/);
        const numA = matchA ? parseInt(matchA[0]) : 0; // Extract numeric part
        const numB = matchB ? parseInt(matchB[0]) : 0; // Extract numeric part
        return numA - numB;
      })
    : [];

  return {
    historyQuery,
    data,
    historyImages,
    imageQuery,
    sortedImages,
  };
};

export const usePosterData = () => {
  const posterQuery = useQuery({
    queryKey: ["posters"],
    queryFn: getImages,
  });
  const posterImages: string[] = posterQuery.data?.images?.filter(
    (image: string) => image.includes("Posters")
  );

  return {
    posterQuery,
    posterImages,
  };
};
