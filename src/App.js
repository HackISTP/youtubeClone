import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
