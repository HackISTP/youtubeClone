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
