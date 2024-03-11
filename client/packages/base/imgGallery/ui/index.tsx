import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { getImages } from "..";
import "./style.scss";

export const ImageGallery = () => {
  const { year } = useParams({ strict: false });
  const galleryQuery = useQuery({
    queryKey: ["images", year],
    queryFn: () => getImages(year),
  });
  const images = galleryQuery?.data?.images ?? [];
  const imageSet = new Set(images?.map((image: string) => image.split("/")[1]));
  const galleryImages = Array.from(imageSet).filter(Boolean);

  return (
    <>
      {galleryQuery.isLoading ? (
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
