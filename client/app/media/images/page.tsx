"use client";

import { useState } from "react";
import { useGalleryImages } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Available years from 2007 to 2025
const AVAILABLE_YEARS = Array.from({ length: 2025 - 2007 + 1 }, (_, i) => String(2025 - i));

export default function ImagesPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const { galleryQuery: imagesQuery, galleryImages } = useGalleryImages(selectedYear);

  const imageUrl = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL || "";

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-center gap-4">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[200px]" id="year-select">
            <SelectValue placeholder="Välj ett år" />
          </SelectTrigger>
          <SelectContent>
            {AVAILABLE_YEARS.map((year: string) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {imagesQuery.isLoading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <Spinner size={50} />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages?.map((image: string, index: number) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={`${imageUrl}Galleri/${selectedYear}/${image}`}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

