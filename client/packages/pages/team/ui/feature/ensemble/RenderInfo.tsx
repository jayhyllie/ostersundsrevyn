import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Team } from "@revyn/types";
import { Info } from "../info/Info";
import { useEffect, useRef } from "react";

type RenderInfoProps = {
  props: {
    imageMap: Map<string, string>;
    member: Team;
    isHovered?: boolean;
    hoveredId?: string | null;
    imageUrl: string;
    selectedMember?: Team | null;
    handleCloseInfo?: () => void;
    infoOpen: boolean;
  };
  openInfoWithID: (value: string) => void;
};

export const RenderInfo = ({ props, openInfoWithID }: RenderInfoProps) => {
  const {
    imageMap,
    member,
    isHovered,
    hoveredId,
    imageUrl,
    selectedMember,
    infoOpen,
    handleCloseInfo,
  } = props;

  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
        handleCloseInfo && handleCloseInfo();
      }
    };

    if (infoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [infoOpen, handleCloseInfo]);

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
        onClick={() => openInfoWithID(member.id)}
        className="card__ensemble--more"
      >
        Läs mer...
      </button>

      {infoOpen && selectedMember && selectedMember.id === member.id && (
        <div ref={infoRef}>
          <Info
            prop={selectedMember}
            closeInfo={handleCloseInfo || (() => {})}
          />
        </div>
      )}
    </>
  );
};
