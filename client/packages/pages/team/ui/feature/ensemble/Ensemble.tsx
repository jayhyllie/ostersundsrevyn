import { Card, Team } from "@revyn/types";
import { CardItem } from "@revyn/card";
import { useState } from "react";
import { RenderInfo } from "./RenderInfo";

export const Ensemble = ({
  role,
  images,
  imageUrl,
}: {
  role: Team[];
  images: string[] | undefined;
  imageUrl: string;
}) => {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<Team | null>(null);

  const handleMouseEnter = (id: string) => {
    setIsHovered(true);
    setHoveredId(id);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredId(null);
  };
  const handleOpenInfo = (id: string) => {
    setInfoOpen(true);
    setSelectedMember(role.find((member) => member.id === id) ?? null);
  };
  const handleCloseInfo = () => {
    setInfoOpen(false);
    setSelectedMember(null);
  };

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
    <section className="ensemble">
      {sortedRole.map((member) => (
        <CardItem
          key={member.id}
          type={Card.ENSEMBLE}
          onMouseEnter={() => handleMouseEnter(member.id)}
          onMouseLeave={handleMouseLeave}
        >
          <RenderInfo
            props={{
              imageMap,
              member,
              isHovered,
              hoveredId,
              imageUrl,
              selectedMember,
              handleCloseInfo,
              infoOpen,
            }}
            openInfoWithID={handleOpenInfo}
          />
        </CardItem>
      ))}
    </section>
  );
};
