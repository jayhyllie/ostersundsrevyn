import { useQuery } from "@tanstack/react-query";
import { getInfo } from "@/lib/api/info";
import { getAllImages } from "@/lib/api/team";

export const useInfo = () => {
  const infoQuery = useQuery({
    queryKey: ["info"],
    queryFn: getInfo,
  });

  const galleryQuery = useQuery({
    queryKey: ["logos"],
    queryFn: getAllImages,
  });

  const images: string[] = (galleryQuery.data?.images as string[]) ?? [];
  const gallery = images?.filter((image: string) => image.includes("Logos"));

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

