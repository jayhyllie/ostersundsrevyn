import axios from "axios";
import { Team } from "@revyn/types";

const api_team = "https://jtxm3bst4j.execute-api.eu-north-1.amazonaws.com/team";
const api_images =
  "https://jtxm3bst4j.execute-api.eu-north-1.amazonaws.com/images";

export function getTeam(): Promise<Team> {
  return axios.get(api_team).then((response) => response.data);
}

export function getAllImages() {
  return axios.get(api_images).then((response) => response.data);
}
