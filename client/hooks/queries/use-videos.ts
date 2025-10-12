import { useQuery } from "@tanstack/react-query";
import { getYouTubeVideos } from "@/lib/api/youtube";

export const useVideos = () => {
  const videoQuery = useQuery({
    queryKey: ["videos"],
    queryFn: getYouTubeVideos,
  });

  const videos = videoQuery?.data?.items;

  return { videoQuery, videos };
};

