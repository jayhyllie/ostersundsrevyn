import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllImages } from "../../team/data";
import { Tab, Tabs } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const GalleryPage = () => {
  const currentPage = window.location.pathname;
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

  return (
    <>
      {
        <section className="gallery">
          {galleryQuery.isLoading ? (
            <div>Loading...</div>
          ) : galleryQuery.isError ? (
            <div>Error</div>
          ) : (
            <>
              <section className="gallery__tabs">
                <Tabs value={currentPage}>
                  {folders?.map((year: string, i) => {
                    const url = `/media/images/${year}`;
                    return (
                      <Tab
                        key={i}
                        className="gallery__tabs--tab"
                        label={year}
                        value={url}
                        component={Link}
                        to={url}
                      />
                    );
                  })}
                </Tabs>
              </section>
              <Outlet />
            </>
          )}
        </section>
      }
    </>
  );
};
