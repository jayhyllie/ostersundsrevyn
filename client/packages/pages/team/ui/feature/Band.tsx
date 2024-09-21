import { CardItem } from "@revyn/card";
import { Card, Team } from "@revyn/types";
import { RenderInfo } from "./ensemble/RenderInfo";
import { useState } from "react";
import { ModalContainer } from "@revyn/modalcontainer";
import { Modal } from "@revyn/modal";

export const Band = ({
  role,
  images,
  imageUrl,
}: {
  role: Team[];
  images: string[] | undefined;
  imageUrl: string;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<Team | null>(null);

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
    <section className="band">
      {sortedRole.map((member) => (
        <CardItem key={member.id} type={Card.BAND}>
          <RenderInfo
            props={{
              imageMap,
              member,
              imageUrl,
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
