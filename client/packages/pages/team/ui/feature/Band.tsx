import { Team } from "@revyn/types";

export const Band = ({
  role,
  images,
  imageUrl,
}: {
  role: Team[];
  images: string[] | undefined;
  imageUrl: string;
}) => {
  const imageMap = new Map();
  images?.forEach((image) => {
    const imageName = image.split("/").pop();
    const memberId = imageName?.split(".")[0];
    imageMap.set(memberId, image);
  });
  return (
    <section className="band">
      {role.map((member) => (
        <article key={member.id} className={`band__card ${member.id}`}>
          <h2>{member.role}</h2>
          {imageMap.has(member.id) && (
            <img
              src={`${imageUrl}Orkester/${member.id}.png`}
              alt={member.name}
              className="band__card--image"
            />
          )}
          <h3>{member.name}</h3>
        </article>
      ))}
    </section>
  );
};
