import { useQuery } from "@tanstack/react-query";
import { getGalleryImages } from "@/lib/api/gallery";
import { getAllImages } from "@/lib/api/team";

export const useGalleryImages = (year: string) => {
  const galleryQuery = useQuery({
    queryKey: ["images", year],
    queryFn: () => getGalleryImages(year),
  });

  const images = galleryQuery?.data?.images ?? [];
  const imageSet = new Set(images?.map((image: string) => image.split("/")[1]));
  const galleryImages = Array.from(imageSet).filter(Boolean);

  return { galleryQuery, galleryImages };
};

export const useImageGallery = () => {
  const galleryQuery = useQuery({
    queryKey: ["gallery"],
    queryFn: getAllImages,
  });

  const images: string[] = (galleryQuery.data?.images as string[]) ?? [];
  const gallery = images?.filter((image: string) => image.includes("Galleri"));
  const foldersSet = new Set(
    gallery?.map((folder: string) => folder.split("/")[1])
  );
  const folders = Array.from(foldersSet).filter(Boolean);

  return {
    galleryQuery,
    folders,
  };
};

