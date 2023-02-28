import { useContext } from "react";
import { createContext } from "react";
import Youtube from "../api/Youtube";

export const YoutubeApiContext = createContext();

const youtube = new Youtube();

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
