import axios from "axios";
export default class YoutubeClient {
  constructor() {
    //기본적인 url , 사용하는 key 설정
    this.httpClient = axios.create({
      //axios 통신을 할때 필요한 기본적인 셋팅을 여기에 설정을 해줘서 httpClient에 할당해주는것이다.
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
