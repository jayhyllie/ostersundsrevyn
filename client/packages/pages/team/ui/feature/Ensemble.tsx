import { Team } from "@revyn/types";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../..";

export const Ensemble = ({ ensemble }: { ensemble: Team[] }) => {
  const imageQuery = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });
  const images = imageQuery?.data?.images ?? [];
  const filteredImages = images.filter((image: string) =>
    image.includes("Ensemble")
  );
  const imageMap = new Map();
  filteredImages?.forEach((image) => {
    const imageName = image.split("/").pop();
    const memberId = imageName.split(".")[0];
    imageMap.set(memberId, image);
  });
  return (
    <section className="ensemble">
      {ensemble.map((member) => (
        <article key={member.id} className={`ensemble__card ${member.id}`}>
          {imageMap.has(member.id) && (
            <img
              src={`https://ostersundsrevyn-images.s3.eu-north-1.amazonaws.com/Ensemble/${member.id}.jpg`}
              alt={member.name}
              className="ensemble__card--image"
            />
          )}
          <h2 className="ensemble__card--name">{member.name}</h2>
          <p className="ensemble__card--years">{member.years} revyer</p>
        </article>
      ))}
    </section>
  );
};
