import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return <div>Videos {keyword ? "🔍 검색결과" : "🔥인기동영상"}</div>;
}
