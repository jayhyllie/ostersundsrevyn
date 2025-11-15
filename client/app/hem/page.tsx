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
    <main id="home" className="h-screen w-full md:pb-16">
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
        <section className="absolute bottom-12 left-0 w-full flex flex-col items-center justify-center gap-4 md:flex-row md:mb-6 md:bottom-0">
          <Image src="/sponsor1.png" alt="sponsorbild" width={300} height={300} />
          <Image src="/sponsor2.png" alt="sponsorbild" width={200} height={200} />
          <Image src="/sponsor3.png" alt="sponsorbild" width={200} height={200} />
        </section>
      </figure>

    </main>
  );
}

