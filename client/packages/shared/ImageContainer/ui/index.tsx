import { Outlet, useNavigate } from "@tanstack/react-router";
import { useImageGallery } from "@revyn/media";
import { useEffect, useState } from "react";
import { Dropdown } from "@revyn/dropdown";

export const ImageContainer = () => {
  const navigate = useNavigate();
  const { galleryQuery, folders } = useImageGallery();
  const [year, setYear] = useState<string>(
    localStorage.getItem("year") ?? "2025"
  );

  const handleSetYear = (year: string) => {
    setYear(year);
    localStorage.setItem("year", year);
  };

  useEffect(() => {
    navigate({ to: "/media/images/$year", params: { year: year } });
  }, [year, navigate]);

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
                <Dropdown
                  value={year ?? ""}
                  handleChange={handleSetYear}
                  options={folders ?? []}
                />
              </section>
              {year && <Outlet />}
            </>
          )}
        </section>
      }
    </>
  );
};
