"use client";
import Image from "next/image";
import { usePosters } from "@/hooks/queries/use-history";
import { Spinner } from "@/components/ui/spinner";

const BUCKET = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL ?? "";

export default function PosterSlider() {
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
        <ul className="flex animate-scroll-seamless gap-6 will-change-transform">
          {loop.map((src, i) => (
            <li key={i} className="shrink-0">
              <Image
                src={src}
                alt={`Poster ${i + 1}`}
                width={220}
                height={300}
                className="h-[400px] w-[300px] rounded-xl object-contain shadow-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
