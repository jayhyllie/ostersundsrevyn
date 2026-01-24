"use client";

import { useEffect, useState } from "react";
import { useGalleryImages } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

// Available years from 2007 to 2025
const AVAILABLE_YEARS = Array.from({ length: 2025 - 2007 + 1 }, (_, i) => String(2025 - i));

export default function ImagesPage() {  
  const [selectedYear, setSelectedYear] = useState("2025");
  const { galleryQuery: imagesQuery, galleryImages } = useGalleryImages(selectedYear);
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation={screenWidth > 768 ? "horizontal" : "vertical"}
          className="w-full md:max-w-full"
        >
          <CarouselContent>
            {galleryImages.map((image: string, index: number) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <Image src={`${imageUrl}Galleri/${selectedYear}/${image}`} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" width={500} height={500} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {screenWidth > 768 ? <CarouselPrevious  /> : null}
          {screenWidth > 768 ? <CarouselNext /> : null}
        </Carousel>
        </div>
      )}
    </main>
  );
}

