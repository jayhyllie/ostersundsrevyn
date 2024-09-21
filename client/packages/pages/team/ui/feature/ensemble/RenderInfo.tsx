import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Team } from "@revyn/types";

type RenderInfoProps = {
  props: {
    imageMap: Map<string, string>;
    member: Team;
    isHovered?: boolean;
    hoveredId?: string | null;
    imageUrl: string;
  };
  openModalWithID: (value: string) => void;
};

export const RenderInfo = ({ props, openModalWithID }: RenderInfoProps) => {
  const { imageMap, member, isHovered, hoveredId, imageUrl } = props;
  return (
    <>
      {imageMap.has(member.id) && (
        <img
          src={`${imageUrl}${
            member.memberIn.charAt(0).toUpperCase() +
            member.memberIn.slice(1).toLowerCase()
          }/${
            isHovered && hoveredId === member.id
              ? `${member.id}__hover.png`
              : `${member.id}.png`
          }`}
          alt={member.name}
          className="card__ensemble--image"
        />
      )}
      <section className="card__ensemble--info">
        <h2 className="card__ensemble--info-name">{member.name}</h2>
        <p className="card__ensemble--info-years">
          <strong>{member.years}</strong> revyer
        </p>
        <p className="card__ensemble--info-city">
          <HomeOutlinedIcon />
          {member.city}
        </p>
      </section>
      <button
        onClick={() => openModalWithID(member.id)}
        className="card__ensemble--more"
      >
        Läs mer...
      </button>
    </>
  );
};
