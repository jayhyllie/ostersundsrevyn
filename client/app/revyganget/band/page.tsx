"use client";

import { useAllImages, useTeam } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Team } from "@/types";
import Image from "next/image";

export default function BandPage() {
  const { data: team, isLoading: teamQuery } = useTeam();
  const { data: images, isLoading: imagesQuery } = useAllImages();
  const img_url = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL ?? "";

  const band = team?.team?.filter((member: Team) => member.memberIn === "orkester") || [];
  const bandImage = images?.images?.filter((image: string) => image.includes("Orkester/band.png"));

  if (teamQuery || imagesQuery) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Spinner size={50} />
      </div>
    );
  }

  // Sort band by sortPosition
  const sortedBand = band.sort(
    (a, b) => (a.sortPosition ?? 0) - (b.sortPosition ?? 0)
  );

  return (
    <main className="container mx-auto px-4 py-8">
      {bandImage && (
        <div className="mb-4 relative w-full md:max-w-[70%] lg:max-w-[50%] mx-auto aspect-square overflow-hidden rounded-lg">
          <Image
            src={img_url + bandImage}
            alt="Orkester"
            fill
            className="object-cover"
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 50vw"
            priority
          />
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sortedBand.map((member: Team) => {
          return (
            <Card key={member.id} className="bg-white shadow-lg border-none h-full w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
            text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                {member.age && member.age > 0 ? <p className="text-white/30">Ålder: {member.age}</p> : null}
                {member.city && <p className="text-white/30">Bor: {member.city}</p>}
                {member.years && <p className="text-white/30">År i revyn: {member.years}</p>}
                {member.role && <p className="text-white/30">Instrument: {member.role}</p>}
                
                {member.bio && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="mt-4 w-full">
                        Läs mer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{member.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-1 gap-6">
                        <div className="flex flex-col gap-4">
                          <div className="whitespace-pre-wrap">{member.bio}</div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}

