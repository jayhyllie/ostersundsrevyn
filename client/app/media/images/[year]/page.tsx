"use client";

import { useParams } from "next/navigation";
import { useGalleryImages } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";

export default function GalleryYearPage() {
  const params = useParams();
  const year = params.year as string;
  const { galleryQuery, galleryImages } = useGalleryImages(year);

  if (galleryQuery.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Spinner size={50} />
      </div>
    );
  }

  if (galleryQuery.isError) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <p className="text-destructive">Ett fel uppstod vid hämtning av bilder</p>
      </div>
    );
  }

  const imageUrl = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL || "";

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{year}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages?.map((image: string, index: number) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={`${imageUrl}Galleri/${year}/${image}`}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

