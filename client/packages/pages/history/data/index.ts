import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url_history = import.meta.env.VITE_API_URL + "history";
const url_images = import.meta.env.VITE_API_URL + "images";

async function getHistoryData() {
  return await axios.get(url_history).then((res) => res.data);
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

  const historyData = historyQuery.data?.history;

  const sortedHistoryData = historyData?.sort(
    (a: { id: string }, b: { id: string }) => a.id?.localeCompare(b.id)
  );

  const historyImages: string[] = imageQuery.data?.images?.filter(
    (image: string) => image.includes("History")
  );
  const sortedImages = historyImages
    ? historyImages.sort((a, b) => {
        const matchA = a.match(/\d+/);
        const matchB = b.match(/\d+/);
        const numA = matchA ? parseInt(matchA[0]) : 0;
        const numB = matchB ? parseInt(matchB[0]) : 0;
        return numA - numB;
      })
    : [];

  return {
    historyQuery,
    historyData,
    historyImages,
    imageQuery,
    sortedImages,
    sortedHistoryData,
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
