import { useParams } from "@tanstack/react-router";
import { useGalleryQuery } from "..";
import "./style.scss";

export const ImageGallery = () => {
  const { year }: { year: string } = useParams({ strict: false });
  const { galleryQuery, galleryImages } = useGalleryQuery(year);
  const imageUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;

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
            />
          ))}
        </section>
      )}
    </>
  );
};
