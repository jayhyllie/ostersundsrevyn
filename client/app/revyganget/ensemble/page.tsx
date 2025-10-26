"use client";

import { useTeam } from "@/hooks/queries";
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
import DOMPurify from "dompurify";

export default function EnsemblePage() {
  const { data: team, isLoading: teamQuery } = useTeam();

  const ensemble = team?.team?.filter((member: Team) => member.memberIn === "ensemble") || [];

  if (teamQuery) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Spinner size={50} />
      </div>
    );
  }

  // Sort ensemble by sortPosition
  const sortedEnsemble = ensemble.sort(
    (a, b) => (a.sortPosition ?? 0) - (b.sortPosition ?? 0)
  );

  // Sanitize HTML content
  const sanitizeHtml = (html: string) => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['em', 'strong', 'b', 'i', 'u', 'br', 'a', 'p', 'span', 'div'],
      ALLOWED_ATTR: ['href', 'style', 'target', 'rel'],
    });
  };

  // Format years with Swedish suffix
  const formatYears = (years: number) => {
    return years === 1 || years === 2 ? `${years}:a` : `${years}:e`;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedEnsemble.map((member: Team) => {

          return (
            <Card key={member.id} className="bg-white shadow-lg border-none h-full w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
 text-white">
              <CardContent className="p-6">
                {member.image && (
                  <div className="mb-4 relative w-full aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      quality={60}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                {member.age && <p className="text-white/30">Ålder: {member.age}</p>}
                {member.city && <p className="text-white/30">Bor: {member.city}</p>}
                {member.years && <p className="text-white/30">År i revyn: {formatYears(member.years)}</p>}
                
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
                      <div className="grid md:grid-cols-2 gap-6">
                        {member.image && (
                          <div className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                              quality={60}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                          </div>
                        )}
                        <div className="flex flex-col gap-4">
                          <div 
                            className="whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: sanitizeHtml(member.bio) }}
                          />
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

