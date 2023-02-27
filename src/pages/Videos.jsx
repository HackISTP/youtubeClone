import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["search", keyword], async () => {
    console.log("fetching...");
    return fetch(`/video/${keyword ? "search" : "popular"}.json`, {
      headers: {
        Accept: "application / json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.items);
  });
  console.log(videos);
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
