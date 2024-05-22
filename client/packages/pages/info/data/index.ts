import { Info } from "@revyn/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url_info = import.meta.env.VITE_API_URL + "/info";

type InfoResponse = {
  success: boolean;
  info?: Info[];
};

async function getInfoData(): Promise<InfoResponse> {
  return await axios.get(url_info).then((res) => res.data);
}

export const useInfoData = () => {
  const infoQuery = useQuery({
    queryKey: ["info"],
    queryFn: getInfoData,
  });

  return {
    infoQuery,
    infoData: infoQuery.data?.info,
  };
};
