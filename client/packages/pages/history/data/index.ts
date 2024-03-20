import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url_images = import.meta.env.VITE_API_URL + "/images";

async function getHistoryData() {
  return await axios.get("./data.json").then((res) => res.data);
}

async function getHistoryImages() {
  return await axios.get(url_images).then((res) => res.data);
}

export const useHistoryData = () => {
  const historyQuery = useQuery({
    queryKey: ["history"],
    queryFn: getHistoryData,
  });

  const imageQuery = useQuery({
    queryKey: ["historyImages"],
    queryFn: getHistoryImages,
  });

  const data = historyQuery.data;
  const historyImages: string[] = imageQuery.data?.images?.filter(
    (image: string) => image.includes("History")
  );

  return {
    historyQuery,
    data,
    historyImages,
    imageQuery,
  };
};
