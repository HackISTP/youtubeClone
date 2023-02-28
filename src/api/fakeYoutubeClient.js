import axios from "axios";

export default class fakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/video/related.json")
      : axios.get("/video/search.json");
  }
  async videos() {
    return axios.get("/video/popular.json");
  }
  async channels() {
    return axios.get("/video/channel.json");
  }
}
