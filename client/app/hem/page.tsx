"use client";
import { useAllImages } from "@/hooks/queries";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";

export default function HomePage() {
  const { data: images, isLoading } = useAllImages();
  const desktop_image = images?.images?.find((image: string) => image.includes("desktop"));
  const mobile_image = images?.images?.find((image: string) => image.includes("mobile.webp"));
  const img_url = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL || "";

  if (isLoading) {
    return <Spinner />;
  }

  console.log(img_url + mobile_image);

  return (
    <main id="home" className="h-[calc(100vh-82px)] w-[80vw]">
      <figure className="absolute inset-0 overflow-hidden z-[1]">
        <Image
          src={`${img_url}${desktop_image}`}
          alt="Östersunds Revyn"
          fill
          className="object-cover object-top-center hidden md:block"
          priority
        />
        <Image
          src={`${img_url}${mobile_image}`}
          alt="Östersunds Revyn"
          fill
          className="object-cover object-[top_25%_center] md:hidden"
          priority
        />
      </figure>
    </main>
  );
}

