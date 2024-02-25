import axios from "axios";
import { Team } from "@revyn/types";

const api = "https://jtxm3bst4j.execute-api.eu-north-1.amazonaws.com/team";

export function getTeam(): Promise<Team> {
  return axios.get(api).then((response) => response.data);
}
