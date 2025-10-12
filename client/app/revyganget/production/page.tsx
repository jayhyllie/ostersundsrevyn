"use client";

import { useTeam } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent } from "@/components/ui/card";
import { Team } from "@/types";
import Image from "next/image";

export default function ProductionPage() {
  const { data: team, isLoading: teamQuery } = useTeam();
  const production = team?.team?.filter((member: Team) => member.memberIn === "produktion") || [];

  if (teamQuery) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Spinner size={50} />
      </div>
    );
  }

  // Sort production by sortPosition
  const sortedProduction = production.sort(
    (a, b) => (a.sortPosition ?? 0) - (b.sortPosition ?? 0)
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProduction.map((member: Team) => {
          return (
            <Card key={member.id} className="bg-white shadow-lg border-none h-full w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
            text-white">
              <CardContent className="p-0">
                {member.image && (
                  <div className="mb-4 relative w-full aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />
                  </div>
                )}
                <div className="py-2 px-6 pb-4">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  {member.role && <p className="text-white/50">{member.role}</p>}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}

