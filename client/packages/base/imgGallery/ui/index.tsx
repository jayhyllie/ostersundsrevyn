import { useParams } from "@tanstack/react-router";
import { useGalleryQuery } from "..";
import "./style.scss";

export const ImageGallery = () => {
  const { year }: { year: string } = useParams({ strict: false });
  const { galleryQuery, galleryImages } = useGalleryQuery(year);

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
              src={`https://ostersundsrevyn-images.s3.eu-north-1.amazonaws.com/Galleri/${year}/${image}`}
              alt={`gallery__items--item ${year}`}
              className="gallery__items--item"
            />
          ))}
        </section>
      )}
    </>
  );
};
