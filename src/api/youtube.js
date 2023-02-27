import axios from "axios";
export async function search(keyword) {
  console.log("fetching...");
  return axios
    .get(`/video/${keyword ? "search" : "popular"}.json`, {
      headers: {
        Accept: "application / json",
      },
    })
    .then((res) => res.data.items);
}
