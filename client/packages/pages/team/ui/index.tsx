import { Team } from "@revyn/types";
import { useTeamAndImageQuery, roles } from "..";
import { Ensemble } from "./feature/ensemble/Ensemble";
import { Band } from "./feature/Band";
import { Production } from "./feature/Production";
import "./style.scss";
import { Spinner } from "@revyn/spinner";

export const TeamPage = () => {
  const imageUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;
  const location = window.location.pathname;
  const { team, images, teamQuery } = useTeamAndImageQuery();

  const getMembersByRole = (role: string) =>
    team?.filter((member: Team) => member.memberIn === role) || [];

  const getImagesByRole = (roleKeyword: string) =>
    images?.filter((image: string) => image.includes(roleKeyword)) || [];

  const renderComponent = () => {
    if (teamQuery.isLoading) return <Spinner size={50} />;
    if (teamQuery.isError) return <div>Error</div>;

    switch (location) {
      case "/revyganget/ensemble":
        return (
          <Ensemble
            role={getMembersByRole("ensemble")}
            images={getImagesByRole(roles.ensemble)}
            imageUrl={imageUrl}
          />
        );
      case "/revyganget/band":
        return (
          <Band
            role={getMembersByRole("orkester")}
            images={getImagesByRole(roles.band)}
            imageUrl={imageUrl}
          />
        );
      case "/revyganget/production":
        return (
          <Production
            role={getMembersByRole("produktion")}
            images={getImagesByRole(roles.production)}
            imageUrl={imageUrl}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderComponent()}</>;
};
