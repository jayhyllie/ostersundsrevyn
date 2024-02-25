import { Team } from "@revyn/types";
import { useQuery } from "@tanstack/react-query";
import { getTeam } from "..";
import "./style.scss";

export const TeamPage = () => {
  const teamQuery = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });
  const team = teamQuery?.data?.team;

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
        ensemble &&
        ensemble.map((member: Team) => (
          <div key={member.id} className="member">
            <h3>{member.name}</h3>
            <p>{member.city}</p>
          </div>
        ))
      )}
    </>
  );
};
