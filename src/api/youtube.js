import axios from "axios";
export default class Youtube {
  constructor() {
    //기본적인 url , 사용하는 key 설정
    this.httpClient = axios.create({
      //axios 통신을 할때 필요한 기본적인 셋팅을 여기에 설정을 해줘서 httpClient에 할당해주는것이다.
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
          regionCode: "kr",
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
          regionCode: "kr",
        },
      })
      .then((res) => res.data.items);
  }
}
