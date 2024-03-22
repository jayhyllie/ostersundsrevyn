import { Card, Team } from "@revyn/types";
import { CardItem } from "@revyn/card";
import { useState } from "react";
import { RenderInfo } from "./RenderInfo";
import { Modal } from "@revyn/modal";
import { ModalContainer } from "@revyn/modalcontainer";

export const Ensemble = ({
  role,
  images,
}: {
  role: Team[];
  images: string[] | undefined;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
  const handleOpenModal = (id: string) => {
    setModalOpen(true);
    setSelectedMember(role.find((member) => member.id === id) ?? null);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
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
            }}
            openModalWithID={handleOpenModal}
          />
        </CardItem>
      ))}
      {modalOpen && selectedMember && (
        <ModalContainer>
          <Modal prop={selectedMember} closeModal={handleCloseModal} />
        </ModalContainer>
      )}
    </section>
  );
};
