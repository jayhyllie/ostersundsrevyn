"use client";
import Image from "next/image";
import { usePosters } from "@/hooks/queries/use-history";
import { Spinner } from "@/components/ui/spinner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const BUCKET = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL ?? "";

export default function PosterSlider() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, jump: false, active: true })
  )
  const { posterQuery, posterImages } = usePosters();

  if (posterQuery.isLoading) {
    return (
      <section className="hero grid place-items-center">
        <Spinner size={50} />
      </section>
    );
  }

  const images = posterImages.map((p: string) => BUCKET + p);
  // Triple the images for seamless infinite loop
  const loop = [...images, ...images];

  return (
    <section className="hero relative hidden md:block">
      <div className="absolute inset-0 bg-white shadow-lg border-none h-full w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
            text-white" />
      <div className="relative mx-auto w-[90vw] overflow-hidden py-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: Infinity,
            skipSnaps: false,
          }}
          className="w-full md:max-w-full"
          plugins={[autoplay.current]}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent>
            {images.map((src: string, i: number) => (
              <CarouselItem key={i} className="basis-1/2 lg:basis-1/4">
                <Image src={src} alt={`Poster ${i + 1}`} width={220} height={300} className="h-[400px] w-[300px] rounded-xl object-contain shadow-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
