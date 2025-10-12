"use client";
import PosterSlider from "@/components/posters";
import dynamic from "next/dynamic";

const HistoryClient = dynamic(() => import("@/components/historyClient"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      {/* Hero with posters (only visible ≥ md) */}
      <PosterSlider />
      <HistoryClient />
    </>
  );
}
