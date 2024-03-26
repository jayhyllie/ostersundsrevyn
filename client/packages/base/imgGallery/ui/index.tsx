import { useParams } from "@tanstack/react-router";
import { useGalleryQuery } from "..";
import "./style.scss";
import { useState } from "react";
import { ModalContainer } from "@revyn/modalcontainer";

export const ImageGallery = () => {
  const { year }: { year: string } = useParams({ strict: false });
  const { galleryQuery, galleryImages } = useGalleryQuery(year);
  const imageUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (
    image: string,
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    setSelectedImage(image);

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left + window.scrollX;
    const y = event.clientY - rect.top + window.scrollY;

    setModalPosition({ x, y });
  };

  return (
    <>
      {galleryQuery.isLoading && galleryQuery.isFetching ? (
        <div>Loading...</div>
      ) : galleryQuery.isError ? (
        <div>Error</div>
      ) : (
        <section className="gallery__items">
          {galleryImages?.map((image, i) => (
            <img
              key={i}
              src={`${imageUrl}Galleri/${year}/${image}`}
              alt={`gallery__items--item ${year}`}
              className="gallery__items--item"
              onClick={(event) => handleImageClick(image, event)}
            />
          ))}
        </section>
      )}
      {window.innerWidth > 768 && selectedImage && (
        <ModalContainer
          style={{
            top: modalPosition.y,
            left: modalPosition.x,
            translate: "50%",
          }}
        >
          <img
            src={`${imageUrl}Galleri/${year}/${selectedImage}`}
            alt={`gallery__modal--image ${year}`}
            className="gallery__modal--image"
            onClick={() => setSelectedImage(null)}
          />
        </ModalContainer>
      )}
    </>
  );
};
