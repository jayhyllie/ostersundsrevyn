import { useQuery } from "@tanstack/react-query";
import { getTeam, getAllImages, getImagesByFolder } from "@/lib/api/team";

export const useTeam = () => {
  return useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });
};

export const useAllImages = () => {
  return useQuery({
    queryKey: ["images"],
    queryFn: getAllImages,
  });
};

export const roles = {
  ensemble: "Ensemble",
  band: "Orkester",
  production: "Produktion",
};

