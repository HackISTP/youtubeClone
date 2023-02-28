import { useContext } from "react";
import { createContext } from "react";
import fakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/YoutubeClient";
import Youtube from "../api/Youtube";

export const YoutubeApiContext = createContext();

const client = new fakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
