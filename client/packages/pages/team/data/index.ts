import axios from "axios";
import { Team, TeamMembers } from "@revyn/types";
import { useQueries } from "@tanstack/react-query";

const api_team = import.meta.env.VITE_API_URL + "team";
const api_images = import.meta.env.VITE_API_URL + "images";

export function getTeam(): Promise<TeamMembers> {
  return axios.get(api_team).then((response) => response.data);
}

export function getAllImages() {
  return axios.get(api_images).then((response) => response.data);
}

export const useTeamAndImageQuery = () => {
  const [teamQuery, imageQuery] = useQueries({
    queries: [
      { queryKey: ["team"], queryFn: getTeam },
      { queryKey: ["images"], queryFn: getAllImages },
    ],
  });
  const team: Team[] | undefined = teamQuery?.data?.team ?? [];
  const images: string[] | undefined = imageQuery?.data?.images ?? [];

  return { team, images, teamQuery, imageQuery };
};

export const roles = {
  ensemble: "Ensemble",
  band: "Orkester",
  production: "Produktion",
};
