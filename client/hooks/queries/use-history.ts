import { useQuery } from "@tanstack/react-query";
import { getHistory, getImages, getPosters } from "@/lib/api/history";

export const useHistory = () => {
  const historyQuery = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  });

  const imageQuery = useQuery({
    queryKey: ["historyImages"],
    queryFn: getImages,
  });

  const historyData = historyQuery.data?.history ?? [];

  const sortedHistoryData = [...historyData].sort(
    (a, b) => a.id?.localeCompare(b.id)
  );

  const historyImages: string[] = imageQuery.data?.images?.filter(
    (image: string) => image.includes("History")
  ) ?? [];

  const sortedImages = [...historyImages].sort((a, b) => {
    const num = (s: string) => Number(s.match(/\d+/)?.[0] ?? 0);
    return num(a) - num(b);
  });

  return {
    historyQuery,
    historyData,
    sortedHistoryData,
    imageQuery,
    historyImages,
    sortedImages,
  };
};

export const usePosters = () => {
  const posterQuery = useQuery({
    queryKey: ["posters"],
    queryFn: getPosters,
  });

  /* const posterImages: string[] = posterQuery.data?.images?.filter(
    (image: string) => image.includes("Posters")
  ); */

  return {
    posterQuery,
    posterImages: posterQuery.data?.posters ?? [],
  };
};

