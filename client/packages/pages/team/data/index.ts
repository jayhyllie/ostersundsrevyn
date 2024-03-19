import axios from "axios";
import { Team } from "@revyn/types";

const api_team = import.meta.env.VITE_API_URL + "team";
const api_images = import.meta.env.VITE_API_URL + "images";

export function getTeam(): Promise<Team> {
  return axios.get(api_team).then((response) => response.data);
}

export function getAllImages() {
  return axios.get(api_images).then((response) => response.data);
}
