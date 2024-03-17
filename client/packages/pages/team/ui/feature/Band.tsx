import { Team } from "@revyn/types";

export const Band = ({
  role,
  images,
}: {
  role: Team[];
  images: string[] | undefined;
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
              src={`https://ostersundsrevyn-images.s3.eu-north-1.amazonaws.com/Orkester/${member.id}.png`}
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
