import { Team } from "@revyn/types";
import { useQuery } from "@tanstack/react-query";
import { getTeam } from "..";
import { Ensemble } from "./feature/Ensemble";
import "./style.scss";

export const TeamPage = () => {
  const teamQuery = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });
  const team: Team[] | undefined = teamQuery?.data?.team ?? [];

  const ensemble = team
    ? team.filter((member: Team) => member.memberIn === "ensemble")
    : [];
  return (
    <>
      {teamQuery.isLoading ? (
        <div>Loading...</div>
      ) : teamQuery.isError ? (
        <div>Error</div>
      ) : (
        <>
          <Ensemble ensemble={ensemble} />
        </>
      )}
    </>
  );
};
