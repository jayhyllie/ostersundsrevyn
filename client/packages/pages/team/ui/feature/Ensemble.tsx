import { Team } from "@revyn/types";

export const Ensemble = ({
  role,
  images,
}: {
  role: Team[];
  images: string[] | undefined;
}) => {
  /* const imageQuery = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });
  const images = imageQuery?.data?.images ?? []; 
  const filteredImages = images.filter((image: string) =>
    image.includes("Ensemble")
  );*/
  const imageMap = new Map();
  images?.forEach((image) => {
    const imageName = image.split("/").pop();
    const memberId = imageName?.split(".")[0];
    imageMap.set(memberId, image);
  });
  return (
    <section className="ensemble">
      {role.map((member) => (
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
          <p className="ensemble__card--city">Bor i: {member.city}</p>
        </article>
      ))}
    </section>
  );
};
