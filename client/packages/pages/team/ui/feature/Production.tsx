import { Team } from "@revyn/types";

export const Production = ({
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
  const sortedRole = role.sort(
    (a, b) => (a.sortPosition ?? 0) - (b.sortPosition ?? 0)
  );
  return (
    <section className="production">
      {sortedRole.map((member) => (
        <article key={member.id} className={`production__card ${member.id}`}>
          {imageMap.has(member.id) && (
            <img
              src={`https://ostersundsrevyn-images.s3.eu-north-1.amazonaws.com/Produktion/${member.id}.jpg`}
              alt={member.name}
              className="production__card--image"
            />
          )}
          <h2 className="production__card--name">{member.name}</h2>
          <p className="production__card--city">{member.role}</p>
        </article>
      ))}
    </section>
  );
};
