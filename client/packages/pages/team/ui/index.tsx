import { Team } from "@revyn/types";
import { useQueries } from "@tanstack/react-query";
import { getAllImages, getTeam } from "..";
import { Ensemble } from "./feature/Ensemble";
import { Band } from "./feature/Band";
import { Production } from "./feature/Production";
import "./style.scss";

export const TeamPage = () => {
  const location = window.location.pathname;
  const [teamQuery, imageQuery] = useQueries({
    queries: [
      { queryKey: ["team"], queryFn: getTeam },
      { queryKey: ["images"], queryFn: getAllImages },
    ],
  });
  const team: Team[] | undefined = teamQuery?.data?.team ?? [];
  const images: string[] | undefined = imageQuery?.data?.images ?? [];

  const getMembersByRole = (role: string) =>
    team?.filter((member: Team) => member.memberIn === role) || [];

  const getImagesByRole = (roleKeyword: string) =>
    images?.filter((image: string) => image.includes(roleKeyword)) || [];

  const roles = {
    ensemble: "Ensemble",
    band: "Orkester",
    production: "Produktion",
  };

  const renderComponent = () => {
    if (teamQuery.isLoading) return <div>Loading...</div>;
    if (teamQuery.isError) return <div>Error</div>;

    switch (location) {
      case "/revyganget/ensemble":
        return (
          <Ensemble
            role={getMembersByRole("ensemble")}
            images={getImagesByRole(roles.ensemble)}
          />
        );
      case "/revyganget/band":
        return (
          <Band
            role={getMembersByRole("orkester")}
            images={getImagesByRole(roles.band)}
          />
        );
      case "/revyganget/production":
        return (
          <Production
            role={getMembersByRole("produktion")}
            images={getImagesByRole(roles.production)}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderComponent()}</>;
};
