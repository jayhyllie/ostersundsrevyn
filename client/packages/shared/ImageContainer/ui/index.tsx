import { Tab, Tabs } from "@mui/material";
import { Link, Outlet } from "@tanstack/react-router";
import { useImageGallery } from "@revyn/media";

export const ImageContainer = () => {
  const currentPage = window.location.pathname;
  const { galleryQuery, folders } = useImageGallery();

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
