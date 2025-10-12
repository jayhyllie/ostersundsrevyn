"use client";
import Image from "next/image";
import { useHistory } from "@/hooks/queries/use-history";
import { Spinner } from "@/components/ui/spinner";
import { History } from "@/types";

const BUCKET = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL ?? "";

export default function HistoryClient() {
  const { historyQuery, imageQuery, sortedHistoryData, sortedImages } =
    useHistory();

  if (historyQuery.isLoading && imageQuery.isLoading) {
    return (
      <section className="py-24 grid place-items-center">
        <Spinner size={50} />
      </section>
    );
  }

  return (
    <main className="mx-auto max-w-[1400px] px-4 md:py-24 py-12">
      <section className="grid gap-24">
        {sortedHistoryData.map((item: History, i: number) => {
          const isLast = i === sortedHistoryData.length - 1;
          const imageSrc = sortedImages?.[i + 1]
            ? BUCKET + sortedImages[i + 1]
            : undefined;
          return (
            <article
              key={`${item.id}-${i}`}
              className={`bg-white shadow-lg border-none h-full w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
            text-white flex flex-col items-center gap-6 md:gap-10 p-6 md:p-10 rounded-sm ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {imageSrc && (
                <div className="w-full shrink-0 md:w-[372px]">
                  <Image
                    src={imageSrc}
                    alt={`Image ${i + 1}`}
                    width={372}
                    height={520}
                    className="h-auto w-full rounded-2xl shadow-xl"
                  />
                </div>
              )}

              <div className="relative grid h-full place-items-center rounded-2xl p-4 md:p-10">
                {!isLast ? (
                  <div className="space-y-6">
                    <div className="relative">
                      {/* watermark index */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-6 -top-6 -z-10 select-none text-8xl font-bold leading-none text-gray-300/60 md:-left-12 md:-top-8 md:text-[7rem]"
                      >
                        {item.id}
                      </span>
                      <h2
                        data-attribute={item.id}
                        className="font-bold text-3xl tracking-wide text-primary md:text-4xl"
                      >
                        {item.title.split("_").join(" ")}
                      </h2>
                    </div>
                    <p className="font-paragraph text-base leading-8 text-white/80">
                      {item.content}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 text-center md:text-left">
                    {item.content.split("/").map((c: string, idx: number) => (
                      <p
                        key={idx}
                        className="font-bold text-3xl tracking-wide text-primary md:text-4xl"
                      >
                        {c.trim()}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
