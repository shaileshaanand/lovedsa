import Navbar from "./components/Navbar";
import Stats from "./pages/Stats";
import Login from "./pages/Login";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("gfg_username") !== null;
  };

  return (
    <QueryClientProvider client={new QueryClient()}>
      {isLoggedIn() ? <Stats /> : <Login />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
