import { Team } from "@revyn/types";
import { useQueries } from "@tanstack/react-query";
import { getImages, getTeam } from "..";
import { Ensemble } from "./feature/Ensemble";
import { Band } from "./feature/Band";
import { Production } from "./feature/Production";
import "./style.scss";

export const TeamPage = () => {
  const location = window.location.pathname;
  const [teamQuery, imageQuery] = useQueries({
    queries: [
      {
        queryKey: ["team"],
        queryFn: getTeam,
      },
      {
        queryKey: ["images"],
        queryFn: getImages,
      },
    ],
  });
  const team: Team[] | undefined = teamQuery?.data?.team ?? [];
  const images: string[] | undefined = imageQuery?.data?.images ?? [];

  const ensemble = team
    ? team.filter((member: Team) => member.memberIn === "ensemble")
    : [];
  const ensembleImages = images?.filter((image: string) =>
    image.includes("Ensemble")
  );

  const band = team
    ? team.filter((member: Team) => member.memberIn === "orkester")
    : [];
  const bandImages = images?.filter((image: string) => image.includes("Band"));

  const production = team
    ? team.filter((member: Team) => member.memberIn === "produktion")
    : [];
  const productionImages = images?.filter((image: string) =>
    image.includes("Produktion")
  );
  return (
    <>
      {teamQuery.isLoading ? (
        <div>Loading...</div>
      ) : teamQuery.isError ? (
        <div>Error</div>
      ) : (
        <>
          {location === "/revyganget/ensemble" ? (
            <Ensemble role={ensemble} images={ensembleImages} />
          ) : location === "/revyganget/band" ? (
            <Band role={band} images={bandImages} />
          ) : location === "/revyganget/production" ? (
            <Production role={production} images={productionImages} />
          ) : null}
        </>
      )}
    </>
  );
};
