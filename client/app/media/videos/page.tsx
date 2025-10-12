"use client";

import { useVideos } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VideosPage() {
  const { videoQuery, videos } = useVideos();

  if (videoQuery.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Spinner size={50} />
      </div>
    );
  }

  if (videoQuery.isError) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <p className="text-destructive">Ett fel uppstod vid hämtning av videos</p>
      </div>
    );
  }

  // Filter out deleted videos and sort alphabetically
  const filteredVideos = videos
    ?.filter((video: { snippet: { title: string } }) => video.snippet.title !== "Deleted video")

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredVideos?.map((video: { id: string; snippet: { title: string; resourceId: { videoId: string } } }) => (
          <Card key={video.id} className="overflow-hidden bg-transparent border-black/30 shadow-xl">
            <CardContent className="p-0 bg-transparent">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-transparent text-white">
                <h3 className="text-sm font-semibold line-clamp-2">{video.snippet.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Button>
          <a href="https://youtube.com/playlist?list=PLHuo-BrUBEFoDF-wxcN0NFlztfWJJiK0N&si=YxKhZbEFvbYVJl2C" target="_blank" rel="noopener noreferrer">
            Se alla videos
          </a>
        </Button>
      </div>
    </main>
  );
}

