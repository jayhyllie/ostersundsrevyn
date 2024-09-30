import { getAllImages } from "@revyn/teampage";
import { Info } from "@revyn/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Variants } from "framer-motion";

const url_info = import.meta.env.VITE_API_URL + "info";

type InfoResponse = {
  success: boolean;
  info?: Info[];
};

async function getInfoData(): Promise<InfoResponse> {
  return await axios.get(url_info).then((res) => res.data);
}

export const useInfoData = () => {
  const galleryQuery = useQuery({
    queryKey: ["logos"],
    queryFn: getAllImages,
  });

  const images: string[] | undefined =
    (galleryQuery.data?.images as string[]) ?? [];
  const gallery = images?.filter((image: string) => image.includes("Logos"));

  const infoQuery = useQuery({
    queryKey: ["info"],
    queryFn: getInfoData,
  });

  const infoData = infoQuery.data?.info;

  const topData = infoData?.filter((info) => info.area === "top") ?? [];
  const ticketData = infoData?.filter((info) => info.area === "middle") ?? [];
  const generalInfo = infoData?.filter((info) => info.area === "bottom") ?? [];

  return {
    infoQuery,
    infoData,
    topData,
    ticketData,
    generalInfo,
    galleryQuery,
    gallery,
  };
};

export const imageVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};
