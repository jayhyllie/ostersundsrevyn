import { useQuery } from "@tanstack/react-query";
import { getAllImages } from "../../team/data";

export const useImageGallery = () => {
  const galleryQuery = useQuery({
    queryKey: ["gallery"],
    queryFn: getAllImages,
  });
  const images: string[] | undefined =
    (galleryQuery.data?.images as string[]) ?? [];
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
