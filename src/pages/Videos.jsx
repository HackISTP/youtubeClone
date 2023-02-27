import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

import { search } from "../api/youtube";
import FackYoutube from "../api/fakeYoutube";
export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["search", keyword], () => {
    const youtube = new FackYoutube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>{keyword ? `🔍search` : `🔥`}</div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      {videos && (
        <>
          {" "}
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </>
      )}
    </>
  );
}
