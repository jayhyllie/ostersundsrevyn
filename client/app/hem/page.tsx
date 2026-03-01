"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <main id="home" className="h-max w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Stort tack för i år!</h1>
        <section className="w-full flex flex-col items-center justify-center">
        <Image
          src="/tack.png"
          alt="Östersunds Revyn Tack"
          width={1000}
          height={1000}
            className="unset mx-auto object-contain"
          />
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-4 sm:flex-row sm:mb-4 sm:pb-0 sm:bottom-0">
          <Image src="/sponsor1.png" alt="sponsorbild" width={200} height={200} className="sm:hidden" />
          <Image src="/sponsor2.png" alt="sponsorbild" width={150} height={150} className="sm:hidden" />
          <Image src="/sponsor3.png" alt="sponsorbild" width={100} height={100} className="sm:hidden" />
          <Image src="/sponsor1.png" alt="sponsorbild" width={300} height={300} className="hidden sm:block" />
          <Image src="/sponsor2.png" alt="sponsorbild" width={200} height={200} className="hidden sm:block" />
          <Image src="/sponsor3.png" alt="sponsorbild" width={150} height={150} className="hidden sm:block" />
        </section>
      {/* <figure className="absolute inset-0 overflow-hidden z-[1]">
        <Image
          src="/desktop.webp"
          alt="Östersunds Revyn Desktop"
          fill
          className="object-cover object-top-center hidden md:block"
          priority
        />
        <Image
          src="/mobile.webp"
          alt="Östersunds Revyn Mobile"
          fill
          className="object-cover object-[top_25%_center] md:hidden"
          priority
        /> *
        
        
      </figure>*/}

    </main>
  );
}

