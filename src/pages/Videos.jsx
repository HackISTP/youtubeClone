import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["search", keyword],
    () => youtube.search(keyword)
    // const youtube = new FackYoutube();
  );
  return (
    <>
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg :grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
