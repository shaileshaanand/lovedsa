import Navbar from "./components/Navbar";
import Stats from "./pages/Stats";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("gfg_username") !== null;
  };

  return isLoggedIn() ? <Stats /> : <Login />;
}

export default App;
